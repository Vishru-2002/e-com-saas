import type { Seller, StoreDraft, StoreRecord } from '@/types/store';
import { initialEmptyDraft } from './mockData';

const KEYS = {
  SELLER: 'genbytez_active_seller',
  STORE: 'genbytez_active_store',
  USERS: 'genbytez_registered_sellers',
  PUBLISHED_STORES: 'genbytez_published_stores',
  SCREEN_DATA_PREFIX: 'genbytez:screen:',
};

interface StoredUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

// Simple browser-compatible hash helper
async function simpleHash(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

class StorageService {
  constructor() {
    this.initDefaults();
  }

  private initDefaults() {
    try {
      // Pre-seed registered demo user so "Quick Demo" sign in works out-of-the-box
      const existingUsers = localStorage.getItem(KEYS.USERS);
      if (!existingUsers) {
        simpleHash('demopassword123').then((hash) => {
          const demoUser: StoredUser = {
            id: 'demo-seller-01',
            name: 'Sarah Anderson',
            email: 'sarah@genbytez.com',
            passwordHash: hash,
          };
          localStorage.setItem(KEYS.USERS, JSON.stringify([demoUser]));
        });
      }
    } catch {
      // In case localStorage is blocked in private browsing
    }
  }

  private getUserStoreKey(userId?: string): string {
    const id = userId || this.getCurrentSeller()?.id;
    return id ? `${KEYS.STORE}_${id}` : KEYS.STORE;
  }

  // --- Seller Authentication ---
  getCurrentSeller(): Seller | null {
    try {
      const data = localStorage.getItem(KEYS.SELLER);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  async login(email: string, password: string): Promise<{ seller: Seller; store: StoreRecord }> {
    const cleanEmail = email.trim().toLowerCase();
    const users: StoredUser[] = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    const pwdHash = await simpleHash(password);

    // Check registered users
    let found = users.find((u) => u.email.toLowerCase() === cleanEmail);

    // If demo email, create or match user
    if (!found && cleanEmail === 'sarah@genbytez.com') {
      found = {
        id: 'demo-seller-01',
        name: 'Sarah Anderson',
        email: 'sarah@genbytez.com',
        passwordHash: pwdHash,
      };
      users.push(found);
      localStorage.setItem(KEYS.USERS, JSON.stringify(users));
    }

    if (!found || found.passwordHash !== pwdHash) {
      throw new Error('Email or password is incorrect.');
    }

    const seller: Seller = { id: found.id, name: found.name, email: found.email };
    localStorage.setItem(KEYS.SELLER, JSON.stringify(seller));

    // Get or initialize user's store (starts as unpublished draft)
    const store = this.getStoreForUser(seller);
    return { seller, store };
  }

  async register(name: string, email: string, password: string): Promise<{ seller: Seller; store: StoreRecord }> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanName) throw new Error('Your name is required.');
    if (!cleanEmail.includes('@')) throw new Error('A valid email address is required.');
    if (password.length < 6) throw new Error('Password must be at least 6 characters.');

    const users: StoredUser[] = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    if (users.some((u) => u.email.toLowerCase() === cleanEmail)) {
      throw new Error('An account with this email already exists.');
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      name: cleanName,
      email: cleanEmail,
      passwordHash: await simpleHash(password),
    };

    users.push(newUser);
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));

    const seller: Seller = { id: newUser.id, name: newUser.name, email: newUser.email };
    localStorage.setItem(KEYS.SELLER, JSON.stringify(seller));

    // Fresh UNPUBLISHED store draft for new seller
    const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my-store';
    const newStore: StoreRecord = {
      id: crypto.randomUUID(),
      slug: slug,
      name: `${cleanName}'s Store`,
      draft: {
        ...initialEmptyDraft,
        name: `${cleanName}'s Store`,
        slug: slug,
      },
      published: null,
      published_at: null,
    };

    localStorage.setItem(this.getUserStoreKey(seller.id), JSON.stringify(newStore));
    localStorage.setItem(KEYS.STORE, JSON.stringify(newStore));
    return { seller, store: newStore };
  }

  logout(): void {
    localStorage.removeItem(KEYS.SELLER);
    localStorage.removeItem(KEYS.STORE);
  }

  resetAll(): void {
    try {
      const seller = this.getCurrentSeller();
      if (seller) {
        localStorage.removeItem(this.getUserStoreKey(seller.id));
      }
      localStorage.removeItem(KEYS.SELLER);
      localStorage.removeItem(KEYS.STORE);
      localStorage.removeItem(KEYS.PUBLISHED_STORES);
    } catch {}
  }

  // --- Store Operations ---
  getStore(): StoreRecord {
    try {
      const key = this.getUserStoreKey();
      const data = localStorage.getItem(key) || localStorage.getItem(KEYS.STORE);
      if (data) return JSON.parse(data);
    } catch {}

    // Default fresh unpublished draft
    const fresh: StoreRecord = {
      id: crypto.randomUUID(),
      slug: 'the-everyday-studio',
      name: 'The Everyday Studio',
      draft: { ...initialEmptyDraft, name: 'The Everyday Studio', slug: 'the-everyday-studio' },
      published: null,
      published_at: null,
    };
    return fresh;
  }

  private getStoreForUser(seller: Seller): StoreRecord {
    const userStoreKey = this.getUserStoreKey(seller.id);
    try {
      const data = localStorage.getItem(userStoreKey);
      if (data) {
        const parsed: StoreRecord = JSON.parse(data);
        localStorage.setItem(KEYS.STORE, JSON.stringify(parsed));
        return parsed;
      }
    } catch {}

    const slug = seller.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my-store';
    const store: StoreRecord = {
      id: crypto.randomUUID(),
      slug: slug,
      name: `${seller.name}'s Store`,
      draft: {
        ...initialEmptyDraft,
        name: `${seller.name}'s Store`,
        slug: slug,
      },
      published: null,
      published_at: null,
    };
    localStorage.setItem(userStoreKey, JSON.stringify(store));
    localStorage.setItem(KEYS.STORE, JSON.stringify(store));
    return store;
  }

  saveDraft(draft: StoreDraft): StoreRecord {
    if (!draft.name?.trim()) throw new Error('Shop name is required.');
    if (!draft.slug?.trim()) throw new Error('Store URL is required.');

    const current = this.getStore();
    const updated: StoreRecord = {
      ...current,
      name: draft.name.trim(),
      slug: draft.slug.trim().toLowerCase(),
      draft: { ...draft, slug: draft.slug.trim().toLowerCase() },
    };

    const key = this.getUserStoreKey();
    localStorage.setItem(key, JSON.stringify(updated));
    localStorage.setItem(KEYS.STORE, JSON.stringify(updated));
    return updated;
  }

  publishStore(draft: StoreDraft): StoreRecord {
    const updated = this.saveDraft(draft);
    const now = new Date().toISOString();

    const publishedRecord: StoreRecord = {
      ...updated,
      published: updated.draft,
      published_at: now,
    };

    const key = this.getUserStoreKey();
    localStorage.setItem(key, JSON.stringify(publishedRecord));
    localStorage.setItem(KEYS.STORE, JSON.stringify(publishedRecord));

    // Update public catalog of published stores
    try {
      const published = JSON.parse(localStorage.getItem(KEYS.PUBLISHED_STORES) || '{}');
      published[publishedRecord.slug] = publishedRecord.draft;
      localStorage.setItem(KEYS.PUBLISHED_STORES, JSON.stringify(published));
    } catch {}

    return publishedRecord;
  }

  unpublishStore(): StoreRecord {
    const store = this.getStore();
    const updated: StoreRecord = {
      ...store,
      published: null,
      published_at: null,
    };
    const key = this.getUserStoreKey();
    localStorage.setItem(key, JSON.stringify(updated));
    localStorage.setItem(KEYS.STORE, JSON.stringify(updated));

    try {
      const published = JSON.parse(localStorage.getItem(KEYS.PUBLISHED_STORES) || '{}');
      delete published[store.slug];
      localStorage.setItem(KEYS.PUBLISHED_STORES, JSON.stringify(published));
    } catch {}

    return updated;
  }

  isStorePublished(): boolean {
    const store = this.getStore();
    return !!store?.published_at && !!store?.published;
  }

  getPublishedStoreBySlug(slug: string): StoreDraft | null {
    try {
      const store = this.getStore();
      if (store.slug === slug && store.published && store.published_at) {
        return store.published;
      }
      const published = JSON.parse(localStorage.getItem(KEYS.PUBLISHED_STORES) || '{}');
      if (published[slug]) {
        return published[slug];
      }
      if (slug === 'the-everyday-studio' || slug === 'demo') {
        return initialEmptyDraft;
      }
    } catch {}
    return null;
  }

  async verifyDomain(domain: string): Promise<{ verified: boolean; message: string }> {
    const clean = domain.trim().toLowerCase();
    if (!clean) throw new Error('Enter a domain first.');

    const store = this.getStore();
    this.saveDraft({ ...store.draft, domain: clean, domainStatus: 'verified' });
    return {
      verified: true,
      message: 'Demo mode: Domain ownership verified. Ready for routing.',
    };
  }

  getScreenData(screenKey: string): unknown {
    try {
      const raw = localStorage.getItem(KEYS.SCREEN_DATA_PREFIX + screenKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  saveScreenData(screenKey: string, data: unknown): void {
    try {
      localStorage.setItem(KEYS.SCREEN_DATA_PREFIX + screenKey, JSON.stringify(data));
    } catch {}
  }
}

export const storageService = new StorageService();
