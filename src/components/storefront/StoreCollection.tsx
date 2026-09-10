import React, { useState } from 'react';
import type { StoreDraft, Product } from '@/types/store';
import { StoreProductCard } from './StoreProductCard';

interface StoreCollectionProps {
  store: StoreDraft;
  cart: Record<string, number>;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const StoreCollection: React.FC<StoreCollectionProps> = ({
  store,
  cart,
  onSelectProduct,
  onAddToCart,
}) => {
  const [search, setSearch] = useState('');

  const filtered = store.products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="collection" className="store-collection">
      <div className="store-section-heading">
        <div>
          <span className="store-eyebrow">FIND YOUR NEW FAVORITES</span>
          <h2>The collection</h2>
        </div>
        <input
          aria-label="Search products"
          placeholder="Search the collection…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="store-product-grid">
        {filtered.map((product) => (
          <StoreProductCard
            key={product.id}
            product={product}
            currency={store.currency}
            cartQty={cart[product.id] || 0}
            onSelect={onSelectProduct}
            onAdd={onAddToCart}
          />
        ))}
      </div>

      {!filtered.length && (
        <p className="store-empty">
          {search
            ? 'No products match your search.'
            : 'Your collection will appear here when you add products.'}
        </p>
      )}
    </section>
  );
};
