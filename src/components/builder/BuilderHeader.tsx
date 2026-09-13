import React from 'react';
import type { Seller, StoreRecord } from '@/types/store';

interface BuilderHeaderProps {
  seller: Seller | null;
  store: StoreRecord;
  onSignOut: () => void;
  onOpenAuth: () => void;
  onNavigateAdmin: () => void;
}

export const BuilderHeader: React.FC<BuilderHeaderProps> = ({
  seller,
  store,
  onSignOut,
  onOpenAuth,
  onNavigateAdmin,
}) => {
  return (
    <header className="seller-header">
      <a href={store?.published_at ? "/overview" : "/builder"} className="seller-brand">
        <span className="brand-mark">
          g<span>›</span>
        </span>{' '}
        Genbytez <span className="seller-badge">YOUR WORKSPACE</span>
      </a>

      <nav>
        {seller && store?.published_at ? (
          <button
            type="button"
            onClick={onNavigateAdmin}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            My store admin
          </button>
        ) : seller ? (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#27272a] text-[#a1a1aa] text-xs font-medium border border-[#3f3f46]">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <span>Admin Locked</span>
          </span>
        ) : null}

        {seller ? (
          <>
            <span className="seller-avatar" title={seller.email}>
              {seller.name.slice(0, 1).toUpperCase()}
            </span>
            <button type="button" onClick={onSignOut}>
              Sign out
            </button>
          </>
        ) : (
          <button type="button" onClick={onOpenAuth}>
            Sign in
          </button>
        )}
      </nav>
    </header>
  );
};
