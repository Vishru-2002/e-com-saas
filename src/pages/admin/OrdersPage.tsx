import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import OrdersScreen from '@/components/admin/screens/Orders';

interface OrdersPageProps {
  initialFilter?: string;
}

export const OrdersPage: React.FC<OrdersPageProps> = ({ initialFilter }) => {
  return (
    <AdminLayout screen="orders" initialFilter={initialFilter}>
      <OrdersScreen />
    </AdminLayout>
  );
};

export default OrdersPage;
