import React from 'react';

export default function Products() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full space-y-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
              <span >{"Genbytez Store"}</span>
              <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
              <span >{"Catalog"}</span>
              <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
              <span className="text-on-surface font-semibold">{"Products"}</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"Products"}</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">{"\n        Manage your multi-channel product catalog, stock levels, and pricing tiers across 4 regional warehouses.\n      "}</p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-center">
            <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" type="button" aria-label="file_download \n Export CSV">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"file_download"}</span>
              <span >{"Export CSV"}</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" type="button" aria-label="file_upload \n Import">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"file_upload"}</span>
              <span >{"Import"}</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm font-label-md text-label-md" type="button" aria-label="add \n Add Product">
              <span className="material-symbols-outlined text-[18px]">{"add"}</span>
              <span >{"Add Product"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Total SKUs"}</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[18px]">{"inventory_2"}</span>
              </div>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface">{"1,248"}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[12px]">{"trending_up"}</span>{"\n            +12.4%\n          "}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{"vs last month"}</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Active Listings"}</span>
              <div className="w-8 h-8 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">{"storefront"}</span>
              </div>
            </div>
            <div >
              <div className="flex items-baseline justify-between">
                <div className="font-metric-display text-metric-display text-on-surface">{"1,180"}</div>
                <span className="font-label-md text-label-md text-secondary font-semibold">{"94.5%"}</span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-secondary h-full rounded-full" style={{ "width": "94.5%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Low Stock Alerts"}</span>
              <div className="w-8 h-8 rounded-lg bg-error-container/60 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[18px]">{"warning"}</span>
              </div>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface">{"14 items"}</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-medium">{"\n            Needs attention\n          "}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{"4 critical"}</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Gross Catalog Value"}</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[18px]">{"account_balance_wallet"}</span>
              </div>
            </div>
            <div >
              <div className="font-metric-display text-metric-display text-on-surface">{"$428,950"}</div>
              <div className="flex items-center gap-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
                <span >{"Avg margin:"}</span>
                <span className="font-semibold text-on-surface">{"48.2%"}</span>
                <span className="text-secondary font-medium">{"(+1.8%)"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-3 sm:p-4 shadow-sm space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">

            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">{"search"}</span>
              <input className="w-full h-10 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Filter products by title, SKU, barcode..." type="text" />
            </div>

            <div className="flex items-center gap-2 self-end lg:self-center">

              <div className="inline-flex p-1 rounded-lg bg-surface-container-low text-on-surface-variant">
                <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm flex items-center gap-1" type="button" aria-label="view_list \n List">
                  <span className="material-symbols-outlined text-[16px]">{"view_list"}</span>
                  <span >{"List"}</span>
                </button>
                <button className="px-2.5 py-1 rounded hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button" aria-label="grid_view \n Grid">
                  <span className="material-symbols-outlined text-[16px]">{"grid_view"}</span>
                  <span >{"Grid"}</span>
                </button>
              </div>

              <button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" aria-label="sort \n Sort: Last Updated \n expand_more">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"sort"}</span>
                <span >{"Sort: Last Updated"}</span>
                <span className="material-symbols-outlined text-[16px]">{"expand_more"}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
            <div className="flex items-center flex-wrap gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm transition-colors" type="button" aria-label="All Statuses \n check">
                <span >{"All Statuses"}</span>
                <span className="material-symbols-outlined text-[14px]">{"check"}</span>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button" aria-label="Category: All \n expand_more">
                <span >{"Category: All"}</span>
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant">{"expand_more"}</span>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button" aria-label="Stock: In Stock \n expand_more">
                <span >{"Stock: In Stock"}</span>
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant">{"expand_more"}</span>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button" aria-label="Vendor: All \n expand_more">
                <span >{"Vendor: All"}</span>
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant">{"expand_more"}</span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="text-[11px] uppercase tracking-wider mr-1">{"Views:"}</span>
              <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-semibold">{"Default"}</span>
              <button className="px-2 py-1 rounded hover:bg-surface-container transition-colors" type="button" aria-label="Low Stock (14)">{"Low Stock (14)"}</button>
              <button className="px-2 py-1 rounded hover:bg-surface-container transition-colors" type="button" aria-label="Drafts (6)">{"Drafts (6)"}</button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
          <div className="flex items-center gap-2">
            <input className="rounded accent-primary w-4 h-4 cursor-pointer" id="global-check" type="checkbox" />
            <span >{"Select all "}<strong className="text-on-surface">{"1,248"}</strong>{" products in your catalog"}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-secondary font-semibold hover:underline flex items-center gap-1" type="button" aria-label="sell \n Bulk Edit Prices">
              <span className="material-symbols-outlined text-[16px]">{"sell"}</span>
              <span >{"Bulk Edit Prices"}</span>
            </button>
            <span className="text-outline-variant">{"•"}</span>
            <button className="text-on-surface-variant hover:text-on-surface flex items-center gap-1" type="button" aria-label="archive \n Archive">
              <span className="material-symbols-outlined text-[16px]">{"archive"}</span>
              <span >{"Archive"}</span>
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead >
                <tr className="bg-surface-container-low/70 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  <th className="py-3 px-4 w-10">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </th>
                  <th className="py-3 px-4">{"Product Details"}</th>
                  <th className="py-3 px-4">{"Category"}</th>
                  <th className="py-3 px-4">{"Status"}</th>
                  <th className="py-3 px-4">{"Inventory"}</th>
                  <th className="py-3 px-4">{"Price"}</th>
                  <th className="py-3 px-4">{"Sales Performance"}</th>
                  <th className="py-3 px-4 text-right">{"Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container text-body-sm font-body-sm text-on-surface">

                <tr className="hover:bg-surface-container-low/40 transition-colors group">
                  <td className="py-3 px-4">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-11 h-11 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Modern ergonomic mesh office chair in matte charcoal black with aluminum base, studio commercial lighting on light gray backdrop, product photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc49p8_aCdg-CyibVl2iB9BnlZFvTQP_YaN4ke0oo03UJ-h6ZmaTL4PHf6U6dfu3SCqFvgLEnKAJO2h1SOC1vj3ERDWDEkQ5reu6MFhy2_VtEGRu0vKxuyIv814wkhOist_icjg3Abn-0wum_QzUwqND1TzOxKmkS11UNy9qNSSpp2Kgcd434BHxxGkB1pyVLkkluMCTZGoJZIHVg0I-1wSUGoqhzMgXlvv72cLPjVqbwjhC1MYSd6" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors cursor-pointer">{"\n                    AeroFlow Ergonomic Mesh Chair\n                  "}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-code-tabular text-code-tabular">
                          <span >{"SKU: AF-204-BK"}</span>
                          <span >{"•"}</span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.2 rounded text-on-surface">{"4 variants"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Office & Seating"}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Published\n              "}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"142 in stock"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Across 3 hubs"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"$349.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Cost: $178.00"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"312 sold"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"$108,888 total"}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Edit" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[18px]">{"edit"}</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="More" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/40 transition-colors group">
                  <td className="py-3 px-4">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-11 h-11 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Orthopedic lumbar support memory foam cushion in heather gray fabric with adjustable strap, studio product shot on plain surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBvkGvvNoyYn8F-Zi9lgOFuTPE4QVrNSavw_mWd1e0SX1DFsSDQb5uISWzay2rj13dKjXoLPCB4kQk_hsXYpAeUE11-kK9MiwKFA5w5-5FhkehXc7eBlrOEOeDNWpQzuRDBQSdBipqMVnjylWbVWReg1F4tI8v8g2GJpJ0tg-yg5iUvifyJnmRXXcVsCIP6IMdDcVRLCg1OA-kJyykcawu0hRrd1sgasnkq0VYvv0DzbLQb6T4bUl9" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors cursor-pointer">{"\n                    Lumbar Pro Dynamic Cushion\n                  "}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-code-tabular text-code-tabular">
                          <span >{"SKU: LP-881-GR"}</span>
                          <span >{"•"}</span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.2 rounded text-on-surface">{"2 variants"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Accessories"}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Published\n              "}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-error"></span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">{"24 in stock"}</span>
                    </div>
                    <div className="font-label-sm text-label-sm text-error font-medium">{"Reorder soon"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"$49.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Cost: $19.50"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"840 sold"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"$41,160 total"}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[18px]">{"edit"}</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/40 transition-colors group">
                  <td className="py-3 px-4">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-11 h-11 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Sleek custom mechanical keyboard with white aluminum chassis, subtle pastel PBT keycaps, brass rotary knob, high-end desk setup." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwsTDvz6SLeYwXEnkpcIxuItzqvJlKRrzWA1wwB6t4jc-DKQMEdvuUy6lHFYEQg0f65XjG4Za3Mr-rbeko0cCpB4pDuDZLGQeOv5DHuCu3Vkaps65Sp6jyKjHZLbhLasVFU89k4o87wyG20y5LYS05ifWS0GlbzJOZ15sjRxiLtgJBrh9V6qbH8WwxPttfu0wIMmYuruxXkesjeY5cAiyQd3W3pMAIZPU1fMBhMjCYYU49m1LuvaOl" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors cursor-pointer">{"\n                    Apex Mechanical Studio Keyboard\n                  "}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-code-tabular text-code-tabular">
                          <span >{"SKU: KB-901-RGB"}</span>
                          <span >{"•"}</span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.2 rounded text-on-surface">{"6 variants"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Electronics"}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Published\n              "}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"310 in stock"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Across 4 hubs"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"$189.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Cost: $92.00"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"520 sold"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"$98,280 total"}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[18px]">{"edit"}</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/40 transition-colors group bg-error-container/10">
                  <td className="py-3 px-4">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-11 h-11 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Extra large slate gray vegan leather desk mat roll with stitched edges, minimalistic executive workspace tabletop background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdGLpjN8cwKK1Z6cale5lnEnvnd3sBCaoFojLTQ9y-RjpdKKME2kNOOpOdddABcuaJfxTX8Kmz0rvlH4On0xuCmkyN-tLq9RI0Oei74PZ2bw4eO8gh67NzQBGcWnGiwHXa4fYxWFshLATT9o9Pg-eCCFYfMIJAm2vO5ITzpmdHy2P6K0B7Vic0lq0gwDv-WwwsEPDoYbX3r4XSmPZZXH3HI83vf31BjinpGj24f-mikx-2KS_V192a" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors cursor-pointer">{"\n                    Studio Glide Desk Mat (XL)\n                  "}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-code-tabular text-code-tabular">
                          <span >{"SKU: DM-110-SL"}</span>
                          <span >{"•"}</span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.2 rounded text-on-surface">{"3 variants"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Accessories"}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{"\n                Low Stock\n              "}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-body-sm text-body-sm text-error font-semibold">{"8 remaining"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Warehouse US-East"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"$35.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Cost: $12.00"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"1,140 sold"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"$39,900 total"}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[18px]">{"edit"}</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/40 transition-colors group opacity-85">
                  <td className="py-3 px-4">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-11 h-11 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Scandinavian light oak wood desktop dual monitor riser stand with brushed steel legs, warm aesthetic studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9e83jYkcTylR2syHVRKisIuyOTLww-SwmBHhmANkgp3oPfL3rIHaLgKpujNj_9DBTfJdWLFooAKNoHJBkAfPZ5clt3YUiKcIwQsKHqZv0AQxSZJNKUMix2MR5ISZl9T0u1sJEE40r-ZjkukhzaNBQfV_SQrBihLLgQE--eON9Y2ok4hLwzltUQptu1CStFzJ7tBIV2PWeyDb-HjI1Hl4q1BPsYnFwA7KirWPhJQjIr_fM6X3M76Jt" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors cursor-pointer">{"\n                    Minimalist Solid Oak Monitor Stand\n                  "}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-code-tabular text-code-tabular">
                          <span >{"SKU: OS-402-NW"}</span>
                          <span >{"•"}</span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.2 rounded text-on-surface">{"1 variant"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Furniture"}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">{"\n                Draft\n              "}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{"0 in stock"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Unlisted"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"$85.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Cost: $38.00"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"0 sold"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"$0 total"}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[18px]">{"edit"}</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/40 transition-colors group">
                  <td className="py-3 px-4">
                    <input className="rounded accent-primary w-4 h-4 cursor-pointer" type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-11 h-11 rounded-lg object-cover bg-surface-container flex-shrink-0" data-alt="Compact matte white 100W multi-port GaN desktop fast charging station with braided USB-C cable, high tech minimal vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWtyY9qsUx3-d_5zVdbDGW_-xC84_2G3OtztNSEIMNURoSiNjnHiBqR_-XU4PehoC8Lxre3tKeliH_jx5N05nF92ZB_utI_ZqPBcqjeFgM5utX-lCUYic_1EfqzpgS6m98hmD-wXcsXBlq-hvZlAvNOwyH0RfbCyuBZA7Kgsti6rW_G5gq_NCW30EdAaQFPw8Z_fpx_I7sT8e5jhTbgw9De0RIQg7RS5dFk7umQcVdKeUopZNsXhPp" />
                      <div className="min-w-0">
                        <div className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors cursor-pointer">{"\n                    OmniCharge 100W GaN Charging Station\n                  "}</div>
                        <div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-code-tabular text-code-tabular">
                          <span >{"SKU: OC-100-W"}</span>
                          <span >{"•"}</span>
                          <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.2 rounded text-on-surface">{"2 variants"}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Electronics"}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Published\n              "}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-body-sm text-body-sm text-on-surface font-medium">{"88 in stock"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Across 2 hubs"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"$79.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Cost: $31.50"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">{"642 sold"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"$50,718 total"}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[18px]">{"edit"}</span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-4">
              <span >{"Showing "}<strong className="text-on-surface">{"1"}</strong>{" to "}<strong className="text-on-surface">{"6"}</strong>{" of "}<strong className="text-on-surface">{"1,248"}</strong>{" products"}</span>
              <div className="hidden md:flex items-center gap-1.5">
                <span className="text-outline-variant">{"•"}</span>
                <span >{"Rows per page:"}</span>
                <select className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded px-2 py-0.5 focus:outline-none" defaultValue={"10"}>
                  <option >{"10"}</option>
                  <option >{"25"}</option>
                  <option >{"50"}</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-sm disabled:opacity-40" disabled={true} type="button" aria-label="Previous">{"\n          Previous\n        "}</button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center font-medium" type="button" aria-label="1">{"\n          1\n        "}</button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center justify-center transition-colors" type="button" aria-label="2">{"\n          2\n        "}</button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center justify-center transition-colors" type="button" aria-label="3">{"\n          3\n        "}</button>
              <span className="px-1 text-on-surface-variant">{"â€¦"}</span>
              <button className="w-8 h-8 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center justify-center transition-colors" type="button" aria-label="208">{"\n          208\n        "}</button>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm font-label-md text-label-md transition-colors" type="button" aria-label="Next">{"\n          Next\n        "}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
