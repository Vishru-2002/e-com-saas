import React from 'react';

interface SubNavItem {
  id: string;
  label: string;
  badge?: string;
}

interface AdminSubNavProps {
  items: SubNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const AdminSubNav: React.FC<AdminSubNavProps> = ({ items, activeId, onSelect }) => {
  return (
    <div className="w-full bg-[#ffffff] border-b border-[#e4e4e7] shadow-[0_1px_2px_0_rgba(0,0,0,0.04)] sticky top-14 z-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-6 overflow-x-auto h-nav-sub-height">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`inline-flex items-center gap-2 h-full text-xs sm:text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? 'border-[#006c49] text-[#1a1b22] font-semibold'
                    : 'border-transparent text-[#71717a] hover:text-[#1a1b22] hover:border-[#c8c5ca]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
