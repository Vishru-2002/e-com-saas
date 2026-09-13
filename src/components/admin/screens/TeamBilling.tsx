import React from 'react';

export default function TeamBilling() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant mb-space-sm">
          <span className="font-label-md text-label-md hover:text-on-surface cursor-pointer transition-colors">{"Genbytez Store"}</span>
          <span className="material-symbols-outlined text-sm">{"chevron_right"}</span>
          <span className="font-label-md text-label-md hover:text-on-surface cursor-pointer transition-colors">{"Workspace & Settings"}</span>
          <span className="material-symbols-outlined text-sm">{"chevron_right"}</span>
          <span className="font-label-md text-label-md text-on-surface font-semibold">{"Team & Billing"}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl">
          <div className="space-y-space-2xs">
            <div className="flex items-center gap-space-sm">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{"Team Roles & Subscription Billing"}</h1>
              <span className="px-space-xs py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase tracking-wider">{"Active Multi-Tenant"}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">{"\n        Manage merchant seat permissions, RBAC policies, enterprise subscription tier, and download GST-compliant tax invoices.\n      "}</p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-all text-label-md font-label-md font-medium" type="button" aria-label="person_add \n Invite Staff Member">
              <span className="material-symbols-outlined text-base">{"person_add"}</span>
              <span >{"Invite Staff Member"}</span>
            </button>
            <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-gradient-to-r from-secondary to-on-secondary-container text-on-secondary hover:opacity-95 shadow-sm transition-all text-label-md font-label-md font-medium" type="button" aria-label="bolt \n Upgrade Plan">
              <span className="material-symbols-outlined text-base">{"bolt"}</span>
              <span >{"Upgrade Plan"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-2xl">

          <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
            <div >
              <div className="flex items-center justify-between gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n            PRO TIER • Annual Billing (Save 20%)\n          "}</span>
                <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"ID: SUB-88219"}</span>
              </div>
              <div className="mb-space-md">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-metric-display text-metric-display text-on-surface">{"₹14,999"}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{"/ month"}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{"\n            Renews automatically on "}<span className="font-medium text-on-surface">{"Nov 15, 2025"}</span>{" (Billed annually at ₹1,79,988)\n          "}</p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-sm mb-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-on-surface-variant text-base">{"credit_card"}</span>
                    <span className="font-label-md text-label-md text-on-surface">{"Payment Method"}</span>
                  </div>
                  <button className="font-label-sm text-label-sm text-secondary font-semibold hover:underline" type="button" aria-label="Change Card">{"Change Card"}</button>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-space-xs py-space-2xs bg-surface-container-highest rounded text-on-surface font-code-tabular text-label-sm font-semibold">{"MC"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">{"Mastercard ending in 4242"}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Exp 09/28"}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-md">
              <div className="flex items-center gap-space-xs">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked={true} className="sr-only peer" id="autoRenewToggle" type="checkbox" />
                  <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface peer-checked:bg-secondary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-primary after:border-surface-container-highest after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                </label>
                <span className="font-label-md text-label-md text-on-surface font-medium">{"Auto-renewal ON"}</span>
              </div>
              <button className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors flex items-center gap-space-2xs" type="button" aria-label="cancel \n Cancel Plan">
                <span className="material-symbols-outlined text-base">{"cancel"}</span>
                <span >{"Cancel Plan"}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-lg">
              <div >
                <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Quota & Feature Utilization"}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"Live metering across your active tenant cluster for current monthly cycle"}</p>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-space-2xs rounded bg-surface-container-high text-on-surface font-code-tabular">{"\n          SYNCED: 4m ago\n        "}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-md">

              <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">{"Monthly Order Volume"}</span>
                  <span className="font-code-tabular text-label-sm text-secondary font-semibold">{"18.4% used"}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"1,842"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-code-tabular">{"/ 10,000 orders"}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-2 rounded-full transition-all duration-500" style={{ "width": "18.4%" }}></div>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">{"Active Staff Seats"}</span>
                  <span className="font-code-tabular text-label-sm text-on-tertiary-container font-semibold">{"50% used"}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"5"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-code-tabular">{"/ 10 seats"}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-on-tertiary-container h-2 rounded-full transition-all duration-500" style={{ "width": "50%" }}></div>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">{"SKU Storage Capacity"}</span>
                  <span className="font-code-tabular text-label-sm text-secondary-fixed-dim font-semibold">{"25% used"}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"1,248"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-code-tabular">{"/ 5,000 SKUs"}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary-fixed-dim h-2 rounded-full transition-all duration-500" style={{ "width": "25%" }}></div>
                </div>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">{"Dedicated Webhook SLA"}</span>
                  <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">{"100% HEALTH"}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"120ms"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-code-tabular">{"avg latency"}</span>
                </div>
                <div className="flex items-center gap-space-xs text-secondary text-body-sm font-body-sm">
                  <span className="material-symbols-outlined text-sm">{"verified"}</span>
                  <span className="text-on-surface font-medium">{"100% SLA Guaranteed Throughput"}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant pt-space-xs">
              <span className="font-body-sm text-body-sm">{"Need higher API rate-limits or unlimited catalogue SKUs?"}</span>
              <a className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-space-2xs" href="#">
                <span >{"Explore Custom Enterprise"}</span>
                <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm mb-space-2xl overflow-hidden">

          <div className="p-space-xl pb-space-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <div >
                <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Staff Members & Role-Based Access (RBAC)"}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"Control operational tenant access with fine-grained granular permissions."}</p>
              </div>

              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="relative min-w-[260px]">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base">{"search"}</span>
                  <input className="w-full pl-9 pr-space-md py-space-xs rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-outline" id="memberSearch" placeholder="Search by name, email or role..." type="text" />
                </div>
                <select className="px-space-md py-space-xs rounded bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none shadow-sm cursor-pointer" id="roleFilter">
                  <option value="all">{"All Roles"}</option>
                  <option value="owner">{"Owner"}</option>
                  <option value="admin">{"Admin"}</option>
                  <option value="editor">{"Editor"}</option>
                  <option value="auditor">{"Auditor"}</option>
                  <option value="service account">{"Service Account"}</option>
                </select>
                <button className="px-space-md py-space-xs rounded bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors flex items-center gap-space-2xs" type="button" aria-label="tune \n Policy Presets">
                  <span className="material-symbols-outlined text-base">{"tune"}</span>
                  <span >{"Policy Presets"}</span>
                </button>
              </div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-low mb-space-md">
              <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-xs">
                <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider">{"Access Scope Matrix"}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{"5 configured policies"}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm">
                <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center gap-space-2xs mb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">{"Owner"}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">{"Full Tenant Authority"}</p>
                </div>
                <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center gap-space-2xs mb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">{"Admin"}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">{"Orders, Stock & Logistics"}</p>
                </div>
                <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center gap-space-2xs mb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">{"Editor"}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">{"Catalog & Media Merchandising"}</p>
                </div>
                <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center gap-space-2xs mb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-outline"></span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">{"Support"}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">{"Customer Care & Tickets"}</p>
                </div>
                <div className="p-space-xs rounded bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center gap-space-2xs mb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-error"></span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">{"Auditor"}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant truncate">{"Read-only Tax & Ledgers"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left" id="staffTable">
              <thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <tr >
                  <th className="py-space-md px-space-xl" scope="col">{"Staff Member"}</th>
                  <th className="py-space-md px-space-lg" scope="col">{"Assigned Role & Access"}</th>
                  <th className="py-space-md px-space-lg" scope="col">{"Security & 2FA"}</th>
                  <th className="py-space-md px-space-lg" scope="col">{"Last Active"}</th>
                  <th className="py-space-md px-space-xl text-right" scope="col">{"Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">

                <tr className="hover:bg-surface-container-low/50 transition-colors member-row" data-email="sarah.j@genbytez.store" data-name="sarah jenkins" data-role="owner">
                  <td className="py-space-md px-space-xl">
                    <div className="flex items-center gap-space-md">
                      <img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Close-up professional studio portrait of Sarah Jenkins, an enterprise e-commerce platform owner, clean lighting, wearing dark neutral corporate shirt, modern high-key aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDXwRf3Pw3tUwaTUfR4oF0qs4dwwTbrlAKCOKfrzAs5qaWhI9RK7ERWmmAhXhyDypNW9d8NzmSnNwoU7DKCbiGGUYnLkqN5gCxNWyXlbQXCXvCD482-K2d52VIEcmYxWP_5QopQaxR2FmotqW6VY-LXMcxQTihL8XZ7r3Sm_kgQ4RkgU-AATG9O5db9KnAU2588uZm5y8t3Um9SLZPXfd-5VF0d9TfT1m6GTXVYNnwfo0MojZJxhiT" />
                      <div className="min-w-0">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">{"Sarah Jenkins"}</span>
                          <span className="px-space-xs py-space-2xs rounded bg-primary text-on-primary font-label-sm text-label-sm">{"Primary"}</span>
                        </div>
                        <span className="font-code-tabular text-label-sm text-on-surface-variant block truncate">{"sarah.j@genbytez.store"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="space-y-space-2xs">
                      <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>{"\n                  Owner\n                "}</span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{"All permissions (Full Root)"}</p>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="flex items-center gap-space-xs text-secondary font-medium font-label-md text-label-md">
                      <span className="material-symbols-outlined text-base">{"shield"}</span>
                      <span >{"Enforced (Hardware Key)"}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="font-code-tabular text-code-tabular text-on-surface">{"Just now"}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-xl text-right">
                    <button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="Manage">{"\n                Manage\n              "}</button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors member-row" data-email="rohan.d@genbytez.store" data-name="rohan deshmukh" data-role="admin">
                  <td className="py-space-md px-space-xl">
                    <div className="flex items-center gap-space-md">
                      <img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait photo of Rohan Deshmukh, operations manager, smiling confident expression, sleek minimalist modern workplace background with ambient soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp1tC9-yxzwXUA_zIzVemEruLyIaWCGUFj-lCEN-3OgXV5ClpyWZ-VO_W1eehlTp8eLactlvWgaHA-oTQI2S3AAIg4glx4bU2kZxxJGB0TICD1Jdup-de7JL_ZRCgfWJCOVr-VFpMOf6d-G-TMnjr1toZAIGiMM3Nfjd7lTZjvp2bVcsyND46itqq6OBADgtxUQAfcFEao8nmP6Mf3tvkTeVBfWMnlDxlYRDzOfHCniV7OpUXOFOxo" />
                      <div className="min-w-0">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate block">{"Rohan Deshmukh"}</span>
                        <span className="font-code-tabular text-label-sm text-on-surface-variant block truncate">{"rohan.d@genbytez.store"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="space-y-space-2xs">
                      <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                  Admin\n                "}</span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{"Orders, Inventory & Shipping"}</p>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                      <span className="material-symbols-outlined text-base text-secondary">{"sms"}</span>
                      <span >{"SMS Verified"}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"12m ago"}</span>
                  </td>
                  <td className="py-space-md px-space-xl text-right">
                    <button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="Edit Role">{"\n                Edit Role\n              "}</button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors member-row" data-email="p.nair@genbytez.store" data-name="priya nair" data-role="editor">
                  <td className="py-space-md px-space-xl">
                    <div className="flex items-center gap-space-md">
                      <img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Clean corporate headshot portrait of Priya Nair, merchandising catalog specialist, natural modern office lighting, crisp professional attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXRn6o_jM8E1BzSid2JRlvgzr9OUQk0wZZ6vM2vlI2KeurX1dddGs9iF4H2rO1Fjm5yypFCExMK1PoLmzXhTMT8-DaktGIg_Cbsfi8r2bdbdg1SAuToEqeRm6d99N4C1ayq0SezcGIHZsHcfL3rz5r7MLdQw5K-HNa-_eBj5gsoOcGu7VkTl_B3_9d9waqSIUvhuPRS2kph04ZlgNOc9sjlkh68xDeoI0IXUlCnBy2eLRqPBIO-Duf" />
                      <div className="min-w-0">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate block">{"Priya Nair"}</span>
                        <span className="font-code-tabular text-label-sm text-on-surface-variant block truncate">{"p.nair@genbytez.store"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="space-y-space-2xs">
                      <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>{"\n                  Editor\n                "}</span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{"Products & Categories only"}</p>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                      <span className="material-symbols-outlined text-base text-secondary">{"phonelink_lock"}</span>
                      <span >{"App Authenticator"}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"2h ago"}</span>
                  </td>
                  <td className="py-space-md px-space-xl text-right">
                    <button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="Edit Role">{"\n                Edit Role\n              "}</button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors member-row" data-email="vikram@infoventures.in" data-name="vikram sen" data-role="auditor">
                  <td className="py-space-md px-space-xl">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-semibold text-on-surface shrink-0">{"\n                  VS\n                "}</div>
                      <div className="min-w-0">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate block">{"Vikram Sen"}</span>
                        <span className="font-code-tabular text-label-sm text-on-surface-variant block truncate">{"vikram@infoventures.in"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="space-y-space-2xs">
                      <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{"\n                  Auditor\n                "}</span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{"Read-only Finance, GST & Orders"}</p>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-base">{"verified_user"}</span>
                      <span >{"Enforced"}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"Yesterday"}</span>
                  </td>
                  <td className="py-space-md px-space-xl text-right">
                    <button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="Edit Role">{"\n                Edit Role\n              "}</button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/50 transition-colors member-row" data-email="api-integration@genbytez.internal" data-name="support bot api agent" data-role="service account">
                  <td className="py-space-md px-space-xl">
                    <div className="flex items-center gap-space-md">
                      <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0">
                        <span className="material-symbols-outlined text-base">{"smart_toy"}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">{"Support Bot / API Agent"}</span>
                          <span className="px-space-xs py-space-2xs rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">{"System"}</span>
                        </div>
                        <span className="font-code-tabular text-label-sm text-on-surface-variant block truncate">{"api-integration@genbytez.internal"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="space-y-space-2xs">
                      <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                  Service Account (Webhook)\n                "}</span>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{"Automated Order & Fulfillment Dispatch"}</p>
                    </div>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"mTLS & API Key"}</span>
                  </td>
                  <td className="py-space-md px-space-lg">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      <span className="font-code-tabular text-code-tabular text-secondary font-medium">{"Continuous"}</span>
                    </div>
                  </td>
                  <td className="py-space-md px-space-xl text-right">
                    <button className="px-space-md py-space-xs rounded bg-error-container hover:bg-error-container/80 text-on-error-container font-label-md text-label-md transition-colors" type="button" aria-label="Revoke Token">{"\n                Revoke Token\n              "}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-space-md px-space-xl bg-surface-container-low flex items-center justify-between">
            <span className="font-body-sm text-body-sm text-on-surface-variant">{"Showing 5 of 5 active merchant members (5 unused seats remaining)"}</span>
            <button className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-space-2xs" type="button" aria-label="add \n Add New Role Assignment">
              <span className="material-symbols-outlined text-base">{"add"}</span>
              <span >{"Add New Role Assignment"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">

          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
            <div >
              <div className="flex items-center justify-between mb-space-lg">
                <div >
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Billing History & Tax Invoices"}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Download GST-compliant tax invoices with embedded SAC codes."}</p>
                </div>
                <button className="px-space-md py-space-xs rounded bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-space-xs" type="button" aria-label="download \n Export CSV">
                  <span className="material-symbols-outlined text-base">{"download"}</span>
                  <span >{"Export CSV"}</span>
                </button>
              </div>
              <div className="space-y-space-sm">

                <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="p-space-xs rounded bg-surface-container-highest text-on-surface mt-1">
                      <span className="material-symbols-outlined text-xl">{"receipt_long"}</span>
                    </div>
                    <div >
                      <div className="flex items-center gap-space-sm">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Invoice #GB-INV-2024-10"}</span>
                        <span className="px-space-xs py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">{"Paid"}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{"Pro Tier Annual Renewal + 5 Addon Warehouses"}</p>
                      <div className="flex items-center gap-space-md mt-space-2xs text-on-surface-variant font-label-sm text-label-sm font-code-tabular">
                        <span >{"Date: Oct 15, 2024"}</span>
                        <span >{"•"}</span>
                        <span >{"SAC: 998313"}</span>
                        <span >{"•"}</span>
                        <span >{"GSTIN verified"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-space-lg">
                    <span className="font-headline-sm text-headline-sm font-code-tabular text-on-surface font-semibold">{"₹1,79,988.00"}</span>
                    <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button" aria-label="picture_as_pdf \n Download PDF">
                      <span className="material-symbols-outlined text-base text-secondary">{"picture_as_pdf"}</span>
                      <span >{"Download PDF"}</span>
                    </button>
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="p-space-xs rounded bg-surface-container-highest text-on-surface mt-1">
                      <span className="material-symbols-outlined text-xl">{"receipt_long"}</span>
                    </div>
                    <div >
                      <div className="flex items-center gap-space-sm">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Invoice #GB-INV-2024-09"}</span>
                        <span className="px-space-xs py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">{"Paid"}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{"Pro Tier Monthly Seat Expansion (2 Extra Seats)"}</p>
                      <div className="flex items-center gap-space-md mt-space-2xs text-on-surface-variant font-label-sm text-label-sm font-code-tabular">
                        <span >{"Date: Sep 15, 2024"}</span>
                        <span >{"•"}</span>
                        <span >{"SAC: 998313"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-space-lg">
                    <span className="font-headline-sm text-headline-sm font-code-tabular text-on-surface font-semibold">{"₹3,998.00"}</span>
                    <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button" aria-label="picture_as_pdf \n Download PDF">
                      <span className="material-symbols-outlined text-base text-secondary">{"picture_as_pdf"}</span>
                      <span >{"Download PDF"}</span>
                    </button>
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="p-space-xs rounded bg-surface-container-highest text-on-surface mt-1">
                      <span className="material-symbols-outlined text-xl">{"receipt_long"}</span>
                    </div>
                    <div >
                      <div className="flex items-center gap-space-sm">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Invoice #GB-INV-2024-08"}</span>
                        <span className="px-space-xs py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">{"Paid"}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{"Pro Tier Monthly Plan"}</p>
                      <div className="flex items-center gap-space-md mt-space-2xs text-on-surface-variant font-label-sm text-label-sm font-code-tabular">
                        <span >{"Date: Aug 15, 2024"}</span>
                        <span >{"•"}</span>
                        <span >{"SAC: 998313"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-space-lg">
                    <span className="font-headline-sm text-headline-sm font-code-tabular text-on-surface font-semibold">{"₹14,999.00"}</span>
                    <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button" aria-label="picture_as_pdf \n Download PDF">
                      <span className="material-symbols-outlined text-base text-secondary">{"picture_as_pdf"}</span>
                      <span >{"Download PDF"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-space-md text-center sm:text-left">
              <a className="font-label-md text-label-md text-secondary font-semibold hover:underline" href="#">{"\n          View all 14 archived invoices →\n        "}</a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between">
            <div >
              <div className="flex items-center justify-between mb-space-lg">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Tax & Legal Entity"}</h2>
                <span className="material-symbols-outlined text-on-surface-variant">{"assured_workload"}</span>
              </div>
              <div className="space-y-space-md">
                <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider">{"Registered Business"}</span>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">{"Genbytez Technologies Private Limited"}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Level 4, Orion Tech Park, 26/1 Hosur Main Road, Electronics City, Bengaluru 560100\n            "}</p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider">{"GSTIN (India)"}</span>
                    <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">{"ACTIVE"}</span>
                  </div>
                  <p className="font-code-tabular text-body-md text-on-surface font-semibold">{"29AAAAA0000A1Z5"}</p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">{"State Jurisdiction: Karnataka (29)"}</span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider">{"Billing Contact Email"}</span>
                  <div className="flex items-center gap-space-xs text-on-surface">
                    <span className="material-symbols-outlined text-base text-on-surface-variant">{"mail"}</span>
                    <span className="font-code-tabular text-body-sm text-body-sm font-medium">{"billing@genbytez.store"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-space-lg">
              <button className="w-full flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button" aria-label="edit_document \n Update Tax Info">
                <span className="material-symbols-outlined text-base">{"edit_document"}</span>
                <span >{"Update Tax Info"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm p-gutter-desktop" id="inviteModal">
          <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-xl p-space-xl space-y-space-lg relative">
            <div className="flex items-center justify-between">
              <div >
                <h3 className="font-headline-md text-headline-md text-on-surface">{"Invite New Staff Member"}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"Send a secure invite link to assign store administrative roles."}</p>
              </div>
              <button className="p-space-xs rounded hover:bg-surface-container-high text-on-surface-variant transition-colors" type="button" aria-label="close">
                <span className="material-symbols-outlined text-xl">{"close"}</span>
              </button>
            </div>
            <form className="space-y-space-md">
              <div >
                <label className="block font-label-md text-label-md text-on-surface mb-space-2xs">{"Work Email Address"}</label>
                <input className="w-full px-space-md py-space-xs rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-outline" placeholder="colleague@genbytez.store" required={true} type="email" />
              </div>
              <div >
                <label className="block font-label-md text-label-md text-on-surface mb-space-2xs">{"Role Assignment"}</label>
                <select className="w-full px-space-md py-space-xs rounded bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none shadow-sm cursor-pointer">
                  <option >{"Admin â€” Orders, Stock & Shipments"}</option>
                  <option >{"Editor â€” Merchandising & Catalog"}</option>
                  <option >{"Support â€” Returns & Customer Care"}</option>
                  <option >{"Auditor â€” Tax, GST & Finance (Read-only)"}</option>
                </select>
              </div>
              <div className="p-space-md rounded bg-surface-container-low space-y-space-2xs">
                <div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md font-semibold">
                  <span className="material-symbols-outlined text-secondary text-base">{"verified_user"}</span>
                  <span >{"Security Enforcement Policy"}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"All store admin users are mandated to complete Hardware or TOTP 2FA before executing catalog or ledger mutations."}</p>
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                <button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="Cancel">{"\n            Cancel\n          "}</button>
                <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors" type="submit" aria-label="send \n Send Invitation">
                  <span className="material-symbols-outlined text-base">{"send"}</span>
                  <span >{"Send Invitation"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
}
