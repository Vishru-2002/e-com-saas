import React from 'react';

export default function Settings() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-lg">
          <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <span className="hover:text-on-surface transition-colors cursor-pointer">{"Genbytez Store"}</span>
            <span className="material-symbols-outlined text-sm">{"chevron_right"}</span>
            <span className="hover:text-on-surface transition-colors cursor-pointer">{"Workspace & Settings"}</span>
            <span className="material-symbols-outlined text-sm">{"chevron_right"}</span>
            <span className="text-on-surface font-semibold">{"General & Domains"}</span>
          </nav>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-code-tabular text-code-tabular bg-surface-container-high px-space-sm py-space-2xs rounded">
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-xl rounded shadow-sm mb-space-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl relative overflow-hidden">
          <div className="space-y-space-xs max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-sm text-secondary">{"tune"}</span>{"\n        Configuration Deck\n      "}</div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{"General Settings & Domains"}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">{"\n        Manage core store properties, operational currency, theme presets, and configure SSL-verified custom storefront domains.\n      "}</p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" type="button" aria-label="menu_book \n        Documentation">
              <span className="material-symbols-outlined text-base">{"menu_book"}</span>{"\n        Documentation\n      "}</button>
            <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors font-label-md text-label-md" id="discardBtn" type="button" aria-label="Discard Changes">{"\n        Discard Changes\n      "}</button>
            <button className="flex items-center gap-space-xs px-space-lg py-space-xs rounded bg-primary text-on-primary hover:bg-primary-container shadow-sm transition-colors font-label-md text-label-md font-semibold" id="saveAllBtn" type="button" aria-label="check_circle \n        Save Changes">
              <span className="material-symbols-outlined text-base text-secondary-fixed">{"check_circle"}</span>{"\n        Save Changes\n      "}</button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-2xl items-start">

          <div className="xl:col-span-8 space-y-space-2xl">

            <section className="bg-surface-container-lowest p-space-xl rounded shadow-sm">
              <div className="flex items-center justify-between pb-space-md mb-space-lg">
                <div className="flex items-center gap-space-sm">
                  <div className="p-space-xs rounded bg-surface-container text-primary">
                    <span className="material-symbols-outlined text-xl">{"storefront"}</span>
                  </div>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Store Identity & Regional Standards"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Global business credentials, localized trading formats, and currency parameters."}</p>
                  </div>
                </div>
                <span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface-variant font-code-tabular text-code-tabular">{"UUID: GB-ST-88219"}</span>
              </div>
              <div className="space-y-space-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div >
                    <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Store Public Name"}</label>
                    <div className="relative">
                      <input className="w-full h-9 px-space-md rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/40" type="text" defaultValue="Genbytez Flagship Store" />
                      <span className="absolute right-3 top-2.5 material-symbols-outlined text-on-surface-variant text-base">{"verified"}</span>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-space-2xs">{"Displayed across invoices, customer emails, and header canonical title."}</p>
                  </div>
                  <div >
                    <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Legal Entity Name"}</label>
                    <input className="w-full h-9 px-space-md rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/40" type="text" defaultValue="Genbytez Technologies Private Limited" />
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-space-2xs">{"Used for tax audits, automated GST invoicing, and merchant bank payouts."}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div >
                    <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Primary Store Contact Email"}</label>
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest rounded shadow-sm px-space-md h-9">
                      <span className="material-symbols-outlined text-on-surface-variant text-base">{"alternate_email"}</span>
                      <input className="w-full bg-transparent text-on-surface font-body-md text-body-md focus:outline-none" type="email" defaultValue="support@genbytez.store" />
                    </div>
                  </div>
                  <div >
                    <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Support Phone Desk"}</label>
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest rounded shadow-sm px-space-md h-9">
                      <span className="material-symbols-outlined text-on-surface-variant text-base">{"call"}</span>
                      <input className="w-full bg-transparent text-on-surface font-body-md text-body-md focus:outline-none" type="text" defaultValue="+91 (080) 4920-8800" />
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-md rounded">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-sm">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">{"Store Settlement & Default Operational Currency"}</label>
                    <div className="inline-flex items-center gap-space-xs px-space-xs py-space-2xs rounded bg-surface-container text-on-surface-variant font-code-tabular text-code-tabular">
                      <span className="material-symbols-outlined text-xs text-secondary">{"lock"}</span>{"\n                Primary Payout: HDFC Current A/C ending in 4912\n              "}</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <div className="sm:col-span-2">
                      <select className="w-full h-9 px-space-md rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" defaultValue={"INR (\u20b9) - Indian Rupee"}>
                        <option >{"INR (₹) - Indian Rupee"}</option>
                        <option >{"USD ($) - US Dollar"}</option>
                        <option >{"EUR (â‚¬) - Eurozone Euro"}</option>
                        <option >{"GBP (Â£) - British Pound Sterling"}</option>
                        <option >{"SGD (S$) - Singapore Dollar"}</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start px-space-md py-space-xs rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm mr-1 text-secondary">{"sync_alt"}</span>{" Auto FX: Active via Razorpay\n              "}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                  <div >
                    <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Timezone"}</label>
                    <select className="w-full h-9 px-space-md rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" defaultValue={"(GMT+05:30) India Standard Time (IST)"}>
                      <option >{"(GMT+05:30) India Standard Time (IST)"}</option>
                      <option >{"(GMT+00:00) Universal Coordinated Time (UTC)"}</option>
                      <option >{"(GMT-05:00) Eastern Time (US & Canada)"}</option>
                      <option >{"(GMT+08:00) Singapore, Perth"}</option>
                    </select>
                  </div>
                  <div >
                    <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Default Display Locale"}</label>
                    <select className="w-full h-9 px-space-md rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" defaultValue={"English (India) [en-IN]"}>
                      <option >{"English (India) [en-IN]"}</option>
                      <option >{"English (United States) [en-US]"}</option>
                      <option >{"English (United Kingdom) [en-GB]"}</option>
                      <option >{"Hindi (India) [hi-IN]"}</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-space-xl rounded shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-md mb-space-lg">
                <div className="flex items-center gap-space-sm">
                  <div className="p-space-xs rounded bg-surface-container text-primary">
                    <span className="material-symbols-outlined text-xl">{"dns"}</span>
                  </div>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Custom Domains & DNS Verification Manager"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Global routing, routing apex edges, Cloudflare SSL/TLS termination."}</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-label-md text-label-md shrink-0" id="recheckDnsBtn" type="button" aria-label="autorenew \n Re-check DNS Records">
                  <span className="material-symbols-outlined text-base text-secondary" id="recheckSpin">{"autorenew"}</span>
                  <span >{"Re-check DNS Records"}</span>
                </button>
              </div>

              <div className="p-space-md rounded bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-space-lg">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">{"security"}</span>
                  </div>
                  <div >
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{"Custom Domain Active & Protected by Cloudflare Edge SSL"}</span>
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"HSTS forced HTTPS routing, TLS 1.3 protocol enabled with zero downtime multi-region failover."}</p>
                  </div>
                </div>
                <span className="font-code-tabular text-code-tabular text-on-surface-variant px-space-sm py-space-2xs rounded bg-surface-container-lowest shrink-0" id="timestampIndicator">{"\n            Last checked 4 minutes ago\n          "}</span>
              </div>

              <div className="overflow-x-auto mb-space-xl">
                <table className="w-full text-left">
                  <thead >
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-space-sm px-space-md">{"Target Domain"}</th>
                      <th className="py-space-sm px-space-md">{"Routing Type"}</th>
                      <th className="py-space-sm px-space-md">{"DNS Edge Status"}</th>
                      <th className="py-space-sm px-space-md">{"Edge Target"}</th>
                      <th className="py-space-sm px-space-md">{"SSL Certificate"}</th>
                      <th className="py-space-sm px-space-md text-right">{"Actions"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-sm text-body-sm">

                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-space-md px-space-md font-medium text-on-surface">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary text-base">{"public"}</span>
                          <a className="hover:underline font-code-tabular text-code-tabular font-semibold" href="https://store.genbytez.com" target="_blank">{"store.genbytez.com"}</a>
                        </div>
                      </td>
                      <td className="py-space-md px-space-md">
                        <span className="px-space-xs py-space-2xs rounded bg-primary text-on-primary font-label-sm text-label-sm uppercase font-semibold">{"Primary (CUSTOM)"}</span>
                      </td>
                      <td className="py-space-md px-space-md">
                        <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                    Active • SSL Verified\n                  "}</span>
                      </td>
                      <td className="py-space-md px-space-md font-code-tabular text-code-tabular text-on-surface-variant">{"cname.genbytez.edge.io"}</td>
                      <td className="py-space-md px-space-md text-on-surface-variant font-body-sm text-body-sm">{"Auto-renews Oct 2025"}</td>
                      <td className="py-space-md px-space-md text-right">
                        <div className="flex items-center justify-end gap-space-xs">
                          <button className="px-space-xs py-space-2xs rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm" type="button" aria-label="Manage">{"Manage"}</button>
                          <button className="p-space-2xs rounded hover:bg-surface-container text-on-surface-variant" type="button" aria-label="more_vert">
                            <span className="material-symbols-outlined text-base">{"more_vert"}</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-space-md px-space-md font-medium text-on-surface">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-on-surface-variant text-base">{"cloud"}</span>
                          <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"genbytez.storeplatform.app"}</span>
                        </div>
                      </td>
                      <td className="py-space-md px-space-md">
                        <span className="px-space-xs py-space-2xs rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase">{"System Fallback"}</span>
                      </td>
                      <td className="py-space-md px-space-md">
                        <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{"\n                    Active\n                  "}</span>
                      </td>
                      <td className="py-space-md px-space-md font-code-tabular text-code-tabular text-on-surface-variant">{"internal.platform.mesh"}</td>
                      <td className="py-space-md px-space-md text-on-surface-variant font-body-sm text-body-sm">{"Managed Wildcard"}</td>
                      <td className="py-space-md px-space-md text-right">
                        <span className="px-space-xs py-space-2xs rounded text-on-surface-variant font-label-sm text-label-sm">{"Default"}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-surface-container-low p-space-lg rounded space-y-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div >
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{"Connect New Domain"}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Add apex domain or subdomain to link directly with your Genbytez catalog."}</p>
                  </div>
                  <span className="font-label-sm text-label-sm px-space-sm py-space-2xs rounded bg-surface-container text-on-surface-variant font-semibold">{"2 of 5 Domain Slots Used"}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-space-sm">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-2.5 font-label-md text-label-md text-on-surface-variant">{"https://"}</span>
                    <input className="w-full h-9 pl-16 pr-space-md rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/40" id="newDomainInput" placeholder="shop.mybrand.in" type="text" />
                  </div>
                  <button className="px-space-lg py-space-xs rounded bg-primary hover:bg-primary-container text-on-primary transition-colors font-label-md text-label-md font-medium shrink-0" id="addDomainBtn" type="button" aria-label="Add Domain">{"\n              Add Domain\n            "}</button>
                </div>

                <div className="pt-space-sm">
                  <div className="flex items-center justify-between mb-space-xs">
                    <h4 className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">{"Required DNS Records (Your DNS Registrar)"}</h4>
                    <button className="font-label-sm text-label-sm text-secondary hover:underline flex items-center gap-space-2xs" type="button" aria-label="content_copy  Copy All BIND Zone Records">
                      <span className="material-symbols-outlined text-xs">{"content_copy"}</span>{" Copy All BIND Zone Records\n              "}</button>
                  </div>
                  <div className="bg-surface-container-lowest rounded overflow-hidden shadow-sm">
                    <table className="w-full text-left font-code-tabular text-code-tabular">
                      <thead >
                        <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          <th className="py-space-xs px-space-md">{"Type"}</th>
                          <th className="py-space-xs px-space-md">{"Host / Name"}</th>
                          <th className="py-space-xs px-space-md">{"Points To / Target Value"}</th>
                          <th className="py-space-xs px-space-md">{"TTL"}</th>
                          <th className="py-space-xs px-space-md text-right">{"Verification Status"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-container text-on-surface">
                        <tr className="hover:bg-surface-container-low/50">
                          <td className="py-space-sm px-space-md"><span className="font-semibold text-secondary">{"A"}</span></td>
                          <td className="py-space-sm px-space-md font-medium">{"@"}</td>
                          <td className="py-space-sm px-space-md text-on-surface-variant select-all">{"76.76.21.21"}</td>
                          <td className="py-space-sm px-space-md text-on-surface-variant">{"3600 (1 hr)"}</td>
                          <td className="py-space-sm px-space-md text-right">
                            <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" Valid\n                      "}</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low/50">
                          <td className="py-space-sm px-space-md"><span className="font-semibold text-secondary">{"CNAME"}</span></td>
                          <td className="py-space-sm px-space-md font-medium">{"www"}</td>
                          <td className="py-space-sm px-space-md text-on-surface-variant select-all">{"cname.genbytez.edge.io"}</td>
                          <td className="py-space-sm px-space-md text-on-surface-variant">{"Auto"}</td>
                          <td className="py-space-sm px-space-md text-right">
                            <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" Valid\n                      "}</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low/50">
                          <td className="py-space-sm px-space-md"><span className="font-semibold text-secondary">{"TXT"}</span></td>
                          <td className="py-space-sm px-space-md font-medium">{"_genbytez-verify"}</td>
                          <td className="py-space-sm px-space-md text-on-surface-variant select-all">{"gb-auth=8fa9b2c01e9d"}</td>
                          <td className="py-space-sm px-space-md text-on-surface-variant">{"300 (5 min)"}</td>
                          <td className="py-space-sm px-space-md text-right">
                            <span className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" Verified\n                      "}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">{"info"}</span>{"\n              DNS propagation can take anywhere from 2 to 48 hours depending on your registrar TTL settings.\n            "}</p>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-space-xl rounded shadow-sm">
              <div className="flex items-center gap-space-sm pb-space-md mb-space-lg">
                <div className="p-space-xs rounded bg-surface-container text-primary">
                  <span className="material-symbols-outlined text-xl">{"visibility"}</span>
                </div>
                <div >
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Maintenance & Storefront Visibility Mode"}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Regulate public storefront ingress, deployment staging, and privileged preview barriers."}</p>
                </div>
              </div>
              <div className="space-y-space-md">

                <div className="flex items-center justify-between p-space-md rounded bg-surface-container-low">
                  <div className="space-y-space-2xs max-w-xl">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">{"Storefront Status"}</span>
                      <span className="px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">{"Live Traffic"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"When switched off, inbound customer requests receive a customized 503 maintenance splash page."}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked={true} className="sr-only peer" id="storeLiveToggle" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-dim after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-space-md rounded bg-surface-container-low">
                  <div className="space-y-space-2xs max-w-xl">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">{"Password Protection for Private Staging Previews"}</span>
                      <span className="px-space-xs py-space-2xs rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"B2B Gate"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Require buyers or QA reviewers to submit an access passphrase before viewing products and checkouts."}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" id="passwordLockToggle" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-dim after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>

                <div className="p-space-md rounded bg-error-container/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div >
                      <span className="font-label-md text-label-md text-error font-semibold flex items-center gap-space-2xs">
                        <span className="material-symbols-outlined text-base text-error">{"warning"}</span>{"\n                  Danger Zone: Archive or Transfer Store Ownership\n                "}</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{"\n                  Transfer tenant master privileges to another corporate organization ID or decommission this store cluster.\n                "}</p>
                    </div>
                    <button className="px-space-md py-space-xs rounded bg-surface-container-lowest hover:bg-error/10 text-error font-label-md text-label-md font-semibold shrink-0 transition-colors shadow-sm" type="button" aria-label="Transfer Ownership">{"\n                Transfer Ownership\n              "}</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="xl:col-span-4 space-y-space-2xl">

            <section className="bg-surface-container-lowest p-space-xl rounded shadow-sm space-y-space-lg">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <div className="p-space-xs rounded bg-surface-container text-primary">
                    <span className="material-symbols-outlined text-xl">{"palette"}</span>
                  </div>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Theme & Branding Engine"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Design token mapping & iconography"}</p>
                  </div>
                </div>
              </div>

              <div >
                <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Active Storefront Theme"}</label>
                <div className="p-space-md rounded bg-surface-container-low space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{"Modern Multi-Tenant Admin"}</span>
                    <span className="px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">{"Minimal Slate"}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Ultra-clean monochrome geometry, high-density tabular grid, Geist variable type stack."}</p>
                  <div className="pt-space-xs flex items-center justify-between">
                    <button className="font-label-sm text-label-sm text-primary hover:underline font-semibold flex items-center gap-space-2xs" type="button" aria-label="code  Customize Tokens">
                      <span className="material-symbols-outlined text-xs">{"code"}</span>{" Customize Tokens\n              "}</button>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"v3.8-prod"}</span>
                  </div>
                </div>
              </div>

              <div >
                <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Store Favicon & Monogram Symbol"}</label>
                <div className="p-space-md rounded bg-surface-container-low flex items-center gap-space-md">
                  <div className="w-16 h-16 rounded bg-primary flex items-center justify-center p-2 shadow-sm shrink-0 overflow-hidden">
                    <img alt="Genbytez store monogram branding" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VEQQnktHVHtApUIPb-F7K-MD8Zx2Eddvxsf-_OOJ4dv8PAGqc2ZkvuaFZ6kYTZYe6AidFGVyM0XkDKplybouT4U1E4dFn4T43luugG1ejX1jht23jjdw3woqxnqe1exm-t0oypwuUQPuWOyCAR_rfBBgFllEQMW3Cxooo9RVvKyQaWQCcO1m8w2sneyk_qjY30uQfeHrkbDdX_vboAEac8dl9W906bL1MU4uwsnqrDnSRa_SWUhOe7-kI" />
                  </div>
                  <div className="space-y-space-2xs flex-1 min-w-0">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{"genbytez-brand-mark.svg"}</span>
                      <span className="px-space-2xs py-0.5 rounded bg-surface-container text-on-surface-variant font-code-tabular text-code-tabular">{"SVG"}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"1024Ã—1024 px • Ready for high-DPI retina screens"}</p>
                    <div className="flex items-center gap-space-sm pt-space-2xs">
                      <button className="font-label-sm text-label-sm text-secondary hover:underline font-semibold" type="button" aria-label="Replace File">{"Replace File"}</button>
                      <span className="text-on-surface-variant text-xs">{"•"}</span>
                      <button className="font-label-sm text-label-sm text-error hover:underline" type="button" aria-label="Remove">{"Remove"}</button>
                    </div>
                  </div>
                </div>
              </div>

              <div >
                <label className="block font-label-md text-label-md text-on-surface mb-space-xs">{"Primary Accent Tone"}</label>
                <div className="flex items-center justify-between p-space-md rounded bg-surface-container-low">
                  <div className="flex items-center gap-space-md">
                    <div className="w-8 h-8 rounded bg-[#09090b] shadow-sm flex items-center justify-center text-white text-xs">
                      <span className="material-symbols-outlined text-sm">{"palette"}</span>
                    </div>
                    <div >
                      <span className="font-code-tabular text-code-tabular font-bold text-on-surface">{"#09090b"}</span>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant">{"Deep Onyx Neutral"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-2xs px-space-xs py-space-2xs rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-xs">{"check"}</span>{" Contrast: AAA (16.2:1)\n            "}</div>
                </div>
              </div>

              <div className="bg-surface-container p-space-md rounded space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{"Edge Caching Rule"}</span>
                  <span className="font-code-tabular text-code-tabular text-secondary font-bold">{"99.98% HIT"}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n            Static assets, theme CSS, and webfonts are distributed globally across 290+ Cloudflare Anycast edge data centers.\n          "}</p>
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-space-sm overflow-hidden">
                  <div className="bg-secondary h-1.5 rounded-full" style={{ "width": "96%" }}></div>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest p-space-xl rounded shadow-sm space-y-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{"Storefront Telemetry"}</h3>
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between py-space-xs border-b border-surface-container">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"DNS Resolution Latency"}</span>
                  <span className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"14 ms avg"}</span>
                </div>
                <div className="flex items-center justify-between py-space-xs border-b border-surface-container">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"SSL Cipher Suite"}</span>
                  <span className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"ECDHE-ECDSA-AES128"}</span>
                </div>
                <div className="flex items-center justify-between py-space-xs border-b border-surface-container">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"API Rate Limit"}</span>
                  <span className="font-code-tabular text-code-tabular font-semibold text-on-surface">{"10,000 req / min"}</span>
                </div>
                <div className="flex items-center justify-between py-space-xs">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"Tenant Partition"}</span>
                  <span className="font-code-tabular text-code-tabular font-semibold text-secondary">{"PRO-TIER-ISOLATED"}</span>
                </div>
              </div>
              <button className="w-full py-space-xs rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-space-xs" type="button" aria-label="bar_chart \n          View Realtime Edge Logs">
                <span className="material-symbols-outlined text-sm">{"bar_chart"}</span>{"\n          View Realtime Edge Logs\n        "}</button>
            </section>
          </div>
        </div>

        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-space-lg py-space-md rounded shadow-xl flex items-center gap-space-sm transition-all duration-300 opacity-0 pointer-events-none translate-y-3" id="toastNotification">
          <span className="material-symbols-outlined text-secondary-fixed text-lg">{"check_circle"}</span>
          <span className="font-body-sm text-body-sm" id="toastMessage">{"Settings synced successfully."}</span>
        </div>


      </div>
    </div>
  );
}
