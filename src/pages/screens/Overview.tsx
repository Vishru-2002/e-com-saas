import React from 'react';

export default function Overview() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="relative w-full">
          <div className="absolute -top-12 left-1/3 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="space-y-space-2xs">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <span >{"Commerce Hub"}</span>
                <span >{"/"}</span>
                <span className="text-primary font-semibold">{"Store Telemetry"}</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"Overview"}</h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">{"\n          Real-time store performance, fulfillment velocity, and live settlement streams across domestic logistics hubs.\n        "}</p>
            </div>

            <div className="flex items-center gap-space-sm flex-wrap">
              <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-all" type="button" aria-label="calendar_today \n Last 30 Days (Oct 1 - Oct 30) \n expand_more">
                <span className="material-symbols-outlined text-outline text-[18px]">{"calendar_today"}</span>
                <span className="font-label-md text-label-md">{"Last 30 Days (Oct 1 - Oct 30)"}</span>
                <span className="material-symbols-outlined text-outline text-[16px]">{"expand_more"}</span>
              </button>
              <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary text-on-primary hover:bg-primary/90 shadow-sm transition-colors" type="button" aria-label="ios_share \n Export Report">
                <span className="material-symbols-outlined text-[18px]">{"ios_share"}</span>
                <span className="font-label-md text-label-md font-medium">{"Export Report"}</span>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden mb-space-xl p-space-base rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-md" id="setup-banner">
            <div className="flex items-center gap-space-md">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-secondary-container text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[24px]">{"verified"}</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75"></span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface">{"Setup Checklist: 80% complete"}</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"4 of 5 Tasks"}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n            Connect custom domain to launch publicly and provision enterprise SSL edge routing.\n          "}</p>
              </div>
            </div>
            <div className="flex items-center gap-space-md shrink-0 self-end sm:self-auto">
              <a className="inline-flex items-center gap-space-2xs px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/80 transition-colors" href="#">
                <span >{"Complete setup"}</span>
                <span className="material-symbols-outlined text-[16px]">{"arrow_forward"}</span>
              </a>
              <button className="p-1 rounded-md text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Dismiss banner" type="button" aria-label="close">
                <span className="material-symbols-outlined text-[20px]">{"close"}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-2xl">

            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">{"Total Gross Revenue"}</span>
                <span className="material-symbols-outlined text-outline text-[20px]">{"payments"}</span>
              </div>
              <div className="space-y-space-xs">
                <div className="font-metric-display text-metric-display text-on-surface tracking-tight">{"₹2,489,120"}</div>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">{"trending_up"}</span>{"\n              +18.4%\n            "}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"vs last month"}</span>
                  <span className="ml-auto font-code-tabular text-code-tabular text-secondary font-medium">{"+₹388k net"}</span>
                </div>
              </div>

              <div className="mt-space-md pt-space-xs">
                <svg className="w-full h-8 overflow-visible" fill="none" viewBox="0 0 100 24">
                  <path className="text-secondary" d="M0 20 L15 17 L30 21 L45 13 L60 15 L75 8 L90 10 L100 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
                  <path className="text-secondary/10" d="M0 20 L15 17 L30 21 L45 13 L60 15 L75 8 L90 10 L100 2 V 24 H 0 Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>

            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">{"Active Orders"}</span>
                <span className="material-symbols-outlined text-outline text-[20px]">{"shopping_bag"}</span>
              </div>
              <div className="space-y-space-xs">
                <div className="font-metric-display text-metric-display text-on-surface tracking-tight">{"142 Orders"}</div>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{"\n              28 awaiting fulfillment\n            "}</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs">
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden flex">
                  <div className="bg-secondary h-full" style={{ "width": "65%" }} title="Fulfilled (65%)"></div>
                  <div className="bg-surface-tint h-full" style={{ "width": "20%" }} title="Processing (20%)"></div>
                  <div className="bg-error h-full" style={{ "width": "15%" }} title="Delayed (15%)"></div>
                </div>
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mt-1.5">
                  <span >{"65% dispatched"}</span>
                  <span className="font-code-tabular text-code-tabular">{"20m avg pack time"}</span>
                </div>
              </div>
            </div>

            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">{"Average Order Value"}</span>
                <span className="material-symbols-outlined text-outline text-[20px]">{"equalizer"}</span>
              </div>
              <div className="space-y-space-xs">
                <div className="font-metric-display text-metric-display text-on-surface tracking-tight">{"₹1,840"}</div>
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">{"arrow_upward"}</span>{"\n              +4.2%\n            "}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"upsell uptick"}</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs">
                <div className="flex items-center justify-between font-body-sm text-body-sm">
                  <span className="text-on-surface-variant">{"Bundle attach rate"}</span>
                  <span className="font-code-tabular text-code-tabular font-medium text-on-surface">{"32.8%"}</span>
                </div>
                <div className="flex items-center justify-between font-body-sm text-body-sm mt-1">
                  <span className="text-on-surface-variant">{"Top category"}</span>
                  <span className="font-label-md text-label-md text-on-surface truncate">{"Audio & Studio"}</span>
                </div>
              </div>
            </div>

            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-md text-label-md text-on-surface-variant">{"Inventory Health"}</span>
                <span className="material-symbols-outlined text-outline text-[20px]">{"inventory_2"}</span>
              </div>
              <div className="space-y-space-xs">
                <div className="font-metric-display text-metric-display text-on-surface tracking-tight">{"14 SKUs"}</div>
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[13px]">{"warning"}</span>{"\n              4 critical out of stock\n            "}</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"Reorder suggested"}</span>
                <button className="text-secondary font-label-md text-label-md font-semibold hover:underline" type="button" aria-label="Auto-PO (4) \u2192">{"\n            Auto-PO (4) →\n          "}</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl mb-space-2xl items-start">

            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-lg">
                <div >
                  <h2 className="font-headline-md text-headline-md text-on-surface">{"Sales & Order Volume Trend"}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Daily gross receipts vs. confirmed checkout volumes"}</p>
                </div>

                <div className="inline-flex p-0.5 rounded-lg bg-surface-container-high self-start sm:self-auto">
                  <button className="px-space-md py-1 rounded bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-xs transition-all" id="btn-revenue" type="button" aria-label="Revenue">{"Revenue"}</button>
                  <button className="px-space-md py-1 rounded text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" id="btn-units" type="button" aria-label="Units Sold">{"Units Sold"}</button>
                </div>
              </div>

              <div className="relative w-full h-64 my-space-sm">

                <div className="absolute top-4 left-[72%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
                  <div className="px-space-sm py-1 rounded bg-primary text-on-primary text-[11px] font-code-tabular shadow-md whitespace-nowrap">{"\n              Oct 24: ₹142,500 • 78 orders\n            "}</div>
                  <div className="w-1.5 h-1.5 bg-primary rotate-45 -mt-0.5"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-secondary-container mt-1"></div>
                  <div className="w-px h-36 bg-dashed border-l border-dashed border-outline-variant mt-1"></div>
                </div>

                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 220">

                  <line stroke="#f1effa" strokeWidth="1" x1="0" x2="700" y1="40" y2="40"></line>
                  <line stroke="#f1effa" strokeWidth="1" x1="0" x2="700" y1="90" y2="90"></line>
                  <line stroke="#f1effa" strokeWidth="1" x1="0" x2="700" y1="140" y2="140"></line>
                  <line stroke="#f1effa" strokeWidth="1" x1="0" x2="700" y1="190" y2="190"></line>

                  <path className="text-secondary/10" d="M 0 180 Q 70 160 140 165 T 280 130 T 420 145 T 510 55 T 600 110 T 700 80 L 700 200 L 0 200 Z" fill="currentColor"></path>

                  <path className="text-secondary" d="M 0 180 Q 70 160 140 165 T 280 130 T 420 145 T 510 55 T 600 110 T 700 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>

                  <rect className="fill-surface-variant opacity-80" height="35" rx="2" width="8" x="65" y="160"></rect>
                  <rect className="fill-surface-variant opacity-80" height="30" rx="2" width="8" x="135" y="165"></rect>
                  <rect className="fill-surface-variant opacity-80" height="50" rx="2" width="8" x="205" y="145"></rect>
                  <rect className="fill-surface-variant opacity-80" height="65" rx="2" width="8" x="275" y="130"></rect>
                  <rect className="fill-surface-variant opacity-80" height="45" rx="2" width="8" x="345" y="150"></rect>
                  <rect className="fill-surface-variant opacity-80" height="55" rx="2" width="8" x="415" y="140"></rect>
                  <rect className="fill-secondary-container" height="140" rx="2" width="8" x="506" y="55"></rect>
                  <rect className="fill-surface-variant opacity-80" height="85" rx="2" width="8" x="595" y="110"></rect>
                  <rect className="fill-surface-variant opacity-80" height="115" rx="2" width="8" x="665" y="80"></rect>
                </svg>

                <div className="flex justify-between font-code-tabular text-code-tabular text-outline-variant pt-2">
                  <span >{"Oct 01"}</span>
                  <span >{"Oct 08"}</span>
                  <span >{"Oct 15"}</span>
                  <span >{"Oct 22"}</span>
                  <span >{"Oct 29"}</span>
                </div>
              </div>

              <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-sm text-left">
                <div >
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{"Gross Sales"}</div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{"₹2.84M"}</div>
                </div>
                <div >
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{"Discounts"}</div>
                  <div className="font-headline-sm text-headline-sm text-error font-code-tabular">{"-₹120K"}</div>
                </div>
                <div >
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{"Net Sales"}</div>
                  <div className="font-headline-sm text-headline-sm text-secondary">{"₹2.48M"}</div>
                </div>
                <div >
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{"Returns"}</div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"₹34K"}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
              <div >
                <div className="flex items-center justify-between mb-space-md">
                  <div >
                    <h2 className="font-headline-md text-headline-md text-on-surface">{"Fulfillment Operations"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Courier handoff & transit status"}</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[24px]">{"local_shipping"}</span>
                </div>

                <div className="space-y-space-sm mb-space-lg">

                  <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center font-bold font-code-tabular text-label-md">{"\n                  28\n                "}</div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface">{"Unfulfilled Orders"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{"Requires immediate packing"}</div>
                      </div>
                    </div>
                    <span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">{"Priority"}</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center font-bold font-code-tabular text-label-md">{"\n                  64\n                "}</div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface">{"In Transit"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{"Via BlueDart, Delhivery, Shadowfax"}</div>
                      </div>
                    </div>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"98.2% on-time"}</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold font-code-tabular text-label-md">{"\n                  19\n                "}</div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface">{"Delivered Today"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{"Verified customer OTP deliveries"}</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[20px]">{"task_alt"}</span>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold font-code-tabular text-label-md">{"\n                  3\n                "}</div>
                      <div >
                        <div className="font-headline-sm text-headline-sm text-on-surface">{"Returns & Exceptions"}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{"NDR re-attempts scheduled"}</div>
                      </div>
                    </div>
                    <button className="text-on-surface-variant hover:text-primary font-label-md text-label-md underline" type="button" aria-label="Resolve">{"Resolve"}</button>
                  </div>
                </div>
              </div>

              <div className="pt-space-md">
                <button className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition-all shadow-sm font-label-md text-label-md font-semibold" type="button" aria-label="print \n Batch print 28 shipping labels \n arrow_forward">
                  <span className="material-symbols-outlined text-[18px]">{"print"}</span>
                  <span >{"Batch print 28 shipping labels"}</span>
                  <span className="material-symbols-outlined text-[16px]">{"arrow_forward"}</span>
                </button>
                <div className="flex justify-between items-center mt-2 px-1 text-on-surface-variant font-label-sm text-label-sm">
                  <span >{"Thermal 4x6 format"}</span>
                  <span className="font-code-tabular text-code-tabular">{"AWB sync: Auto"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-lg">
              <div className="flex items-center gap-space-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">{"Live Store Events"}</h2>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"(Last 60 mins)"}</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-code-tabular text-code-tabular">{"Auto-refreshing: 15s"}</span>
                <button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" title="Pause Stream" type="button" aria-label="pause">
                  <span className="material-symbols-outlined text-[18px]">{"pause"}</span>
                </button>
              </div>
            </div>

            <div className="space-y-space-xs">

              <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex items-start gap-space-md min-w-0">
                  <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">{"check_circle"}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{"Order #GB-8924 paid by Rohan Sharma"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"(₹3,499 via Razorpay UPI)"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"\n                Items: Wireless ANC Studio Headphones (Jet Black) • Destination: Bengaluru, KA\n              "}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md shrink-0 self-end md:self-auto">
                  <span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">{"\n              Payment Captured\n            "}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant w-20 text-right">{"4 mins ago"}</span>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex items-start gap-space-md min-w-0">
                  <div className="w-9 h-9 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">{"warning"}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{"Low Stock Warning: Apex Mechanical Studio Keyboard"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"\n                Reached 4 units remaining in Mumbai West Hub (Threshold: 10 units)\n              "}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md shrink-0 self-end md:self-auto">
                  <span className="px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-medium">{"\n              Inventory Alert\n            "}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant w-20 text-right">{"18 mins ago"}</span>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex items-start gap-space-md min-w-0">
                  <div className="w-9 h-9 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">{"local_shipping"}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{"Order #GB-8921 fulfilled & tracking generated"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"\n                Carrier: Delhivery Express • AWB: "}<span className="font-code-tabular text-code-tabular font-medium">{"#DL904812"}</span>{" • Packed by Shift Lead: A. Kulkarni\n              "}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md shrink-0 self-end md:self-auto">
                  <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-medium">{"\n              Shipped\n            "}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant w-20 text-right">{"25 mins ago"}</span>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex items-start gap-space-md min-w-0">
                  <div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">{"shopping_cart_checkout"}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{"Abandoned Cart recovered: Priya Patel"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"(₹1,249 via WhatsApp link)"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"\n                Campaign: 10% Smart Nudge Flow • Customer LTV: ₹8,420\n              "}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md shrink-0 self-end md:self-auto">
                  <span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">{"\n              Cart Recovered\n            "}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant w-20 text-right">{"42 mins ago"}</span>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="flex items-start gap-space-md min-w-0">
                  <div className="w-9 h-9 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">{"person_add"}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{"Customer account registered: Ananya Verma"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"\n                Membership: Silver Tier • Source: Instagram Product Tag • Location: Pune, MH\n              "}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-md shrink-0 self-end md:self-auto">
                  <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">{"\n              New Customer\n            "}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant w-20 text-right">{"55 mins ago"}</span>
                </div>
              </div>
            </div>

            <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-high">
              <span className="font-body-sm text-body-sm text-on-surface-variant">{"Showing latest 5 of 1,248 telemetry records"}</span>
              <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-secondary transition-colors" href="#">
                <span >{"View all 1,248 activity logs"}</span>
                <span className="material-symbols-outlined text-[16px]">{"arrow_forward"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
