import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import OrderDetailScreen from '@/components/admin/screens/OrderDetail';

export const OrderDetailPage: React.FC = () => {
  return (
    <AdminLayout screen="order-detail">
      <OrderDetailScreen />
    </AdminLayout>
  );
};

export default OrderDetailPage;
