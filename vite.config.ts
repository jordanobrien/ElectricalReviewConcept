import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { sites } from './build/sites-vite-plugin'
import hostingConfig from './.openai/hosting.json'

const LOCAL_D1_DATABASE_ID = '00000000-0000-4000-8000-000000000000'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig(async () => {
  process.env.WRANGLER_WRITE_LOGS ??= 'false'
  process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs'
  process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry'

  const { cloudflare } = await import('@cloudflare/vite-plugin')

  const { d1, r2 } = hostingConfig

  return {
    plugins: [
      figmaAssetResolver(),
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
      sites(),
      cloudflare({
        viteEnvironment: { name: 'server' },
        config: {
          name: 'server',
          main: './worker/index.ts',
          compatibility_date: '2026-05-22',
          d1_databases: d1 ? [{ binding: d1, database_name: 'electrical-review-leads', database_id: LOCAL_D1_DATABASE_ID }] : [],
          r2_buckets: r2 ? [{ binding: r2, bucket_name: 'electrical-review-media' }] : [],
          assets: {
            binding: 'ASSETS',
          },
        },
      }),
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
