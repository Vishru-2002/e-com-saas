import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Seller } from '@/types/store';
import { storageService } from '@/services/storageService';

interface AuthContextType {
  seller: Seller | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refresh: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [seller, setSeller] = useState<Seller | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const refresh = () => {
    setSeller(storageService.getCurrentSeller());
  };

  useEffect(() => {
    refresh();
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await storageService.login(email, password);
    setSeller(res.seller);
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await storageService.register(name, email, password);
    setSeller(res.seller);
  };

  const logout = () => {
    storageService.logout();
    setSeller(null);
    navigate('/', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ seller, loading, login, register, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
