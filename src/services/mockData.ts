import type { Product, StoreDraft, StoreRecord, Seller, ThemeConfig } from '@/types/store';

export const sampleProducts: Product[] = [
  {
    id: '0',
    name: 'AeroFlow Ergonomic Mesh Chair',
    price: 12999,
    stock: 142,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc49p8_aCdg-CyibVl2iB9BnlZFvTQP_YaN4ke0oo03UJ-h6ZmaTL4PHf6U6dfu3SCqFvgLEnKAJO2h1SOC1vj3ERDWDEkQ5reu6MFhy2_VtEGRu0vKxuyIv814wkhOist_icjg3Abn-0wum_QzUwqND1TzOxKmkS11UNy9qNSSpp2Kgcd434BHxxGkB1pyVLkkluMCTZGoJZIHVg0I-1wSUGoqhzMgXlvv72cLPjVqbwjhC1MYSd6',
    description: 'Designed for a better workday. Breathable mesh and adjustable lumbar support.',
  },
  {
    id: '1',
    name: 'Lumina LED Desk Lamp',
    price: 2499,
    stock: 28,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBvkGvvNoyYn8F-Zi9lgOFuTPE4QVrNSavw_mWd1e0SX1DFsSDQb5uISWzay2rj13dKjXoLPCB4kQk_hsXYpAeUE11-kK9MiwKFA5w5-5FhkehXc7eBlrOEOeDNWpQzuRDBQSdBipqMVnjylWbVWReg1F4tI8v8g2GJpJ0tg-yg5iUvifyJnmRXXcVsCIP6IMdDcVRLCg1OA-kJyykcawu0hRrd1sgasnkq0VYvv0DzbLQb6T4bUl9',
    description: 'A warmer light for your favorite corner.',
  },
  {
    id: '2',
    name: 'Artisan Ceramic Coffee Mug',
    price: 899,
    stock: 74,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwsTDvz6SLeYwXEnkpcIxuItzqvJlKRrzWA1wwB6t4jc-DKQMEdvuUy6lHFYEQg0f65XjG4Za3Mr-rbeko0cCpB4pDuDZLGQeOv5DHuCu3Vkaps65Sp6jyKjHZLbhLasVFU89k4o87wyG20y5LYS05ifWS0GlbzJOZ15sjRxiLtgJBrh9V6qbH8WwxPttfu0wIMmYuruxXkesjeY5cAiyQd3W3pMAIZPU1fMBhMjCYYU49m1LuvaOl',
    description: 'A little everyday ritual, made beautifully.',
  },
];

export const themeOptions: ThemeConfig[] = [
  {
    id: 'studio',
    name: 'Studio',
    desc: 'Crisp blue. Clean lines. A modern classic.',
    color: '#eef2ff',
    defaultAccent: '#635bff',
  },
  {
    id: 'botanical',
    name: 'Sunset',
    desc: 'Coral warmth with a playful editorial feel.',
    color: '#fff0e7',
    defaultAccent: '#e56747',
  },
  {
    id: 'bold',
    name: 'Momentum',
    desc: 'Electric violet with a bold lemon accent.',
    color: '#30215c',
    defaultAccent: '#f5e548',
  },
];

export const initialEmptyDraft: StoreDraft = {
  name: 'The Everyday Studio',
  slug: 'the-everyday-studio',
  tagline: 'Thoughtfully chosen. Made for everyday.',
  description: 'Discover a collection of things you will love. High quality objects designed to elevate your everyday routines.',
  currency: 'INR',
  theme: 'studio',
  accent: '#635bff',
  domain: '',
  domainStatus: 'not-connected',
  products: [...sampleProducts],
};

export const initialDemoSeller: Seller = {
  id: 'demo-seller-01',
  name: 'Sarah Anderson',
  email: 'sarah@genbytez.com',
};

export const initialDemoStore: StoreRecord = {
  id: 'store-demo-01',
  slug: 'the-everyday-studio',
  name: 'The Everyday Studio',
  draft: initialEmptyDraft,
  published: initialEmptyDraft,
  published_at: new Date().toISOString(),
};
