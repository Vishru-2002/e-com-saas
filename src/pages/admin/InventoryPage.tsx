import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import InventoryScreen from '@/components/admin/screens/Inventory';

export const InventoryPage: React.FC = () => {
  return (
    <AdminLayout screen="inventory">
      <InventoryScreen />
    </AdminLayout>
  );
};

export default InventoryPage;
