import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import CategoriesScreen from '@/components/admin/screens/Categories';

export const CategoriesPage: React.FC = () => {
  return (
    <AdminLayout screen="categories">
      <CategoriesScreen />
    </AdminLayout>
  );
};

export default CategoriesPage;
