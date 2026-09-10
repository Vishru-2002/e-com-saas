import React from 'react';

interface BuilderSidebarProps {
  step: number;
  steps: string[];
  icons: string[];
  subtitles: string[];
  isPublished?: boolean;
  onSelectStep: (index: number) => void;
  onNavigateAdmin: () => void;
}

export const BuilderSidebar: React.FC<BuilderSidebarProps> = ({
  step,
  steps,
  icons,
  subtitles,
  isPublished = false,
  onSelectStep,
  onNavigateAdmin,
}) => {
  return (
    <aside className="setup-sidebar">
      <div className="setup-progress">
        <span>STORE SETUP</span>
        <b>{step + 1} of 5</b>
      </div>
      <div className="setup-progress-bar">
        <i style={{ width: `${(step + 1) * 20}%` }} />
      </div>

      <nav aria-label="Store setup steps">
        {steps.map((title, i) => {
          const isActive = step === i;
          const isCompleted = step > i;

          return (
            <button
              key={title}
              type="button"
              className={isActive ? 'active' : isCompleted ? 'completed' : ''}
              onClick={() => onSelectStep(i)}
            >
              <span className="setup-step-icon">
                <span className="material-symbols-outlined">
                  {isCompleted ? 'check' : icons[i]}
                </span>
              </span>
              <span>
                {title}
                <small>{subtitles[i]}</small>
              </span>
              {isActive && (
                <span className="material-symbols-outlined">chevron_right</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="setup-help">
        <span className="material-symbols-outlined">lightbulb</span>
        <strong>Good things start small.</strong>
        <p>Complete the 5 steps to publish your store and unlock the store admin dashboard.</p>
      </div>

      {isPublished ? (
        <button
          type="button"
          onClick={onNavigateAdmin}
          className="admin-link text-left hover:underline text-[#006c49] font-medium"
        >
          Open my store admin →
        </button>
      ) : (
        <div className="mt-6 p-3 rounded-lg bg-[#eeedf7] border border-[#e4e4e7] text-[#71717a] text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-[#78767b]">lock</span>
          <span>Store admin unlocks after publishing</span>
        </div>
      )}
    </aside>
  );
};
