export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
};

export type ThemeId = 'studio' | 'botanical' | 'bold';

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

export type DomainStatus = 'not-connected' | 'pending' | 'verified';

export type StoreDraft = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  currency: CurrencyCode | string;
  theme: ThemeId;
  accent: string;
  domain: string;
  domainStatus: DomainStatus;
  products: Product[];
};

export type Seller = {
  id?: string;
  name: string;
  email: string;
};

export type StoreRecord = {
  id: string;
  slug: string;
  name: string;
  draft: StoreDraft;
  published: StoreDraft | null;
  published_at: string | null;
};

export type ThemeConfig = {
  id: ThemeId;
  name: string;
  desc: string;
  color: string;
  defaultAccent: string;
};
