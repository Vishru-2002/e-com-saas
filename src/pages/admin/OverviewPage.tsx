import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import OverviewScreen from '@/components/admin/screens/Overview';

export const OverviewPage: React.FC = () => {
  return (
    <AdminLayout screen="overview">
      <OverviewScreen />
    </AdminLayout>
  );
};

export default OverviewPage;
