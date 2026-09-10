import React from 'react';

interface QuickMenuProps {
  onOpenModal: () => void;
}

export const QuickMenu: React.FC<QuickMenuProps> = ({ onOpenModal }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        type="button"
        onClick={onOpenModal}
        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1a1b22] border border-[#e4e4e7] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_2px_4px_-2px_rgba(0,0,0,0.05)] hover:bg-[#f4f4f5] transition-all"
      >
        <span className="material-symbols-outlined text-[16px] text-[#006c49]">dashboard</span>
        <span>My store menu</span>
      </button>
    </div>
  );
};
