import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  hasSubscription: boolean;
  subscriptionType?: '3-months' | '6-months' | '12-months';
  subscriptionExpiry?: string;
  companyProfile?: {
    companyName: string;
    logo?: string;
    website?: string;
    description?: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  subscribe: (subscriptionType: '3-months' | '6-months' | '12-months') => void;
  updateCompanyProfile: (profile: User['companyProfile']) => void;
  createDemoUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, _password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      email,
      hasSubscription: false,
    });
  };

  const logout = () => {
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

    setUser({
      ...user,
      hasSubscription: true,
      subscriptionType,
      subscriptionExpiry: expiry.toISOString(),
    });
  };

  const updateCompanyProfile = (profile: User['companyProfile']) => {
    if (!user) return;
    setUser({
      ...user,
      companyProfile: profile,
    });
  };

  const createDemoUser = async () => {
    // Mock login delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const now = new Date();
    const expiry = new Date(now);
    expiry.setMonth(expiry.getMonth() + 6);

    // Create complete demo user in single state update
    setUser({
      email: "demo@example.com",
      hasSubscription: true,
      subscriptionType: '6-months',
      subscriptionExpiry: expiry.toISOString(),
      companyProfile: {
        companyName: "Demo Company Ltd",
        website: "https://democompany.com",
        description: "A demonstration company profile for showcasing the press release submission workflow.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop"
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, subscribe, updateCompanyProfile, createDemoUser }}>
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
