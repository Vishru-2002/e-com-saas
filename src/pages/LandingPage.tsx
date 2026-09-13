import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useStore } from '@/context/StoreContext';
import { sampleProducts } from '@/services/mockData';
import {
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  ShoppingBag,
  Store,
  Layers,
  Globe,
  Users,
  BarChart3,
  Sliders,
  CreditCard,
  PackageCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Eye,
  Star,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Menu,
  X,
  Laptop,
  CheckCircle,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { seller } = useAuth();
  const { store } = useStore();
  const navigate = useNavigate();

  // Navigation mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive showcase state
  const [activeTab, setActiveTab] = useState<'storefront' | 'analytics' | 'builder'>('analytics');
  const [previewTheme, setPreviewTheme] = useState<'studio' | 'botanical' | 'bold'>('studio');

  // Pricing period state
  const [isAnnual, setIsAnnual] = useState(true);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isPublished = Boolean(store?.published_at && store?.published);
  const activeSlug = store?.slug || 'the-everyday-studio';

  const faqItems = [
    {
      q: 'Can I connect my own custom domain?',
      a: 'Yes, absolutely. Every Genbytez store includes instant free subdomain routing (e.g. genbytez.com/store/your-brand) plus seamless custom domain mapping with automated SSL generation and DNS verification.',
    },
    {
      q: 'How fast are Genbytez storefronts compared to Shopify or WooCommerce?',
      a: 'Genbytez storefronts are pre-compiled and served directly from our global edge network, delivering sub-80ms Time-To-First-Byte (TTFB) worldwide without bloated plugins or slow server-side re-renders.',
    },
    {
      q: 'Are there any hidden transaction fees on sales?',
      a: 'Zero platform transaction fees on our Growth and Enterprise plans. You only pay standard payment gateway processing (e.g. Stripe, Razorpay, or PayPal) without any secondary platform penalty fees.',
    },
    {
      q: 'Can I manage multiple staff members and assign role-based permissions?',
      a: 'Yes. Our Team & RBAC module lets you invite catalog managers, warehouse fulfillment staff, customer support reps, and finance administrators with granular read/write permission scopes.',
    },
    {
      q: 'What happens when an item runs out of stock?',
      a: 'Our real-time inventory matrix automatically updates stock counters, triggers low-stock alerts, and can instantly mark items as sold out or switch to automated backorder queues based on your rules.',
    },
    {
      q: 'Can I migrate my existing products and orders from another platform?',
      a: 'Yes! We provide single-click CSV bulk product imports, automatic image ingestion, and catalog migration tools so you can launch in minutes without manual data re-entry.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-emerald-950 via-zinc-900 to-emerald-950 border-b border-emerald-500/20 py-2 px-4 text-center text-xs text-zinc-300 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[10px] tracking-wide uppercase">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          Release 2.0 Live
        </span>
        <span className="hidden sm:inline text-zinc-400">•</span>
        <span className="font-medium text-zinc-200">
          Sub-80ms Edge Storefronts, Real-Time Multi-Location Inventory & One-Click Checkout.
        </span>
        <Link
          to={seller ? '/overview' : '/auth'}
          state={{ mode: 'signup' }}
          className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 ml-1 inline-flex items-center gap-0.5"
        >
          {seller ? 'Open Workspace' : 'Get Started'} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* 2. STICKY GLASSMORPHIC HEADER */}
      <header className="sticky top-0 z-50 bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800/70 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Mark */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-lg shadow-emerald-950 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#09090b] rounded-[10px] flex items-center justify-center">
                <Store className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-white font-['Geist',sans-serif]">
                  Genbytez
                </span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-semibold tracking-wider uppercase border border-emerald-500/20">
                  COMMERCE
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 tracking-tight hidden sm:inline">
                Modern Commerce OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-300">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#builder" className="hover:text-white transition-colors">
              Visual Builder
            </a>
            <a href="#showcase" className="hover:text-white transition-colors">
              Live Showcase
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Performance
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {seller ? (
              <div className="flex items-center gap-3">
                <div className="text-right hidden lg:block">
                  <div className="text-xs font-semibold text-white leading-tight">{seller.name}</div>
                  <div className="text-[10px] text-zinc-400 font-mono truncate max-w-[140px]">
                    {store?.name || 'Active Store'}
                  </div>
                </div>
                <Link
                  to={isPublished ? '/overview' : '/builder'}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-100 border border-zinc-700 transition-colors"
                >
                  Workspace
                </Link>
                <Link
                  to={`/store/${activeSlug}`}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-md shadow-emerald-950 transition-all flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Live Store
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/auth"
                  className="px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  state={{ mode: 'signup' }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02] flex items-center gap-1.5"
                >
                  Start Free Trial
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-zinc-800 bg-[#0c0c0e] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-300">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                Features
              </a>
              <a
                href="#builder"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                Visual Builder
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                Live Showcase
              </a>
              <a
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                Performance
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-white"
              >
                FAQ
              </a>
            </nav>
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
              {seller ? (
                <>
                  <Link
                    to="/overview"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 text-center text-xs font-semibold text-white"
                  >
                    Go to Dashboard
                  </Link>
                  <Link
                    to={`/store/${activeSlug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 text-center text-xs font-semibold text-white"
                  >
                    View Live Storefront
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/auth"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 text-center text-xs font-medium text-zinc-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/auth"
                    state={{ mode: 'signup' }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 text-center text-xs font-semibold text-white shadow-md"
                  >
                    Start 14-Day Free Trial
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-b from-emerald-600/15 via-teal-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-12 left-10 w-72 h-72 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-medium shadow-sm mb-6 sm:mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200">The Modern E-Commerce Operating System</span>
            <span className="text-zinc-600">|</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              Zero Plugin Bloat
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] font-['Geist',sans-serif]">
            Build, scale & dominate <br className="hidden sm:inline" />
            your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              digital commerce frontier
            </span>
            .
          </h1>

          {/* Subheading */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Turn your brand vision into an ultra-fast flagship online store in under five minutes.
            Genbytez pairs visual drag-and-drop customization with real-time multi-channel inventory,
            automated checkout, and enterprise analytics.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            {seller ? (
              <Link
                to="/overview"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#09090b] font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all flex items-center justify-center gap-2 group"
              >
                Go to Admin Workspace
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                to="/auth"
                state={{ mode: 'signup' }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#09090b] font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all flex items-center justify-center gap-2 group"
              >
                Start Free 14-Day Trial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            <Link
              to={`/store/${activeSlug}`}
              target="_blank"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 font-semibold text-sm border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2.5 group backdrop-blur-md"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              View Live Storefront Demo
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
            </Link>

          </div>

          {/* Micro trust guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Sub-80ms Global Edge CDN
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> 0% Platform Transaction Fee
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> 99.99% Guaranteed SLA
            </span>
          </div>

          {/* 4. INTERACTIVE PRODUCT SHOWCASE COMPONENT */}
          <div className="mt-14 sm:mt-18 max-w-6xl mx-auto">
            <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl shadow-2xl overflow-hidden text-left relative">
              {/* Window Header Bar */}
              <div className="bg-[#18181c] px-4 py-3 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                {/* Dots + Mock URL */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#10b981]/80"></div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#09090b] border border-zinc-800 text-[11px] text-zinc-400 font-mono">
                    <span className="text-emerald-500">https://</span>
                    <span>app.genbytez.com/workspace</span>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center bg-[#09090b] p-1 rounded-lg border border-zinc-800 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab('analytics')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeTab === 'analytics'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Revenue & Analytics
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('storefront')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeTab === 'storefront'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Live Storefront
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('builder')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeTab === 'builder'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Visual Theme Engine
                  </button>
                </div>
              </div>

              {/* Window Content Display */}
              <div className="p-5 sm:p-8 bg-[#0d0d10]">
                {/* TAB 1: Revenue & Analytics View */}
                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                        <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                          30-Day Gross Volume
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                          $128,450.00
                        </div>
                        <div className="flex items-center gap-1 text-xs text-emerald-400 font-semibold mt-2">
                          <TrendingUp className="w-3.5 h-3.5" /> +34.8% vs last month
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                        <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                          Active Live Shoppers
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                          1,842
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Global Edge Traffic
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                        <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                          Checkout Conversion
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                          4.82%
                        </div>
                        <div className="text-xs text-zinc-400 mt-2">Industry avg: 1.9%</div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                        <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                          Total Orders Fulfilled
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                          1,248
                        </div>
                        <div className="text-xs text-emerald-400 mt-2 font-medium">
                          99.4% SLA on-time
                        </div>
                      </div>
                    </div>

                    {/* Chart + Recent Orders Feed */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      {/* Visual Chart Simulation */}
                      <div className="lg:col-span-2 p-5 rounded-xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h2 className="text-sm font-semibold text-white">
                              Revenue Velocity & Order Peaks
                            </h2>
                            <p className="text-xs text-zinc-400">
                              Real-time streaming sales telemetry
                            </p>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                            Live Stream
                          </span>
                        </div>

                        {/* Bar chart mockup */}
                        <div className="h-44 flex items-end gap-2 sm:gap-3 pt-6 px-2">
                          {[35, 52, 48, 65, 80, 58, 92, 74, 88, 110, 95, 128, 142, 130].map(
                            (val, idx) => (
                              <div
                                key={idx}
                                className="flex-1 flex flex-col items-center gap-1 group"
                              >
                                <div
                                  className={`w-full rounded-t transition-all duration-300 ${
                                    idx === 12
                                      ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50'
                                      : 'bg-zinc-800 group-hover:bg-emerald-500/60'
                                  }`}
                                  style={{ height: `${(val / 150) * 100}%` }}
                                ></div>
                                <span className="text-[9px] text-zinc-500 font-mono">
                                  {idx + 1}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Real-time Order Stream */}
                      <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-sm font-semibold text-white">Live Dispatches</h2>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        </div>
                        <div className="space-y-3">
                          {[
                            {
                              id: '#GB-8942',
                              customer: 'Liam Vance',
                              item: 'AeroFlow Ergonomic Chair',
                              amt: '$149.00',
                              status: 'Fulfillment',
                              color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
                            },
                            {
                              id: '#GB-8941',
                              customer: 'Sophia Chen',
                              item: 'Lumina LED Desk Lamp',
                              amt: '$42.00',
                              status: 'Paid',
                              color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
                            },
                            {
                              id: '#GB-8940',
                              customer: 'Marcus Roy',
                              item: 'Ceramic Artisan Mug (Set of 2)',
                              amt: '$36.00',
                              status: 'In Transit',
                              color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
                            },
                            {
                              id: '#GB-8939',
                              customer: 'Elena White',
                              item: 'Executive Felt Desk Pad',
                              amt: '$58.00',
                              status: 'Delivered',
                              color: 'text-zinc-400 bg-zinc-800 border-zinc-700',
                            },
                          ].map((order, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between text-xs"
                            >
                              <div className="truncate mr-2">
                                <div className="font-semibold text-zinc-200 truncate">
                                  {order.customer}
                                </div>
                                <div className="text-[11px] text-zinc-400 truncate">
                                  {order.item}
                                </div>
                              </div>
                              <div className="text-right shrink-0">
                                <div className="font-mono font-bold text-white">{order.amt}</div>
                                <span
                                  className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium border ${order.color}`}
                                >
                                  {order.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Live Storefront View */}
                {activeTab === 'storefront' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-semibold text-white">Live Published Storefront</span>
                        <span className="text-zinc-500 font-mono">/store/{activeSlug}</span>
                      </div>
                      <Link
                        to={`/store/${activeSlug}`}
                        target="_blank"
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium flex items-center gap-1 transition-colors"
                      >
                        Open Fullscreen Tab <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Miniature Storefront Card Rendering */}
                    <div className="bg-white text-zinc-900 rounded-xl p-6 shadow-inner border border-zinc-200">
                      <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                        <div className="font-bold text-lg font-['Geist',sans-serif] tracking-tight">
                          The Everyday Studio
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium text-zinc-600">
                          <span>Catalog</span>
                          <span>About</span>
                          <span className="flex items-center gap-1 font-semibold text-zinc-900">
                            <ShoppingBag className="w-4 h-4" /> (2)
                          </span>
                        </div>
                      </div>

                      <div className="py-6">
                        <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                          New Spring Collection
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mt-1">
                          Thoughtfully chosen. Made for everyday.
                        </h2>
                      </div>

                      {/* Product Preview Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {sampleProducts.slice(0, 3).map((prod) => (
                          <div
                            key={prod.id}
                            className="group p-3 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all bg-zinc-50"
                          >
                            <div className="h-32 rounded-md overflow-hidden bg-white mb-2 flex items-center justify-center p-2">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="h-full w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="font-semibold text-xs text-zinc-800 truncate">
                              {prod.name}
                            </div>
                            <div className="flex items-center justify-between mt-1 text-xs">
                              <span className="font-mono font-bold text-zinc-900">
                                ₹{prod.price.toLocaleString()}
                              </span>
                              <span className="text-[10px] text-emerald-600 font-medium">
                                In Stock ({prod.stock})
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Visual Theme Engine */}
                {activeTab === 'builder' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4">
                      <h2 className="text-sm font-bold text-white">Visual Palette Switcher</h2>
                      <p className="text-xs text-zinc-400">
                        Select a curated theme configuration to update the storefront canvas in real
                        time.
                      </p>

                      <div className="space-y-2.5">
                        {[
                          {
                            id: 'studio',
                            name: 'Studio Minimal',
                            color: '#635bff',
                            desc: 'Crisp layout, neutral canvas, modern tech feel',
                          },
                          {
                            id: 'botanical',
                            name: 'Sunset Botanical',
                            color: '#e56747',
                            desc: 'Warm terracotta, editorial typography, artisanal vibe',
                          },
                          {
                            id: 'bold',
                            name: 'Momentum Dark',
                            color: '#f5e548',
                            desc: 'Obsidian charcoal with high-voltage neon punch',
                          },
                        ].map((theme) => (
                          <button
                            key={theme.id}
                            type="button"
                            onClick={() => setPreviewTheme(theme.id as any)}
                            className={`w-full p-3 rounded-lg text-left border transition-all flex items-start gap-3 ${
                              previewTheme === theme.id
                                ? 'bg-zinc-800 border-emerald-500/80 shadow-md'
                                : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                            }`}
                          >
                            <div
                              className="w-5 h-5 rounded-full shrink-0 mt-0.5 border border-white/20"
                              style={{ backgroundColor: theme.color }}
                            ></div>
                            <div>
                              <div className="text-xs font-semibold text-white">{theme.name}</div>
                              <div className="text-[11px] text-zinc-400">{theme.desc}</div>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-zinc-800">
                        <Link
                          to={seller ? '/builder' : '/auth'}
                          state={{ mode: 'signup' }}
                          className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Sliders className="w-3.5 h-3.5" />
                          Open Full Theme Customizer
                        </Link>
                      </div>
                    </div>

                    {/* Canvas simulation */}
                    <div className="md:col-span-2 p-6 rounded-xl border border-zinc-800 flex flex-col justify-center items-center text-center transition-colors duration-300 relative overflow-hidden"
                      style={{
                        backgroundColor:
                          previewTheme === 'studio'
                            ? '#f8fafc'
                            : previewTheme === 'botanical'
                            ? '#fff7ed'
                            : '#18181b',
                        color: previewTheme === 'bold' ? '#fafafa' : '#0f172a',
                      }}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">
                        Canvas Theme Active: {previewTheme.toUpperCase()}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 font-['Geist',sans-serif]">
                        Elevated Living & Workspace Artifacts
                      </h3>
                      <p className="text-xs max-w-md opacity-75 mb-6">
                        Designed with high-density materials and calibrated ergonomics for the modern
                        professional.
                      </p>
                      <div className="flex items-center gap-3">
                        <span
                          className="px-4 py-2 rounded-lg text-xs font-semibold text-white shadow-md"
                          style={{
                            backgroundColor:
                              previewTheme === 'studio'
                                ? '#635bff'
                                : previewTheme === 'botanical'
                                ? '#e56747'
                                : '#10b981',
                          }}
                        >
                          Explore Products
                        </span>
                        <span className="text-xs font-medium underline opacity-80 cursor-pointer">
                          Brand Story
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOGO CLOUD / SOCIAL PROOF */}
      <section className="py-12 border-y border-zinc-800/80 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">
            Empowering modern direct-to-consumer flagships and scaling retailers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70">
            {['AURA LIVING', 'VELOX AUDIO', 'STUDIO NORDIC', 'KINETIC LABS', 'VERTEX GOODS', 'LUMINA DESIGN'].map(
              (brand, idx) => (
                <div
                  key={idx}
                  className="font-bold text-sm tracking-wider font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 6. PILLARS & FEATURES (BENTO GRID) */}
      <section id="features" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
              <Zap className="w-3.5 h-3.5" /> Built for Scale & Speed
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Geist',sans-serif]">
              Everything you need to run high-velocity commerce.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400">
              Stop stitching together dozens of fragile plugins. Genbytez provides the unified operating
              system that powers storefronts, inventory, fulfillment, and business intelligence.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Large Featured */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-[#121215] border border-zinc-800 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Visual Theme & Storefront Customizer
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-xl">
                  Curate brand aesthetics with zero code. Switch between architectural palettes,
                  tune typography scales, inject custom hero imagery, and see changes update
                  instantaneously across desktop and mobile devices.
                </p>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#09090b] border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span>Theme Engine: React 19 + Edge Dynamic SSR</span>
                <span className="text-emerald-400 font-semibold">0.02s Re-render</span>
              </div>
            </div>

            {/* Bento 2 */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-zinc-800 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Live Unified Inventory Matrix
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Real-time stock reservation prevents overselling. Automated low-stock thresholds, SKU
                  variant tracking, and instant replenishment alerts.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Multi-warehouse synchronization</span>
              </div>
            </div>

            {/* Bento 3 */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-zinc-800 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  High-Speed One-Click Checkout
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Frictionless checkout experience supporting credit cards, Apple Pay, Google Pay, and
                  UPI. Eliminate cart abandonment bottlenecks.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>PCI-DSS Level 1 compliant</span>
              </div>
            </div>

            {/* Bento 4: Wide Featured */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-[#121215] border border-zinc-800 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Real-Time Telemetry & Customer Intelligence
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-xl">
                  Deep analytics with zero third-party cookie bloat. Monitor live sessions, cart
                  additions, average order value (AOV), returning buyer cohorts, and fulfillment
                  throughput right from your command center.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="text-[11px] text-zinc-400">Conversion Rate</div>
                  <div className="text-lg font-bold text-white mt-0.5">4.82%</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="text-[11px] text-zinc-400">Avg Order Value</div>
                  <div className="text-lg font-bold text-white mt-0.5">$114.50</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="text-[11px] text-zinc-400">Repeat Customers</div>
                  <div className="text-lg font-bold text-white mt-0.5">42.6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURE & SPEED BENCHMARK */}
      <section id="architecture" className="py-20 bg-[#0c0c0e] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">
                <Globe className="w-3.5 h-3.5" /> Edge Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Engineered for sub-80ms page transitions worldwide.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Traditional platforms force customer requests through monolithic databases and
                heavy plugin middleware. Genbytez serves storefront assets directly from distributed
                edge nodes closest to your shopper, driving conversion rates through the roof.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Global Edge Cache</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Store assets and static catalogs are replicated across 280+ edge Points of Presence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Instant SEO Scoring</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Clean semantic HTML markup, automated OpenGraph metadata, and perfect Google Lighthouse scores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Automated SSL & Domain Routing</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Zero configuration Let's Encrypt certificates issued automatically upon DNS pointing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-zinc-800 shadow-xl">
              <h3 className="text-base font-bold text-white mb-6">Performance Benchmark Comparison</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Genbytez Commerce Platform
                    </span>
                    <span className="text-emerald-400 font-mono">74ms TTFB</span>
                  </div>
                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[94%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-zinc-400">Standard Shopify Store + 15 Apps</span>
                    <span className="text-zinc-400 font-mono">1,480ms TTFB</span>
                  </div>
                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-zinc-600 rounded-full w-[45%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-zinc-400">Self-Hosted WooCommerce</span>
                    <span className="text-zinc-400 font-mono">2,850ms TTFB</span>
                  </div>
                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-zinc-700 rounded-full w-[25%]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                <span>Tested on global 4G/5G mobile connection simulation</span>
                <span className="text-emerald-400 font-semibold">+68% Higher Conversions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LIVE STORE SHOWCASE */}
      <section id="showcase" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
                <Store className="w-3.5 h-3.5" /> Real Stores in Action
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Crafted with Genbytez. Ready to shop.
              </h2>
            </div>
            <Link
              to={`/store/${activeSlug}`}
              target="_blank"
              className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 transition-colors flex items-center gap-1.5"
            >
              Explore Live Flagship <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Showcase 1 */}
            <div className="rounded-2xl bg-[#121215] border border-zinc-800 overflow-hidden flex flex-col group hover:border-zinc-700 transition-all">
              <div className="h-56 bg-zinc-900 relative overflow-hidden flex items-center justify-center p-6">
                <img
                  src={sampleProducts[0]?.image}
                  alt="AeroFlow Ergonomics"
                  className="h-full object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                  Minimalist Studio Theme
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">The Everyday Studio</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Flagship lifestyle workspace catalog showcasing ergonomic seating, lumina desk
                    lamps, and artisan ceramics.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">/store/the-everyday-studio</span>
                  <Link
                    to="/store/the-everyday-studio"
                    target="_blank"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                  >
                    Visit Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Showcase 2 */}
            <div className="rounded-2xl bg-[#121215] border border-zinc-800 overflow-hidden flex flex-col group hover:border-zinc-700 transition-all">
              <div className="h-56 bg-zinc-900 relative overflow-hidden flex items-center justify-center p-6">
                <img
                  src={sampleProducts[1]?.image}
                  alt="Lumina Tech"
                  className="h-full object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-teal-400 text-[10px] font-mono border border-teal-500/20">
                  Sunset Botanical Theme
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Lumina Illumination Labs</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Architectural lighting and desktop wellness equipment with curated warm temperature
                    LED arrays.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">/store/lumina-labs</span>
                  <Link
                    to={seller ? '/builder' : '/auth'}
                    state={{ mode: 'signup' }}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1"
                  >
                    Build Like This <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Showcase 3 */}
            <div className="rounded-2xl bg-[#121215] border border-zinc-800 overflow-hidden flex flex-col group hover:border-zinc-700 transition-all">
              <div className="h-56 bg-zinc-900 relative overflow-hidden flex items-center justify-center p-6">
                <img
                  src={sampleProducts[2]?.image}
                  alt="Ceramic Crafts"
                  className="h-full object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 text-[10px] font-mono border border-amber-500/20">
                  Momentum Bold Theme
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Artisan Rituals Studio</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Hand-turned clay ceramics, matte finishes, and sustainable kitchenware objects.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">/store/artisan-rituals</span>
                  <Link
                    to={seller ? '/builder' : '/auth'}
                    state={{ mode: 'signup' }}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    Build Like This <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING SECTION */}
      <section id="pricing" className="py-24 sm:py-32 bg-[#0c0c0e] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
            <CreditCard className="w-3.5 h-3.5" /> Transparent & Predictable
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Geist',sans-serif]">
            Plans that scale with your ambitions.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            No unexpected platform cut. No plugin subscription fees. 14 days free on every tier.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                !isAnnual ? 'bg-zinc-800 text-white shadow-xs' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Annual Billing
              <span className="px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 text-[10px] font-bold uppercase">
                Save 20%
              </span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Starter Plan */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Starter</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Ideal for creators and emerging merchants launching their first catalog.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${isAnnual ? '23' : '29'}
                  </span>
                  <span className="text-xs text-zinc-400">/ month</span>
                </div>

                <div className="mt-8 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>1 Live Public Storefront</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Up to 100 Products with Variants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Sub-80ms Global Edge CDN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Standard Inventory Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>2 Staff Accounts</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Link
                  to="/auth"
                  state={{ mode: 'signup' }}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs text-center block transition-colors"
                >
                  Start Starter Trial
                </Link>
              </div>
            </div>

            {/* Growth Plan (Popular) */}
            <div className="p-8 rounded-2xl bg-[#15171a] border-2 border-emerald-500 relative flex flex-col justify-between shadow-2xl shadow-emerald-950/40">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-[#09090b] font-bold text-[11px] tracking-wide uppercase">
                Most Popular for Scaling
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Growth</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  For high-growth direct-to-consumer brands needing multi-warehouse sync.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${isAnnual ? '63' : '79'}
                  </span>
                  <span className="text-xs text-zinc-400">/ month</span>
                </div>

                <div className="mt-8 space-y-3 text-xs text-zinc-200">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>
                      <strong>0% Platform Transaction Fees</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Unlimited Products & Collections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Custom Domain with Auto-SSL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Multi-Warehouse Inventory Matrix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Abandoned Cart Recovery Flows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>10 Staff Accounts + Custom Roles</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Link
                  to="/auth"
                  state={{ mode: 'signup' }}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#09090b] font-bold text-xs text-center block transition-colors shadow-lg shadow-emerald-950"
                >
                  Start Growth 14-Day Trial
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Enterprise Scale</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  High-volume retail networks, multi-brand holding companies & omni-channel.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${isAnnual ? '199' : '249'}
                  </span>
                  <span className="text-xs text-zinc-400">/ month</span>
                </div>

                <div className="mt-8 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Unlimited Stores & Storefronts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Dedicated Solution Engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>99.99% Guaranteed SLA Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Custom Webhooks & REST API Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Unlimited Staff & Granular RBAC</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Link
                  to="/auth"
                  state={{ mode: 'signup' }}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs text-center block transition-colors"
                >
                  Contact Enterprise Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Geist',sans-serif]">
              Loved by fast-moving retail founders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "Migrating from Shopify to Genbytez cut our page load times by 70%. Our mobile
                  conversion rate leaped from 2.8% to 4.9% in our very first week."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600/30 text-emerald-300 font-bold flex items-center justify-center text-xs">
                  MJ
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Marcus Jenkins</div>
                  <div className="text-[10px] text-zinc-400">Founder, Nordic Lifestyle</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "The unified multi-warehouse inventory matrix eliminated overselling completely.
                  Managing dispatches and tracking NDR returns now takes our team 15 minutes a day."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-600/30 text-teal-300 font-bold flex items-center justify-center text-xs">
                  RD
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Rohan Deshmukh</div>
                  <div className="text-[10px] text-zinc-400">Operations Director, Artisan Supply</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "No monthly app subscription avalanche, no code breakage when updating. The built-in
                  visual builder and edge routing gives us full freedom."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-600/30 text-purple-300 font-bold flex items-center justify-center text-xs">
                  PN
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Priya Nair</div>
                  <div className="text-[10px] text-zinc-400">Catalog Specialist, GaN Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-24 bg-[#0c0c0e] border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" /> Got Questions?
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Geist',sans-serif]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Everything you need to know about setting up and running your store on Genbytez.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#121215] border border-zinc-800/80 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#101915] to-[#09090b] border border-emerald-500/30 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
                Instant Cloud Provisioning
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                Ready to launch your high-converting online flagship?
              </h2>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Join over 14,000 ambitious retail founders scaling their online sales with Genbytez.
                Set up in minutes without upfront costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                to={seller ? '/overview' : '/auth'}
                state={{ mode: 'signup' }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#09090b] font-bold text-sm shadow-xl shadow-emerald-950 transition-all text-center flex items-center justify-center gap-2 group"
              >
                {seller ? 'Open Workspace' : 'Get Started in 60 Seconds'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/store/the-everyday-studio"
                target="_blank"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700 transition-colors text-center"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SAAS FOOTER */}
      <footer className="border-t border-zinc-800/80 bg-[#09090b] text-zinc-400 text-xs py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-zinc-800/80">
            {/* Brand column */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Store className="w-4 h-4" />
                </div>
                <span className="font-bold text-base text-white font-['Geist',sans-serif]">
                  Genbytez Commerce
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                The next-generation commerce operating system empowering modern direct-to-consumer
                brands with sub-80ms edge storefronts and unified inventory.
              </p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                All Global Systems Operational (99.99%)
              </div>
            </div>

            {/* Product Links */}
            <div>
              <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">
                Platform
              </div>
              <div className="space-y-2">
                <div>
                  <a href="#features" className="hover:text-white transition-colors">
                    Storefront Engine
                  </a>
                </div>
                <div>
                  <a href="#builder" className="hover:text-white transition-colors">
                    Theme Customizer
                  </a>
                </div>
                <div>
                  <Link to="/overview" className="hover:text-white transition-colors">
                    Admin Workspace
                  </Link>
                </div>
                <div>
                  <Link to="/inventory" className="hover:text-white transition-colors">
                    Inventory Sync
                  </Link>
                </div>
                <div>
                  <Link to="/orders" className="hover:text-white transition-colors">
                    Order Hub
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">
                Resources
              </div>
              <div className="space-y-2">
                <div>
                  <Link to="/store/the-everyday-studio" className="hover:text-white transition-colors">
                    Live Demo Store
                  </Link>
                </div>
                <div>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Merchant Guides
                  </a>
                </div>
                <div>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing Calculator
                  </a>
                </div>
                <div>
                  <Link to="/settings" className="hover:text-white transition-colors">
                    API & Webhooks
                  </Link>
                </div>
              </div>
            </div>

            {/* Company & Auth */}
            <div>
              <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">
                Account
              </div>
              <div className="space-y-2">
                <div>
                  <Link to="/auth" className="hover:text-white transition-colors">
                    Merchant Login
                  </Link>
                </div>
                <div>
                  <Link
                    to="/auth"
                    state={{ mode: 'signup' }}
                    className="hover:text-white transition-colors"
                  >
                    Register Brand
                  </Link>
                </div>
                <div>
                  <Link to="/team" className="hover:text-white transition-colors">
                    Team Management
                  </Link>
                </div>
                <div>
                  <Link to="/settings" className="hover:text-white transition-colors">
                    Security & SSO
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>© {new Date().getFullYear()} Genbytez Technologies Inc. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
              <span className="hover:text-zinc-400 cursor-pointer">Security Whitepaper</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
