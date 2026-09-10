import React from 'react';

export default function ProductEditor() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="w-full bg-surface-container-lowest shadow-sm rounded-xl px-space-xl py-space-md mb-space-2xl">
          <div className="flex flex-wrap items-center justify-between gap-space-md">

            <div className="flex flex-col gap-space-2xs min-w-0">
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap">
                <a className="inline-flex items-center gap-space-2xs text-on-surface hover:text-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]">{"arrow_back"}</span>
                  <span >{"Back to Products"}</span>
                </a>
                <span className="text-outline-variant">{"/"}</span>
                <span >{"Catalog"}</span>
                <span className="text-outline-variant">{"/"}</span>
                <span className="font-code-tabular text-code-tabular bg-surface-container px-space-xs py-0.5 rounded text-on-surface">{"SKU: AF-204-BK"}</span>
              </div>
              <div className="flex items-center gap-space-md mt-1 flex-wrap">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{"AeroFlow Ergonomic Mesh Chair"}</h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n            Active • Published\n          "}</span>
                <span className="text-on-surface-variant font-code-tabular text-code-tabular text-xs">{"Updated 14 mins ago"}</span>
              </div>
            </div>

            <div className="flex items-center gap-space-sm ml-auto">
              <button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button" aria-label="Discard">
                <span >{"Discard"}</span>
              </button>
              <a className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md" href="#">
                <span className="material-symbols-outlined text-[18px]">{"open_in_new"}</span>
                <span >{"Preview Storefront"}</span>
              </a>
              <button className="inline-flex items-center gap-space-xs px-space-xl py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow transition-all font-label-md text-label-md font-semibold" id="save-btn" type="button" aria-label="save \n Save Changes">
                <span className="material-symbols-outlined text-[18px]">{"save"}</span>
                <span >{"Save Changes"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">

          <div className="lg:col-span-8 flex flex-col gap-space-xl min-w-0">

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="p-2 rounded-lg bg-surface-container text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">{"edit_note"}</span>
                  </span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Basic Information"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Core naming, slug representation, and long-form catalog narrative"}</p>
                  </div>
                </div>
                <span className="font-code-tabular text-code-tabular text-xs text-on-surface-variant">{"EN-IN / Multi-lingual"}</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="prod-title">{"Product Title"}</label>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"68 / 120 chars"}</span>
                </div>
                <input className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-all" id="prod-title" type="text" defaultValue="AeroFlow Ergonomic Mesh Chair - High Back with Dynamic Lumbar Support" />
              </div>

              <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{"Permanent URL Slug"}</span>
                  <button className="text-secondary font-label-sm text-label-sm hover:underline" type="button" aria-label="Customize URL">{"Customize URL"}</button>
                </div>
                <div className="flex items-center gap-1 font-code-tabular text-code-tabular text-on-surface truncate">
                  <span className="text-on-surface-variant">{"https://genbytez.store/products/"}</span>
                  <span className="font-medium text-secondary">{"aeroflow-ergonomic-mesh-chair"}</span>
                  <button className="ml-2 text-on-surface-variant hover:text-on-surface" title="Copy link" type="button" aria-label="content_copy">
                    <span className="material-symbols-outlined text-[16px]">{"content_copy"}</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface font-medium">{"Detailed Specification & Description"}</label>
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span >{"Rich Text (HTML)"}</span>
                  </div>
                </div>

                <div className="rounded-t-lg bg-surface-container p-1.5 flex flex-wrap items-center gap-1">
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Bold" type="button" aria-label="format_bold"><span className="material-symbols-outlined text-[18px]">{"format_bold"}</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Italic" type="button" aria-label="format_italic"><span className="material-symbols-outlined text-[18px]">{"format_italic"}</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Heading" type="button" aria-label="title"><span className="material-symbols-outlined text-[18px]">{"title"}</span></button>
                  <span className="h-4 w-px bg-surface-container-highest mx-1"></span>
                  <button className="p-1.5 rounded bg-surface-container-highest text-on-surface" title="Bulleted List" type="button" aria-label="format_list_bulleted"><span className="material-symbols-outlined text-[18px]">{"format_list_bulleted"}</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Numbered List" type="button" aria-label="format_list_numbered"><span className="material-symbols-outlined text-[18px]">{"format_list_numbered"}</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Insert Link" type="button" aria-label="link"><span className="material-symbols-outlined text-[18px]">{"link"}</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Insert Media" type="button" aria-label="image"><span className="material-symbols-outlined text-[18px]">{"image"}</span></button>
                  <button className="p-1.5 rounded hover:bg-surface-container-high text-on-surface" title="Code Block" type="button" aria-label="code"><span className="material-symbols-outlined text-[18px]">{"code"}</span></button>
                  <div className="ml-auto flex items-center gap-1 text-on-surface-variant">
                    <button className="p-1.5 rounded hover:bg-surface-container-high" title="Undo" type="button" aria-label="undo"><span className="material-symbols-outlined text-[18px]">{"undo"}</span></button>
                    <button className="p-1.5 rounded hover:bg-surface-container-high" title="Redo" type="button" aria-label="redo"><span className="material-symbols-outlined text-[18px]">{"redo"}</span></button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-b-lg p-space-md min-h-[160px] font-body-md text-body-md text-on-surface leading-relaxed flex flex-col gap-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
                  <p >{"Engineered for sustained 12-hour focus cycles, the "}<strong >{"AeroFlow Ergonomic Mesh Chair"}</strong>{" pairs responsive Korean multi-filament elastomer mesh with an auto-balancing synchronous-tilt core."}</p>
                  <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
                    <li ><strong className="text-on-surface">{"Dynamic Reactive Lumbar:"}</strong>{" Bi-directional contour tracking adapts instantaneously across 90Â°â€“135Â° recline paths."}</li>
                    <li ><strong className="text-on-surface">{"4D Hyper-Articulated Armrests:"}</strong>{" Independent depth, height, pivot, and axial displacement."}</li>
                    <li ><strong className="text-on-surface">{"Class-4 KGS Gas Piston:"}</strong>{" Certified under ANSI/BIFMA X5.1 safety & durability benchmarks up to 150 kg payload."}</li>
                    <li ><strong className="text-on-surface">{"Zero-Heat Retaining Mesh:"}</strong>{" High-tensile hybrid weave promotes ambient micro-ventilation."}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="p-2 rounded-lg bg-surface-container text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">{"photo_library"}</span>
                  </span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Media Gallery"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Arrange storefront photography. First slot acts as primary product thumbnail."}</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md hover:underline" type="button" aria-label="add_photo_alternate \n Add via URL">
                  <span className="material-symbols-outlined text-[18px]">{"add_photo_alternate"}</span>
                  <span >{"Add via URL"}</span>
                </button>
              </div>

              <div className="rounded-xl p-space-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform mb-space-sm">
                  <span className="material-symbols-outlined text-[26px]">{"cloud_upload"}</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-on-surface">{"Drag & drop product imagery here"}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{"Accepts PNG, JPG, WebP up to 15MB each • Recommended resolution: 2400 Ã— 2400 px"}</p>
                <button className="mt-space-md px-space-lg py-1.5 rounded-lg bg-surface-container-lowest shadow-sm text-on-surface font-label-md text-label-md hover:bg-surface-bright" type="button" aria-label="Select files from disk">{"Select files from disk"}</button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">

                <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-square flex flex-col">
                  <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" data-alt="Studio catalog photograph of a sleek black high-end ergonomic mesh office chair with chrome accents on an ultra-clean white infinite studio background, cinematic soft directional rim lighting, crisp 8k product detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNTbyGt_hvB8dFw2f0XtbNRlIUpnPerrAtLWwlxdefWNMftfL4GQS3PEgUP6WBlI5xzkWEPZLw48EnSzJFYQGC5V3aztZiGmbozIZudwOuiwYsG6oBQhgR5Fq0i_kzIhYWxjZe-88J4yHfJq8ol0Y13w90lJ0_oIYQ53uikXbKyBa56u22CFQKhgniqDEteAS3nkR0_v3N7D4Da0c-bSigCnydyCy6iU61P2NuO9_8z8qV0qXzpwl" />
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold tracking-wide shadow-sm">{"Primary Hero"}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface shadow" title="Alt Text" type="button" aria-label="edit"><span className="material-symbols-outlined text-[16px]">{"edit"}</span></button>
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-error hover:bg-error-container shadow" title="Delete" type="button" aria-label="delete"><span className="material-symbols-outlined text-[16px]">{"delete"}</span></button>
                  </div>
                  <div className="absolute bottom-1 right-2 pointer-events-none">
                    <span className="text-[10px] font-code-tabular text-on-surface bg-surface-container-lowest/80 backdrop-blur px-1 rounded">{"1.2 MB"}</span>
                  </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-square flex flex-col">
                  <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" data-alt="Close up architectural detail of dynamic lumbar adjustment knob and polished aluminum synchronous tilt mechanism on an ergonomic executive chair, professional studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHWjISHacn5kdhCxh4euxc6OWA2om8WqEQzI5q-88MCRXJ5Pjj8FdYvX0dVsEtRdrwRVYq9lTEQ_vBPtnzG31_AEtyYTpc-IHD5wjrLDBrerz6fqXS7r47lxjrfj38VprSH3YgmfEXCcAHt2r_y3lv_FZuyfl0zUo1cK6IIvmK-zzWzk9fothQ0yecPrOPK9Hc_Br12E_egMgXWlk-hk43yq7pH9adccHjl0NiMotQ1UJB6qxLakSj" />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface shadow" title="Set as primary" type="button" aria-label="star"><span className="material-symbols-outlined text-[16px]">{"star"}</span></button>
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-error hover:bg-error-container shadow" title="Delete" type="button" aria-label="delete"><span className="material-symbols-outlined text-[16px]">{"delete"}</span></button>
                  </div>
                  <div className="absolute bottom-1 right-2 pointer-events-none">
                    <span className="text-[10px] font-code-tabular text-on-surface bg-surface-container-lowest/80 backdrop-blur px-1 rounded">{"980 KB"}</span>
                  </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-square flex flex-col">
                  <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" data-alt="Side profile photograph of an ergonomic task chair with breathable slate grey mesh backrest and headrest in a minimalist modern scandinavian architectural office interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8SztncOKfcR9XXXHoV_ZBwbtfPrZ0wuN7715iP8yPtbC9bXoyBVq32EDCGsrqnHf9F6FsUntVN4nwF91n6S_P_EeCQ3HNxOxhsKzmC6Uz0DrKH121g0N0vk_jmCVHMLLlZcQtkKIAn96-xJoHwGckIIDPwhmGSsrUaW80DyrQ-yPhNpD5KMEeDB0RwxsGAiQL3OU0BK6XuXb5cTa-ghZA-2aWaGPPbCQ3LsFEAeRoMcF65eDHJZw_" />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface shadow" title="Set as primary" type="button" aria-label="star"><span className="material-symbols-outlined text-[16px]">{"star"}</span></button>
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-error hover:bg-error-container shadow" title="Delete" type="button" aria-label="delete"><span className="material-symbols-outlined text-[16px]">{"delete"}</span></button>
                  </div>
                  <div className="absolute bottom-1 right-2 pointer-events-none">
                    <span className="text-[10px] font-code-tabular text-on-surface bg-surface-container-lowest/80 backdrop-blur px-1 rounded">{"1.4 MB"}</span>
                  </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-square flex flex-col">
                  <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" data-alt="Technical exploded diagram visualization of an executive task chair showcasing structural steel gas lift, nylon caster wheels, and ergonomic back contouring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm9AUo_2nRxr8YvEY20ZlQaLM5ojV5dSQIU2ZpnmRuwFUKQrqvSTGf0aBONzx_KmL5uL31uJiLIC-OfT8crZ8-RPHYYjqFJ9T8xRW1eeDkXXohZkdcTauAmjiyXd-VpKSKGCRcjGNjgpmk8j8a-U_4jS8XhracbJWlBI7LI1LuU-kpqQPmn2wFa4jitLO10OHBcPrELuIMvC_DrMHTNQM0xgjxDP5tY8qZ7r3vfouRzLXuLTEAt869" />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface shadow" title="Set as primary" type="button" aria-label="star"><span className="material-symbols-outlined text-[16px]">{"star"}</span></button>
                    <button className="p-1.5 rounded-full bg-surface-container-lowest text-error hover:bg-error-container shadow" title="Delete" type="button" aria-label="delete"><span className="material-symbols-outlined text-[16px]">{"delete"}</span></button>
                  </div>
                  <div className="absolute bottom-1 right-2 pointer-events-none">
                    <span className="text-[10px] font-code-tabular text-on-surface bg-surface-container-lowest/80 backdrop-blur px-1 rounded">{"2.1 MB"}</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="p-2 rounded-lg bg-surface-container text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">{"payments"}</span>
                  </span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Pricing & Economics"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Customer-facing retail price, strike-through discounts, and margin yield"}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-surface-container font-code-tabular text-code-tabular text-on-surface">{"INR (₹) Base Currency"}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="price-retail">{"Retail Selling Price"}</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 font-code-tabular text-code-tabular text-on-surface-variant font-medium">{"₹"}</span>
                    <input className="w-full pl-8 pr-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-code-tabular text-body-md focus:bg-surface-container-lowest focus:outline-none" id="price-retail" type="text" defaultValue="18,499.00" />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"B2C checkout display"}</span>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="price-compare">{"Compare-at Price"}</label>
                    <span className="text-[11px] font-semibold text-secondary">{"24% OFF"}</span>
                  </div>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 font-code-tabular text-code-tabular text-on-surface-variant font-medium">{"₹"}</span>
                    <input className="w-full pl-8 pr-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-code-tabular text-body-md focus:bg-surface-container-lowest focus:outline-none" id="price-compare" type="text" defaultValue="24,499.00" />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Strike-through discount basis"}</span>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="price-cost">{"Cost per Unit (COGS)"}</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 font-code-tabular text-code-tabular text-on-surface-variant font-medium">{"₹"}</span>
                    <input className="w-full pl-8 pr-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-code-tabular text-body-md focus:bg-surface-container-lowest focus:outline-none" id="price-cost" type="text" defaultValue="10,750.00" />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Includes BOM & inbound freight"}</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-lg">
                  <div >
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Gross Profit per Unit"}</div>
                    <div className="font-headline-md text-headline-md text-on-surface font-semibold">{"₹7,749.00"}</div>
                  </div>
                  <div className="h-8 w-px bg-surface-container-highest"></div>
                  <div >
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Calculated Margin"}</div>
                    <div className="font-headline-md text-headline-md text-secondary font-semibold">{"41.89%"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">{"trending_up"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface">{"Target healthy category margin threshold (>35%) satisfied"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                  <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container focus:ring-0 focus:outline-none cursor-pointer" id="charge-tax" type="checkbox" />
                </div>
                <label className="flex flex-col cursor-pointer" htmlFor="charge-tax">
                  <span className="font-label-md text-label-md text-on-surface font-medium">{"Charge Goods & Services Tax (GST) on this product"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{"Applicable HSN: 94013000 (Standard 18.0% GST rate for ergonomic office furniture)"}</span>
                </label>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="p-2 rounded-lg bg-surface-container text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">{"tune"}</span>
                  </span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Variants & SKU Matrix"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Configure product attributes like color, size, and specific warehouse inventory."}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="add \n Add Option">
                    <span className="material-symbols-outlined text-[16px]">{"add"}</span>
                    <span >{"Add Option"}</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-space-md p-space-md rounded-xl bg-surface-container-low">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <span className="material-symbols-outlined text-outline-variant text-[18px]">{"drag_indicator"}</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Option 1: Color"}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 flex-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                      <span >{"Obsidian Black"}</span>
                      <button className="text-on-surface-variant hover:text-error ml-1" type="button" aria-label="\u00d7">{"Ã—"}</button>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                      <span >{"Slate Grey"}</span>
                      <button className="text-on-surface-variant hover:text-error ml-1" type="button" aria-label="\u00d7">{"Ã—"}</button>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-white border border-outline-variant"></span>
                      <span >{"Arctic White"}</span>
                      <button className="text-on-surface-variant hover:text-error ml-1" type="button" aria-label="\u00d7">{"Ã—"}</button>
                    </span>
                    <button className="px-2 py-1 text-xs text-secondary font-medium hover:underline" type="button" aria-label="+ New Tag">{"+ New Tag"}</button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <span className="material-symbols-outlined text-outline-variant text-[18px]">{"drag_indicator"}</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Option 2: Backrest"}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 flex-1">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
                      <span >{"Standard Back"}</span>
                      <button className="text-on-surface-variant hover:text-error ml-1" type="button" aria-label="\u00d7">{"Ã—"}</button>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
                      <span >{"High Back (with Headrest)"}</span>
                      <button className="text-on-surface-variant hover:text-error ml-1" type="button" aria-label="\u00d7">{"Ã—"}</button>
                    </span>
                    <button className="px-2 py-1 text-xs text-secondary font-medium hover:underline" type="button" aria-label="+ New Tag">{"+ New Tag"}</button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2">
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md text-on-surface-variant">{"Generated 6 child variations • Select for batch operations:"}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface text-xs font-medium hover:bg-surface-container-high transition-colors" type="button" aria-label="Edit Prices">{"Edit Prices"}</button>
                  <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface text-xs font-medium hover:bg-surface-container-high transition-colors" type="button" aria-label="Adjust Quantities">{"Adjust Quantities"}</button>
                  <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface text-xs font-medium hover:bg-surface-container-high transition-colors" type="button" aria-label="Generate Barcodes">{"Generate Barcodes"}</button>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl bg-surface-container-low shadow-inner">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <tr >
                      <th className="p-3 pl-4 w-10">
                        <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-0 cursor-pointer" type="checkbox" />
                      </th>
                      <th className="p-3">{"Variant Specification"}</th>
                      <th className="p-3">{"SKU Identifier"}</th>
                      <th className="p-3">{"Barcode / EAN"}</th>
                      <th className="p-3">{"Price (₹)"}</th>
                      <th className="p-3">{"Warehouse Stock"}</th>
                      <th className="p-3 text-right pr-4">{"Action"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-highest">

                    <tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors">
                      <td className="p-3 pl-4">
                        <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2 font-medium text-on-surface">
                          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                          <span >{"Obsidian Black / High Back"}</span>
                        </div>
                        <span className="text-[11px] text-on-surface-variant font-code-tabular">{"Master Default"}</span>
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="AF-204-BK-HB" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="890432109841" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-24 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="18,499.00" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="font-code-tabular font-semibold text-on-surface">{"142 units"}</span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">{"Mumbai Hub • Zone A"}</span>
                      </td>
                      <td className="p-3 text-right pr-4">
                        <button className="p-1 rounded text-on-surface-variant hover:text-on-surface" type="button" aria-label="more_vert"><span className="material-symbols-outlined text-[18px]">{"more_vert"}</span></button>
                      </td>
                    </tr>

                    <tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors">
                      <td className="p-3 pl-4">
                        <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2 font-medium text-on-surface">
                          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                          <span >{"Obsidian Black / Standard"}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="AF-204-BK-ST" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="890432109842" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-24 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="16,999.00" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="font-code-tabular font-semibold text-on-surface">{"68 units"}</span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">{"Delhi Hub"}</span>
                      </td>
                      <td className="p-3 text-right pr-4">
                        <button className="p-1 rounded text-on-surface-variant hover:text-on-surface" type="button" aria-label="more_vert"><span className="material-symbols-outlined text-[18px]">{"more_vert"}</span></button>
                      </td>
                    </tr>

                    <tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors">
                      <td className="p-3 pl-4">
                        <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2 font-medium text-on-surface">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                          <span >{"Slate Grey / High Back"}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="AF-204-GY-HB" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="890432109843" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-24 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="18,499.00" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="font-code-tabular font-semibold text-on-surface">{"94 units"}</span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">{"Bengaluru DC"}</span>
                      </td>
                      <td className="p-3 text-right pr-4">
                        <button className="p-1 rounded text-on-surface-variant hover:text-on-surface" type="button" aria-label="more_vert"><span className="material-symbols-outlined text-[18px]">{"more_vert"}</span></button>
                      </td>
                    </tr>

                    <tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors">
                      <td className="p-3 pl-4">
                        <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2 font-medium text-on-surface">
                          <span className="w-2.5 h-2.5 rounded-full bg-white border border-outline-variant"></span>
                          <span >{"Arctic White / High Back"}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="AF-204-WH-HB" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-32 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="890432109845" />
                      </td>
                      <td className="p-3">
                        <input className="px-2 py-1 rounded bg-surface-container-low font-code-tabular text-code-tabular text-on-surface w-24 focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="19,299.00" />
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-error"></span>
                          <span className="font-code-tabular font-semibold text-error">{"8 units (Low)"}</span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">{"Mumbai Hub"}</span>
                      </td>
                      <td className="p-3 text-right pr-4">
                        <button className="p-1 rounded text-on-surface-variant hover:text-on-surface" type="button" aria-label="more_vert"><span className="material-symbols-outlined text-[18px]">{"more_vert"}</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="p-2 rounded-lg bg-surface-container text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">{"travel_explore"}</span>
                  </span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Search Engine Listing Optimization"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Live SERP snippet preview as indexed by Google, Bing, and DuckDuckGo crawlers"}</p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-medium">{"Auto-synced with title & description"}</span>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-1.5 shadow-inner">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-xs font-semibold">{"G"}</div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[12px] text-on-surface leading-tight font-medium">{"Genbytez Store Platform • Products"}</span>
                    <span className="font-code-tabular text-[11px] text-on-surface-variant truncate">{"https://genbytez.store/products/aeroflow-ergonomic-mesh-chair"}</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#1a0dab] dark:text-tertiary-fixed hover:underline cursor-pointer leading-snug">{"\n            AeroFlow Ergonomic Mesh Chair - High Back with Lumbar Support | Genbytez\n          "}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{"\n            Engineered for sustained 12-hour work sessions. Features responsive Korean mesh, dynamic lumbar support, and 4D armrests. Free shipping across India with 3-year replacement warranty.\n          "}</p>
              </div>

              <div className="grid grid-cols-1 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="meta-title">{"Page Meta Title"}</label>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"72 / 70 max recommended"}</span>
                  </div>
                  <input className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:outline-none" id="meta-title" type="text" defaultValue="AeroFlow Ergonomic Mesh Chair - High Back with Lumbar Support | Genbytez" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="meta-desc">{"Page Meta Description"}</label>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"154 / 160 chars"}</span>
                  </div>
                  <textarea className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest focus:outline-none" id="meta-desc" rows={2} defaultValue={"Engineered for sustained 12-hour work sessions. Features responsive Korean mesh, dynamic lumbar support, and 4D armrests. Free shipping across India with 3-year replacement warranty."}></textarea>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-xl min-w-0">

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Publishing Status"}</h2>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="status-select">{"Catalog Status"}</label>
                <select className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none cursor-pointer" id="status-select" defaultValue={"Active (Live on Storefront)"}>
                  <option >{"Active (Live on Storefront)"}</option>
                  <option >{"Draft (Hidden from Catalog)"}</option>
                  <option >{"Archived (Discontinued)"}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Sync Channels (4 of 4 active)"}</span>
                <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">{"storefront"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{"Online Storefront"}</span>
                  </div>
                  <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                </label>
                <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">{"chat"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{"WhatsApp Commerce"}</span>
                  </div>
                  <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                </label>
                <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">{"shopping_bag"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{"Instagram Shop Sync"}</span>
                  </div>
                  <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                </label>
                <label className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">{"ads_click"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{"Google Merchant Feed"}</span>
                  </div>
                  <input defaultChecked={true} className="w-4 h-4 rounded text-secondary bg-surface-container-low focus:ring-0 cursor-pointer" type="checkbox" />
                </label>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Classification & Brand"}</h2>

              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="category-select">{"Product Category"}</label>
                <div className="relative">
                  <select className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer" id="category-select" defaultValue={"Office Furniture > Ergonomic Task Chairs"}>
                    <option >{"Office Furniture > Ergonomic Task Chairs"}</option>
                    <option >{"Desks & Workstations > Standing Desks"}</option>
                    <option >{"Accessories > Monitor Arms & Stands"}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="prod-type">{"Product Type"}</label>
                  <input className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none" id="prod-type" type="text" defaultValue="Ergonomic Seating" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="brand-vendor">{"Manufacturer / Vendor"}</label>
                  <input className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none" id="brand-vendor" type="text" defaultValue="AeroFlow Labs" />
                </div>
              </div>

              <div className="flex flex-col gap-space-xs pt-1">
                <label className="font-label-md text-label-md text-on-surface font-medium">{"Automated & Curated Collections"}</label>
                <div className="flex flex-wrap gap-1.5 p-2 rounded-lg bg-surface-container-low">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
                    <span >{"Best Sellers Q2"}</span>
                    <button className="text-on-surface-variant hover:text-error" type="button" aria-label="\u00d7">{"Ã—"}</button>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
                    <span >{"Work From Home 2024"}</span>
                    <button className="text-on-surface-variant hover:text-error" type="button" aria-label="\u00d7">{"Ã—"}</button>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
                    <span >{"Corporate Ergonomics"}</span>
                    <button className="text-on-surface-variant hover:text-error" type="button" aria-label="\u00d7">{"Ã—"}</button>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs pt-1">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface font-medium">{"Search Tags"}</label>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Press Enter to add"}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 p-2 rounded-lg bg-surface-container-low">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-code-tabular text-xs">{"mesh-chair Ã—"}</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-code-tabular text-xs">{"lumbar-support Ã—"}</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-code-tabular text-xs">{"bifma-certified Ã—"}</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-code-tabular text-xs">{"adjustable-4d Ã—"}</span>
                  <input className="bg-transparent border-none outline-none font-code-tabular text-xs text-on-surface placeholder:text-outline-variant w-20 px-1" placeholder="Add tag..." type="text" />
                </div>
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Logistics & Fulfillment"}</h2>

              <div className="flex flex-col gap-space-sm divide-y divide-surface-container">
                <div className="flex items-center justify-between py-1">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-medium">{"Track Quantity"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Deduct stock on completed orders"}</span>
                  </div>
                  <button className="w-11 h-6 rounded-full bg-secondary relative transition-colors focus:outline-none" type="button">
                    <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-on-secondary shadow-sm transition-transform"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-medium">{"Backorder Selling"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Continue selling when zero stock"}</span>
                  </div>
                  <button className="w-11 h-6 rounded-full bg-surface-container relative transition-colors focus:outline-none" type="button">
                    <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-on-surface-variant shadow-sm transition-transform"></span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs pt-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Courier Dimensions & Tare"}</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">{"Package Weight"}</label>
                    <div className="relative flex items-center">
                      <input className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-low font-code-tabular text-code-tabular text-on-surface focus:outline-none" type="text" defaultValue="14.20" />
                      <span className="absolute right-2.5 text-xs text-on-surface-variant font-code-tabular">{"kg"}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">{"Box (L Ã— W Ã— H)"}</label>
                    <div className="relative flex items-center">
                      <input className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-low font-code-tabular text-code-tabular text-on-surface focus:outline-none" type="text" defaultValue="65 Ã— 60 Ã— 40" />
                      <span className="absolute right-2.5 text-xs text-on-surface-variant font-code-tabular">{"cm"}</span>
                    </div>
                  </div>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">{"Volumetric weight calculated: 31.2 kg via BlueDart & Delhivery API"}</span>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"local_shipping"}</span>
                  <span className="font-body-sm text-body-sm text-on-surface">{"Zone-based Surface Shipping"}</span>
                </div>
                <span className="font-label-sm text-label-sm font-semibold text-secondary">{"Free Tier"}</span>
              </div>
            </section>

            <div className="flex items-center justify-between p-space-md rounded-xl bg-error-container/40">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-medium">{"Delete Product"}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{"Permanent removal from store"}</span>
              </div>
              <button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-error hover:bg-error hover:text-on-error transition-colors font-label-md text-label-md" type="button" aria-label="Delete">{"\n          Delete\n        "}</button>
            </div>
          </div>
        </div>

        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-space-base bg-surface-container-lowest shadow-2xl z-30 flex items-center justify-between gap-space-md">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{"Unsaved modifications"}</span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">{"AeroFlow Chair"}</span>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md" type="button" aria-label="Discard">{"Discard"}</button>
            <button className="px-space-lg py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold" type="button" aria-label="Save Changes">{"Save Changes"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
