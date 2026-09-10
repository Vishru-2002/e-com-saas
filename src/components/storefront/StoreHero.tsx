import React from 'react';
import type { StoreDraft } from '@/types/store';

interface StoreHeroProps {
  store: StoreDraft;
}

export const StoreHero: React.FC<StoreHeroProps> = ({ store }) => {
  const firstProduct = store.products[0];

  return (
    <section className="store-hero">
      <div>
        <div className="store-eyebrow">THE EVERYDAY COLLECTION</div>
        <h1>
          {store.theme === 'bold'
            ? 'EVERYDAY.\nUPGRADED.'
            : store.tagline || 'Good things, thoughtfully chosen.'}
        </h1>
        <p>{store.description}</p>
        <a className="store-cta" href="#collection">
          Explore the collection <span>↗</span>
        </a>
      </div>
      <div className="store-hero-image">
        {firstProduct ? (
          <img src={firstProduct.image} alt={firstProduct.name} />
        ) : (
          <span>Your collection starts here.</span>
        )}
        <span className="hero-image-label">
          CURATED WITH CARE · {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
};
