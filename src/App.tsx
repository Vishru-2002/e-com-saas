import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { StoreProvider, useStore } from '@/context/StoreContext';
import { Toast } from '@/components/common/Toast';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { LandingPage } from '@/pages/LandingPage';
import { SellerSetupPage } from '@/pages/SellerSetupPage';
import { StorefrontPage } from '@/pages/StorefrontPage';
import { AuthPage } from '@/pages/AuthPage';
import { OverviewPage } from '@/pages/admin/OverviewPage';
import { OrdersPage } from '@/pages/admin/OrdersPage';
import { OrderDetailPage } from '@/pages/admin/OrderDetailPage';
import { ProductsPage } from '@/pages/admin/ProductsPage';
import { ProductEditorPage } from '@/pages/admin/ProductEditorPage';
import { InventoryPage } from '@/pages/admin/InventoryPage';
import { CustomersPage } from '@/pages/admin/CustomersPage';
import { CategoriesPage } from '@/pages/admin/CategoriesPage';
import { SettingsPage } from '@/pages/admin/SettingsPage';
import { TeamBillingPage } from '@/pages/admin/TeamBillingPage';
import { OnboardingPage } from '@/pages/admin/OnboardingPage';

function AppContent() {
  const { seller, loading } = useAuth();
  const { store, toast } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const isPublished = Boolean(store?.published_at && store?.published);

  return (
    <>
      <Routes>
        {/* Landing Page: Website on initial / route */}
        <Route path="/" element={<LandingPage />} />

        {/* Single Unified Auth Route */}
        <Route
          path="/auth"
          element={
            seller ? (
              <Navigate to={isPublished ? '/overview' : '/builder'} replace />
            ) : (
              <AuthPage
                onSuccess={() => navigate(isPublished ? '/overview' : '/builder')}
              />
            )
          }
        />

        {/* Backward Compatibility Redirects to clean /auth route */}
        <Route path="/signin" element={<Navigate to="/auth" replace />} />
        <Route path="/signup" element={<Navigate to="/auth" replace state={{ mode: 'signup' }} />} />
        <Route path="/login" element={<Navigate to="/auth" replace />} />

        {/* Store Setup Builder */}
        <Route
          path="/builder"
          element={
            !seller ? (
              <Navigate to="/" replace />
            ) : (
              <SellerSetupPage
                onNavigateScreen={(screen) => {
                  if (isPublished) navigate(`/${screen}`);
                }}
                onNavigateStorefront={(slug) => navigate(`/store/${slug}`)}
              />
            )
          }
        />

        {/* Live Storefront Page */}
        <Route path="/store/:slug" element={<StorefrontPage />} />

        {/* Dedicated Admin Workspace Page Routes */}
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/order-detail" element={<OrderDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-editor" element={<ProductEditorPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/team" element={<TeamBillingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Sub-navigation & Alias Routes explicitly mapped to pages */}
        <Route path="/all-products" element={<Navigate to="/products" replace />} />
        <Route path="/all-orders" element={<Navigate to="/orders" replace />} />
        <Route path="/unfulfilled" element={<OrdersPage initialFilter="unfulfilled" />} />
        <Route path="/drafts" element={<OrdersPage initialFilter="drafts" />} />
        <Route path="/abandoned-carts" element={<OrdersPage initialFilter="abandoned" />} />
        <Route path="/returns-ndr" element={<OrdersPage initialFilter="exception" />} />
        <Route path="/variants" element={<Navigate to="/product-editor" replace />} />
        <Route path="/imports" element={<Navigate to="/products" replace />} />
        <Route path="/bulk-imports" element={<Navigate to="/products" replace />} />
        <Route path="/overview-performance" element={<Navigate to="/overview" replace />} />
        <Route path="/overview-live-activity" element={<Navigate to="/overview" replace />} />
        <Route path="/overview-analytics" element={<Navigate to="/overview" replace />} />
        <Route path="/overview-reports" element={<Navigate to="/overview" replace />} />
        <Route path="/analytics" element={<Navigate to="/overview" replace />} />
        <Route path="/settings-general" element={<Navigate to="/settings" replace />} />
        <Route path="/settings-domains-dns" element={<Navigate to="/settings" replace />} />
        <Route path="/settings-team-permissions" element={<Navigate to="/team" replace />} />
        <Route path="/settings-billing-plans" element={<Navigate to="/team" replace />} />
        <Route path="/settings-api-webhooks" element={<Navigate to="/settings" replace />} />

        {/* Fallback route */}
        <Route
          path="*"
          element={
            !seller ? (
              <Navigate to="/" replace />
            ) : isPublished ? (
              <Navigate to="/overview" replace />
            ) : (
              <Navigate to="/builder" replace />
            )
          }
        />
      </Routes>

      <Toast message={toast} />
    </>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <StoreProvider>
            <AppContent />
          </StoreProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
