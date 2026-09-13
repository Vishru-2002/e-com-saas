import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import OnboardingScreen from '@/components/admin/screens/Onboarding';

export const OnboardingPage: React.FC = () => {
  return (
    <AdminLayout screen="onboarding">
      <OnboardingScreen />
    </AdminLayout>
  );
};

export default OnboardingPage;
