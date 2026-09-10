import React from 'react';
import type { StoreDraft, ThemeId } from '@/types/store';
import { themeOptions, sampleProducts } from '@/services/mockData';

interface StepThemeProps {
  draft: StoreDraft;
  onUpdate: (patch: Partial<StoreDraft>) => void;
  onPreview: () => void;
}

export const StepTheme: React.FC<StepThemeProps> = ({ draft, onUpdate, onPreview }) => {
  const handleSelectTheme = (themeId: ThemeId, defaultAccent: string) => {
    onUpdate({ theme: themeId, accent: defaultAccent });
  };

  return (
    <div className="theme-picker">
      <div className="theme-grid">
        {themeOptions.map((theme) => {
          const isSelected = draft.theme === theme.id;
          return (
            <button
              key={theme.id}
              type="button"
              className={`theme-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectTheme(theme.id, theme.defaultAccent)}
            >
              <div
                className={`theme-mini theme-${theme.id}`}
                style={{ background: theme.color }}
              >
                <div className="mini-nav">
                  <b>{draft.name || 'Your store'}</b>
                  <span>Shop　About　♧</span>
                </div>
                <div className="mini-hero">
                  <div>
                    <strong>
                      {theme.id === 'bold'
                        ? 'EVERYDAY. UPGRADED.'
                        : 'Good things, thoughtfully chosen.'}
                    </strong>
                    <span>Discover the collection →</span>
                  </div>
                  <img src={sampleProducts[0].image} alt="Theme preview" />
                </div>
                <div className="mini-products">
                  {sampleProducts.map((p) => (
                    <img key={p.id} src={p.image} alt="" />
                  ))}
                </div>
              </div>

              <div className="theme-caption">
                <strong>{theme.name}</strong>
                <span>{isSelected ? '✓ Selected' : 'Select theme'}</span>
                <p>{theme.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      <label className="color-field">
        Brand accent color
        <div>
          <input
            type="color"
            value={draft.accent}
            onChange={(e) => onUpdate({ accent: e.target.value })}
          />
          <code>{draft.accent.toUpperCase()}</code>
          <span>Used for storefront buttons and accents.</span>
        </div>
      </label>

      <button className="seller-secondary" type="button" onClick={onPreview}>
        <span className="material-symbols-outlined">open_in_new</span>
        <span>Preview your theme</span>
      </button>
    </div>
  );
};
