import React from 'react';
import type { StoreDraft } from '@/types/store';

interface StepDetailsProps {
  draft: StoreDraft;
  isExistingStore: boolean;
  onUpdate: (patch: Partial<StoreDraft>) => void;
}

export const StepDetails: React.FC<StepDetailsProps> = ({
  draft,
  isExistingStore,
  onUpdate,
}) => {
  const handleNameChange = (val: string) => {
    const patch: Partial<StoreDraft> = { name: val };
    if (!isExistingStore) {
      patch.slug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
    onUpdate(patch);
  };

  return (
    <div className="builder-fields">
      <label>
        Shop name <span>*</span>
        <input
          value={draft.name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="e.g. The Everyday Studio"
          maxLength={100}
          required
        />
        <small>The name customers will see in your storefront.</small>
      </label>

      <label>
        Store URL <span>*</span>
        <div className="url-input">
          <span>/store/</span>
          <input
            value={draft.slug}
            onChange={(e) => onUpdate({ slug: e.target.value.toLowerCase().trim() })}
            placeholder="the-everyday-studio"
            required
          />
        </div>
        <small>3–50 lowercase letters, numbers, or hyphens. Your URL is reserved when you save.</small>
      </label>

      <label>
        Tagline
        <input
          value={draft.tagline}
          onChange={(e) => onUpdate({ tagline: e.target.value })}
          placeholder="Thoughtfully chosen. Made for everyday."
          maxLength={150}
        />
      </label>

      <label>
        About your store
        <textarea
          value={draft.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          rows={3}
          maxLength={1000}
        />
      </label>

      <label>
        Store currency
        <select
          value={draft.currency}
          onChange={(e) => onUpdate({ currency: e.target.value })}
        >
          <option value="INR">INR — Indian Rupee (₹)</option>
          <option value="USD">USD — US Dollar ($)</option>
          <option value="EUR">EUR — Euro (€)</option>
          <option value="GBP">GBP — British Pound (£)</option>
        </select>
      </label>

      <div className="inline-tip">
        <span className="material-symbols-outlined">info</span>
        <span>You can change your branding anytime. Your store URL must be unique.</span>
      </div>
    </div>
  );
};
