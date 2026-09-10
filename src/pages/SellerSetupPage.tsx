import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useStore } from '@/context/StoreContext';
import type { Product, ThemeId } from '@/types/store';
import { themeOptions, sampleProducts } from '@/services/mockData';
import { ProductFormModal } from '@/components/builder/ProductFormModal';
import { SellerAuthCard } from '@/components/builder/SellerAuthCard';
import { Storefront } from '@/components/storefront/Storefront';
import { AdminFooter } from '@/components/common/AdminFooter';

interface SellerSetupPageProps {
  initialStep?: number;
  onNavigateScreen: (screen: string) => void;
  onNavigateStorefront: (slug: string) => void;
}

const stepList = [
  { id: 0, title: 'Store Basics', subtitle: 'Name, Slug & Category', icon: 'storefront' },
  { id: 1, title: 'Theme & Palette', subtitle: 'Studio, Botanical, Bold', icon: 'palette' },
  { id: 2, title: 'Product Catalog', subtitle: 'Inventory & Pricing', icon: 'inventory_2' },
  { id: 3, title: 'Regional & Domain', subtitle: 'Tax, Hub & Custom URL', icon: 'language' },
  { id: 4, title: 'Review & Publish', subtitle: 'Launch Storefront', icon: 'rocket_launch' },
];

const industryOptions = [
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    desc: 'Hardware, accessories, serial inventory',
    icon: 'devices',
  },
  {
    id: 'apparel',
    name: 'Apparel & Fashion',
    desc: 'Matrix variants, sizing, fast trends',
    icon: 'apparel',
  },
  {
    id: 'home',
    name: 'Home & Living',
    desc: 'Bulky dimensional weight, custom craft',
    icon: 'chair',
  },
  {
    id: 'digital',
    name: 'Digital Goods & Software',
    desc: 'License keys, asset downloads, SaaS',
    icon: 'token',
  },
];

export const SellerSetupPage: React.FC<SellerSetupPageProps> = ({
  initialStep = 0,
  onNavigateScreen,
  onNavigateStorefront,
}) => {
  const { seller, logout } = useAuth();
  const {
    store,
    draft,
    updateDraft,
    saveDraft,
    publishStore,
    unpublishStore,
    verifyDomain,
    showToast,
  } = useStore();

  const [step, setStep] = useState(initialStep);
  const [selectedIndustry, setSelectedIndustry] = useState('electronics');
  const [fulfillmentHub, setFulfillmentHub] = useState('mum-01');
  const [taxId, setTaxId] = useState('27AAAAA0000A1Z5');
  const [isPreview, setIsPreview] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isCheckingDns, setIsCheckingDns] = useState(false);
  const [showDocsModal, setShowDocsModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const isPublished = Boolean(store?.published_at && store?.published);

  // Progress Calculations
  const isBasicsDone = Boolean(draft.name?.trim() && draft.slug?.trim());
  const isThemeDone = Boolean(draft.theme);
  const isProductsDone = draft.products.length > 0;
  const isDomainDone = Boolean(draft.slug);
  const isReviewDone = isPublished;

  const completedChecklistCount =
    1 + // Account & Tenant workspace completed upon signin
    (isBasicsDone ? 1 : 0) +
    (isThemeDone ? 1 : 0) +
    (isProductsDone ? 1 : 0) +
    (isReviewDone ? 1 : 0);

  const progressPercent = Math.min(100, Math.round((completedChecklistCount / 5) * 100));
  const circumference = 119.38;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const handleNext = () => {
    saveDraft();
    setStep((s) => Math.min(stepList.length - 1, s + 1));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep((s) => Math.max(0, s - 1));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handlePublish = () => {
    const ok = publishStore();
    if (ok) {
      setPublishSuccess(true);
      showToast(`🎉 "${draft.name}" published live! Storefront is open.`);
      onNavigateStorefront(draft.slug);
    }
  };

  const handleNameChange = (val: string) => {
    const patch: Partial<typeof draft> = { name: val };
    if (!store?.published_at) {
      patch.slug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }
    updateDraft(patch);
  };

  const handleSelectTheme = (themeId: ThemeId, defaultAccent: string) => {
    updateDraft({ theme: themeId, accent: defaultAccent });
  };

  const handleVerifyDns = async () => {
    setIsCheckingDns(true);
    try {
      await verifyDomain();
      showToast('DNS verification check completed.');
    } finally {
      setIsCheckingDns(false);
    }
  };

  const handleUseSamples = () => {
    updateDraft({ products: [...sampleProducts] });
    showToast('Loaded 3 sample products into your catalog.');
  };

  const handleRemoveProduct = (id: string) => {
    updateDraft({ products: draft.products.filter((p) => p.id !== id) });
    showToast('Product removed from catalog.');
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/store/${draft.slug}`;
    navigator.clipboard?.writeText(url).then(() => {
      showToast('Storefront link copied to clipboard!');
    });
  };

  if (isPreview) {
    return (
      <div className="min-h-screen bg-background flex flex-col antialiased">
        <div className="sticky top-0 z-50 bg-[#09090b] text-white border-b border-[#27272a] px-4 sm:px-6 py-3 flex items-center justify-between shadow-md">
          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181b] hover:bg-[#27272a] text-xs font-semibold text-[#e4e4e7] border border-[#27272a] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Return to Store Builder</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Live Theme Preview · {draft.theme.toUpperCase()}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsPreview(false);
              setStep(4);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#006c49] hover:bg-[#00563a] text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            <span>Proceed to Launch</span>
            <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
          </button>
        </div>
        <Storefront store={{ ...draft, name: draft.name || 'Your store' }} preview />
      </div>
    );
  }

  if (!seller && showAuthModal) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6">
        <SellerAuthCard onSuccess={() => setShowAuthModal(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased flex flex-col">
      {/* 1. TOP BUILDER APP HEADER */}
      <header className="sticky top-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-highest">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-space-md">
          {/* Brand Mark */}
          <div className="flex items-center gap-space-sm">
            <a href="/" className="flex items-center gap-2 text-on-surface font-semibold text-base font-headline-sm">
              <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">
                g›
              </span>
              <span>Genbytez</span>
            </a>
            <span className="text-outline-variant">/</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs font-medium text-on-surface-variant border border-surface-container-highest">
              <span className={`w-1.5 h-1.5 rounded-full ${isPublished ? 'bg-secondary animate-pulse' : 'bg-amber-500'}`} />
              <span>{isPublished ? 'Live Store' : 'Draft Store'}</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-space-sm">
            <button
              type="button"
              onClick={() => setIsPreview(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-xs font-medium text-on-surface border border-surface-container-highest transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span className="hidden sm:inline">Preview Storefront</span>
            </button>

            {isPublished && (
              <button
                type="button"
                onClick={() => onNavigateScreen('overview')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Store Admin</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            )}

            {seller ? (
              <div className="flex items-center gap-2 pl-2 border-l border-surface-container-highest">
                <div
                  className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-semibold text-xs"
                  title={seller.email}
                >
                  {seller.name.charAt(0).toUpperCase()}
                </div>
                <button
                  type="button"
                  onClick={logout}
                  className="text-xs text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowAuthModal(true)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-on-primary cursor-pointer"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE CONTAINER matching the HTML template */}
      <main className="flex-1 w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
        <div className="flex flex-col w-full">

          {/* HERO CONTEXT ANCHOR CARD matching snippet lines 8-73 */}
          <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-xl md:p-space-2xl shadow-sm mb-space-xl border border-surface-container-high/40">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-secondary/5 rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div className="space-y-space-xs max-w-xl">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>Workspace Setup in Progress</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Welcome to Genbytez{seller?.name ? `, ${seller.name}` : ''}! Let's set up your store.
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Complete these 5 foundational steps to start selling and accepting payments worldwide.
                </p>
              </div>

              {/* Progress Gauge */}
              <div className="flex items-center gap-space-md bg-surface-container-low px-space-lg py-space-md rounded-xl self-start md:self-auto border border-surface-container-highest/60">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                    <circle
                      className="text-surface-container-highest"
                      cx="24"
                      cy="24"
                      fill="none"
                      r="19"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <circle
                      className="text-secondary transition-all duration-700"
                      cx="24"
                      cy="24"
                      fill="none"
                      r="19"
                      stroke="currentColor"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                  <span className="absolute font-code-tabular text-code-tabular text-on-surface font-bold">
                    {progressPercent}%
                  </span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Overall Progress
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">
                    Step {step + 1} of 5
                  </div>
                </div>
              </div>
            </div>

            {/* Stepper Navigation Pills matching snippet lines 35-72 */}
            <div className="mt-space-xl pt-space-lg border-t border-surface-container-high/40">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm">
                {stepList.map((st, idx) => {
                  const isActive = step === idx;
                  const isDone =
                    (idx === 0 && isBasicsDone) ||
                    (idx === 1 && isThemeDone) ||
                    (idx === 2 && isProductsDone) ||
                    (idx === 3 && isDomainDone) ||
                    (idx === 4 && isReviewDone);

                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setStep(idx)}
                      className={`flex items-center gap-space-sm p-space-sm rounded-lg transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-sm ring-1 ring-primary'
                          : isDone
                          ? 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                          : 'bg-surface-container-low opacity-60 hover:opacity-100 text-on-surface'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-code-tabular text-code-tabular font-bold ${
                          isActive
                            ? 'bg-on-primary text-primary'
                            : isDone
                            ? 'bg-secondary text-on-secondary'
                            : 'bg-surface-container-highest text-on-surface-variant'
                        }`}
                      >
                        {isDone && !isActive ? (
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`font-label-sm text-label-sm ${
                            isActive
                              ? 'text-primary-fixed-dim'
                              : isDone
                              ? 'text-secondary font-semibold'
                              : 'text-on-surface-variant'
                          }`}
                        >
                          {isActive ? 'Active Step' : isDone ? `Step 0${idx + 1}` : 'Pending'}
                        </div>
                        <div
                          className={`font-body-sm text-body-sm font-semibold truncate ${
                            isActive ? 'text-on-primary' : 'text-on-surface'
                          }`}
                        >
                          {st.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PRIMARY 12-COLUMN WORKSPACE GRID matching snippet lines 75-324 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

            {/* LEFT 8 COLUMNS: Configuration Form + Edge Routing Visual Card */}
            <div className="lg:col-span-8 flex flex-col gap-space-xl">

              {/* Main Configuration Card */}
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-surface-container-high/40">
                <div className="flex items-center justify-between pb-space-md mb-space-lg border-b border-surface-container-highest/60">
                  <div>
                    <span className="font-code-tabular text-code-tabular text-secondary uppercase tracking-wider font-semibold">
                      STAGE 0{step + 1} CONFIGURATION
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      {step === 0 && 'Store Basics & Public Identity'}
                      {step === 1 && 'Storefront Theme & Palette'}
                      {step === 2 && 'Product Catalog & Shelves'}
                      {step === 3 && 'Currency, Hub & Custom Domain'}
                      {step === 4 && 'Launch Checklist & Review'}
                    </h2>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[24px]">
                    {stepList[step].icon}
                  </span>
                </div>

                {/* Form fields for each step */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === 4) handlePublish();
                    else handleNext();
                  }}
                  className="space-y-space-xl"
                >
                  {/* STEP 0: Store Basics & Identity (including Industry Tiles!) */}
                  {step === 0 && (
                    <div className="space-y-space-lg">
                      {/* Store Public Name */}
                      <div className="space-y-space-xs">
                        <label
                          className="block font-label-md text-label-md text-on-surface font-medium"
                          htmlFor="store-name"
                        >
                          Store Public Display Name <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="store-name"
                            type="text"
                            required
                            value={draft.name}
                            onChange={(e) => handleNameChange(e.target.value)}
                            placeholder="e.g. The Everyday Studio"
                            className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors"
                          />
                          <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline text-[18px]">
                            storefront
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Displayed to consumers on invoices, checkout, and transactional emails.
                        </p>
                      </div>

                      {/* Store URL Slug */}
                      <div className="space-y-space-xs">
                        <label
                          className="block font-label-md text-label-md text-on-surface font-medium"
                          htmlFor="store-slug"
                        >
                          Storefront Public URL <span className="text-error">*</span>
                        </label>
                        <div className="relative flex items-center bg-surface-container-low rounded-lg overflow-hidden border border-transparent focus-within:border-outline-variant">
                          <span className="px-space-md text-xs font-mono text-on-surface-variant bg-surface-container-high/60 py-3 border-r border-surface-container-highest">
                            /store/
                          </span>
                          <input
                            id="store-slug"
                            type="text"
                            required
                            value={draft.slug}
                            onChange={(e) =>
                              updateDraft({ slug: e.target.value.toLowerCase().trim() })
                            }
                            placeholder="my-cool-store"
                            className="flex-1 h-11 px-space-md bg-transparent text-on-surface font-body-md text-body-md focus:outline-none"
                          />
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Lowercase letters, numbers, and hyphens. Instant activation upon publish.
                        </p>
                      </div>

                      {/* Default Operational Currency */}
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between">
                          <label
                            className="block font-label-md text-label-md text-on-surface font-medium"
                            htmlFor="store-currency"
                          >
                            Default Operational Currency <span className="text-error">*</span>
                          </label>
                          <span className="font-code-tabular text-code-tabular text-secondary flex items-center gap-space-2xs">
                            <span className="material-symbols-outlined text-[14px]">lock</span>
                            <span>Settlement Locked</span>
                          </span>
                        </div>
                        <div className="relative">
                          <select
                            id="store-currency"
                            value={draft.currency}
                            onChange={(e) => updateDraft({ currency: e.target.value })}
                            className="w-full h-11 px-space-md pr-10 appearance-none bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors cursor-pointer"
                          >
                            <option value="INR">INR - Indian Rupee (₹)</option>
                            <option value="USD">USD - United States Dollar ($)</option>
                            <option value="EUR">EUR - European Euro (€)</option>
                            <option value="GBP">GBP - British Pound (£)</option>
                            <option value="SGD">SGD - Singapore Dollar (S$)</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">
                            expand_more
                          </span>
                        </div>
                        <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm mt-space-xs">
                          <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                            info
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Used for default catalog pricing, ledger reconciliation, settlements, and
                            regional tax calculation. Multi-currency conversions apply dynamically at checkout.
                          </p>
                        </div>
                      </div>

                      {/* Primary Store Industry & Catalog Type matching snippet lines 121-180 */}
                      <div className="space-y-space-sm">
                        <label className="block font-label-md text-label-md text-on-surface font-medium">
                          Primary Store Industry & Catalog Type
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md" id="industry-selector">
                          {industryOptions.map((ind) => {
                            const isSelected = selectedIndustry === ind.id;
                            return (
                              <div
                                key={ind.id}
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  setSelectedIndustry(ind.id);
                                  if (!draft.tagline) {
                                    updateDraft({
                                      tagline: `${ind.name} curated for modern life.`,
                                    });
                                  }
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    setSelectedIndustry(ind.id);
                                  }
                                }}
                                className={`industry-tile relative p-space-md rounded-xl cursor-pointer transition-all flex flex-col justify-between h-32 border ${
                                  isSelected
                                    ? 'bg-surface-container-lowest shadow-md ring-2 ring-primary border-primary'
                                    : 'bg-surface-container-low hover:bg-surface-container border-transparent'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                                      isSelected
                                        ? 'bg-primary text-on-primary'
                                        : 'bg-surface-container-highest text-on-surface'
                                    }`}
                                  >
                                    <span className="material-symbols-outlined text-[20px]">
                                      {ind.icon}
                                    </span>
                                  </div>
                                  {isSelected && (
                                    <span className="selection-badge inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                                      <span className="material-symbols-outlined text-[12px]">check</span>
                                      <span>Selected</span>
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                    {ind.name}
                                  </div>
                                  <div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                                    {ind.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tagline & Description */}
                      <div className="space-y-space-xs">
                        <label
                          className="block font-label-md text-label-md text-on-surface font-medium"
                          htmlFor="store-tagline"
                        >
                          Store Tagline
                        </label>
                        <input
                          id="store-tagline"
                          type="text"
                          value={draft.tagline}
                          onChange={(e) => updateDraft({ tagline: e.target.value })}
                          placeholder="Thoughtfully chosen. Made for everyday."
                          className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors"
                        />
                      </div>

                      <div className="space-y-space-xs">
                        <label
                          className="block font-label-md text-label-md text-on-surface font-medium"
                          htmlFor="store-desc"
                        >
                          About Your Store / Mission
                        </label>
                        <textarea
                          id="store-desc"
                          rows={3}
                          value={draft.description}
                          onChange={(e) => updateDraft({ description: e.target.value })}
                          placeholder="Tell customers what sets your brand apart..."
                          className="w-full p-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 1: Storefront Theme & Visual Palette */}
                  {step === 1 && (
                    <div className="space-y-space-xl">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-medium mb-space-sm">
                          Select Signature Theme Architecture
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                          {themeOptions.map((theme) => {
                            const isSelected = draft.theme === theme.id;
                            return (
                              <div
                                key={theme.id}
                                role="button"
                                tabIndex={0}
                                onClick={() => handleSelectTheme(theme.id, theme.defaultAccent)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    handleSelectTheme(theme.id, theme.defaultAccent);
                                  }
                                }}
                                className={`relative p-space-md rounded-xl cursor-pointer transition-all border text-left flex flex-col justify-between ${
                                  isSelected
                                    ? 'bg-surface-container-lowest shadow-md ring-2 ring-primary border-primary'
                                    : 'bg-surface-container-low hover:bg-surface-container border-transparent'
                                }`}
                              >
                                <div
                                  className="h-28 rounded-lg mb-3 flex flex-col justify-between p-2.5 overflow-hidden shadow-xs"
                                  style={{ backgroundColor: theme.color }}
                                >
                                  <div className="flex items-center justify-between text-[10px] font-bold opacity-80">
                                    <span>{theme.name.toUpperCase()}</span>
                                    <span>● ● ●</span>
                                  </div>
                                  <div className="text-xs font-semibold">
                                    {theme.id === 'bold' ? 'BOLD & VIBRANT' : theme.name}
                                  </div>
                                  <div className="flex gap-1">
                                    <span className="w-4 h-4 rounded-full bg-black/20" />
                                    <span className="w-4 h-4 rounded-full bg-black/40" />
                                  </div>
                                </div>

                                <div>
                                  <div className="flex items-center justify-between">
                                    <strong className="font-headline-sm text-sm text-on-surface font-semibold">
                                      {theme.name}
                                    </strong>
                                    {isSelected && (
                                      <span className="text-secondary text-xs font-bold flex items-center gap-0.5">
                                        <span className="material-symbols-outlined text-[14px]">check</span>
                                        <span>Active</span>
                                      </span>
                                    )}
                                  </div>
                                  <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                                    {theme.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Accent Color Picker */}
                      <div className="space-y-space-xs p-space-md rounded-xl bg-surface-container-low border border-surface-container-highest/60">
                        <label className="block font-label-md text-label-md text-on-surface font-medium">
                          Brand Accent Color
                        </label>
                        <div className="flex items-center gap-space-md">
                          <input
                            type="color"
                            value={draft.accent || '#006c49'}
                            onChange={(e) => updateDraft({ accent: e.target.value })}
                            className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent"
                          />
                          <code className="font-code-tabular text-sm font-bold bg-surface-container-lowest px-3 py-1.5 rounded-md border border-surface-container-highest">
                            {(draft.accent || '#006c49').toUpperCase()}
                          </code>
                          <span className="text-xs text-on-surface-variant">
                            Applied to buttons, active tags, and header banners on your storefront.
                          </span>
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => setIsPreview(true)}
                          className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors border border-surface-container-highest/60 cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                            <span>Preview {draft.theme.toUpperCase()} theme in live sandbox</span>
                          </span>
                          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Product Catalog & Shelves */}
                  {step === 2 && (
                    <div className="space-y-space-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            {draft.products.length} Products in Collection
                          </span>
                          <p className="font-body-sm text-xs text-on-surface-variant">
                            Add items with price, inventory, and imagery.
                          </p>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          {draft.products.length === 0 && (
                            <button
                              type="button"
                              onClick={handleUseSamples}
                              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-xs font-semibold text-on-surface transition-colors cursor-pointer"
                            >
                              Load Sample Items
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => {
                              setEditingProduct(null);
                              setIsProductModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px]">add</span>
                            <span>Add Product</span>
                          </button>
                        </div>
                      </div>

                      {draft.products.length > 0 ? (
                        <div className="space-y-space-sm divide-y divide-surface-container-highest/60">
                          {draft.products.map((p) => (
                            <div
                              key={p.id}
                              className="pt-space-sm first:pt-0 flex items-center justify-between gap-space-sm"
                            >
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 border border-surface-container">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-headline-sm text-sm text-on-surface font-semibold truncate">
                                  {p.name}
                                </div>
                                <div className="font-label-sm text-xs text-on-surface-variant flex items-center gap-2">
                                  <span className="font-code-tabular font-bold text-secondary">
                                    ₹{p.price.toLocaleString('en-IN')}
                                  </span>
                                  <span>·</span>
                                  <span>{p.stock} in stock</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingProduct(p);
                                    setIsProductModalOpen(true);
                                  }}
                                  className="w-8 h-8 rounded-lg hover:bg-surface-container-high flex items-center justify-center text-outline cursor-pointer"
                                  title="Edit Product"
                                >
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveProduct(p.id)}
                                  className="w-8 h-8 rounded-lg hover:bg-error-container hover:text-on-error-container flex items-center justify-center text-outline cursor-pointer transition-colors"
                                  title="Remove Product"
                                >
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-12 text-center bg-surface-container-low rounded-xl p-space-lg space-y-space-sm">
                          <span className="material-symbols-outlined text-4xl text-outline">
                            inventory_2
                          </span>
                          <h4 className="font-headline-sm text-base text-on-surface font-semibold">
                            Your shelves are ready
                          </h4>
                          <p className="font-body-sm text-xs text-on-surface-variant max-w-sm mx-auto">
                            Add your first product individually or start with our curated sample collection to test your storefront.
                          </p>
                          <div className="flex items-center justify-center gap-2 pt-2">
                            <button
                              type="button"
                              onClick={handleUseSamples}
                              className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-xs font-semibold text-on-surface cursor-pointer"
                            >
                              Load 3 Sample Products
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingProduct(null);
                                setIsProductModalOpen(true);
                              }}
                              className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container cursor-pointer"
                            >
                              Add Custom Product
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 3: Regional Hub & Custom Domain matching snippet lines 183-204 */}
                  {step === 3 && (
                    <div className="space-y-space-lg">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                        <div className="space-y-space-xs">
                          <label
                            className="block font-label-md text-label-md text-on-surface font-medium"
                            htmlFor="warehouse-select"
                          >
                            Default Fulfillment Hub Origin
                          </label>
                          <div className="relative">
                            <select
                              id="warehouse-select"
                              value={fulfillmentHub}
                              onChange={(e) => setFulfillmentHub(e.target.value)}
                              className="w-full h-11 px-space-md pr-10 appearance-none bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors cursor-pointer"
                            >
                              <option value="mum-01">Mumbai Central Hub - Primary (BOM-01)</option>
                              <option value="blr-02">Bengaluru North Fulfillment (BLR-02)</option>
                              <option value="del-01">Delhi NCR Transit Logistics (DEL-01)</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">
                              expand_more
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Default dispatch point for distance calculations and automated route optimization.
                          </p>
                        </div>

                        <div className="space-y-space-xs">
                          <label
                            className="block font-label-md text-label-md text-on-surface font-medium"
                            htmlFor="tax-id"
                          >
                            GSTIN / Regional Corporate Tax ID
                          </label>
                          <div className="relative">
                            <input
                              id="tax-id"
                              type="text"
                              value={taxId}
                              onChange={(e) => setTaxId(e.target.value.toUpperCase())}
                              placeholder="e.g. 27AAAAA0000A1Z5"
                              className="w-full h-11 px-space-md font-code-tabular text-code-tabular bg-surface-container-low text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors uppercase tracking-wider"
                            />
                            <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-secondary text-[18px]">
                              verified
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Validated against National Tax Database registry for compliant B2B invoicing.
                          </p>
                        </div>
                      </div>

                      {/* Custom Domain Section */}
                      <div className="space-y-space-xs pt-space-md border-t border-surface-container-highest/60">
                        <label
                          className="block font-label-md text-label-md text-on-surface font-medium"
                          htmlFor="custom-domain"
                        >
                          Custom Brand Domain <span className="text-xs text-on-surface-variant font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <input
                            id="custom-domain"
                            type="text"
                            value={draft.domain}
                            onChange={(e) =>
                              updateDraft({
                                domain: e.target.value.trim().toLowerCase(),
                                domainStatus: 'pending',
                              })
                            }
                            placeholder="shop.yourbrand.com"
                            className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors"
                          />
                          <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline text-[18px]">
                            language
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Your /store/{draft.slug || 'slug'} URL is ready immediately without DNS configuration.
                        </p>

                        {draft.domain && (
                          <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-low border border-surface-container-highest space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-on-surface">DNS Record Verification</span>
                              <span className="font-code-tabular text-secondary font-bold">
                                {draft.domainStatus === 'verified' ? 'Verified' : 'Pending Check'}
                              </span>
                            </div>
                            <p className="text-on-surface-variant">
                              Add this TXT record at your DNS registrar:
                            </p>
                            <div className="p-2 rounded bg-surface-container-lowest font-mono text-[11px] border border-surface-container-highest space-y-1">
                              <div>Record Type: <strong>TXT</strong></div>
                              <div>Host: <strong>_genbytez.{draft.domain}</strong></div>
                              <div>Value: <strong>genbytez-verify={store?.id || 'save-draft-first'}</strong></div>
                            </div>
                            <button
                              type="button"
                              disabled={isCheckingDns}
                              onClick={handleVerifyDns}
                              className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container disabled:opacity-50 cursor-pointer"
                            >
                              {isCheckingDns ? 'Checking DNS…' : 'Verify Domain Ownership'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Launch Checklist & Review */}
                  {step === 4 && (
                    <div className="space-y-space-lg">
                      <div className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container-highest/60 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-md font-bold">
                            {draft.name.charAt(0).toUpperCase() || 'G'}
                          </div>
                          <div>
                            <h3 className="font-headline-sm text-base text-on-surface font-semibold">
                              {draft.name || 'Your Store'}
                            </h3>
                            <p className="font-code-tabular text-xs text-secondary font-medium">
                              /store/{draft.slug}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            isPublished
                              ? 'bg-secondary-container text-on-secondary-container'
                              : 'bg-amber-100 text-amber-900 border border-amber-300'
                          }`}
                        >
                          {isPublished ? '● Live Store' : 'Draft Ready'}
                        </span>
                      </div>

                      {/* Readiness Checklist */}
                      <div className="space-y-2">
                        <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">
                              {isBasicsDone ? 'check_circle' : 'radio_button_unchecked'}
                            </span>
                            <span className="font-medium text-on-surface">Store Profile & Basics</span>
                          </div>
                          <span className="text-on-surface-variant font-code-tabular">
                            {draft.name} · {draft.currency}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">
                              check_circle
                            </span>
                            <span className="font-medium text-on-surface">Theme & Palette</span>
                          </div>
                          <span className="text-on-surface-variant font-code-tabular">
                            {draft.theme.toUpperCase()}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">
                              {isProductsDone ? 'check_circle' : 'radio_button_unchecked'}
                            </span>
                            <span className="font-medium text-on-surface">Product Catalog</span>
                          </div>
                          <span className="text-on-surface-variant font-code-tabular">
                            {draft.products.length} Products Active
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">
                              {isDomainDone ? 'check_circle' : 'radio_button_unchecked'}
                            </span>
                            <span className="font-medium text-on-surface">Public Storefront Address</span>
                          </div>
                          <span className="text-on-surface-variant font-code-tabular">
                            /store/{draft.slug}
                          </span>
                        </div>
                      </div>

                      {/* Launch Actions */}
                      <div className="space-y-2 pt-space-xs">
                        <button
                          type="button"
                          disabled={!isBasicsDone || !isProductsDone}
                          onClick={handlePublish}
                          className="w-full h-12 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-40 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                          <span>
                            {isPublished ? 'Publish Updates & Re-sync' : 'Publish Store & Open For Business'}
                          </span>
                        </button>

                        <div className="flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => setIsPreview(true)}
                            className="flex-1 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-xs font-semibold text-on-surface transition-colors cursor-pointer border border-surface-container-highest"
                          >
                            Preview Live Store
                          </button>
                          {isPublished && (
                            <button
                              type="button"
                              onClick={handleCopyLink}
                              className="flex-1 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-xs font-semibold text-on-surface transition-colors cursor-pointer border border-surface-container-highest"
                            >
                              Copy Public URL
                            </button>
                          )}
                        </div>

                        {isPublished && (
                          <button
                            type="button"
                            onClick={unpublishStore}
                            className="w-full py-2 text-xs text-error hover:underline cursor-pointer"
                          >
                            Unpublish store (take offline)
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Form Step Navigation Footer matching snippet lines 206-218 */}
                  <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-surface-container-highest/60">
                    <button
                      type="button"
                      disabled={step === 0}
                      onClick={handleBack}
                      className="w-full sm:w-auto px-space-lg h-11 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-space-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                      <span>Back to {step > 0 ? stepList[step - 1].title : 'Start'}</span>
                    </button>

                    <div className="flex items-center gap-space-md w-full sm:w-auto">
                      {step < 4 && (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-space-md py-2 text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors text-center cursor-pointer"
                        >
                          Skip for now
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          if (step === 4) {
                            handlePublish();
                          } else {
                            handleNext();
                          }
                        }}
                        className="w-full sm:w-auto px-space-xl h-11 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs shadow-md cursor-pointer"
                      >
                        <span>
                          {step === 4
                            ? isPublished
                              ? 'Publish Updates'
                              : 'Publish & Launch Store'
                            : `Save & Continue to ${stepList[step + 1].title}`}
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          {step === 4 ? 'rocket_launch' : 'arrow_forward'}
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Context Visual Card matching snippet lines 222-234 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col sm:flex-row items-center gap-space-lg border border-surface-container-high/40">
                <div className="w-full sm:w-1/3 h-28 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Modern logistics fulfillment center"
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="space-y-space-2xs">
                  <div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">public</span>
                    <span>Edge Routing & Global Settlement</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Automated Cross-Border Calculations
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Your currency and hub preferences enable automated HS code matching, customs duties
                    estimations, and domestic tax reconciliation across all 28 states and union territories.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS: Checklist + Speed Target + Pro Feature matching snippet lines 237-324 */}
            <div className="lg:col-span-4 flex flex-col gap-space-lg">

              {/* 1. Store Launch Checklist Card */}
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-surface-container-high/40">
                <div className="flex items-center justify-between mb-space-base">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Store Launch Checklist
                    </h3>
                    <span className="font-code-tabular text-code-tabular text-secondary font-semibold">
                      {completedChecklistCount} of 5 ready to publish
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    task_alt
                  </span>
                </div>

                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mb-space-lg">
                  <div
                    className="h-full bg-secondary rounded-full transition-all duration-500"
                    style={{ width: `${(completedChecklistCount / 5) * 100}%` }}
                  />
                </div>

                <ul className="space-y-space-md">
                  <li className="flex items-start gap-space-sm">
                    <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-body-sm text-body-sm text-on-surface line-through opacity-75">
                        Create account & tenant workspace
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Allocated to US-East-1 AWS cluster
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-space-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isBasicsDone
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-surface-container-high text-outline font-code-tabular text-[10px]'
                      }`}
                    >
                      {isBasicsDone ? (
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      ) : (
                        '2'
                      )}
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`font-body-sm text-body-sm ${
                          isBasicsDone ? 'line-through opacity-75 text-on-surface' : 'font-medium text-on-surface'
                        }`}
                      >
                        Configure store business profile
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {isBasicsDone ? `${draft.name} · ${draft.currency}` : 'Tax origin & currency'}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-space-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isThemeDone
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-surface-container-high text-outline font-code-tabular text-[10px]'
                      }`}
                    >
                      {isThemeDone ? (
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      ) : (
                        '3'
                      )}
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`font-body-sm text-body-sm ${
                          isThemeDone ? 'line-through opacity-75 text-on-surface' : 'font-medium text-on-surface'
                        }`}
                      >
                        Storefront theme & palette
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {draft.theme.toUpperCase()} theme
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-space-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isProductsDone
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-surface-container-high text-outline font-code-tabular text-[10px]'
                      }`}
                    >
                      {isProductsDone ? (
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      ) : (
                        '4'
                      )}
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`font-body-sm text-body-sm ${
                          isProductsDone ? 'line-through opacity-75 text-on-surface' : 'font-medium text-on-surface'
                        }`}
                      >
                        Add first 3 products or bulk CSV
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {isProductsDone ? `${draft.products.length} products loaded` : 'SKUs, pricing, inventory'}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-space-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isReviewDone
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-surface-container-high text-outline font-code-tabular text-[10px]'
                      }`}
                    >
                      {isReviewDone ? (
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      ) : (
                        '5'
                      )}
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`font-body-sm text-body-sm ${
                          isReviewDone ? 'line-through opacity-75 text-on-surface' : 'text-on-surface'
                        }`}
                      >
                        Publish & open storefront
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {isReviewDone ? 'Live on public URL' : `/store/${draft.slug || 'slug'}`}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-space-lg pt-space-md border-t border-surface-container-highest/60">
                  <button
                    type="button"
                    onClick={() => setIsPreview(true)}
                    className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>Preview Public Storefront</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </button>
                </div>
              </div>

              {/* 2. Speed-to-Market Target Box matching snippet lines 305-312 */}
              <div className="bg-primary-container text-on-primary rounded-xl p-space-lg shadow-sm">
                <div className="flex items-center gap-space-sm mb-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    speed
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
                    Speed-to-Market Target
                  </span>
                </div>
                <div className="font-metric-display text-metric-display text-on-primary">12 mins</div>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-space-2xs">
                  Average merchant setup duration before receiving initial test checkout order.
                </p>
              </div>

              {/* 3. Pro Merchant Feature Card matching snippet lines 314-322 */}
              <div className="relative rounded-xl overflow-hidden shadow-sm h-48 bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Organized workspace desk"
                  src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent flex items-end p-space-md">
                  <div className="text-on-primary">
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-semibold">
                      Pro Merchant Feature
                    </div>
                    <div className="font-headline-sm text-headline-sm">Omnichannel Sync</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 4. CONCIERGE ASSISTANCE BANNER matching snippet lines 326-346 */}
          <div className="mt-space-2xl bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-container-high/40">
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  Need assistance setting up your architecture?
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Book a complimentary 15-minute 1-on-1 onboarding walk-through with our Store Architect team
                  or read our comprehensive setup guidelines.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setShowDocsModal(true)}
                className="flex-1 md:flex-initial h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex items-center justify-center gap-space-xs transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Documentation</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowBookingModal(true);
                  setBookingSuccess(false);
                }}
                className="flex-1 md:flex-initial h-10 px-space-lg rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container inline-flex items-center justify-center gap-space-xs transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Book 15-Min Session</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Global Admin Footer */}
      <AdminFooter onNavigate={(screen) => onNavigateScreen(screen)} />

      {/* Documentation Modal */}
      {showDocsModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-surface-container-lowest text-on-surface rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-surface-container-highest space-y-4">
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">menu_book</span>
                <h3 className="font-headline-sm text-lg font-bold">Store Builder Documentation</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDocsModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-surface-container-high flex items-center justify-center text-outline cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="block text-sm font-semibold text-on-surface">
                  1. Store Basics & Slug Reservation
                </strong>
                <p className="text-on-surface-variant mt-0.5">
                  Your store name generates your permanent URL slug (/store/your-slug). This URL is reserved across the multi-tenant cloud instantly upon publish.
                </p>
              </div>
              <div>
                <strong className="block text-sm font-semibold text-on-surface">
                  2. Catalog & Currency Locks
                </strong>
                <p className="text-on-surface-variant mt-0.5">
                  Your primary currency determines ledger reconciliations. Multi-currency conversions apply dynamically based on the visitor's detected location.
                </p>
              </div>
              <div>
                <strong className="block text-sm font-semibold text-on-surface">
                  3. Theme Sandboxing & Live Updates
                </strong>
                <p className="text-on-surface-variant mt-0.5">
                  Changes made in this builder stay in draft until you click "Publish Updates". You can preview your changes safely without affecting live shoppers.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowDocsModal(false)}
              className="w-full py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container cursor-pointer"
            >
              Close Documentation
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-surface-container-lowest text-on-surface rounded-2xl max-w-md w-full p-6 shadow-2xl border border-surface-container-highest space-y-4">
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">calendar_month</span>
                <h3 className="font-headline-sm text-lg font-bold">1-on-1 Onboarding Walkthrough</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-surface-container-high flex items-center justify-center text-outline cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">check</span>
                </div>
                <h4 className="font-headline-sm font-semibold">Session Confirmed!</h4>
                <p className="text-xs text-on-surface-variant">
                  We've sent a calendar invitation and Google Meet link to <strong>{seller?.email || 'your email'}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="mt-2 w-full py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <p className="text-on-surface-variant">
                  Select a preferred 15-minute slot with our Store Architect team to review your catalog, theme, and payment gateway setup.
                </p>
                <div className="space-y-2">
                  <label className="block font-medium">Merchant Email</label>
                  <input
                    type="email"
                    disabled
                    value={seller?.email || 'merchant@genbytez.com'}
                    className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-highest text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-medium">Select Time Slot</label>
                  <select className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-highest text-xs cursor-pointer">
                    <option>Today at 4:00 PM IST</option>
                    <option>Tomorrow at 11:00 AM IST</option>
                    <option>Tomorrow at 3:30 PM IST</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingSuccess(true)}
                  className="w-full py-2.5 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-all cursor-pointer shadow-sm"
                >
                  Confirm 15-Minute Session
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Form Modal */}
      <ProductFormModal
        isOpen={isProductModalOpen}
        product={editingProduct}
        currency={draft.currency}
        onClose={() => setIsProductModalOpen(false)}
        onSave={(savedProduct) => {
          const exists = draft.products.some((p) => p.id === savedProduct.id);
          const updatedList = exists
            ? draft.products.map((p) => (p.id === savedProduct.id ? savedProduct : p))
            : [...draft.products, savedProduct];
          updateDraft({ products: updatedList });
          showToast(`Product "${savedProduct.name}" saved to catalog.`);
        }}
      />
    </div>
  );
};

export default SellerSetupPage;
