import React from 'react';
import type { StoreDraft, StoreRecord } from '@/types/store';
import { themeOptions } from '@/services/mockData';

interface StepReviewProps {
  draft: StoreDraft;
  store: StoreRecord;
  isPublishedSuccess: boolean;
  onPublish: () => void;
  onUnpublish: () => void;
  onCopyLink: () => void;
  onNavigateStore: (slug: string) => void;
}

export const StepReview: React.FC<StepReviewProps> = ({
  draft,
  store,
  isPublishedSuccess,
  onPublish,
  onUnpublish,
  onCopyLink,
  onNavigateStore,
}) => {
  const currentTheme = themeOptions.find((t) => t.id === draft.theme)?.name || 'Studio';
  const isReady = !!draft.name && !!draft.slug && draft.products.length > 0;

  if (isPublishedSuccess) {
    return (
      <div className="publish-panel">
        <div className="publish-success">
          <span className="material-symbols-outlined text-4xl text-emerald-600">check_circle</span>
          <h2>Your store is open.</h2>
          <p>{draft.name} is live and ready to welcome visitors.</p>

          <button
            className="seller-primary flex items-center justify-center gap-2"
            type="button"
            onClick={() => onNavigateStore(draft.slug)}
          >
            <span>Visit your store</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </button>

          <button className="seller-secondary" type="button" onClick={onCopyLink}>
            Copy store link
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="publish-panel">
      <div className="publish-summary">
        <span className="store-monogram">{draft.name.charAt(0) || 'G'}</span>
        <div>
          <h3>{draft.name || 'Your store'}</h3>
          <p>/store/{draft.slug || 'your-store'}</p>
        </div>
        <span className="status-pill">{store?.published_at ? 'Live' : 'Draft'}</span>
      </div>

      <div className="space-y-2 mt-4">
        <div className="publish-check">
          <span className="material-symbols-outlined text-emerald-600">
            {draft.name && draft.slug ? 'check_circle' : 'radio_button_unchecked'}
          </span>
          <strong>Shop details</strong>
          <span>{draft.name || 'Add shop name'}</span>
        </div>

        <div className="publish-check">
          <span className="material-symbols-outlined text-emerald-600">check_circle</span>
          <strong>Storefront theme</strong>
          <span>{currentTheme}</span>
        </div>

        <div className="publish-check">
          <span className="material-symbols-outlined text-emerald-600">
            {draft.products.length > 0 ? 'check_circle' : 'radio_button_unchecked'}
          </span>
          <strong>Product catalog</strong>
          <span>{draft.products.length} products ready</span>
        </div>

        <div className="publish-check">
          <span className="material-symbols-outlined text-emerald-600">
            {draft.slug ? 'check_circle' : 'radio_button_unchecked'}
          </span>
          <strong>Store address</strong>
          <span>/store/{draft.slug}</span>
        </div>
      </div>

      {draft.domain && (
        <div className="inline-tip mt-4">
          <span className="material-symbols-outlined">language</span>
          <span>
            {draft.domain}: {draft.domainStatus === 'verified' ? 'ownership verified' : 'verification pending'}.
          </span>
        </div>
      )}

      <div className="publish-note mt-4">
        <span className="material-symbols-outlined">public</span>
        <span>
          Publish your collection and theme to your live store link. Future edits remain in draft until you publish again.
        </span>
      </div>

      <button
        className="seller-primary publish-button mt-6 w-full"
        type="button"
        disabled={!isReady}
        onClick={onPublish}
      >
        <span>{store?.published_at ? 'Publish updates' : 'Publish my store'}</span>
        <span className="material-symbols-outlined">rocket_launch</span>
      </button>

      {store?.published_at && (
        <button
          className="unpublish-button mt-3 w-full"
          type="button"
          onClick={onUnpublish}
        >
          Unpublish store
        </button>
      )}
    </div>
  );
};
