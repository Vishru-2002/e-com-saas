import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useStore } from '@/context/StoreContext';

interface AdminHeaderProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onSearch?: (query: string) => void;
  onOpenNew?: () => void;
  onOpenNotifications?: () => void;
}

const mainNavItems = [
  { key: 'overview', label: 'Overview' },
  { key: 'orders', label: 'Orders' },
  { key: 'products', label: 'Products' },
  { key: 'inventory', label: 'Inventory' },
  { key: 'customers', label: 'Customers' },
  { key: 'settings', label: 'Settings' },
];

interface SubNavItem {
  key: string;
  label: string;
  badge?: string;
  badgeVariant?: 'green' | 'red' | 'gray';
}

const subNavMap: Record<string, { section: string; items: SubNavItem[] }> = {
  overview: {
    section: 'overview',
    items: [
      { key: 'overview', label: 'Performance' },
      { key: 'overview-live-activity', label: 'Live Activity', badge: 'Live', badgeVariant: 'green' },
      { key: 'overview-analytics', label: 'Analytics' },
      { key: 'overview-reports', label: 'Reports' },
    ],
  },
  orders: {
    section: 'orders',
    items: [
      { key: 'orders', label: 'All Orders' },
      { key: 'unfulfilled', label: 'Unfulfilled', badge: '28', badgeVariant: 'red' },
      { key: 'drafts', label: 'Drafts' },
      { key: 'abandoned-carts', label: 'Abandoned Carts', badge: '12', badgeVariant: 'gray' },
      { key: 'returns-ndr', label: 'Returns & NDR' },
    ],
  },
  products: {
    section: 'products',
    items: [
      { key: 'products', label: 'All Products', badge: '1,248', badgeVariant: 'gray' },
      { key: 'inventory', label: 'Inventory', badge: '14 low', badgeVariant: 'red' },
      { key: 'categories', label: 'Categories', badge: '36', badgeVariant: 'gray' },
      { key: 'variants', label: 'Variants' },
      { key: 'imports', label: 'Bulk Imports' },
    ],
  },
  inventory: {
    section: 'inventory',
    items: [
      { key: 'inventory', label: 'Live Stock Levels' },
      { key: 'products', label: 'Products' },
      { key: 'categories', label: 'Categories' },
    ],
  },
  customers: {
    section: 'customers',
    items: [
      { key: 'customers', label: 'All Customers' },
      { key: 'orders', label: 'Order History' },
      { key: 'overview-analytics', label: 'Segments' },
    ],
  },
  categories: {
    section: 'products',
    items: [
      { key: 'products', label: 'All Products' },
      { key: 'categories', label: 'Categories' },
      { key: 'inventory', label: 'Inventory' },
    ],
  },
  settings: {
    section: 'settings',
    items: [
      { key: 'settings-general', label: 'General' },
      { key: 'settings-domains-dns', label: 'Domains & DNS' },
      { key: 'settings-team-permissions', label: 'Team & Roles' },
      { key: 'settings-billing-plans', label: 'Plans & Billing' },
      { key: 'settings-api-webhooks', label: 'API & Webhooks' },
    ],
  },
  team: {
    section: 'settings',
    items: [
      { key: 'settings-general', label: 'General' },
      { key: 'settings-domains-dns', label: 'Domains & DNS' },
      { key: 'settings-team-permissions', label: 'Team & Roles' },
      { key: 'settings-billing-plans', label: 'Plans & Billing' },
      { key: 'settings-api-webhooks', label: 'API & Webhooks' },
    ],
  },
};

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentScreen,
  onNavigate,
  onSearch,
  onOpenNew,
  onOpenNotifications,
}) => {
  const { seller, logout } = useAuth();
  const { store } = useStore();
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const profileMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProfileOpen(false);
    logout();
  };

  // Find matching sub-nav config
  const subNavConfig =
    subNavMap[currentScreen] ||
    (currentScreen.startsWith('overview') ? subNavMap.overview : null) ||
    (currentScreen === 'order-detail' ? subNavMap.orders : null) ||
    (currentScreen === 'product-editor' ? subNavMap.products : null) ||
    (currentScreen.startsWith('settings-') ? subNavMap.settings : null);

  const activeParentSection = subNavConfig ? subNavConfig.section : currentScreen;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 flex flex-col shadow-xs bg-[#09090b]">
      {/* Tier 1: Global Black Frame */}
      <div className="h-16 max-w-[1600px] w-full mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 text-white">
        {/* Left: Brand & Tenant Switcher */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/overview"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('overview');
              }}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0"
              title="Genbytez Platform"
            >
              <img
                alt="Genbytez Platform"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2kdq7Si35ZsPIfhAwaYcPUrXGvsgcajiwPqsO9qU6w_dzq4nQfzXooaSNeosqFcmt8mV9OSB26LA6bdKMSZv8X-mtB0NgJaei5R8a7hZWzawD7Bv78O8YLUiyhMKO5Nnx5HnRbBGcZlVIlHD8I87j9kWX0pZyYc_J9wgv3mH5tH-m7mvHR6u48aQg_iK4xevg4h_4edM3CWDBKn9IJp_D3-SIHEOCT8sO4ciJYFp9SZG-tx1aiD7z"
              />
            </a>

            {/* Tenant badge */}
            <button
              onClick={() => onNavigate('seller')}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] transition-colors text-left"
              type="button"
              title="Store Setup & Theme Builder"
            >
              <span className="font-semibold text-xs text-white tracking-tight max-w-[140px] sm:max-w-[200px] truncate">
                {store?.name || 'Genbytez Store'}
              </span>
              {/* <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] text-[10px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                US-EAST
              </span> */}
              <span className="material-symbols-outlined text-[#71717a] text-[16px]">
                unfold_more
              </span>
            </button>
          </div>

          {/* Primary Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#18181b] p-1 rounded-full border border-[#27272a]">
            {mainNavItems.map((item) => {
              const active = activeParentSection === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    active
                      ? 'bg-[#27272a] text-white font-semibold shadow-xs'
                      : 'text-[#a1a1aa] hover:text-white hover:bg-[#27272a]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={() => onNavigate('seller')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                currentScreen === 'seller'
                  ? 'bg-[#006c49] text-white font-semibold shadow-xs'
                  : 'text-[#6cf8bb] hover:text-white hover:bg-[#27272a]/60'
              }`}
            >
              Store Builder
            </button>

            {store?.slug && store?.published_at && (
              <a
                href={`/store/${store.slug}`}
                className="px-3 py-1 rounded-full text-xs font-medium text-[#a1a1aa] hover:text-white hover:bg-[#27272a]/60 transition-colors flex items-center gap-1"
                title="View live published storefront"
              >
                <span>View Storefront</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            )}
          </nav>
        </div>

        {/* Center: Search Command Palette */}
        <div className="flex-1 max-w-xs md:max-w-md hidden md:block mx-4">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-[#71717a] text-[18px]">
              search
            </span>
            <input
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full h-9 pl-9 pr-12 rounded-md bg-[#18181b] border border-[#27272a] text-xs text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-1 focus:ring-offset-[#09090b]"
              placeholder="Search SKU, orders, customers..."
              type="text"
            />
            <div className="absolute right-2.5 flex items-center pointer-events-none">
              <kbd className="px-1.5 py-0.5 rounded bg-[#27272a] border border-[#3f3f46] text-[10px] text-[#a1a1aa] font-mono">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right: Operational Actions & User */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-md hover:bg-[#18181b] text-[#a1a1aa] hover:text-white transition-colors"
            type="button"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#10b981] ring-2 ring-[#09090b]"></span>
          </button>

          <button
            onClick={onOpenNew}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#006c49] hover:bg-[#00563a] text-white text-xs font-semibold transition-colors shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>New</span>
          </button>

          {/* User Profile Avatar & Sign Out */}
          <div className="relative flex items-center gap-2" ref={profileMenuRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="relative flex items-center p-0.5 rounded-full hover:ring-2 hover:ring-[#3f3f46] transition-all cursor-pointer"
              type="button"
              aria-expanded={isProfileOpen}
              title={`${seller?.name || 'Seller'} · Click for Account Menu`}
            >
              <div className="w-8 h-8 rounded-full bg-[#27272a] text-white border border-[#3f3f46] flex items-center justify-center font-bold text-xs">
                {seller?.name ? seller.name.charAt(0).toUpperCase() : 'S'}
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10b981] ring-2 ring-[#09090b]"></span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:bg-[#18181b] text-[#a1a1aa] hover:text-[#ef4444] transition-colors border border-transparent hover:border-[#27272a] cursor-pointer"
              type="button"
              title="Sign out of Genbytez"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span className="text-xs font-medium hidden xl:inline">Sign out</span>
            </button>

            {/* Account Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 top-11 w-64 rounded-xl bg-[#18181b] border border-[#27272a] shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 text-xs">
                <div className="px-4 py-2.5 border-b border-[#27272a]">
                  <p className="font-semibold text-white truncate">{seller?.name || 'Merchant Admin'}</p>
                  <p className="text-[#a1a1aa] text-[11px] truncate mt-0.5">{seller?.email || 'sarah@genbytez.com'}</p>
                  <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-[#006c49]/20 text-[#6cf8bb] text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    Store Admin
                  </span>
                </div>

                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      onNavigate('settings');
                    }}
                    className="w-full px-4 py-2 text-left text-[#e4e4e7] hover:text-white hover:bg-[#27272a] flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#a1a1aa]">settings</span>
                    <span>Store Settings</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      onNavigate('seller');
                    }}
                    className="w-full px-4 py-2 text-left text-[#e4e4e7] hover:text-white hover:bg-[#27272a] flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#a1a1aa]">palette</span>
                    <span>Store Builder</span>
                  </button>
                </div>

                <div className="pt-1 mt-1 border-t border-[#27272a]">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-[#f87171] hover:text-[#ef4444] hover:bg-[#ef4444]/10 flex items-center gap-2.5 transition-colors font-medium cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">logout</span>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tier 2: Contextual Secondary Bar */}
      {subNavConfig && subNavConfig.items.length > 0 && (
        <div className="w-full bg-[#ffffff] border-b border-[#e4e4e7] shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]">
          <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-6 overflow-x-auto py-2.5 scrollbar-none">
              {subNavConfig.items.map((item) => {
                const isActive = currentScreen === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => onNavigate(item.key)}
                    className={`inline-flex items-center gap-2 pb-1 border-b-2 text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'border-[#006c49] text-[#1a1b22] font-semibold'
                        : 'border-transparent text-[#71717a] hover:text-[#1a1b22] hover:border-[#c8c5ca]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                          item.badgeVariant === 'red'
                            ? 'bg-[#ffe4e6] text-[#e11d48]'
                            : item.badgeVariant === 'green'
                            ? 'bg-[#ecfdf5] text-[#059669]'
                            : 'bg-[#f4f2fd] text-[#71717a]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
