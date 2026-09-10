# Genbytez Customer Store Workspace (Static React SPA)

A modern, static single-page application (SPA) built with **React 19**, **Vite**, **TypeScript**, **React Router**, **Tailwind CSS**, and **Shadcn / Base UI**.

No Drizzle, no Wrangler, no Cloudflare Workers, and no external backend servers are required. Everything runs directly in the browser with local persistence.

---

## Architecture & Codebase Structure

```
src/
├── components/
│   ├── admin/           # Admin layout & workspace management components
│   ├── builder/         # 5-step store setup components (Details, Theme, Products, Domain, Review, ProductModal)
│   ├── common/          # Reusable UI (AdminHeader, AdminSubNav, Toast, ActionDialog, QuickMenu)
│   ├── storefront/      # Reusable storefront components (Header, Hero, Collection, ProductCard, CartModal, Footer)
│   └── ui/              # Base-UI / Shadcn primitive components (dialog, button, card, badge, etc.)
├── context/
│   ├── AuthContext.tsx  # Client-side seller auth state & session management
│   └── StoreContext.tsx # Store draft, active products, live publishing state, and cart management
├── hooks/
│   ├── useAuth.ts       # Hook for accessing seller identity & authentication
│   ├── useStore.ts      # Hook for accessing store data, draft updates, and shopping bag
│   └── use-mobile.ts    # Responsive breakpoint detection hook
├── lib/
│   ├── utils.ts         # Utility functions (cn, clsx, tailwind-merge)
│   ├── store-types.ts   # Re-exported store domain types
│   └── sample-products.ts
├── pages/
│   ├── AdminWorkspacePage.tsx # Master container for the 12 admin dashboards
│   ├── SellerSetupPage.tsx    # 5-step shop builder wizard
│   ├── StorefrontPage.tsx     # Public storefront page at /store/:slug
│   └── screens/               # The 12 admin screens (Overview, Orders, OrderDetail, Products, etc.)
├── services/
│   ├── mockData.ts       # Initial catalog samples, themes, and demo account
│   └── storageService.ts # Pure client-side persistence (localStorage engine)
├── styles/
│   ├── globals.css      # Tailwind & custom brand design tokens
│   └── seller.css       # Store builder & storefront styling
├── types/
│   ├── admin.ts         # Screen keys, routing maps, modal types
│   └── store.ts         # StoreDraft, Product, Seller, StoreRecord interfaces
├── App.tsx              # Root application router with HashRouter
└── main.tsx             # React 19 entry point
```

---

## Features Included

- **Five-Step Shop Builder**:
  1. **Shop details**: Store name, custom `/store/slug` URL generator, tagline, description, and currency.
  2. **Choose a theme**: Studio, Sunset, and Momentum themes with live color accent pickers.
  3. **Product catalog**: Add, edit, remove products with stock and image validation.
  4. **Domain & URL**: Instant platform link and custom domain verification.
  5. **Review & publish**: Review checklist and one-click publish/unpublish.
- **Interactive Public Storefront**:
  - Available at `#/store/:slug` with responsive navigation, hero banner, search bar, stock-aware shopping bag, and product detail modal.
- **12 Admin Workspace Dashboards**:
  - Overview, Orders, Order Details, Products, Product Editor, Inventory, Customers, Categories, Settings, Team & Billing, Sign-In, and Onboarding.
- **Zero Server Backend**:
  - Data persists automatically to `localStorage`.
  - Works anywhere static websites can be hosted (GitHub Pages, Netlify, Vercel, S3, Cloudflare Pages, etc.).

---

## Running Locally

Requires **Node.js 20+** (Node 22 and 24 are fully supported).

```bash
# Install dependencies
npm install

# Run the local development server (with hot reload)
npm run dev

# Run TypeScript type check
npm run typecheck

# Build static production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```
