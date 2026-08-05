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
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
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

  const demoUser = (): User => {
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 12);
    return {
      email: "client@northstarthermal.example",
      hasSubscription: true,
      subscriptionType: "12-months",
      subscriptionExpiry: expiry.toISOString(),
      companyProfile: {
        companyName: "Northstar Thermal",
        website: "https://northstarthermal.example",
        description: "Northstar Thermal designs and validates liquid-cooling infrastructure for high-density data centre deployments across Europe.",
        logo: "https://placehold.co/240x80/5a6eb4/ffffff.png?text=NORTHSTAR+THERMAL",
        contactName: "Alex Morgan",
        contactEmail: "press@northstarthermal.example",
        contactPhone: "+44 (0)20 7946 0182",
      },
    };
  };

  const login = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (email.toLowerCase() === "client@northstarthermal.example" && password === "DCRdemo2026") {
      setUser(demoUser());
      return;
    }
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
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(demoUser());
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
