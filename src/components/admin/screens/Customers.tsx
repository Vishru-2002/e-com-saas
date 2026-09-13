import React from 'react';

export default function Customers() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-base">
          <nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <span className="hover:text-on-surface cursor-pointer">{"Genbytez Store"}</span>
            <span className="material-symbols-outlined text-outline-variant text-[14px]">{"chevron_right"}</span>
            <span className="hover:text-on-surface cursor-pointer">{"Sales & Operations"}</span>
            <span className="material-symbols-outlined text-outline-variant text-[14px]">{"chevron_right"}</span>
            <span className="font-label-md text-label-md text-on-surface">{"Customers"}</span>
          </nav>
          <div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container font-code-tabular text-code-tabular text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span >{"SYNCED 2M AGO • 1,482 PROFILES"}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-lg mb-space-xl">
          <div className="space-y-space-2xs">
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"Customers"}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">{"\n        Manage customer accounts, purchase history, and lifetime customer value across all channels.\n      "}</p>
          </div>
          <div className="flex items-center flex-wrap gap-space-sm">
            <button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm font-label-md text-label-md transition-all" type="button" aria-label="file_download \n Export List">
              <span className="material-symbols-outlined text-[16px]">{"file_download"}</span>
              <span >{"Export List"}</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm font-label-md text-label-md transition-all" type="button" aria-label="upload_file \n Import CSV">
              <span className="material-symbols-outlined text-[16px]">{"upload_file"}</span>
              <span >{"Import CSV"}</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-lg py-2 rounded bg-primary text-on-primary hover:bg-primary-container shadow-sm font-label-md text-label-md transition-all" type="button" aria-label="person_add \n Add Customer">
              <span className="material-symbols-outlined text-[18px]">{"person_add"}</span>
              <span >{"Add Customer"}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-space-xs p-1 rounded-full bg-surface-container-high w-fit mb-space-2xl overflow-x-auto max-w-full">
          <a className="px-space-lg py-1.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm font-label-md text-label-md font-semibold whitespace-nowrap" href="#">{"\n      Customer Directory\n    "}</a>
          <a className="px-space-lg py-1.5 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap" href="#">{"\n      Segments & Cohorts\n    "}</a>
          <a className="px-space-lg py-1.5 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap" href="#">{"\n      VIP & Loyalty\n    "}</a>
          <a className="px-space-lg py-1.5 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors whitespace-nowrap" href="#">{"\n      Store Reviews\n    "}</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-2xl">

          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">{"Total Customers"}</span>
              <span className="material-symbols-outlined text-[20px] text-secondary">{"groups"}</span>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface mb-space-xs">{"1,482"}</div>
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[12px] mr-0.5">{"trending_up"}</span>{" +14.2%\n          "}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"vs last month"}</span>
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">{"Repeat Purchase Rate"}</span>
              <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">{"repeat"}</span>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface mb-space-xs">{"38.6%"}</div>
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n            +10.6%\n          "}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"Ind. bench: 28%"}</span>
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-on-tertiary-container/5 rounded-full blur-xl pointer-events-none"></div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">{"Average Customer LTV"}</span>
              <span className="material-symbols-outlined text-[20px] text-secondary">{"payments"}</span>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface mb-space-xs">{"₹9,420"}</div>
              <div className="flex items-center gap-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"Lifetime gross spend"}</span>
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">{"Active VIP Cohorts"}</span>
              <span className="material-symbols-outlined text-[20px] text-primary">{"workspace_premium"}</span>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface mb-space-xs">{"184"}</div>
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">{"\n            12.4% of base\n          "}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"High-tier buyers"}</span>
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
          </div>
        </div>

        <div className="p-space-base rounded-xl bg-surface-container-lowest shadow-sm mb-space-base">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">

            <div className="relative flex-1 min-w-[280px]">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">{"search"}</span>
              <input className="w-full h-10 pl-10 pr-space-md rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all" placeholder="Search by name, email, phone (+91), or city..." type="text" />
            </div>

            <div className="flex flex-wrap items-center gap-space-xs">
              <div className="relative">
                <select className="appearance-none h-10 pl-space-md pr-8 rounded bg-surface-container-low font-label-md text-label-md text-on-surface hover:bg-surface-container cursor-pointer focus:outline-none transition-colors">
                  <option >{"Customer Tier: All"}</option>
                  <option >{"VIP Gold"}</option>
                  <option >{"Corporate"}</option>
                  <option >{"Regular"}</option>
                  <option >{"First-Time"}</option>
                </select>
                <span className="material-symbols-outlined absolute right-space-xs top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-[18px]">{"expand_more"}</span>
              </div>
              <div className="relative">
                <select className="appearance-none h-10 pl-space-md pr-8 rounded bg-surface-container-low font-label-md text-label-md text-on-surface hover:bg-surface-container cursor-pointer focus:outline-none transition-colors">
                  <option >{"Orders Placed: Any"}</option>
                  <option >{"1+ Orders"}</option>
                  <option >{"3+ Orders"}</option>
                  <option >{"5+ Orders"}</option>
                </select>
                <span className="material-symbols-outlined absolute right-space-xs top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-[18px]">{"expand_more"}</span>
              </div>
              <div className="relative">
                <select className="appearance-none h-10 pl-space-md pr-8 rounded bg-surface-container-low font-label-md text-label-md text-on-surface hover:bg-surface-container cursor-pointer focus:outline-none transition-colors">
                  <option >{"Location: All India"}</option>
                  <option >{"Karnataka"}</option>
                  <option >{"Maharashtra"}</option>
                  <option >{"Delhi NCR"}</option>
                  <option >{"West Bengal"}</option>
                  <option >{"Gujarat"}</option>
                </select>
                <span className="material-symbols-outlined absolute right-space-xs top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-[18px]">{"expand_more"}</span>
              </div>
              <button className="h-10 px-space-md rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-space-xs transition-colors" type="button" aria-label="calendar_today \n Last Active">
                <span className="material-symbols-outlined text-[16px]">{"calendar_today"}</span>
                <span >{"Last Active"}</span>
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Clear Filters" type="button" aria-label="filter_alt_off">
                <span className="material-symbols-outlined text-[18px]">{"filter_alt_off"}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-space-xs mt-space-sm pt-space-xs border-t-0 flex-wrap">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mr-space-xs">{"Filtered by:"}</span>
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{"\n        Tier: All Active\n        "}<span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-error">{"close"}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{"\n        Channel: Web & WhatsApp\n        "}<span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-error">{"close"}</span>
            </span>
            <button className="font-label-sm text-label-sm text-secondary hover:underline ml-space-xs" type="button" aria-label="Reset All">{"Reset All"}</button>
          </div>
        </div>

        <div className="w-full rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden mb-space-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead >
                <tr className="bg-surface-container-low text-on-surface-variant">
                  <th className="py-space-md px-space-lg font-label-sm text-label-sm uppercase tracking-wider w-10">
                    <input className="rounded accent-primary cursor-pointer" type="checkbox" />
                  </th>
                  <th className="py-space-md px-space-md font-label-sm text-label-sm uppercase tracking-wider">{"Customer"}</th>
                  <th className="py-space-md px-space-md font-label-sm text-label-sm uppercase tracking-wider">{"Tier / Cohort"}</th>
                  <th className="py-space-md px-space-md font-label-sm text-label-sm uppercase tracking-wider text-right">{"Orders"}</th>
                  <th className="py-space-md px-space-md font-label-sm text-label-sm uppercase tracking-wider text-right">{"Lifetime Spend"}</th>
                  <th className="py-space-md px-space-md font-label-sm text-label-sm uppercase tracking-wider">{"Recent Activity"}</th>
                  <th className="py-space-md px-space-md font-label-sm text-label-sm uppercase tracking-wider">{"Marketing Consent"}</th>
                  <th className="py-space-md px-space-lg font-label-sm text-label-sm uppercase tracking-wider text-right">{"Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-0">

                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="py-space-md px-space-lg">
                    <input className="rounded accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-semibold">{"\n                  RS\n                "}</div>
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
                          <span >{"Rohan Sharma"}</span>
                          <span className="material-symbols-outlined text-[14px] text-secondary" title="Verified Mobile">{"verified"}</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"rohan.sharma@genbytez.in"}</div>
                        <div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">{"location_on"}</span>{" Bengaluru, KA\n                  "}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[11px] text-secondary-container">{"stars"}</span>{" VIP Gold\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right font-code-tabular text-code-tabular text-on-surface font-semibold">{"\n              4\n            "}</td>
                  <td className="py-space-md px-space-md text-right">
                    <div className="font-code-tabular text-code-tabular text-on-surface font-semibold">{"₹18,420"}</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{"₹4,605 avg/order"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-code-tabular text-code-tabular px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">{"#GB-8924"}</span>
                      <span className="font-body-sm text-body-sm text-secondary font-medium">{"2 hrs ago"}</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">{"Smart Home Hub x 2"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  Email\n                "}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  WhatsApp\n                "}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Send Direct Communication" type="button" aria-label="mail">
                        <span className="material-symbols-outlined text-[18px]">{"mail"}</span>
                      </button>
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Customer Dossier" type="button" aria-label="arrow_forward">
                        <span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="py-space-md px-space-lg">
                    <input className="rounded accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-semibold">{"\n                  PN\n                "}</div>
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{"\n                    Priya Nair\n                  "}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"pnair.mumbai@outlook.com"}</div>
                        <div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">{"location_on"}</span>{" Mumbai, MH\n                  "}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[11px] text-on-tertiary-container">{"devices"}</span>{" Tech Tier\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right font-code-tabular text-code-tabular text-on-surface font-semibold">{"\n              3\n            "}</td>
                  <td className="py-space-md px-space-md text-right">
                    <div className="font-code-tabular text-code-tabular text-on-surface font-semibold">{"₹8,950"}</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{"₹2,983 avg/order"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-code-tabular text-code-tabular px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">{"#GB-8923"}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"Yesterday"}</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">{"ANC Over-Ear V2"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  Email\n                "}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-label-sm">{"\n                  WhatsApp Opt-out\n                "}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Send Direct Communication" type="button" aria-label="mail">
                        <span className="material-symbols-outlined text-[18px]">{"mail"}</span>
                      </button>
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Customer Dossier" type="button" aria-label="arrow_forward">
                        <span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="py-space-md px-space-lg">
                    <input className="rounded accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container flex items-center justify-center font-headline-sm text-headline-sm font-semibold">{"\n                  VS\n                "}</div>
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
                          <span >{"Vikramaditya Sen"}</span>
                          <span className="material-symbols-outlined text-[14px] text-on-tertiary-container" title="GST Invoicing Verified">{"domain"}</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"sen.procurement@infoventures.in"}</div>
                        <div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">{"location_on"}</span>{" Kolkata, WB\n                  "}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[11px]">{"business"}</span>{" Corporate\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right font-code-tabular text-code-tabular text-on-surface font-semibold">{"\n              8\n            "}</td>
                  <td className="py-space-md px-space-md text-right">
                    <div className="font-code-tabular text-code-tabular text-on-surface font-semibold">{"₹42,100"}</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{"₹5,262 avg/order"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-code-tabular text-code-tabular px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">{"#GB-8871"}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"3 days ago"}</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">{"Mechanical Keyboards x 6"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  Email\n                "}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  WhatsApp\n                "}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Send Direct Communication" type="button" aria-label="mail">
                        <span className="material-symbols-outlined text-[18px]">{"mail"}</span>
                      </button>
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Customer Dossier" type="button" aria-label="arrow_forward">
                        <span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="py-space-md px-space-lg">
                    <input className="rounded accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-semibold">{"\n                  AP\n                "}</div>
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{"\n                    Ananya Patel\n                  "}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"ananya.patel92@gmail.com"}</div>
                        <div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">{"location_on"}</span>{" Ahmedabad, GJ\n                  "}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{"\n                Regular\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right font-code-tabular text-code-tabular text-on-surface font-semibold">{"\n              2\n            "}</td>
                  <td className="py-space-md px-space-md text-right">
                    <div className="font-code-tabular text-code-tabular text-on-surface font-semibold">{"₹9,850"}</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{"₹4,925 avg/order"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-code-tabular text-code-tabular px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">{"#GB-8740"}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"Jun 18, 2024"}</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">{"Ergonomic Mousepad XL"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  Email\n                "}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  WhatsApp\n                "}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Send Direct Communication" type="button" aria-label="mail">
                        <span className="material-symbols-outlined text-[18px]">{"mail"}</span>
                      </button>
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Customer Dossier" type="button" aria-label="arrow_forward">
                        <span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors group">
                  <td className="py-space-md px-space-lg">
                    <input className="rounded accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-semibold">{"\n                  SJ\n                "}</div>
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{"\n                    Sameer Joshi\n                  "}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"sameer.joshi87@yahoo.co.in"}</div>
                        <div className="font-body-sm text-body-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">{"location_on"}</span>{" Pune, MH\n                  "}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                First-Time\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right font-code-tabular text-code-tabular text-on-surface font-semibold">{"\n              1\n            "}</td>
                  <td className="py-space-md px-space-md text-right">
                    <div className="font-code-tabular text-code-tabular text-on-surface font-semibold">{"₹899"}</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{"₹899 avg/order"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-code-tabular text-code-tabular px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">{"#GB-8610"}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"Jun 14, 2024"}</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">{"Type-C 65W Braided Cable"}</div>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="flex items-center gap-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-label-sm">{"\n                  Email Opt-out\n                "}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n                  WhatsApp\n                "}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Send Direct Communication" type="button" aria-label="mail">
                        <span className="material-symbols-outlined text-[18px]">{"mail"}</span>
                      </button>
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Customer Dossier" type="button" aria-label="arrow_forward">
                        <span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <span >{"Showing "}<strong >{"1-5"}</strong>{" of "}<strong >{"1,482"}</strong>{" profiles"}</span>
              <span className="text-outline">{"•"}</span>
              <div className="flex items-center gap-1">
                <span >{"Rows per page:"}</span>
                <select className="bg-transparent font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none">
                  <option >{"10"}</option>
                  <option >{"25"}</option>
                  <option >{"50"}</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="px-space-md py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md disabled:opacity-40" disabled={true} type="button" aria-label="Previous">{"\n          Previous\n        "}</button>
              <button className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-md text-label-md" type="button" aria-label="1">{"1"}</button>
              <button className="px-space-sm py-1 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md" type="button" aria-label="2">{"2"}</button>
              <button className="px-space-sm py-1 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md" type="button" aria-label="3">{"3"}</button>
              <span className="text-outline px-1">{"..."}</span>
              <button className="px-space-sm py-1 rounded hover:bg-surface-container text-on-surface font-label-md text-label-md" type="button" aria-label="148">{"148"}</button>
              <button className="px-space-md py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md" type="button" aria-label="Next">{"\n          Next\n        "}</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg mb-space-2xl">

          <div className="lg:col-span-2 p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div >
              <div className="flex items-center justify-between mb-space-md">
                <div >
                  <h2 className="font-headline-md text-headline-md text-on-surface">{"Customer RFM & Cohort Distribution"}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Automated segmentation based on Recency, Frequency, and Monetary spend patterns."}</p>
                </div>
                <button className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:underline" type="button" aria-label="Configure Rules\n             settings">{"\n            Configure Rules\n            "}<span className="material-symbols-outlined text-[14px]">{"settings"}</span>
                </button>
              </div>

              <div className="space-y-space-xs mb-space-lg">
                <div className="h-4 w-full rounded-full bg-surface-container-high overflow-hidden flex">
                  <div className="bg-primary hover:opacity-90 transition-opacity" style={{ "width": "14%" }} title="Champions: 14%"></div>
                  <div className="bg-secondary hover:opacity-90 transition-opacity" style={{ "width": "24%" }} title="Loyal Customers: 24%"></div>
                  <div className="bg-on-tertiary-container hover:opacity-90 transition-opacity" style={{ "width": "31%" }} title="Promising: 31%"></div>
                  <div className="bg-surface-tint hover:opacity-90 transition-opacity" style={{ "width": "12%" }} title="At-Risk: 12%"></div>
                  <div className="bg-error-container hover:opacity-90 transition-opacity" style={{ "width": "19%" }} title="Lost: 19%"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-sm pt-space-xs">

                <div className="p-space-sm rounded bg-surface-container-low flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">{"Champions"}</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{"14%"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{"₹28,400+ spend"}</div>
                </div>

                <div className="p-space-sm rounded bg-surface-container-low flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">{"Loyal"}</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{"24%"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{"3+ orders/yr"}</div>
                </div>

                <div className="p-space-sm rounded bg-surface-container-low flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">{"Promising"}</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{"31%"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{"High recency"}</div>
                </div>

                <div className="p-space-sm rounded bg-surface-container-low flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-tint"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">{"At-Risk"}</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{"12%"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{">60d inactive"}</div>
                </div>

                <div className="p-space-sm rounded bg-surface-container-low flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">{"Lost"}</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{"19%"}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{">180d dormant"}</div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-md flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">{"check_circle"}</span>{"\n          Audience synchronised with Meta Pixel & Google Ads\n        "}</span>
              <button className="px-space-md py-1 rounded bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors" type="button" aria-label="Run Re-engagement Campaign">{"\n          Run Re-engagement Campaign\n        "}</button>
            </div>
          </div>

          <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div >
              <div className="flex items-center justify-between mb-space-md">
                <h2 className="font-headline-md text-headline-md text-on-surface">{"VIP Perks Status"}</h2>
                <span className="material-symbols-outlined text-outline-variant">{"loyalty"}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n          184 profiles qualified for free pan-India express shipping and dedicated concierge support.\n        "}</p>
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-low">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px]">{"local_shipping"}</span>
                    <div >
                      <div className="font-label-md text-label-md text-on-surface">{"Zero Shipping Threshold"}</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">{"Active for 184 VIPs"}</div>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">{"Enabled"}</span>
                </div>
                <div className="flex items-center justify-between p-space-sm rounded bg-surface-container-low">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">{"percent"}</span>
                    <div >
                      <div className="font-label-md text-label-md text-on-surface">{"Exclusive 10% Cash Back"}</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">{"Gold & Corporate Tiers"}</div>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">{"Enabled"}</span>
                </div>
              </div>
            </div>
            <div className="pt-space-md mt-space-md">
              <button className="w-full py-2 rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors" type="button" aria-label="tune \n Manage VIP Tier Matrix">
                <span className="material-symbols-outlined text-[16px]">{"tune"}</span>
                <span >{"Manage VIP Tier Matrix"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
