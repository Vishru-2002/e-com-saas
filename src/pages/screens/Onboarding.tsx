import React from 'react';

export default function Onboarding() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-xl md:p-space-2xl shadow-sm mb-space-xl">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-secondary/5 rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
            <div className="space-y-space-xs max-w-xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span >{"Workspace Setup in Progress"}</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"\n          Welcome to Genbytez, Sarah! Let's set up your store.\n        "}</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">{"\n          Complete these 4 foundational steps to start selling and accepting payments worldwide.\n        "}</p>
            </div>

            <div className="flex items-center gap-space-md bg-surface-container-low px-space-lg py-space-md rounded-xl self-start md:self-auto">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                  <circle className="text-surface-container-highest" cx="24" cy="24" fill="none" r="19" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="text-secondary transition-all duration-700" cx="24" cy="24" fill="none" r="19" stroke="currentColor" strokeDasharray="119.38" strokeDashoffset="59.69" strokeLinecap="round" strokeWidth="4"></circle>
                </svg>
                <span className="absolute font-code-tabular text-code-tabular text-on-surface font-bold">{"50%"}</span>
              </div>
              <div >
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Overall Progress"}</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">{"Step 2 of 4"}</div>
              </div>
            </div>
          </div>

          <div className="mt-space-xl pt-space-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">

              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">{"check"}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-secondary">{"Step 01"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-medium truncate">{"Store Basics"}</div>
                </div>
              </div>

              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-primary text-on-primary shadow-sm">
                <div className="w-6 h-6 rounded-full bg-on-primary text-primary flex items-center justify-center shrink-0 font-code-tabular text-code-tabular font-bold">{"\n            2\n          "}</div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-primary-fixed-dim">{"Active Step"}</div>
                  <div className="font-body-sm text-body-sm text-on-primary font-semibold truncate">{"Currency & Regional"}</div>
                </div>
              </div>

              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low opacity-60">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0 font-code-tabular text-code-tabular">{"\n            3\n          "}</div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{"Pending"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface truncate">{"Add First Product"}</div>
                </div>
              </div>

              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low opacity-60">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0 font-code-tabular text-code-tabular">{"\n            4\n          "}</div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{"Pending"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface truncate">{"Custom Domain & Pay"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-md mb-space-lg">
                <div >
                  <span className="font-code-tabular text-code-tabular text-secondary uppercase tracking-wider font-semibold">{"STAGE 02 CONFIGURATION"}</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">{"Currency, Region & Store Configuration"}</h2>
                </div>
                <span className="material-symbols-outlined text-outline text-[24px]">{"tune"}</span>
              </div>
              <form className="space-y-space-xl" id="onboarding-step-form">

                <div className="space-y-space-xs">
                  <label className="block font-label-md text-label-md text-on-surface font-medium" htmlFor="store-name">{"\n              Store Public Display Name "}<span className="text-error">{"*"}</span>
                  </label>
                  <div className="relative">
                    <input className="w-full h-11 px-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest transition-colors" id="store-name" placeholder="e.g. Acme Marketplace" type="text" defaultValue="Genbytez Flagship Store" />
                    <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline text-[18px]">{"storefront"}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Displayed to consumers on invoices, checkout, and transactional email footers."}</p>
                </div>

                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="block font-label-md text-label-md text-on-surface font-medium" htmlFor="store-currency">{"\n                Default Operational Currency "}<span className="text-error">{"*"}</span>
                    </label>
                    <span className="font-code-tabular text-code-tabular text-secondary flex items-center gap-space-2xs">
                      <span className="material-symbols-outlined text-[14px]">{"lock"}</span>{" Settlement Locked\n              "}</span>
                  </div>
                  <div className="relative">
                    <select className="w-full h-11 px-space-md pr-10 appearance-none bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest transition-colors cursor-pointer" id="store-currency" defaultValue={"INR"}>
                      <option value="INR">{"INR - Indian Rupee (₹)"}</option>
                      <option value="USD">{"USD - United States Dollar ($)"}</option>
                      <option value="EUR">{"EUR - European Euro (â‚¬)"}</option>
                      <option value="GBP">{"GBP - British Pound (Â£)"}</option>
                      <option value="SGD">{"SGD - Singapore Dollar (S$)"}</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">{"expand_more"}</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm mt-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">{"info"}</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n                Used for default catalog pricing, ledger reconciliation, settlements, and regional tax calculation. Multi-currency conversions apply dynamically at checkout.\n              "}</p>
                  </div>
                </div>

                <div className="space-y-space-sm">
                  <label className="block font-label-md text-label-md text-on-surface font-medium">{"\n              Primary Store Industry & Catalog Type\n            "}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md" id="industry-selector">

                    <div className="industry-tile relative p-space-md rounded-xl cursor-pointer transition-all bg-surface-container-lowest shadow-md ring-2 ring-primary flex flex-col justify-between h-32" data-selected="true">
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">{"devices"}</span>
                        </div>
                        <span className="selection-badge inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[12px]">{"check"}</span>{" Selected\n                  "}</span>
                      </div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Electronics & Gadgets"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{"Hardware, accessories, serial inventory"}</div>
                      </div>
                    </div>

                    <div className="industry-tile relative p-space-md rounded-xl cursor-pointer transition-all bg-surface-container-low hover:bg-surface-container flex flex-col justify-between h-32" data-selected="false">
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">{"apparel"}</span>
                        </div>
                        <span className="selection-badge hidden items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[12px]">{"check"}</span>{" Selected\n                  "}</span>
                      </div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Apparel & Fashion"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{"Matrix variants, sizing, fast trends"}</div>
                      </div>
                    </div>

                    <div className="industry-tile relative p-space-md rounded-xl cursor-pointer transition-all bg-surface-container-low hover:bg-surface-container flex flex-col justify-between h-32" data-selected="false">
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">{"chair"}</span>
                        </div>
                        <span className="selection-badge hidden items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[12px]">{"check"}</span>{" Selected\n                  "}</span>
                      </div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Home & Living"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{"Bulky dimensional weight, custom craft"}</div>
                      </div>
                    </div>

                    <div className="industry-tile relative p-space-md rounded-xl cursor-pointer transition-all bg-surface-container-low hover:bg-surface-container flex flex-col justify-between h-32" data-selected="false">
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">{"token"}</span>
                        </div>
                        <span className="selection-badge hidden items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[12px]">{"check"}</span>{" Selected\n                  "}</span>
                      </div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Digital Goods & Software"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{"License keys, asset downloads, SaaS"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                  <div className="space-y-space-xs">
                    <label className="block font-label-md text-label-md text-on-surface font-medium" htmlFor="warehouse-select">{"\n                Default Fulfillment Hub Origin\n              "}</label>
                    <div className="relative">
                      <select className="w-full h-11 px-space-md pr-10 appearance-none bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest transition-colors cursor-pointer" id="warehouse-select" defaultValue={"mum-01"}>
                        <option value="mum-01">{"Mumbai Central Hub - Primary (BOM-01)"}</option>
                        <option value="blr-02">{"Bengaluru North Fulfillment (BLR-02)"}</option>
                        <option value="del-01">{"Delhi NCR Transit Logistics (DEL-01)"}</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">{"expand_more"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Default dispatch point for distance calculations."}</p>
                  </div>
                  <div className="space-y-space-xs">
                    <label className="block font-label-md text-label-md text-on-surface font-medium" htmlFor="tax-id">{"\n                GSTIN / Regional Corporate Tax ID\n              "}</label>
                    <div className="relative">
                      <input className="w-full h-11 px-space-md font-code-tabular text-code-tabular bg-surface-container-low text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors uppercase tracking-wider" id="tax-id" placeholder="e.g. 27AAAAA0000A1Z5" type="text" defaultValue="27AAAAA0000A1Z5" />
                      <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-secondary text-[18px]">{"verified"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Validated against National Tax Database registry."}</p>
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md pt-space-lg">
                  <button className="w-full sm:w-auto px-space-lg h-11 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-space-xs" type="button" aria-label="arrow_back \n Back to Store Basics">
                    <span className="material-symbols-outlined text-[16px]">{"arrow_back"}</span>
                    <span >{"Back to Store Basics"}</span>
                  </button>
                  <div className="flex items-center gap-space-md w-full sm:w-auto">
                    <a className="px-space-md py-2 text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors text-center" href="#">{"\n                Skip for now\n              "}</a>
                    <button className="w-full sm:w-auto px-space-xl h-11 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs shadow-md" id="submit-btn" type="button" aria-label="Save & Continue to Product Catalog \n arrow_forward">
                      <span >{"Save & Continue to Product Catalog"}</span>
                      <span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col sm:flex-row items-center gap-space-lg">
              <div className="w-full sm:w-1/3 h-28 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Modern high-tech international logistics fulfillment center with robotic sorting bins, illuminated shipping labels in cool slate and deep graphite colors, subtle amber and mint indicator lights, sleek corporate editorial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtnWDMXjn1h1WMATbVJIt8Cw-8VjHdZxImCpnWgr5xV8oVNZi1dIHZpgZ-0U7ePUU6A2USu5Jzq5yOQklDliq92O78UgVo5jdIrLH8POV3KDLQpXAxNLVDpg3u9_Aw5YPS7yv5Y71PmSO6nXRWjuVvul-UrWqh-XtqmKfJtiP8vB2K8RSmPxMyWwV8dFbofsnXBc1z2FtC_9674SYyQNZVFNANG6HESZrR2WQrYcJJjT8srnVf7Ivd" />
              </div>
              <div className="space-y-space-2xs">
                <div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">{"public"}</span>
                  <span >{"Edge Routing Ready"}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">{"Automated Cross-Border Calculations"}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n            Your currency choices enable automated HS code matching, customs duties estimations, and domestic tax reconciliation across all 28 states and union territories.\n          "}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-lg">

            <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-base">
                <div >
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{"Store Launch Checklist"}</h3>
                  <span className="font-code-tabular text-code-tabular text-secondary font-semibold">{"2 of 5 ready to publish"}</span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[24px]">{"task_alt"}</span>
              </div>

              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mb-space-lg">
                <div className="h-full bg-secondary w-2/5 rounded-full"></div>
              </div>
              <ul className="space-y-space-md">

                <li className="flex items-start gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">{"check"}</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-body-sm text-body-sm text-on-surface line-through opacity-75">{"Create account & tenant workspace"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"Allocated to US-East-1 AWS cluster"}</p>
                  </div>
                </li>

                <li className="flex items-start gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">{"check"}</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-body-sm text-body-sm text-on-surface line-through opacity-75">{"Configure store business profile"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"Tax origin & currency preferences"}</p>
                  </div>
                </li>

                <li className="flex items-start gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-surface-container-high text-outline flex items-center justify-center shrink-0 mt-0.5 font-code-tabular text-[10px]">{"\n              3\n            "}</div>
                  <div className="min-w-0">
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">{"Add first 3 products or bulk CSV"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"SKUs, pricing, inventory stock limits"}</p>
                  </div>
                </li>

                <li className="flex items-start gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-surface-container-high text-outline flex items-center justify-center shrink-0 mt-0.5 font-code-tabular text-[10px]">{"\n              4\n            "}</div>
                  <div className="min-w-0">
                    <span className="font-body-sm text-body-sm text-on-surface">{"Connect custom domain"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"e.g., store.genbytez.com or brand.com"}</p>
                  </div>
                </li>

                <li className="flex items-start gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-surface-container-high text-outline flex items-center justify-center shrink-0 mt-0.5 font-code-tabular text-[10px]">{"\n              5\n            "}</div>
                  <div className="min-w-0">
                    <span className="font-body-sm text-body-sm text-on-surface">{"Configure Payment Gateway"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"Connect Stripe, Razorpay or PayPal"}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-space-lg pt-space-md">
                <button className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button" aria-label="Preview Public Storefront \n open_in_new">
                  <span >{"Preview Public Storefront"}</span>
                  <span className="material-symbols-outlined text-[16px]">{"open_in_new"}</span>
                </button>
              </div>
            </div>

            <div className="bg-primary-container text-on-primary rounded-xl p-space-lg shadow-sm">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">{"speed"}</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">{"Speed-to-Market Target"}</span>
              </div>
              <div className="font-metric-display text-metric-display text-on-primary">{"12 mins"}</div>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-space-2xs">{"\n          Average merchant setup duration before receiving initial test checkout order.\n        "}</p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-sm h-48 bg-surface-container">
              <img className="w-full h-full object-cover" data-alt="Minimalist top-down view of organized workspace desk with high-end designer laptop displaying analytics dashboard charts, fine ceramic coffee cup, leather notebook, soft morning architectural light, neutral charcoal and cool grey palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWZ-y1Fi-0ox4fIisjEC875uHC_ze2GK5FyNno6F_6n78vbuiHqdqAuaVlzSuo0pO45dZ1CiMEaJmPJVRdSngksqy9wSbUMG0nxJP7HV2rF9yfA_VADbwYAusTCYa7qJz1U3FA1gXMMcyju_d2bCREOZPK1MXYWNf10dzi2YJm0yTkde8GUQfCMLuujWcGfQfeZSCIYqmzbgHSxdDYC1kXTzjOglhWJCYqRIujC39ELyYnuIJEwLjs" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                <div className="text-on-primary">
                  <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-semibold">{"Pro Merchant Feature"}</div>
                  <div className="font-headline-sm text-headline-sm">{"Omnichannel Sync"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-2xl bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-start gap-space-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">{"support_agent"}</span>
            </div>
            <div >
              <h4 className="font-headline-sm text-headline-sm text-on-surface">{"Need assistance setting up your architecture?"}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">{"\n          Book a complimentary 15-minute 1-on-1 onboarding walk-through with our Store Architect team or read our comprehensive setup guidelines.\n        "}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm shrink-0 w-full md:w-auto">
            <a className="flex-1 md:flex-initial h-10 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex items-center justify-center gap-space-xs transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px]">{"menu_book"}</span>
              <span >{"Documentation"}</span>
            </a>
            <a className="flex-1 md:flex-initial h-10 px-space-lg rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container inline-flex items-center justify-center gap-space-xs transition-colors shadow-sm" href="#">
              <span className="material-symbols-outlined text-[18px]">{"calendar_month"}</span>
              <span >{"Book 15-Min Session"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
