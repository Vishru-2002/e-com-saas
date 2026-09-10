import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { StoreRecord, StoreDraft } from '@/types/store';
import { storageService } from '@/services/storageService';
import { useAuth } from './AuthContext';

interface StoreContextType {
  store: StoreRecord;
  draft: StoreDraft;
  updateDraft: (patch: Partial<StoreDraft>) => void;
  saveDraft: () => boolean;
  publishStore: () => boolean;
  unpublishStore: () => void;
  verifyDomain: () => Promise<string>;
  toast: string;
  showToast: (msg: string) => void;
  cart: Record<string, number>;
  addToCart: (productId: string, stock: number) => void;
  updateCartQuantity: (productId: string, delta: number, maxStock: number) => void;
  clearCart: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { seller } = useAuth();
  const [store, setStore] = useState<StoreRecord>(() => storageService.getStore());
  const [draft, setDraft] = useState<StoreDraft>(() => storageService.getStore().draft);
  const [toast, setToast] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({});

  useEffect(() => {
    const current = storageService.getStore();
    setStore(current);
    setDraft(current.draft);
  }, [seller]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  const updateDraft = useCallback((patch: Partial<StoreDraft>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  }, []);

  const saveDraft = useCallback(() => {
    try {
      const updated = storageService.saveDraft(draft);
      setStore(updated);
      setDraft(updated.draft);
      showToast('Store changes saved locally.');
      return true;
    } catch (e) {
      showToast((e as Error).message);
      return false;
    }
  }, [draft, showToast]);

  const publishStore = useCallback(() => {
    try {
      const updated = storageService.publishStore(draft);
      setStore(updated);
      setDraft(updated.draft);
      showToast('Storefront successfully published!');
      return true;
    } catch (e) {
      showToast((e as Error).message);
      return false;
    }
  }, [draft, showToast]);

  const unpublishStore = useCallback(() => {
    const updated = storageService.unpublishStore();
    setStore(updated);
    setDraft(updated.draft);
    showToast('Store unpublished. Your draft is preserved.');
  }, [showToast]);

  const verifyDomain = useCallback(async () => {
    if (!draft.domain) throw new Error('Enter a domain name first.');
    const res = await storageService.verifyDomain(draft.domain);
    updateDraft({ domainStatus: res.verified ? 'verified' : 'pending' });
    showToast(res.message);
    return res.message;
  }, [draft.domain, updateDraft, showToast]);

  const addToCart = useCallback((productId: string, stock: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      if (current >= stock) return prev;
      return { ...prev, [productId]: current + 1 };
    });
  }, []);

  const updateCartQuantity = useCallback((productId: string, delta: number, maxStock: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: Math.min(next, maxStock) };
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart({});
  }, []);

  return (
    <StoreContext.Provider
      value={{
        store,
        draft,
        updateDraft,
        saveDraft,
        publishStore,
        unpublishStore,
        verifyDomain,
        toast,
        showToast,
        cart,
        addToCart,
        updateCartQuantity,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore(): StoreContextType {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
