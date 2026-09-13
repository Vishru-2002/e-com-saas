import React from 'react';

export default function Inventory() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg">
          <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
            <span className="hover:text-on-surface transition-colors cursor-pointer">{"Genbytez Store"}</span>
            <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
            <span className="hover:text-on-surface transition-colors cursor-pointer">{"Catalog"}</span>
            <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
            <span className="text-on-surface font-semibold">{"Inventory & Stock"}</span>
          </nav>
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n        Live Inventory Sync • 4 Hubs\n      "}</span>
            <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"Updated 2m ago"}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-lg pb-space-xl">
          <div >
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"Inventory & Stock Management"}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">{"Multi-hub ledger, real-time safety thresholds, and warehouse transit allocation."}</p>
          </div>
          <div className="flex items-center flex-wrap gap-space-sm">
            <button className="h-9 px-space-md rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container transition-all flex items-center gap-space-xs font-label-md text-label-md" type="button" aria-label="download \n        Export CSV">
              <span className="material-symbols-outlined text-[18px]">{"download"}</span>{"\n        Export CSV\n      "}</button>
            <button className="h-9 px-space-md rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container transition-all flex items-center gap-space-xs font-label-md text-label-md" type="button" aria-label="swap_horiz \n        Create Transfer">
              <span className="material-symbols-outlined text-[18px]">{"swap_horiz"}</span>{"\n        Create Transfer\n      "}</button>
            <button className="h-9 px-space-md rounded bg-primary text-on-primary shadow-sm hover:bg-primary-container transition-all flex items-center gap-space-xs font-label-md text-label-md" type="button" aria-label="exposure \n        + Stock Adjustment">
              <span className="material-symbols-outlined text-[18px]">{"exposure"}</span>{"\n        + Stock Adjustment\n      "}</button>
          </div>
        </div>

        <div className="flex items-center gap-space-md overflow-x-auto pb-space-xl">
          <button className="px-space-md py-2 rounded font-label-md text-label-md bg-surface-container-highest text-on-surface font-semibold shadow-sm flex items-center gap-space-xs" type="button" aria-label="warehouse \n      Stock Levels\n       4,820">
            <span className="material-symbols-outlined text-[18px]">{"warehouse"}</span>{"\n      Stock Levels\n      "}<span className="px-1.5 py-0.5 rounded-full bg-surface-container-lowest font-code-tabular text-code-tabular text-on-surface-variant ml-1">{"4,820"}</span>
          </button>
          <button className="px-space-md py-2 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-space-xs" type="button" aria-label="history \n      Movement History">
            <span className="material-symbols-outlined text-[18px]">{"history"}</span>{"\n      Movement History\n    "}</button>
          <button className="px-space-md py-2 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-space-xs" type="button" aria-label="local_shipping \n      Transfers & POs\n       3 Active">
            <span className="material-symbols-outlined text-[18px]">{"local_shipping"}</span>{"\n      Transfers & POs\n      "}<span className="px-1.5 py-0.5 rounded-full bg-secondary-container font-label-sm text-label-sm text-on-secondary-container font-medium">{"3 Active"}</span>
          </button>
          <button className="px-space-md py-2 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-space-xs" type="button" aria-label="location_on \n      Warehouses & Locations">
            <span className="material-symbols-outlined text-[18px]">{"location_on"}</span>{"\n      Warehouses & Locations\n    "}</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pb-space-2xl">

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{"Total Units on Hand"}</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[18px]">{"inventory_2"}</span>
              </div>
            </div>
            <div className="mt-space-md">
              <div className="font-metric-display text-metric-display text-on-surface">{"4,820"}</div>
              <div className="flex items-center justify-between mt-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"Across 4 central hubs"}</span>
                <span className="inline-flex items-center gap-0.5 text-secondary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">{"arrow_upward"}</span>{" +3.8%\n          "}</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{"Low Stock Alerts"}</span>
              <div className="w-8 h-8 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[18px]">{"warning"}</span>
              </div>
            </div>
            <div className="mt-space-md">
              <div className="font-metric-display text-metric-display text-error">{"14 "}<span className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">{"SKUs"}</span></div>
              <div className="flex items-center justify-between mt-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"Needs urgent reorder"}</span>
                <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">{"Priority"}</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{"Out of Stock / BO"}</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">{"remove_shopping_cart"}</span>
              </div>
            </div>
            <div className="mt-space-md">
              <div className="font-metric-display text-metric-display text-on-surface">{"3 "}<span className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">{"SKUs"}</span></div>
              <div className="flex items-center justify-between mt-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"2 pending purchase orders"}</span>
                <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"ETA 2 Days"}</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{"Inventory Valuation"}</span>
              <div className="w-8 h-8 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">{"currency_rupee"}</span>
              </div>
            </div>
            <div className="mt-space-md">
              <div className="font-metric-display text-metric-display text-on-surface">{"₹38.40L"}</div>
              <div className="flex items-center justify-between mt-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"COGS asset valuation"}</span>
                <span className="text-secondary font-label-sm text-label-sm font-medium">{"Healthy ratio"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-base shadow-sm mb-space-base">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">

            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">{"search"}</span>
              <input className="w-full h-9 pl-9 pr-4 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest shadow-inner" id="inventory-search" placeholder="Search by SKU (e.g. AF-204-BK), product title, barcode, or bin location..." type="text" />
            </div>

            <div className="flex flex-wrap items-center gap-space-sm">

              <div className="relative">
                <select className="h-9 px-space-md pr-8 rounded bg-surface-container-low font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none appearance-none" id="warehouse-filter">
                  <option value="all">{"All Locations (Mumbai, Delhi, Bengaluru, Pune)"}</option>
                  <option value="mumbai">{"Mumbai Central Hub"}</option>
                  <option value="delhi">{"Delhi North Fulfillment"}</option>
                  <option value="bengaluru">{"Bengaluru South DC"}</option>
                  <option value="pune">{"Pune West Logistics"}</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant text-[16px] pointer-events-none">{"expand_more"}</span>
              </div>

              <div className="flex items-center bg-surface-container-low p-0.5 rounded">
                <button className="px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface font-semibold shadow-xs" type="button" aria-label="All">{"All"}</button>
                <button className="px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="In Stock">{"In Stock"}</button>
                <button className="px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="Low Stock (<15)">{"Low Stock (<15)"}</button>
                <button className="px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="Out of Stock">{"Out of Stock"}</button>
              </div>

              <label className="flex items-center gap-2 px-space-sm py-1.5 rounded bg-surface-container-low cursor-pointer select-none">
                <input className="rounded accent-primary w-4 h-4 cursor-pointer" id="batch-mode-toggle" type="checkbox" />
                <span className="font-label-sm text-label-sm text-on-surface font-medium">{"Quick Stepper Mode"}</span>
              </label>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-space-xs mt-space-md pt-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant mr-1">{"Applied Filters:"}</span>
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
              <span >{"Hub: All Warehouses"}</span>
              <button className="hover:text-error transition-colors" type="button" aria-label="close"><span className="material-symbols-outlined text-[14px]">{"close"}</span></button>
            </span>
            <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
              <span >{"Channel: Web + Retail POS"}</span>
              <button className="hover:text-error transition-colors" type="button" aria-label="close"><span className="material-symbols-outlined text-[14px]">{"close"}</span></button>
            </span>
            <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline ml-2" type="button" aria-label="Reset all filters">{"Reset all filters"}</button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead >
                <tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  <th className="py-space-md px-space-md w-8">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </th>
                  <th className="py-space-md px-space-base">{"Product & SKU Info"}</th>
                  <th className="py-space-md px-space-base">{"Warehouse / Bin"}</th>
                  <th className="py-space-md px-space-base text-right">{"Committed"}</th>
                  <th className="py-space-md px-space-base text-right">{"Available"}</th>
                  <th className="py-space-md px-space-base text-right">{"In-Transit"}</th>
                  <th className="py-space-md px-space-base text-center">{"Quick Adjust"}</th>
                  <th className="py-space-md px-space-base text-center">{"Status"}</th>
                  <th className="py-space-md px-space-md text-right"><span className="sr-only">{"Actions"}</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">

                <tr className="hover:bg-surface-container-low/60 transition-colors group">
                  <td className="py-space-md px-space-md">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center gap-space-md">
                      <img className="w-12 h-12 rounded object-cover bg-surface-container flex-shrink-0" data-alt="Obsidian black ergonomic executive office mesh chair on a minimal clean white studio background with soft ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezkEbpnicGSxcP6g30H4NqMxzwAK_1GOI8M66iEW59ytHF1_TBLKyNj2EHhLcD-zY9vI7rDEA09vG1b5aS7lljL13imw0kj7hFBO9pp-kXN1dg4ojog8Pmaoj4BVUfjV4t0hcmJYVxNqxZ2BmBbCVXznw8F66WM6FS_jxp3MOZbDbnpLSAD2iPNEripAGrZyByKKcbOwWye7z7uHfmnJhID_zuIe9Mg7sKV9tfy23RB33L3nnHImm" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate">{"AeroFlow Ergonomic Mesh Chair"}</div>
                        <div className="flex items-center gap-space-xs font-code-tabular text-code-tabular text-on-surface-variant mt-0.5">
                          <span className="font-medium text-on-surface">{"Obsidian Black"}</span>
                          <span >{"•"}</span>
                          <span >{"AF-204-BK"}</span>
                          <span >{"•"}</span>
                          <span className="text-outline">{"89043210982"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"Mumbai Hub"}</div>
                    <div className="font-code-tabular text-code-tabular text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"shelves"}</span>{" Bin A-14 • Bay 3\n              "}</div>
                  </td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              18\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-body-md font-semibold text-on-surface">{"\n              142\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">
                    <span className="inline-flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[14px]">{"local_shipping"}</span>{" 40\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center justify-center gap-1">
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="-">{"-"}</button>
                      <input className="w-14 h-7 text-center font-code-tabular text-code-tabular bg-surface-container-low rounded focus:outline-none focus:bg-surface-container-lowest" id="qty-1" type="text" defaultValue="142" />
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="+">{"+"}</button>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base text-center">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container font-label-sm text-label-sm text-on-secondary-container font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" In Stock\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                      <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors group bg-error-container/5">
                  <td className="py-space-md px-space-md">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center gap-space-md">
                      <img className="w-12 h-12 rounded object-cover bg-surface-container flex-shrink-0" data-alt="Slate grey modern ergonomic office chair angled view on neutral soft lit gray minimal studio display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCesQK2kvBkTayjNTMq59d51i97Qz_dsOLcVCeD47ZWAFJPkh-MUOD3hzaRyaD67ahN3V7zR_PzmBG1oA26LxRID4xcBG0gxIirykO1QB71lzfXjTjItQzqcP4vKTwneN6xOcvWBvadAw4f36gFErXS1I3kHOc_CAIp8x5Zzegpx1qta_HJGstnBq5RdX82G0zObM0UWDkckmQra3d6x332Z42PXzvnvF-VoWd4-DmhWQv-o_6oLWSJ" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate">{"AeroFlow Ergonomic Mesh Chair"}</div>
                        <div className="flex items-center gap-space-xs font-code-tabular text-code-tabular text-on-surface-variant mt-0.5">
                          <span className="font-medium text-on-surface">{"Slate Grey"}</span>
                          <span >{"•"}</span>
                          <span >{"AF-204-GR"}</span>
                          <span >{"•"}</span>
                          <span className="text-outline">{"89043210985"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"Delhi North Hub"}</div>
                    <div className="font-code-tabular text-code-tabular text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"shelves"}</span>{" Bin B-02 • Bay 1\n              "}</div>
                  </td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              9\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-body-md font-semibold text-error">{"\n              8\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">
                    <span className="inline-flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[14px]">{"local_shipping"}</span>{" 25\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center justify-center gap-1">
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="-">{"-"}</button>
                      <input className="w-14 h-7 text-center font-code-tabular text-code-tabular bg-surface-container-low rounded focus:outline-none focus:bg-surface-container-lowest" id="qty-2" type="text" defaultValue="8" />
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="+">{"+"}</button>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base text-center">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-error-container font-label-sm text-label-sm text-on-error-container font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{" Low (8 left)\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                      <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors group">
                  <td className="py-space-md px-space-md">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center gap-space-md">
                      <img className="w-12 h-12 rounded object-cover bg-surface-container flex-shrink-0" data-alt="Extra large premium felt and vegan leather desk pad laid on minimalist desk with sleek workspace accessories" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_0fWRGkKNbJF6iA49xg68BUT4LffEJqf0Fw-SBSQyMYhX5LwPey50LgfVoj90_MoRoJrOJTPZfTXcMjMMM8Fg1P3XP1avsMpzG4t2jUsywz00tg5S4hLdRJzQ-Se-4FebwnyZFax21yFTQn8bF1pODUoW8INKKw6FAnjumyizlRIuHtap9RgN5NN-U1e9H9kAKjCXkqJsTVvWjeWtmDE941-6DLhZ9o6D3Br9O8HBuGKNTSZMed0F" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate">{"Studio Glide Desk Mat (XL)"}</div>
                        <div className="flex items-center gap-space-xs font-code-tabular text-code-tabular text-on-surface-variant mt-0.5">
                          <span className="font-medium text-on-surface">{"Charcoal Heather"}</span>
                          <span >{"•"}</span>
                          <span >{"SG-MAT-XL"}</span>
                          <span >{"•"}</span>
                          <span className="text-outline">{"89077123910"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"Bengaluru South DC"}</div>
                    <div className="font-code-tabular text-code-tabular text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"shelves"}</span>{" Bin D-08 • Bay 4\n              "}</div>
                  </td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              42\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-body-md font-semibold text-on-surface">{"\n              315\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              0\n            "}</td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center justify-center gap-1">
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="-">{"-"}</button>
                      <input className="w-14 h-7 text-center font-code-tabular text-code-tabular bg-surface-container-low rounded focus:outline-none focus:bg-surface-container-lowest" id="qty-3" type="text" defaultValue="315" />
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="+">{"+"}</button>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base text-center">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container font-label-sm text-label-sm text-on-secondary-container font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" In Stock\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                      <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors group bg-surface-container-high/20">
                  <td className="py-space-md px-space-md">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center gap-space-md">
                      <img className="w-12 h-12 rounded object-cover bg-surface-container flex-shrink-0" data-alt="Compact matte black 100 watt GaN multi-port fast charging desktop station with LED power indicators" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5T3nBSifyX3anLBHh89BVoQnYb95btn9r-YZcxchmnAecXqz5t36DQSwMf0lyQ2q88aBh_J1KecQfSf7Y54_K6sFmtjyFaegUvCh0SCaN9-bnopCHmumVpBLg1dbhuHjoyHfngKHlVIMKflSE3w0laV6CxXIhPzwJ7iYoQOp6z1mMFBkiqC9dvS1zlk197nr3U0O4Po5-0FefmwyEDFmVQj877YTftAweBWlClPUUoTnamRQsN7zI" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate">{"OmniCharge 100W GaN Station"}</div>
                        <div className="flex items-center gap-space-xs font-code-tabular text-code-tabular text-on-surface-variant mt-0.5">
                          <span className="font-medium text-on-surface">{"Space Grey"}</span>
                          <span >{"•"}</span>
                          <span >{"OC-100-GAN"}</span>
                          <span >{"•"}</span>
                          <span className="text-outline">{"89098341102"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"Mumbai Hub"}</div>
                    <div className="font-code-tabular text-code-tabular text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"shelves"}</span>{" Bin E-01 • Bay 2\n              "}</div>
                  </td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              11\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-body-md font-semibold text-error">{"\n              0\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">
                    <span className="inline-flex items-center gap-1 text-secondary font-medium">
                      <span className="material-symbols-outlined text-[14px]">{"local_shipping"}</span>{" 100 (PO-402)\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center justify-center gap-1 opacity-70">
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="-">{"-"}</button>
                      <input className="w-14 h-7 text-center font-code-tabular text-code-tabular bg-surface-container-low rounded focus:outline-none focus:bg-surface-container-lowest" id="qty-4" type="text" defaultValue="0" />
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="+">{"+"}</button>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base text-center">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{" Backordered (11)\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                      <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors group">
                  <td className="py-space-md px-space-md">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center gap-space-md">
                      <img className="w-12 h-12 rounded object-cover bg-surface-container flex-shrink-0" data-alt="Custom mechanical keyboard with aluminum frame, PBT keycaps, brass knob, sleek warm studio lighting overhead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYjZuRjptj0q-EaQkg0Nl6w00rtyu6KfumwlODiN8CXT5cl7d_niFt_FiTNTu778SEQpL9ERZYMIlrS-q5-SjIzX4uBR3Lnj5Fcsf9QNNkaDKV7g77Hj2d-5vIdZcoz4pBvAVmDsZipYNssShL1DgHpwDgwQ_1pJnWAzTIK__Y0iU4eol8o4zPrcMB0ldOQEkLM99SdW4gaPs0Y6y4qgmEhz3UJ-1vGpuTaHS7vZiJ8QaIRkW_iN5" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate">{"Apex Mechanical Studio Keyboard"}</div>
                        <div className="flex items-center gap-space-xs font-code-tabular text-code-tabular text-on-surface-variant mt-0.5">
                          <span className="font-medium text-on-surface">{"Silver / Gateron Pro"}</span>
                          <span >{"•"}</span>
                          <span >{"APX-KB-75"}</span>
                          <span >{"•"}</span>
                          <span className="text-outline">{"89055431876"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"Pune West Hub"}</div>
                    <div className="font-code-tabular text-code-tabular text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"shelves"}</span>{" Bin C-19 • Bay 1\n              "}</div>
                  </td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              15\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-body-md font-semibold text-on-surface">{"\n              74\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              0\n            "}</td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center justify-center gap-1">
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="-">{"-"}</button>
                      <input className="w-14 h-7 text-center font-code-tabular text-code-tabular bg-surface-container-low rounded focus:outline-none focus:bg-surface-container-lowest" id="qty-5" type="text" defaultValue="74" />
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="+">{"+"}</button>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base text-center">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container font-label-sm text-label-sm text-on-secondary-container font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" In Stock\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                      <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors group">
                  <td className="py-space-md px-space-md">
                    <input className="accent-primary rounded cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center gap-space-md">
                      <img className="w-12 h-12 rounded object-cover bg-surface-container flex-shrink-0" data-alt="Artisanal solid oak desktop monitor riser stand with aluminum feet and cable routing cutouts in sunlit workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1-DnfR938BSq4cXS62rYflLibXcvDFOQQzHgkqvTBlOAifbS7o-8uNfSm7Izyy1d49Cx7ewNlqYVuE_QjlLRvWicexTOFn_3WjIfJOouIP7vXe-EnosarT0GzNL_Gnu2adlbtYjQQOBvSatXgrhv6a-bACzleAD-gYU_qqyA8Gte5pHWreDCDFy7PHFHESAxnJhNSM15C-_dyuKCvj5XaABgBAe-0JZ0Dwev_-kwMrR75IQzLJms4" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate">{"Minimalist Solid Oak Monitor Stand"}</div>
                        <div className="flex items-center gap-space-xs font-code-tabular text-code-tabular text-on-surface-variant mt-0.5">
                          <span className="font-medium text-on-surface">{"Natural Oak"}</span>
                          <span >{"•"}</span>
                          <span >{"MS-OAK-01"}</span>
                          <span >{"•"}</span>
                          <span className="text-outline">{"89011249912"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"Bengaluru South DC"}</div>
                    <div className="font-code-tabular text-code-tabular text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"shelves"}</span>{" Bin A-03 • Bay 5\n              "}</div>
                  </td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              4\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-body-md font-semibold text-on-surface">{"\n              28\n            "}</td>
                  <td className="py-space-md px-space-base text-right font-code-tabular text-code-tabular text-on-surface-variant">{"\n              15\n            "}</td>
                  <td className="py-space-md px-space-base">
                    <div className="flex items-center justify-center gap-1">
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="-">{"-"}</button>
                      <input className="w-14 h-7 text-center font-code-tabular text-code-tabular bg-surface-container-low rounded focus:outline-none focus:bg-surface-container-lowest" id="qty-6" type="text" defaultValue="28" />
                      <button className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface font-semibold" type="button" aria-label="+">{"+"}</button>
                    </div>
                  </td>
                  <td className="py-space-md px-space-base text-center">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container font-label-sm text-label-sm text-on-secondary-container font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" In Stock\n              "}</span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                      <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-space-base py-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-space-sm">
              <span >{"Showing "}<strong className="text-on-surface font-semibold">{"1-6"}</strong>{" of "}<strong className="text-on-surface font-semibold">{"184"}</strong>{" total inventory units"}</span>
              <span className="text-outline">{"•"}</span>
              <select className="bg-surface-container-lowest rounded px-2 py-1 font-label-sm text-label-sm text-on-surface focus:outline-none">
                <option >{"25 per page"}</option>
                <option >{"50 per page"}</option>
                <option >{"100 per page"}</option>
              </select>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface disabled:opacity-40" disabled={true} type="button" aria-label="chevron_left">
                <span className="material-symbols-outlined text-[16px]">{"chevron_left"}</span>
              </button>
              <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold" type="button" aria-label="1">{"1"}</button>
              <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button" aria-label="2">{"2"}</button>
              <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button" aria-label="3">{"3"}</button>
              <span className="px-1 text-on-surface-variant">{"â€¦"}</span>
              <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button" aria-label="8">{"8"}</button>
              <button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface" type="button" aria-label="chevron_right">
                <span className="material-symbols-outlined text-[16px]">{"chevron_right"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[18px]">{"receipt_long"}</span>
              </div>
              <div >
                <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Real-Time Inventory Ledger & Audit Log"}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"Automated deductions, manual bin adjustments, and warehouse restocking entries."}</p>
              </div>
            </div>
            <a className="font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors inline-flex items-center gap-1 font-semibold" href="#">{"\n        View Full Movement Ledger\n        "}<span className="material-symbols-outlined text-[16px]">{"arrow_forward"}</span>
            </a>
          </div>

          <div className="space-y-space-sm">

            <div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-8 h-8 rounded-full bg-error-container/40 text-error flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">{"shopping_bag"}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"Order #GB-8924 fulfillment deduction"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"• Mumbai Hub (A-14)"}</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"AeroFlow Ergonomic Mesh Chair (Obsidian Black) • Auto-reserved via Checkout API"}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-space-md">
                <span className="font-code-tabular text-headline-sm text-error font-semibold">{"-3 units"}</span>
                <div className="font-code-tabular text-code-tabular text-on-surface-variant">{"Today, 14:32"}</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">{"inventory"}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"Supplier PO #PO-402 Restock received"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"• Mumbai Central Hub"}</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"OmniCharge 100W GaN Station • Verified by Dock Supervisor R. Sharma"}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-space-md">
                <span className="font-code-tabular text-headline-sm text-secondary font-semibold">{"+100 units"}</span>
                <div className="font-code-tabular text-code-tabular text-on-surface-variant">{"Today, 11:15"}</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">{"rule"}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"Damage manual adjustment"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"• Delhi North Hub (B-02)"}</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{"AeroFlow Ergonomic Mesh Chair (Slate Grey) • Transit packaging tear • Logged by A. Patel"}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-space-md">
                <span className="font-code-tabular text-headline-sm text-error font-semibold">{"-1 unit"}</span>
                <div className="font-code-tabular text-code-tabular text-on-surface-variant">{"Yesterday, 18:04"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
