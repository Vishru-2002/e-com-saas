import React from 'react';
import { useStore } from '@/context/StoreContext';

interface AdminFooterProps {
  onNavigate?: (screen: string) => void;
}

export const AdminFooter: React.FC<AdminFooterProps> = ({ onNavigate }) => {
  const { store } = useStore();

  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#e4e4e7] py-6 sm:py-8 mt-12 text-[#71717a] text-xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#1a1b22] font-['Geist',sans-serif]">
            {store?.name || 'Genbytez Store'}
          </span>
          <span className="text-[#e4e4e7]">|</span>
          <span>Multi-Tenant Commerce Cloud</span>

        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-6 font-medium">
          {/* <button
            type="button"
            onClick={() => onNavigate?.('overview')}
            className="hover:text-[#1a1b22] transition-colors"
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('orders')}
            className="hover:text-[#1a1b22] transition-colors"
          >
            Orders
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('products')}
            className="hover:text-[#1a1b22] transition-colors"
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('inventory')}
            className="hover:text-[#1a1b22] transition-colors"
          >
            Inventory
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('customers')}
            className="hover:text-[#1a1b22] transition-colors"
          >
            Customers
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('settings')}
            className="hover:text-[#1a1b22] transition-colors"
          >
            Settings
          </button> */}
        </div>

        <div className="text-[11px] text-[#a1a1aa]">
          © {new Date().getFullYear()} Genbytez Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
