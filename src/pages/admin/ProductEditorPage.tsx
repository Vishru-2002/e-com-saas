import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import ProductEditorScreen from '@/components/admin/screens/ProductEditor';

export const ProductEditorPage: React.FC = () => {
  return (
    <AdminLayout screen="product-editor">
      <ProductEditorScreen />
    </AdminLayout>
  );
};

export default ProductEditorPage;
