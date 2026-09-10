import React from 'react';

interface StoreFooterProps {
  storeName: string;
  preview?: boolean;
}

export const StoreFooter: React.FC<StoreFooterProps> = ({ storeName, preview = false }) => {
  return (
    <footer className="store-footer">
      <b>{storeName}</b>
      <span>© {new Date().getFullYear()} · Powered by Genbytez</span>
      {preview && <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">Preview Mode</span>}
    </footer>
  );
};
