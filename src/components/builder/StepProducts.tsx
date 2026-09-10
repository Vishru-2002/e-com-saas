import React from 'react';
import type { StoreDraft, Product } from '@/types/store';
import { sampleProducts } from '@/services/mockData';

interface StepProductsProps {
  draft: StoreDraft;
  onUpdate: (patch: Partial<StoreDraft>) => void;
  onOpenAddModal: () => void;
  onOpenEditModal: (product: Product) => void;
}

export const StepProducts: React.FC<StepProductsProps> = ({
  draft,
  onUpdate,
  onOpenAddModal,
  onOpenEditModal,
}) => {
  const formatMoney = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: draft.currency }).format(amount);

  const handleRemove = (id: string) => {
    onUpdate({ products: draft.products.filter((p) => p.id !== id) });
  };

  const handleUseSamples = () => {
    onUpdate({ products: [...sampleProducts] });
  };

  return (
    <div className="product-editor-list">
      <div className="product-list-actions">
        <span>{draft.products.length} products in your collection</span>
        <button className="seller-secondary" type="button" onClick={onOpenAddModal}>
          <span className="material-symbols-outlined">add</span>
          <span>Add product</span>
        </button>
      </div>

      {!draft.products.length ? (
        <div className="products-empty">
          <span className="material-symbols-outlined">inventory_2</span>
          <h3>Your shelves are ready.</h3>
          <p>Add your first product, or start with our sample collection.</p>
          <button className="seller-secondary" type="button" onClick={handleUseSamples}>
            Use sample products
          </button>
        </div>
      ) : (
        draft.products.map((p) => (
          <div className="seller-product-row" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div>
              <strong>{p.name}</strong>
              <span>
                {p.stock} in stock · {formatMoney(p.price)}
              </span>
            </div>
            <button
              aria-label={`Edit ${p.name}`}
              type="button"
              onClick={() => onOpenEditModal(p)}
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              aria-label={`Remove ${p.name}`}
              type="button"
              onClick={() => handleRemove(p.id)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        ))
      )}
    </div>
  );
};
