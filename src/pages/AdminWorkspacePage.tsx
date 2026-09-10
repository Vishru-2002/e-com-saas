import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useStore } from '@/context/StoreContext';
import { storageService } from '@/services/storageService';
import type { ActionModalState } from '@/types/admin';

// Admin screens
import Overview from '@/pages/screens/Overview';
import Orders from '@/pages/screens/Orders';
import OrderDetail from '@/pages/screens/OrderDetail';
import Products from '@/pages/screens/Products';
import ProductEditor from '@/pages/screens/ProductEditor';
import Inventory from '@/pages/screens/Inventory';
import Customers from '@/pages/screens/Customers';
import Categories from '@/pages/screens/Categories';
import Settings from '@/pages/screens/Settings';
import TeamBilling from '@/pages/screens/TeamBilling';
import SignIn from '@/pages/screens/SignIn';
import Onboarding from '@/pages/screens/Onboarding';

// Components
import { SellerSetupPage } from '@/pages/SellerSetupPage';
import { AdminHeader } from '@/components/common/AdminHeader';
import { AdminFooter } from '@/components/common/AdminFooter';
import { ActionDialog } from '@/components/common/ActionDialog';
import { QuickMenu } from '@/components/common/QuickMenu';

const screenComponents: Record<string, React.ComponentType> = {
  seller: SellerSetupPage as unknown as React.ComponentType,
  overview: Overview,
  orders: Orders,
  'order-detail': OrderDetail,
  products: Products,
  'product-editor': ProductEditor,
  inventory: Inventory,
  customers: Customers,
  categories: Categories,
  settings: Settings,
  team: TeamBilling,
  'sign-in': SignIn,
  onboarding: Onboarding,
};

const routeMap: Record<string, string> = {
  'all-products': 'products',
  'all-orders': 'orders',
  'settings-general': 'settings',
  'settings-domains-dns': 'settings',
  'settings-team-permissions': 'team',
  'settings-billing-plans': 'team',
  'settings-api-webhooks': 'settings',
  'overview-performance': 'overview',
  'overview-live-activity': 'overview',
  'overview-analytics': 'overview',
  'overview-reports': 'overview',
  analytics: 'overview',
  variants: 'product-editor',
  imports: 'products',
  'bulk-imports': 'products',
  unfulfilled: 'orders',
  drafts: 'orders',
  'abandoned-carts': 'orders',
  'returns-ndr': 'orders',
};

interface AdminWorkspacePageProps {
  initialRoute?: string;
  onNavigateStorefront: (slug: string) => void;
}

export const AdminWorkspacePage: React.FC<AdminWorkspacePageProps> = ({
  initialRoute = 'overview',
  onNavigateStorefront,
}) => {
  const { screen } = useParams<{ screen?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { seller } = useAuth();
  const { showToast } = useStore();

  const currentRoute = (screen ? routeMap[screen] || screen : initialRoute) || 'overview';
  const [modal, setModal] = useState<ActionModalState | null>(null);
  const [revision, setRevision] = useState(0);
  const surfaceRef = useRef<HTMLDivElement>(null);

  const navigateTo = (r: string) => {
    const mapped = routeMap[r] || r;
    if (mapped === 'seller') {
      navigate('/builder');
    } else if (mapped.startsWith('store/')) {
      const slug = mapped.replace('store/', '');
      onNavigateStorefront(slug);
    } else {
      navigate('/' + mapped);
    }
    window.scrollTo(0, 0);
  };

  // Helper for querying input fields on the surface
  const getFields = () =>
    Array.from(
      surfaceRef.current?.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >('main input,main textarea,main select') || []
    );

  // Local storage auto-sync for form fields
  const saveFormData = () => {
    const data = getFields().map((el) => ({
      value: el.value,
      checked: (el as HTMLInputElement).checked,
    }));
    storageService.saveScreenData(currentRoute, data);
    showToast('Changes saved in this browser.');
  };

  useEffect(() => {
    try {
      const saved = storageService.getScreenData(currentRoute) as
        | { value: string; checked: boolean }[]
        | null;
      if (saved) {
        getFields().forEach((el, i) => {
          if (saved[i]) {
            el.value = saved[i].value;
            if (el instanceof HTMLInputElement) el.checked = saved[i].checked;
          }
        });
      }
    } catch {}
  }, [currentRoute, revision]);

  // Live filter table rows
  const filterTable = (query: string) => {
    surfaceRef.current?.querySelectorAll('tbody tr').forEach((row) => {
      const el = row as HTMLElement;
      el.dataset.hidden = String(!el.textContent?.toLowerCase().includes(query.toLowerCase()));
      el.style.display = el.dataset.hidden === 'true' ? 'none' : '';
    });
  };

  // Export visible table rows to CSV
  const downloadCsv = () => {
    const rows = Array.from(surfaceRef.current?.querySelectorAll('table tr') || []).filter(
      (r) => (r as HTMLElement).dataset.hidden !== 'true'
    );
    const text = rows.length
      ? rows
          .map((row) =>
            Array.from(row.querySelectorAll('th,td'))
              .map(
                (cell) =>
                  '"' +
                  (cell.textContent || '')
                    .replace(/\s+/g, ' ')
                    .trim()
                    .replace(/"/g, '""') +
                  '"'
              )
              .join(',')
          )
          .join('\n')
      : surfaceRef.current?.querySelector('main')?.textContent || '';

    const blob = new Blob([text], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentRoute}-export.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Export downloaded.');
  };

  // Click interceptor for buttons and navigation links across sample screen markup
  const handleSurfaceClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest<HTMLAnchorElement>('a');
    const button = target.closest<HTMLButtonElement>('button');

    if (anchor) {
      e.preventDefault();
      const path = anchor.dataset.path;
      const label = anchor.textContent?.trim() || '';

      if (path) {
        navigateTo(path);
        if (['unfulfilled', 'drafts', 'returns-ndr'].includes(path)) {
          setTimeout(() => filterTable(path === 'returns-ndr' ? 'exception' : path), 100);
        }
        return;
      }

      if (/GB-\d/.test(label)) {
        navigateTo('order-detail');
        return;
      }
      if (/AeroFlow|product/i.test(label)) {
        navigateTo('product-editor');
        return;
      }
      if (/Orders|fulfill/i.test(label)) {
        navigateTo('orders');
        return;
      }
      if (/customer|CRM/i.test(label)) {
        navigateTo('customers');
        return;
      }
      if (/Inventory|stock/i.test(label)) {
        navigateTo('inventory');
        return;
      }
      if (/sign.?out/i.test(label)) {
        navigateTo('sign-in');
        return;
      }
      if (/forgot/i.test(label)) {
        setModal({
          title: 'Reset password',
          body: 'This is a demo workspace. Account recovery requires an external authentication service.',
        });
        return;
      }
      setModal({
        title: label || 'Workspace information',
        body: 'This frontend uses sample store data. Changes are saved locally.',
      });
      return;
    }

    if (!button) {
      const row = target.closest('tbody tr');
      if (row && !target.closest('input,select,textarea') && currentRoute === 'products') {
        navigateTo('product-editor');
      }
      return;
    }

    if (button.type === 'submit') return;

    const clone = button.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('.material-symbols-outlined').forEach((x) => x.remove());
    const label = (clone.textContent || '').replace(/\s+/g, ' ').trim();
    const icon = button.querySelector('.material-symbols-outlined')?.textContent?.trim();

    if (/Genbytez Store/.test(label)) {
      navigateTo('seller');
      return;
    }

    if (icon === 'notifications') {
      setModal({
        title: 'Notifications',
        body: '28 orders are awaiting fulfillment. 14 products are low on stock. Your Pro subscription is active.',
        action: 'Review orders',
        run: () => navigateTo('orders'),
      });
      return;
    }

    if (/^New/.test(label)) {
      setModal({
        title: 'Create a record',
        fields: ['Type (product, customer or order)', 'Name'],
        action: 'Create',
        run: (data) => {
          const type = data['Type (product, customer or order)']?.toLowerCase() || '';
          if (type.includes('customer')) navigateTo('customers');
          else if (type.includes('order')) navigateTo('orders');
          else navigateTo('product-editor');
        },
      });
      return;
    }

    if (/Export|Download Pick|Download Tax|Download PDF|Print|Shipping Labels/i.test(label)) {
      if (/Print|PDF|Invoice/i.test(label)) window.print();
      else downloadCsv();
      return;
    }

    if (/Save|Post Note/.test(label)) {
      if (/Post Note/.test(label)) {
        const field = surfaceRef.current?.querySelector('textarea');
        if (!field?.value.trim()) {
          showToast('Write a note first.');
          return;
        }
        const note = document.createElement('p');
        note.textContent = 'Just now · ' + field.value;
        note.className = 'p-3 mt-2 bg-white rounded shadow-xs';
        field.after(note);
        field.value = '';
        showToast('Note added.');
      } else {
        saveFormData();
      }
      return;
    }

    if (/Discard|^Cancel$/.test(label)) {
      setRevision((x) => x + 1);
      showToast('Unsaved changes discarded.');
      return;
    }

    if (/Add Product|Edit items/.test(label) || (icon === 'edit' && currentRoute === 'products')) {
      navigateTo('product-editor');
      return;
    }

    if (/Fulfill Items|Fulfill Order/.test(label)) {
      if (currentRoute === 'orders') {
        navigateTo('order-detail');
        return;
      }
      setModal({
        title: 'Fulfill order #GB-8924',
        fields: ['Carrier', 'Tracking number'],
        action: 'Mark fulfilled',
        run: (data) => {
          surfaceRef.current?.querySelectorAll('span').forEach((s) => {
            if (s.textContent?.trim() === 'Requires Packing') s.textContent = 'Fulfilled';
          });
          showToast('Order marked fulfilled in this browser.');
        },
      });
      return;
    }

    if (/Refund/.test(label)) {
      setModal({
        title: 'Record a refund',
        fields: ['Amount (INR)', 'Reason'],
        body: 'Records a refund in the demo only. No payment will be moved.',
        action: 'Record refund',
        run: () => showToast('Demo refund recorded.'),
      });
      return;
    }

    if (/Details|Track AWB|Verify COD|View Logs/.test(label) && currentRoute === 'orders') {
      navigateTo('order-detail');
      return;
    }

    if (label === '+' || label === '-') {
      const input = button.parentElement?.querySelector<HTMLInputElement>('input');
      if (input) {
        input.value = String(Math.max(0, Number(input.value) + (label === '+' ? 1 : -1)));
        saveFormData();
      }
      return;
    }

    if (icon === 'visibility') {
      const input = button.parentElement?.querySelector<HTMLInputElement>('input');
      if (input) input.type = input.type === 'password' ? 'text' : 'password';
      return;
    }

    if (label === 'Sign In' || label === 'Create an Account') {
      const signup = label === 'Create an Account';
      document.getElementById('panel-signin')?.classList.toggle('hidden', signup);
      document.getElementById('panel-signup')?.classList.toggle('hidden', !signup);
      button.parentElement
        ?.querySelectorAll('button')
        .forEach((b) => b.classList.toggle('bg-surface-container-lowest', b === button));
      return;
    }

    if (/Continue to Product|Back to Store Basics/.test(label)) {
      saveFormData();
      navigateTo('products');
      return;
    }

    if (/Google|GitHub|SSO/.test(label)) {
      setModal({
        title: 'Demo workspace',
        body: 'Social sign-in is simulated in this demo workspace.',
        action: 'Explore workspace',
        run: () => navigateTo('overview'),
      });
      return;
    }

    if (/Reset|All Statuses|All Orders|^All$/.test(label)) {
      filterTable('');
      getFields()
        .filter((f) => /Search|Filter/.test(f.getAttribute('placeholder') || ''))
        .forEach((f) => (f.value = ''));
      return;
    }

    if (/^(Low Stock|Out of Stock|In Stock|Unfulfilled|Unpaid|Drafts|Archived|Open NDR)/.test(label)) {
      filterTable(
        label.startsWith('Low')
          ? 'low'
          : label.startsWith('Open')
          ? 'exception'
          : label.replace(/\s*[<(].*/, '').trim()
      );
      return;
    }

    if (icon === 'content_copy' || /Copy All/.test(label)) {
      navigator.clipboard
        ?.writeText(button.parentElement?.textContent || '')
        .then(() => showToast('Copied to clipboard.'));
      return;
    }

    if (icon === 'close' || label === '×') {
      button.closest('[role=alert]')?.remove();
      if (label === '×') button.parentElement?.remove();
      else button.parentElement?.classList.add('hidden');
      return;
    }

    if (label === 'List' || label === 'Grid') {
      const table = surfaceRef.current?.querySelector('table');
      table?.classList.toggle('product-grid', label === 'Grid');
      return;
    }

    if (/Delete|Remove/.test(label)) {
      setModal({
        title: label,
        body: 'Remove this item from the local demo?',
        action: 'Remove',
        run: () => {
          button.closest('tr')?.remove();
          showToast('Item removed from this view.');
        },
      });
      return;
    }

    // Default action popup
    setModal({
      title: label || icon?.replace(/_/g, ' ') || 'Workspace action',
      body: 'Manage this feature in your local workspace.',
      action: 'Apply',
      run: (d) => filterTable(d['Filter text'] || ''),
    });
  };

  // If user selected seller builder
  if (currentRoute === 'seller') {
    return (
      <SellerSetupPage
        onNavigateScreen={navigateTo}
        onNavigateStorefront={onNavigateStorefront}
      />
    );
  }

  const ActiveScreen = screenComponents[currentRoute] || Overview;

  return (
    <>
      <AdminHeader
        currentScreen={currentRoute}
        onNavigate={navigateTo}
        onSearch={(q) => filterTable(q)}
        onOpenNew={() =>
          setModal({
            title: 'Create a new record',
            fields: ['Type (product, customer, order)', 'Name'],
            action: 'Create',
            run: (d) => {
              const type = d['Type (product, customer, order)']?.toLowerCase() || '';
              if (type.includes('customer')) navigateTo('customers');
              else if (type.includes('order')) navigateTo('orders');
              else navigateTo('product-editor');
            },
          })
        }
        onOpenNotifications={() =>
          setModal({
            title: 'Store Notifications',
            body: '28 orders are awaiting fulfillment. 14 products are low on stock. Your Pro subscription is active.',
            action: 'Review orders',
            run: () => navigateTo('orders'),
          })
        }
      />

      <div
        className="customer-admin min-h-[calc(100vh-180px)] pt-[104px] bg-[#fbf8ff]"
        ref={surfaceRef}
        onClick={handleSurfaceClick}
        onChange={(e) => {
          const el = e.target as HTMLInputElement;
          if (el.type === 'checkbox' && el.closest('thead')) {
            el.closest('table')?.querySelectorAll<HTMLInputElement>('tbody input[type=checkbox]').forEach(
              (c) => (c.checked = el.checked)
            );
          }
        }}
        onInput={(e) => {
          const el = e.target as HTMLInputElement;
          if (
            el.tagName === 'INPUT' &&
            /Filter|Search by|Search products|SKU|Search inventory/.test(el.placeholder) &&
            !el.closest('header')
          ) {
            filterTable(el.value);
          }
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (currentRoute === 'sign-in') {
            navigateTo(
              document.getElementById('panel-signin')?.classList.contains('hidden')
                ? 'onboarding'
                : 'overview'
            );
          } else {
            saveFormData();
          }
        }}
      >
        <ActiveScreen key={currentRoute + revision} />
      </div>

      <AdminFooter onNavigate={navigateTo} />

      <QuickMenu
        onOpenModal={() =>
          setModal({
            title: 'My Store Workspace',
            body: 'Quick jump to any store screen or management tool:',
            fields: ['Screen'],
            action: 'Open Screen',
            run: (d) => navigateTo(d.Screen),
          })
        }
      />

      <ActionDialog
        modal={modal}
        onClose={() => setModal(null)}
        availableScreens={Object.keys(screenComponents)}
      />
    </>
  );
};

export default AdminWorkspacePage;
