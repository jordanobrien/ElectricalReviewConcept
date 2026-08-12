interface Env {
  CREDIT_REQUEST_WEBHOOK_URL?: string;
  CREDIT_REQUEST_WEBHOOK_TOKEN?: string;
  CREDIT_REQUEST_RECIPIENT?: string;
  DB: {
    prepare(query: string): {
      bind(...values: unknown[]): { run(): Promise<unknown> };
      run(): Promise<unknown>;
    };
    batch(statements: unknown[]): Promise<unknown>;
  };
  MEDIA: {
    put(key: string, value: ReadableStream | ArrayBuffer, options?: { httpMetadata?: { contentType?: string } }): Promise<void>;
    get(key: string): Promise<{
      body: ReadableStream;
      httpMetadata?: { contentType?: string };
      etag?: string;
    } | null>;
  };
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const MAX_UPLOAD_SIZE = 8 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function ensureMediaPackSchema(db: Env['DB']) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS media_pack_leads (
      id TEXT PRIMARY KEY NOT NULL,
      full_name TEXT NOT NULL,
      business_email TEXT NOT NULL,
      company_name TEXT NOT NULL,
      created_at INTEGER NOT NULL
    )`),
    db.prepare(`CREATE UNIQUE INDEX IF NOT EXISTS idx_media_pack_leads_email_company
      ON media_pack_leads (business_email, company_name)`),
  ]);
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/uploads' && request.method === 'POST') {
      const contentType = request.headers.get('Content-Type')?.split(';')[0] || '';
      const contentLength = Number(request.headers.get('Content-Length') || 0);

      if (!ALLOWED_IMAGE_TYPES.has(contentType)) {
        return jsonResponse({ ok: false, message: 'Please upload a PNG, JPG, WebP or GIF image.' }, 415);
      }
      if (contentLength > MAX_UPLOAD_SIZE) {
        return jsonResponse({ ok: false, message: 'Images must be smaller than 8 MB.' }, 413);
      }

      const bytes = await request.arrayBuffer();
      if (!bytes.byteLength || bytes.byteLength > MAX_UPLOAD_SIZE) {
        return jsonResponse({ ok: false, message: 'Images must be between 1 byte and 8 MB.' }, 413);
      }

      const kind = url.searchParams.get('kind') === 'brand-logo' ? 'brand-logos' : 'featured-images';
      const extension = contentType === 'image/jpeg' ? 'jpg' : contentType.split('/')[1];
      const key = `${kind}/${crypto.randomUUID()}.${extension}`;
      await env.MEDIA.put(key, bytes, { httpMetadata: { contentType } });

      return jsonResponse({ ok: true, url: `/api/uploads/${key}` }, 201);
    }

    if (url.pathname.startsWith('/api/uploads/') && request.method === 'GET') {
      const key = decodeURIComponent(url.pathname.slice('/api/uploads/'.length));
      const object = await env.MEDIA.get(key);
      if (!object) return new Response('Image not found', { status: 404 });

      return new Response(object.body, {
        headers: {
          'Content-Type': object.httpMetadata?.contentType || 'application/octet-stream',
          'Cache-Control': 'public, max-age=31536000, immutable',
          ...(object.etag ? { ETag: object.etag } : {}),
        },
      });
    }

    if (url.pathname === '/api/media-pack-access' && request.method === 'POST') {
      let payload: Record<string, unknown>;
      try {
        payload = await request.json();
      } catch {
        return jsonResponse({ ok: false, message: 'Please complete all required fields.' }, 400);
      }

      const fullName = String(payload.fullName || '').trim().slice(0, 160);
      const businessEmail = String(payload.businessEmail || '').trim().toLowerCase().slice(0, 254);
      const companyName = String(payload.companyName || '').trim().slice(0, 200);

      if (!fullName || !companyName || !EMAIL_PATTERN.test(businessEmail)) {
        return jsonResponse({ ok: false, message: 'Please enter your name, business email and company name.' }, 400);
      }

      await ensureMediaPackSchema(env.DB);
      await env.DB.prepare(`INSERT INTO media_pack_leads (
        id, full_name, business_email, company_name, created_at
      ) VALUES (?, ?, ?, ?, ?)
      ON CONFLICT (business_email, company_name) DO UPDATE SET
        full_name = excluded.full_name,
        created_at = excluded.created_at`)
        .bind(crypto.randomUUID(), fullName, businessEmail, companyName, Date.now())
        .run();

      return jsonResponse({ ok: true, accessGranted: true });
    }

    if (url.pathname === '/api/credit-request' && request.method === 'POST') {
      let payload: Record<string, unknown>;

      try {
        payload = await request.json();
      } catch {
        return jsonResponse({ ok: false, message: 'Invalid request.' }, 400);
      }

      const recipient = env.CREDIT_REQUEST_RECIPIENT?.trim();
      if (!recipient) {
        return jsonResponse({ ok: false, message: 'Credit request delivery is not configured.' }, 503);
      }

      const email = {
        to: recipient,
        subject: String(payload.subject || 'Press release credit request'),
        body: String(payload.body || ''),
        accountEmail: payload.accountEmail,
        accountName: payload.accountName,
        creditsRemaining: payload.creditsRemaining,
        brands: payload.brands,
        requestedAt: payload.requestedAt,
      };

      if (env.CREDIT_REQUEST_WEBHOOK_URL) {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (env.CREDIT_REQUEST_WEBHOOK_TOKEN) {
          headers.Authorization = `Bearer ${env.CREDIT_REQUEST_WEBHOOK_TOKEN}`;
        }

        const delivery = await fetch(env.CREDIT_REQUEST_WEBHOOK_URL, {
          method: 'POST',
          headers,
          body: JSON.stringify(email),
        });

        if (!delivery.ok) {
          return jsonResponse({ ok: false, message: 'Credit request could not be delivered.' }, 502);
        }
      }

      return jsonResponse({
        ok: true,
        message: 'Credit request submitted.',
        email,
      });
    }

    if (url.pathname.startsWith('/api/')) {
      return jsonResponse({ ok: false, message: 'Not found.' }, 404);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404 || request.method !== 'GET') {
      return assetResponse;
    }

    const lastPathSegment = url.pathname.split('/').filter(Boolean).at(-1) || '';
    if (lastPathSegment.includes('.')) {
      return assetResponse;
    }

    const appShellRequest = new Request(new URL('/', url), request);
    return env.ASSETS.fetch(appShellRequest);
  },
}
