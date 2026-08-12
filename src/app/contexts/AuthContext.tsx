import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { publicBrandProfiles } from '../data/brandProfiles';

export interface BrandProfile {
  id: string;
  companyName: string;
  logo?: string;
  website?: string;
  description?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface AccountPressRelease {
  id: string;
  articlePath?: string;
  brandId: string;
  brandName: string;
  brandLogo?: string;
  headline: string;
  summary: string;
  category: string;
  date: string;
  imageUrl?: string;
  status: 'published' | 'in-review';
  locked: boolean;
}

interface CreditRequest {
  status: 'submitted';
  requestedAt: string;
  subject: string;
  body: string;
}

interface User {
  email: string;
  hasSubscription: boolean;
  subscriptionType?: '3-months' | '6-months' | '12-months';
  subscriptionExpiry?: string;
  accountName?: string;
  creditsRemaining: number;
  brandProfiles: BrandProfile[];
  companyProfile?: BrandProfile;
  pressReleaseHistory: AccountPressRelease[];
  creditRequest?: CreditRequest;
}

interface PressReleaseSubmissionInput {
  brandId: string;
  headline: string;
  summary: string;
  category: string;
  imageUrl?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  subscribe: (subscriptionType: '3-months' | '6-months' | '12-months') => void;
  updateCompanyProfile: (profile: User['companyProfile']) => void;
  updateBrandProfile: (profile: BrandProfile) => void;
  addBrandProfile: (profile: Omit<BrandProfile, 'id'>) => BrandProfile | undefined;
  addPressReleaseSubmission: (submission: PressReleaseSubmissionInput) => AccountPressRelease | undefined;
  requestMoreCredits: () => Promise<void>;
  createDemoUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ACCOUNT_STORE_KEY = 'electrical-review:accounts';
const SESSION_KEY = 'electrical-review:active-account';

type AccountStore = Record<string, User>;

function canUseStorage() {
  return typeof window !== 'undefined' && Boolean(window.localStorage);
}

function readAccounts(): AccountStore {
  if (!canUseStorage()) return {};

  try {
    const raw = window.localStorage.getItem(ACCOUNT_STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAccount(account: User) {
  if (!canUseStorage()) return;
  const accounts = readAccounts();
  accounts[account.email.toLowerCase()] = account;
  window.localStorage.setItem(ACCOUNT_STORE_KEY, JSON.stringify(accounts));
  window.localStorage.setItem(SESSION_KEY, account.email.toLowerCase());
}

function makeBrandId(companyName: string) {
  const slug = companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `${slug || 'brand'}-${Date.now().toString(36)}`;
}

function formatToday() {
  return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function demoBrands(): BrandProfile[] {
  return publicBrandProfiles.map((brand) => ({ ...brand }));
}

function demoHistory(brands: BrandProfile[]): AccountPressRelease[] {
  const northstar = brands.find((brand) => brand.id === 'northstar-thermal') ?? brands[0];
  const schneider = brands.find((brand) => brand.id === 'schneider-electric') ?? brands[0];

  return [
    {
      id: 'northstar-cooling-test-lab',
      articlePath: '/press-release/northstar-cooling-test-lab',
      brandId: northstar.id,
      brandName: northstar.companyName,
      brandLogo: northstar.logo,
      headline: 'Northstar Thermal Opens European Liquid Cooling Test Lab',
      summary: 'New facility will support full-load testing of CDUs and direct-to-chip loops before live data centre deployment.',
      category: 'Cooling & Thermal Management',
      date: '4 August 2026',
      imageUrl: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop',
      status: 'published',
      locked: true,
    },
    {
      id: 'schneider-edge-power',
      brandId: schneider.id,
      brandName: schneider.companyName,
      brandLogo: schneider.logo,
      headline: 'Schneider Electric Expands Edge Power Resilience Programme',
      summary: 'New partner support helps operators standardise power, monitoring and maintenance across regional edge deployments.',
      category: 'Power & Energy',
      date: '29 July 2026',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop',
      status: 'published',
      locked: true,
    },
  ];
}

function makeDemoUser(): User {
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 12);
  const brands = demoBrands();

  return {
    email: 'client@northstarthermal.example',
    accountName: 'Northstar Communications',
    hasSubscription: true,
    subscriptionType: '12-months',
    subscriptionExpiry: expiry.toISOString(),
    creditsRemaining: 5,
    brandProfiles: brands,
    companyProfile: brands[0],
    pressReleaseHistory: demoHistory(brands),
  };
}

function normaliseUser(user: User): User {
  const fallbackBrand = user.companyProfile ?? {
    id: 'primary-brand',
    companyName: user.email.split('@')[0] || 'Company',
  };
  const storedBrands = user.brandProfiles?.length ? user.brandProfiles : [fallbackBrand];
  const brandProfiles = storedBrands.map((brand) => {
    const publicProfile = publicBrandProfiles.find((item) => item.id === brand.id);
    const usesLegacyDemoLogo = brand.logo?.startsWith('/brand-logos/') && !brand.logo.includes('-square.');
    return publicProfile && (!brand.logo || brand.logo.includes('placehold.co') || usesLegacyDemoLogo)
      ? { ...brand, logo: publicProfile.logo }
      : brand;
  });
  const companyProfileSource = user.companyProfile ?? brandProfiles[0];
  const companyProfile = brandProfiles.find((brand) => brand.id === companyProfileSource.id) ?? companyProfileSource;
  const pressReleaseHistory = (user.pressReleaseHistory ?? []).map((release) => {
    const brand = brandProfiles.find((item) => item.id === release.brandId);
    const usesLegacyDemoLogo = release.brandLogo?.startsWith('/brand-logos/') && !release.brandLogo.includes('-square.');
    return brand && (!release.brandLogo || release.brandLogo.includes('placehold.co') || usesLegacyDemoLogo)
      ? { ...release, brandLogo: brand.logo }
      : release;
  });

  return {
    ...user,
    creditsRemaining: typeof user.creditsRemaining === 'number' ? user.creditsRemaining : 0,
    brandProfiles,
    companyProfile,
    pressReleaseHistory,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (!canUseStorage()) return null;
    const activeEmail = window.localStorage.getItem(SESSION_KEY);
    if (!activeEmail) return null;
    const account = readAccounts()[activeEmail];
    return account ? normaliseUser(account) : null;
  });

  useEffect(() => {
    if (user) {
      writeAccount(user);
    }
  }, [user]);

  const login = async (email: string, _password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const normalisedEmail = email.toLowerCase();
    const accounts = readAccounts();

    setUser(normaliseUser(accounts[normalisedEmail] ?? {
      email,
      hasSubscription: false,
      creditsRemaining: 0,
      brandProfiles: [],
      pressReleaseHistory: [],
    }));
  };

  const logout = () => {
    if (canUseStorage()) {
      window.localStorage.removeItem(SESSION_KEY);
    }
    setUser(null);
  };

  const subscribe = (subscriptionType: '3-months' | '6-months' | '12-months') => {
    if (!user) return;

    const now = new Date();
    const expiry = new Date(now);

    switch (subscriptionType) {
      case '3-months':
        expiry.setMonth(expiry.getMonth() + 3);
        break;
      case '6-months':
        expiry.setMonth(expiry.getMonth() + 6);
        break;
      case '12-months':
        expiry.setMonth(expiry.getMonth() + 12);
        break;
    }

    const defaultBrand = user.brandProfiles[0] ?? {
      id: 'primary-brand',
      companyName: user.email.split('@')[0] || 'Company',
    };

    setUser(normaliseUser({
      ...user,
      hasSubscription: true,
      subscriptionType,
      subscriptionExpiry: expiry.toISOString(),
      creditsRemaining: user.creditsRemaining || 6,
      brandProfiles: user.brandProfiles.length ? user.brandProfiles : [defaultBrand],
      companyProfile: user.companyProfile ?? defaultBrand,
    }));
  };

  const updateCompanyProfile = (profile: User['companyProfile']) => {
    if (!user || !profile) return;
    const brandId = profile.id ?? user.companyProfile?.id ?? makeBrandId(profile.companyName);
    const nextProfile = { ...profile, id: brandId };
    const existingBrands = user.brandProfiles.length ? user.brandProfiles : [nextProfile];
    const brandProfiles = existingBrands.some((brand) => brand.id === brandId)
      ? existingBrands.map((brand) => brand.id === brandId ? nextProfile : brand)
      : [nextProfile, ...existingBrands];

    setUser({
      ...user,
      brandProfiles,
      companyProfile: nextProfile,
    });
  };

  const updateBrandProfile = (profile: BrandProfile) => {
    if (!user) return;
    const brandProfiles = user.brandProfiles.map((brand) => brand.id === profile.id ? profile : brand);

    setUser({
      ...user,
      brandProfiles,
      companyProfile: user.companyProfile?.id === profile.id ? profile : user.companyProfile,
      pressReleaseHistory: user.pressReleaseHistory.map((release) => (
        release.brandId === profile.id
          ? { ...release, brandName: profile.companyName, brandLogo: profile.logo }
          : release
      )),
    });
  };

  const addBrandProfile = (profile: Omit<BrandProfile, 'id'>) => {
    if (!user) return undefined;
    const brand = { ...profile, id: makeBrandId(profile.companyName) };

    setUser({
      ...user,
      brandProfiles: [...user.brandProfiles, brand],
      companyProfile: user.companyProfile ?? brand,
    });

    return brand;
  };

  const addPressReleaseSubmission = (submission: PressReleaseSubmissionInput) => {
    if (!user) return undefined;
    const brand = user.brandProfiles.find((item) => item.id === submission.brandId) ?? user.companyProfile;
    if (!brand) return undefined;

    const release: AccountPressRelease = {
      id: `submission-${Date.now().toString(36)}`,
      brandId: brand.id,
      brandName: brand.companyName,
      brandLogo: brand.logo,
      headline: submission.headline,
      summary: submission.summary,
      category: submission.category,
      date: formatToday(),
      imageUrl: submission.imageUrl,
      status: 'in-review',
      locked: false,
    };

    setUser({
      ...user,
      pressReleaseHistory: [release, ...user.pressReleaseHistory],
    });

    return release;
  };

  const requestMoreCredits = async () => {
    if (!user) return;
    const subject = `Press release credit request - ${user.accountName || user.email}`;
    const body = [
      `Account: ${user.accountName || user.email}`,
      `User email: ${user.email}`,
      `Credits remaining: ${user.creditsRemaining}`,
      `Brands on account: ${user.brandProfiles.map((brand) => brand.companyName).join(', ') || 'None yet'}`,
      '',
      'Please contact this account about purchasing more Electrical Review press release credits.',
    ].join('\n');

    const requestedAt = new Date().toISOString();

    try {
      await fetch('/api/credit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          body,
          accountEmail: user.email,
          accountName: user.accountName,
          creditsRemaining: user.creditsRemaining,
          brands: user.brandProfiles.map((brand) => ({
            id: brand.id,
            companyName: brand.companyName,
            contactName: brand.contactName,
            contactEmail: brand.contactEmail,
          })),
          requestedAt,
        }),
      });
    } catch {
      // The user experience stays frictionless even if local preview mail delivery is unavailable.
    }

    setUser({
      ...user,
      creditRequest: {
        status: 'submitted',
        requestedAt,
        subject,
        body,
      },
    });
  };

  const createDemoUser = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const accounts = readAccounts();
    setUser(normaliseUser(accounts['client@northstarthermal.example'] ?? makeDemoUser()));
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      subscribe,
      updateCompanyProfile,
      updateBrandProfile,
      addBrandProfile,
      addPressReleaseSubmission,
      requestMoreCredits,
      createDemoUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
