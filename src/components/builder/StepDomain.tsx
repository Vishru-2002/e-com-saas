import React, { useState } from 'react';
import type { StoreDraft, StoreRecord } from '@/types/store';

interface StepDomainProps {
  draft: StoreDraft;
  store: StoreRecord;
  onUpdate: (patch: Partial<StoreDraft>) => void;
  onVerifyDomain: () => Promise<string>;
}

export const StepDomain: React.FC<StepDomainProps> = ({
  draft,
  store,
  onUpdate,
  onVerifyDomain,
}) => {
  const [checking, setChecking] = useState(false);

  const handleVerify = async () => {
    setChecking(true);
    try {
      await onVerifyDomain();
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="builder-fields">
      <div className="domain-card">
        <div className="domain-icon">
          <span className="material-symbols-outlined">link</span>
        </div>
        <div>
          <strong>Your included store address</strong>
          <p>/store/{draft.slug || 'your-store'}</p>
          <small>Ready when you publish your store.</small>
        </div>
        <span className="status-pill">Included</span>
      </div>

      <label>
        Preferred subdomain
        <div className="url-input">
          <input
            value={draft.slug}
            onChange={(e) => onUpdate({ slug: e.target.value.toLowerCase().trim() })}
            placeholder="your-store"
          />
          <span>.genbytez.shop</span>
        </div>
        <small>Reserve your preferred shop name. Subdomain activation will be live after domain setup.</small>
      </label>

      <div className="form-divider" />

      <label>
        Custom domain <small>Optional</small>
        <input
          value={draft.domain}
          onChange={(e) =>
            onUpdate({
              domain: e.target.value.trim().toLowerCase(),
              domainStatus: 'pending',
            })
          }
          placeholder="shop.yourbrand.com"
        />
        <small>Use a domain you own. Do not include https:// or a path.</small>
      </label>

      {draft.domain && (
        <div className="dns-records">
          <h3>Verify domain ownership</h3>
          <p>Add this record in your domain provider’s DNS settings.</p>
          <div>
            <span>Type</span>
            <code>TXT</code>
          </div>
          <div>
            <span>Name</span>
            <code>_genbytez.{draft.domain}</code>
          </div>
          <div>
            <span>Value</span>
            <code>genbytez-verify={store?.id || 'save-your-shop-first'}</code>
          </div>

          <button
            className="seller-secondary"
            type="button"
            disabled={checking}
            onClick={handleVerify}
          >
            <span className="material-symbols-outlined">sync</span>
            <span>{checking ? 'Checking DNS…' : 'Check DNS records'}</span>
          </button>

          <span className="status-pill">
            {draft.domainStatus === 'verified' ? 'Ownership verified' : 'Verification pending'}
          </span>
        </div>
      )}

      <div className="inline-tip">
        <span className="material-symbols-outlined">info</span>
        <span>
          Your /store/ URL works immediately without DNS setup. Custom domains require DNS ownership verification.
        </span>
      </div>
    </div>
  );
};
