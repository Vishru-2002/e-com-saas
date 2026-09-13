import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import TeamBillingScreen from '@/components/admin/screens/TeamBilling';

export const TeamBillingPage: React.FC = () => {
  return (
    <AdminLayout screen="team">
      <TeamBillingScreen />
    </AdminLayout>
  );
};

export default TeamBillingPage;
