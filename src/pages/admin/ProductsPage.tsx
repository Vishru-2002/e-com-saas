import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import ProductsScreen from '@/components/admin/screens/Products';

export const ProductsPage: React.FC = () => {
  return (
    <AdminLayout screen="products">
      <ProductsScreen />
    </AdminLayout>
  );
};

export default ProductsPage;
