import React from 'react';
import type { StoreDraft } from '@/types/store';

interface StoreHeaderProps {
  store: StoreDraft;
  cartCount: number;
  onOpenCart: () => void;
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({ store, cartCount, onOpenCart }) => {
  return (
    <>
      <div className="store-announcement">{store.tagline || 'Thoughtfully chosen. Made for everyday.'}</div>
      <header className="store-header">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="store-logo"
        >
          {store.name}
        </a>
        <nav>
          <a href="#collection">Shop collection</a>
          <a href="#about">Our story</a>
        </nav>
        <button
          className="store-bag"
          onClick={onOpenCart}
          aria-label={`Shopping bag, ${cartCount} items`}
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span>Bag ({cartCount})</span>
        </button>
      </header>
    </>
  );
};
