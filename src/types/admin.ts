export type AdminScreenKey =
  | 'seller'
  | 'overview'
  | 'orders'
  | 'order-detail'
  | 'products'
  | 'product-editor'
  | 'inventory'
  | 'customers'
  | 'categories'
  | 'settings'
  | 'team'
  | 'sign-in'
  | 'onboarding';

export interface ActionModalState {
  title: string;
  fields?: string[];
  body?: string;
  action?: string;
  run?: (data: Record<string, string>) => void;
}
