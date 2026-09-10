import React, { useState, useEffect } from 'react';
import type { Product } from '@/types/store';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ProductFormModalProps {
  product: Product | null;
  currency: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Product>({
    id: '',
    name: '',
    price: 0,
    stock: 1,
    image: '',
    description: '',
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        id: crypto.randomUUID(),
        name: '',
        price: 0,
        stock: 1,
        image: '',
        description: '',
      });
    }
  }, [product, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="seller-product-dialog">
        <DialogHeader>
          <DialogTitle>{product?.name ? 'Edit product' : 'Add a product'}</DialogTitle>
          <DialogDescription>
            Give customers the details they need to fall in love.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label>
            Product name
            <input
              required
              value={formData.name}
              maxLength={150}
              placeholder="e.g. Minimalist Ceramic Cup"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>

          <div className="field-pair">
            <label>
              Price ({currency})
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              />
            </label>

            <label>
              Available stock
              <input
                required
                type="number"
                min="0"
                step="1"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
              />
            </label>
          </div>

          <label>
            Image URL
            <input
              required
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </label>

          <label>
            Description
            <textarea
              value={formData.description}
              maxLength={2000}
              rows={3}
              placeholder="Describe your product materials, dimensions, and craftsmanship..."
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </label>

          <button type="submit" className="seller-primary w-full mt-3">
            Save product
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
