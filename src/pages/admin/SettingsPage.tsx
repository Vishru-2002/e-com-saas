import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import SettingsScreen from '@/components/admin/screens/Settings';

export const SettingsPage: React.FC = () => {
  return (
    <AdminLayout screen="settings">
      <SettingsScreen />
    </AdminLayout>
  );
};

export default SettingsPage;
