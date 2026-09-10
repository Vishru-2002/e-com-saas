import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useStore } from '@/context/StoreContext';
import { storageService } from '@/services/storageService';
import { Storefront } from '@/components/storefront/Storefront';

export const StorefrontPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { seller } = useAuth();
  const { store: currentStore, showToast } = useStore();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Retrieve published store by slug or active published store
  const store = slug ? storageService.getPublishedStoreBySlug(slug) : null;

  // Check if the current visitor is the authenticated owner of this store
  const isOwner = Boolean(
    seller &&
    currentStore?.published_at &&
    (currentStore.slug === slug || !slug)
  );

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      showToast('Storefront URL copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  if (!store) {
    return (
      <main className="min-h-screen bg-[#fbf8ff] flex flex-col items-center justify-center p-6 text-center antialiased">
        <div className="w-16 h-16 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl">storefront</span>
        </div>
        <h1 className="text-xl font-bold text-[#1a1b22] mb-2 font-['Geist',sans-serif]">Store not found</h1>
        <p className="text-xs text-[#71717a] mb-6 max-w-md">
          {slug
            ? `The store "${slug}" is either not published yet or does not exist.`
            : 'No store slug provided.'}
        </p>
        <div className="flex items-center gap-3">
          {seller ? (
            <Link
              to="/builder"
              className="px-4 py-2 rounded-lg bg-[#006c49] text-white text-xs font-semibold hover:bg-[#00563a] transition-colors shadow-xs"
            >
              Open Store Builder
            </Link>
          ) : (
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-[#09090b] text-white text-xs font-semibold hover:bg-[#27272a] transition-colors shadow-xs"
            >
              Sign In to Genbytez
            </Link>
          )}
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Merchant Action Bar: shown when the authenticated store owner is viewing their storefront */}
      {isOwner && (
        <div className="sticky top-0 z-50 bg-[#09090b] text-white border-b border-[#27272a] shadow-md">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#006c49]/30 text-[#6cf8bb] border border-[#006c49] font-semibold tracking-wide text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                STORE PUBLISHED & LIVE
              </span>
              <span className="text-[#a1a1aa] hidden md:inline">
                Customers can purchase live at:
              </span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#18181b] hover:bg-[#27272a] text-[#6cf8bb] text-xs font-mono border border-[#27272a] transition-colors"
                title="Click to copy live URL"
              >
                <span>/store/{store.slug}</span>
                <span className="material-symbols-outlined text-[13px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate('/builder')}
                className="px-3 py-1.5 rounded-lg bg-[#18181b] hover:bg-[#27272a] text-xs font-medium text-[#e4e4e7] hover:text-white border border-[#27272a] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[15px]">edit</span>
                <span>Edit in Builder</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-4 py-1.5 rounded-lg bg-[#006c49] hover:bg-[#00563a] text-xs font-semibold text-white transition-colors shadow-xs flex items-center gap-1.5"
              >
                <span>Go to Store Admin Dashboard</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Storefront store={store} />
    </div>
  );
};

export default StorefrontPage;
