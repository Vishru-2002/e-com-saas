import React from 'react';
import type { StoreDraft, Product } from '@/types/store';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface StoreCartModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  detail: Product | null;
  store: StoreDraft;
  cart: Record<string, number>;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, delta: number, maxStock: number) => void;
}

export const StoreCartModal: React.FC<StoreCartModalProps> = ({
  open,
  onOpenChange,
  detail,
  store,
  cart,
  onAddToCart,
  onUpdateQuantity,
}) => {
  const formatMoney = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: store.currency }).format(n);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = store.products.reduce((acc, p) => acc + p.price * (cart[p.id] || 0), 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="store-cart">
        <DialogHeader>
          <DialogTitle>{detail ? detail.name : `Your bag (${cartCount})`}</DialogTitle>
          <DialogDescription>
            {detail ? detail.description : 'Your carefully chosen favorites.'}
          </DialogDescription>
        </DialogHeader>

        {detail ? (
          <div className="flex flex-col gap-3">
            <img className="detail-product-image rounded-md object-cover max-h-64 w-full" src={detail.image} alt={detail.name} />
            <strong className="text-lg font-semibold">{formatMoney(detail.price)}</strong>
            <button
              className="seller-primary w-full py-2.5 rounded-lg text-white font-medium"
              style={{ backgroundColor: store.accent || '#635bff' }}
              disabled={!detail.stock}
              onClick={() => onAddToCart(detail)}
              type="button"
            >
              {detail.stock ? 'Add to bag' : 'Sold out'}
            </button>
          </div>
        ) : (
          <div>
            {store.products
              .filter((p) => cart[p.id])
              .map((p) => (
                <div className="cart-row flex items-center justify-between py-2 border-b" key={p.id}>
                  <img src={p.image} alt="" className="w-12 h-12 rounded object-cover" />
                  <div className="flex-1 ml-3">
                    <strong className="block text-sm">{p.name}</strong>
                    <span className="text-xs text-gray-600">{formatMoney(p.price)}</span>
                    <div className="cart-quantity flex items-center gap-2 mt-1">
                      <button
                        className="px-2 py-0.5 border rounded"
                        aria-label={`Remove one ${p.name}`}
                        onClick={() => onUpdateQuantity(p.id, -1, p.stock)}
                        type="button"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium">{cart[p.id]}</span>
                      <button
                        className="px-2 py-0.5 border rounded"
                        aria-label={`Add one ${p.name}`}
                        disabled={cart[p.id] >= p.stock}
                        onClick={() => onUpdateQuantity(p.id, 1, p.stock)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {!cartCount ? (
              <p className="py-6 text-center text-gray-500">Your bag is waiting for something good.</p>
            ) : (
              <div className="mt-4 pt-3 border-t">
                <div className="cart-total flex justify-between font-bold text-base">
                  <span>Subtotal</span>
                  <strong>{formatMoney(total)}</strong>
                </div>
                <p className="cart-checkout-note text-xs text-gray-500 mt-2">
                  Online checkout is not enabled for this store yet. No payments are collected.
                </p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
