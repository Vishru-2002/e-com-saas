import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { StoreProvider, useStore } from '@/context/StoreContext';
import { Toast } from '@/components/common/Toast';
import { AdminWorkspacePage } from '@/pages/AdminWorkspacePage';
import { SellerSetupPage } from '@/pages/SellerSetupPage';
import { StorefrontPage } from '@/pages/StorefrontPage';
import { AuthPage } from '@/pages/AuthPage';

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

  const isStorefrontRoute = location.pathname.startsWith('/store/');
  const isAuthRoute =
    location.pathname === '/signin' ||
    location.pathname === '/signup' ||
    location.pathname === '/login';
  const isPublished = Boolean(store?.published_at && store?.published);

  // If already authenticated and visiting /signin or /signup, redirect to builder or admin
  if (seller && isAuthRoute) {
    return <Navigate to={isPublished ? '/' : '/builder'} replace />;
  }

  // 1. If not authenticated and not viewing a public storefront, show official Auth page
  if (!seller && !isStorefrontRoute) {
    return (
      <>
        <AuthPage
          initialMode={location.pathname === '/signup' ? 'signup' : 'signin'}
          onSuccess={() => navigate(isPublished ? '/' : '/builder')}
        />
        <Toast message={toast} />
      </>
    );
  }

  // 2. Strict flow gating:
  // Unless and until they fill and submit everything on YOUR STORE, YOUR WAY
  // Make your next move. NEVER show the store admin.
  // If the store is NOT published, only allow:
  // - Store builder (/builder or /)
  // - Storefront route (/store/:slug)
  // Any attempt to view admin dashboard screens will remain on SellerSetupPage.
  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route
          path="/signin"
          element={
            <AuthPage
              initialMode="signin"
              onSuccess={() => navigate(isPublished ? '/' : '/builder')}
            />
          }
        />
        <Route
          path="/login"
          element={
            <AuthPage
              initialMode="signin"
              onSuccess={() => navigate(isPublished ? '/' : '/builder')}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <AuthPage
              initialMode="signup"
              onSuccess={() => navigate('/builder')}
            />
          }
        />

        {/* Root: if published -> Admin Overview, if not published -> Seller Setup */}
        <Route
          path="/"
          element={
            isPublished ? (
              <AdminWorkspacePage
                onNavigateStorefront={(slug) => navigate(`/store/${slug}`)}
              />
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

        {/* Store Setup Builder */}
        <Route
          path="/builder"
          element={
            <SellerSetupPage
              onNavigateScreen={(screen) => {
                if (isPublished) navigate(`/${screen}`);
              }}
              onNavigateStorefront={(slug) => navigate(`/store/${slug}`)}
            />
          }
        />

        {/* Live Storefront Page */}
        <Route path="/store/:slug" element={<StorefrontPage />} />

        {/* Dynamic Admin Workspace Screens (e.g. /orders, /products, /settings, /inventory, /customers, etc.) */}
        <Route
          path="/:screen"
          element={
            isPublished ? (
              <AdminWorkspacePage
                onNavigateStorefront={(slug) => navigate(`/store/${slug}`)}
              />
            ) : (
              <Navigate to="/builder" replace />
            )
          }
        />

        {/* Fallback route */}
        <Route
          path="*"
          element={
            isPublished ? (
              <AdminWorkspacePage
                onNavigateStorefront={(slug) => navigate(`/store/${slug}`)}
              />
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
    <AuthProvider>
      <StoreProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;
