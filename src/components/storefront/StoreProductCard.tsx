import React from 'react';
import type { Product } from '@/types/store';

interface StoreProductCardProps {
  product: Product;
  currency: string;
  cartQty: number;
  onSelect: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export const StoreProductCard: React.FC<StoreProductCardProps> = ({
  product,
  currency,
  cartQty,
  onSelect,
  onAdd,
}) => {
  const formatMoney = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount);

  const isSoldOut = !product.stock;
  const isMaxInCart = cartQty >= product.stock;

  return (
    <article>
      <button className="store-product-image" onClick={() => onSelect(product)} type="button">
        <img src={product.image} alt={product.name} />
        {isSoldOut && <span>Sold out</span>}
      </button>
      <div className="store-product-info">
        <button onClick={() => onSelect(product)} type="button">
          <h3>{product.name}</h3>
        </button>
        <span>{formatMoney(product.price)}</span>
      </div>
      <p>{product.description}</p>
      <button
        className="store-add"
        disabled={isSoldOut || isMaxInCart}
        onClick={() => onAdd(product)}
        type="button"
      >
        {isSoldOut ? 'Sold out' : isMaxInCart ? 'Max in bag' : 'Add to bag'} <span>+</span>
      </button>
    </article>
  );
};
