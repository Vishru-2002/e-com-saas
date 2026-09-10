import React, { useState } from 'react';
import type { StoreDraft, Product } from '@/types/store';
import { StoreHeader } from './StoreHeader';
import { StoreHero } from './StoreHero';
import { StoreCollection } from './StoreCollection';
import { StoreCartModal } from './StoreCartModal';
import { StoreFooter } from './StoreFooter';

interface StorefrontProps {
  store: StoreDraft;
  preview?: boolean;
}

export const Storefront: React.FC<StorefrontProps> = ({ store, preview = false }) => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [openCart, setOpenCart] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: Math.min(product.stock, (prev[product.id] || 0) + 1),
    }));
    setDetailProduct(null);
    setOpenCart(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number, maxStock: number) => {
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
  };

  return (
    <div
      className={`storefront storefront-${store.theme}`}
      style={{ '--store-accent': store.accent || '#635bff' } as React.CSSProperties}
    >
      <StoreHeader
        store={store}
        cartCount={cartCount}
        onOpenCart={() => {
          setDetailProduct(null);
          setOpenCart(true);
        }}
      />

      <main>
        <StoreHero store={store} />

        <StoreCollection
          store={store}
          cart={cart}
          onSelectProduct={(p) => {
            setDetailProduct(p);
            setOpenCart(true);
          }}
          onAddToCart={handleAddToCart}
        />

        <section id="about" className="store-about">
          <span className="store-eyebrow">A LITTLE ABOUT US</span>
          <h2>{store.name}</h2>
          <p>{store.description}</p>
        </section>
      </main>

      <StoreFooter storeName={store.name} preview={preview} />

      <StoreCartModal
        open={openCart}
        onOpenChange={(val) => {
          setOpenCart(val);
          if (!val) setDetailProduct(null);
        }}
        detail={detailProduct}
        store={store}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default Storefront;
