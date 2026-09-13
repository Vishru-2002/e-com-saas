import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import CustomersScreen from '@/components/admin/screens/Customers';

export const CustomersPage: React.FC = () => {
  return (
    <AdminLayout screen="customers">
      <CustomersScreen />
    </AdminLayout>
  );
};

export default CustomersPage;
