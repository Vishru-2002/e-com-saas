import React from 'react';

export default function OrderDetail() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full gap-space-xl">

        <div className="flex flex-col gap-space-sm">

          <nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <a className="hover:text-on-surface transition-colors" href="#">{"Genbytez Store"}</a>
            <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
            <a className="hover:text-on-surface transition-colors" href="#">{"Orders"}</a>
            <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
            <span className="font-label-md text-label-md text-on-surface">{"Order #GB-8924"}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-base">
            <div className="flex flex-col gap-space-xs">
              <div className="flex flex-wrap items-center gap-space-sm">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"Order #GB-8924"}</h1>

                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">{"check_circle"}</span>{"\n              Paid\n            "}</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{"\n              Razorpay UPI\n            "}</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-variant text-error font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>{"\n              Requires Packing\n            "}</span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[12px]">{"storefront"}</span>{"\n              Online Store\n            "}</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-outline">{"schedule"}</span>{"\n          Placed on Oct 30, 2024 at 2:22 PM via Web Checkout • Channel ID: "}<span className="font-code-tabular text-code-tabular">{"CH-ONL-IND-01"}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm">
              <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm transition-colors font-label-md text-label-md" type="button" aria-label="print \n Print Slip & Invoice">
                <span className="material-symbols-outlined text-[16px]">{"print"}</span>
                <span >{"Print Slip & Invoice"}</span>
              </button>
              <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-error-container text-on-error-container hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button" aria-label="assignment_return \n Refund">
                <span className="material-symbols-outlined text-[16px]">{"assignment_return"}</span>
                <span >{"Refund"}</span>
              </button>
              <button className="inline-flex items-center gap-space-xs px-space-lg py-1.5 rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors shadow-sm font-label-md text-label-md" type="button" aria-label="local_shipping \n Fulfill Items (3)">
                <span className="material-symbols-outlined text-[18px]">{"local_shipping"}</span>
                <span >{"Fulfill Items (3)"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">



          <div className="lg:col-span-8 flex flex-col gap-space-xl">

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px]">{"inventory_2"}</span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Items in Order"}</h2>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"3 products reserved from Mumbai Logistics Depot"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors" type="button" aria-label="Split Packages">{"Split Packages"}</button>
                  <span className="text-outline-variant">{"•"}</span>
                  <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="Edit items">{"Edit items"}</button>
                </div>
              </div>

              <div className="flex flex-col divide-y divide-surface-container">

                <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-low p-space-sm rounded transition-colors">
                  <div className="flex items-start gap-space-md">
                    <div className="w-16 h-16 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="High-end ergonomic black mesh office chair on a minimal clean studio backdrop with subtle moody rim lighting, modern e-commerce product photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB73Y1_IHupIQfc2u9D7g5KUZ6SukImFArU1lPWSI2XPtHHu35tiP4WD7rphNRirOq7wJ8Ca5vDIkYuv-uYoDfyqDL1sHVd1JJvq9M1ytOQi44Msb2UHfNOKDUDNkgpWhhnk3DAAYKm275DEyvTN9zKMlvjwEa9qctOjcxXHnhI7UMbMZpsyCahfhU0Phas30rJJd_dqxfbT_9dNDCxpcdBzUwnryg00rOM9uwpgQh9j8px1vJDioMI" />
                      <span className="absolute bottom-0 right-0 bg-primary-container text-on-primary font-code-tabular text-label-sm px-1.5 py-0.2 rounded-tl">{"Ã—1"}</span>
                    </div>
                    <div className="flex flex-col">
                      <a className="font-headline-sm text-body-lg font-semibold text-on-surface hover:text-secondary transition-colors" href="#">{"AeroFlow Ergonomic Mesh Chair"}</a>
                      <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        <span >{"Variant: "}<strong className="text-on-surface font-medium">{"Obsidian Black / High Back"}</strong></span>
                        <span >{"•"}</span>
                        <span className="font-code-tabular text-code-tabular">{"SKU: AF-204-BK"}</span>
                      </div>
                      <div className="flex items-center gap-space-xs mt-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                    142 in Mumbai Hub (Shelf D-12)\n                  "}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center font-code-tabular text-right pl-space-lg">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{"₹2,499.00"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"₹2,499.00 / unit"}</span>
                  </div>
                </div>

                <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-low p-space-sm rounded transition-colors">
                  <div className="flex items-start gap-space-md">
                    <div className="w-16 h-16 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="Minimalist extended felt desk pad mat in slate grey with stitched edges on a clean light wooden desktop workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwx9LDKgXVpd0KpDFF2IHHGmQox5ce9FVOJ4qbWdhDX7bD1f30bF0OjtfEj-4iPsvn6WM25FRMZVj0qwN9eOxQ-Rd9ER0PvfE_GyBCfJCjkMVh7wV1fihhr4hOh5TWJgsZVQhEPV7YS3I2sL7sm7APYaPQCXc0_VuPjv5jb7FcNGScOi-ROJ3o-iVNPy4wLuHzv63gwPQLtHk1H-jR_x0ECBm4LiMBnxXVo1s3rEt9MRnZ5p1_frYI" />
                      <span className="absolute bottom-0 right-0 bg-primary-container text-on-primary font-code-tabular text-label-sm px-1.5 py-0.2 rounded-tl">{"Ã—1"}</span>
                    </div>
                    <div className="flex flex-col">
                      <a className="font-headline-sm text-body-lg font-semibold text-on-surface hover:text-secondary transition-colors" href="#">{"Studio Glide Desk Mat (XL)"}</a>
                      <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        <span >{"Variant: "}<strong className="text-on-surface font-medium">{"Slate Grey / 900x400mm"}</strong></span>
                        <span >{"•"}</span>
                        <span className="font-code-tabular text-code-tabular">{"SKU: DM-110-SL"}</span>
                      </div>
                      <div className="flex items-center gap-space-xs mt-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[12px]">{"warning"}</span>{"\n                    Only 8 remaining in stock\n                  "}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center font-code-tabular text-right pl-space-lg">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{"₹550.00"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"₹550.00 / unit"}</span>
                  </div>
                </div>

                <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-low p-space-sm rounded transition-colors">
                  <div className="flex items-start gap-space-md">
                    <div className="w-16 h-16 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="Compact matte white GaN fast desktop charger block with braided USB-C cables coiled neatly against an industrial architectural studio surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZf3M4dOPZK_Wumbl5af_5rP_EFlp01v390y7YxbNf70CteQdkSLq5E2XquL1fkcT_YZ8-L9XH32nFdUDMWoqOzZBKj3taNHZLX4X8pFaZAZAy5_en5k2ciPAFMn7DAI9Hr3sbZ9Xlwy0OtUqQtilCPE6uRxyFgdg3WYv55Qnf8appiFWOsDvKCariro84atsd0PMT0u84fjxl0ZD5ORKVASf98fiwIj1JUXY-7K1HxahbxEeboGzt" />
                      <span className="absolute bottom-0 right-0 bg-primary-container text-on-primary font-code-tabular text-label-sm px-1.5 py-0.2 rounded-tl">{"Ã—1"}</span>
                    </div>
                    <div className="flex flex-col">
                      <a className="font-headline-sm text-body-lg font-semibold text-on-surface hover:text-secondary transition-colors" href="#">{"OmniCharge 100W GaN Station"}</a>
                      <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        <span >{"Variant: "}<strong className="text-on-surface font-medium">{"Arctic White"}</strong></span>
                        <span >{"•"}</span>
                        <span className="font-code-tabular text-code-tabular">{"SKU: OC-100-W"}</span>
                      </div>
                      <div className="flex items-center gap-space-xs mt-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                    88 in Mumbai Hub (Bin A-04)\n                  "}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center font-code-tabular text-right pl-space-lg">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{"₹450.00"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"₹450.00 / unit"}</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-base rounded-lg flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-outline">{"verified"}</span>
                  <span >{"All 3 items are barcode verified & ready for automated pick list generation."}</span>
                </div>
                <button className="font-label-md text-label-md text-secondary font-semibold hover:underline" type="button" aria-label="Download Pick List PDF">{"Download Pick List PDF"}</button>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">{"local_shipping"}</span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Fulfillment & Dispatch Engine"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Automated courier rating, label printing & dispatch schedule"}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n            Warehouse Origin: BOM-01 (Mumbai Central)\n          "}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg bg-surface-container-low p-space-lg rounded-xl">

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-medium flex items-center justify-between">
                    <span >{"Carrier Partner"}</span>
                    <span className="text-secondary text-label-sm font-semibold">{"Pre-selected optimal rate"}</span>
                  </label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg px-space-md py-2 pr-8 appearance-none shadow-sm focus:outline-none" defaultValue={"Delhivery Express (Surface Air Fast) \u2014 \u20b9164.00 (Est. Nov 01)"}>
                      <option >{"Delhivery Express (Surface Air Fast) â€” ₹164.00 (Est. Nov 01)"}</option>
                      <option >{"BlueDart Apex Air Cargo â€” ₹210.00 (Est. Oct 31)"}</option>
                      <option >{"XpressBees Priority Surface â€” ₹138.00 (Est. Nov 02)"}</option>
                      <option >{"Shadowfax Local Direct â€” ₹175.00 (Est. Nov 01)"}</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">{"expand_more"}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{"Pickup cut-off: 4:30 PM today (1h 45m remaining)"}</p>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-medium">{"Box Package & Dead Weight"}</label>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"Weight"}</span>
                      <span className="font-code-tabular text-code-tabular font-bold text-on-surface">{"4.20 kg"}</span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"Dimensions"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface">{"45Ã—30Ã—20 cm"}</span>
                    </div>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">{"Volumetric weight: 5.4 kg (Billed at volumetric rate)"}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary">{"check_circle"}</span>
                  <span >{"AWB tracking series pre-allocated: "}<strong className="font-code-tabular text-code-tabular text-on-surface">{"DLH-9920-4491-IN"}</strong></span>
                </div>
                <div className="flex items-center gap-space-sm w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-space-xs px-space-lg py-2 rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-all shadow-sm font-label-md text-label-md" type="button" aria-label="receipt_long \n Generate AWB & Shipping Label">
                    <span className="material-symbols-outlined text-[18px]">{"receipt_long"}</span>
                    <span >{"Generate AWB & Shipping Label"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">{"payments"}</span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Financial Summary & Taxes"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"GST compliant invoice snapshot and payment receipt ledger"}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n            Fully Captured\n          "}</span>
              </div>

              <div className="flex flex-col gap-space-sm text-body-sm text-on-surface">
                <div className="flex items-center justify-between py-1">
                  <span className="text-on-surface-variant">{"Items Subtotal (3 units)"}</span>
                  <span className="font-code-tabular text-code-tabular">{"₹3,499.00"}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="text-on-surface-variant">{"Shipping (Standard Express)"}</span>
                    <span className="px-1.5 py-0.2 rounded bg-surface-container font-code-tabular text-label-sm text-secondary font-semibold">{"FREESHIP"}</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="line-through text-on-surface-variant font-code-tabular text-code-tabular">{"₹150.00"}</span>
                    <span className="font-code-tabular text-code-tabular text-secondary font-semibold">{"₹0.00"}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-space-xs text-on-surface-variant">
                    <span >{"Integrated Taxes (18% GST Included)"}</span>
                    <span className="material-symbols-outlined text-[14px] text-outline cursor-pointer" title="CGST (9%) + SGST (9%) Breakdown">{"info"}</span>
                  </div>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"₹533.74"}</span>
                </div>

                <div className="ml-space-lg pl-space-sm flex flex-col gap-0.5 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded">
                  <div className="flex justify-between">
                    <span >{"CGST (9.0% on ₹2,965.26 taxable value):"}</span>
                    <span className="font-code-tabular text-code-tabular">{"₹266.87"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span >{"SGST (9.0% on ₹2,965.26 taxable value):"}</span>
                    <span className="font-code-tabular text-code-tabular">{"₹266.87"}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-space-md mt-space-xs bg-surface-container-low px-space-md py-space-sm rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-on-surface">{"Total Paid"}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{"Includes all state taxes & packaging"}</span>
                  </div>
                  <span className="font-metric-display text-metric-display text-on-surface">{"₹3,499.00"}</span>
                </div>
              </div>

              <div className="p-space-base bg-surface-container rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-headline-sm">
                    <span className="material-symbols-outlined text-[20px]">{"account_balance_wallet"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Razorpay UPI Payment Direct"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"Txn: pay_Pz92kL01x90aB • VPA: rohan.sharma@okaxis"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button" aria-label="Download Tax Invoice">{"\n              Download Tax Invoice\n            "}</button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">{"history"}</span>
                  <div >
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Order Timeline & Audit Trail"}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{"Immutable activity trace and administrator internal communication"}</p>
                  </div>
                </div>
                <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"4 events logged"}</span>
              </div>

              <div className="relative pl-6 flex flex-col gap-space-lg before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">

                <div className="relative flex flex-col gap-1">
                  <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Priority Dispatch Flagged"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"14:30:12"}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Order automatically queued for afternoon 4:30 PM Delhivery Air Express vehicle collection by routing policy "}<span className="font-code-tabular text-code-tabular text-on-surface">{"POL-FAST-BLR"}</span>{".\n            "}</p>
                </div>

                <div className="relative flex flex-col gap-1">
                  <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-surface-tint"></span>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Inventory Allocated & Locked"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"14:25:00"}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Reserved 3 SKUs across Mumbai Hub warehouse partitions (BOM-01). Stock deduction synchronized to Global Inventory Catalog.\n            "}</p>
                </div>

                <div className="relative flex flex-col gap-1">
                  <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-surface-tint"></span>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Notifications Dispatched"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"14:22:18"}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Order confirmation email and WhatsApp receipt sent to "}<strong className="text-on-surface">{"rohan.sharma@example.com"}</strong>{" and "}<strong className="text-on-surface">{"+91 98201 54321"}</strong>{".\n            "}</p>
                </div>

                <div className="relative flex flex-col gap-1">
                  <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{"Order Placed & Payment Captured"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"14:22:15"}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Customer successfully authorized payment of ₹3,499.00 via Razorpay UPI Gateway. Transaction ID "}<span className="font-code-tabular text-code-tabular text-on-surface">{"pay_Pz92kL01x90aB"}</span>{".\n            "}</p>
                </div>
              </div>

              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm mt-space-sm">
                <label className="font-label-md text-label-md text-on-surface font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-outline">{"lock"}</span>{"\n            Internal Staff Note (Admin only)\n          "}</label>
                <textarea className="w-full rounded bg-surface-container-lowest p-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none shadow-sm" placeholder="Leave a note regarding special packaging, gift wrap, customer instructions..." rows={2} defaultValue={""}></textarea>
                <div className="flex justify-end">
                  <button className="px-space-md py-1.5 rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors font-label-md text-label-md shadow-sm" type="button" aria-label="Post Note">{"\n              Post Note\n            "}</button>
                </div>
              </div>
            </div>
          </div>



          <div className="lg:col-span-4 flex flex-col gap-space-xl">

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">{"Customer Profile"}</span>
                <button className="font-label-sm text-label-sm text-secondary font-semibold hover:underline" type="button" aria-label="View CRM">{"View CRM"}</button>
              </div>

              <div className="flex items-center gap-space-md pt-space-xs">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-headline-md font-bold">{"\n            RS\n          "}</div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{"Rohan Sharma"}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{"Customer since Sep 2023"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Lifetime Spend"}</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"₹18,420"}</span>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Completed Orders"}</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-code-tabular">{"4 Orders"}</span>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm pt-space-xs font-body-sm text-body-sm">
                <div className="flex items-center justify-between p-space-xs rounded hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-space-sm truncate">
                    <span className="material-symbols-outlined text-[18px] text-outline">{"mail"}</span>
                    <span className="truncate text-on-surface font-code-tabular">{"rohan.sharma@example.com"}</span>
                  </div>
                  <button className="text-outline-variant hover:text-on-surface" title="Copy email" type="button" aria-label="content_copy">
                    <span className="material-symbols-outlined text-[16px]">{"content_copy"}</span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-space-xs rounded hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-secondary">{"call"}</span>
                    <span className="text-on-surface font-code-tabular">{"+91 98201 54321"}</span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-secondary text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">{"chat"}</span>{" WhatsApp\n            "}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">{"VIP Customer"}</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"Early Adopter"}</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"Tech Tier"}</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">{"Shipping Destination"}</span>
                <button className="font-label-sm text-label-sm text-secondary font-semibold hover:underline" type="button" aria-label="Edit address">{"Edit address"}</button>
              </div>

              <div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface">
                <span className="font-headline-sm text-headline-sm font-medium">{"Rohan Sharma"}</span>
                <span className="text-on-surface-variant">{"Flat 402, Skyline Residency"}</span>
                <span className="text-on-surface-variant">{"12th Main Road, Indiranagar"}</span>
                <span className="text-on-surface font-medium">{"Bengaluru, Karnataka â€“ 560038"}</span>
                <span className="text-on-surface-variant">{"India"}</span>
                <span className="text-on-surface-variant font-code-tabular text-code-tabular mt-1">{"Phone: +91 98201 54321"}</span>
              </div>

              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm text-on-secondary-container font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary">{"verified_user"}</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-semibold text-secondary">{"PIN Code & Area Verified"}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{"Serviced directly by Delhivery Express hub"}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">{"Billing Details"}</span>
                <span className="material-symbols-outlined text-[16px] text-outline">{"verified"}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{"\n          Same as shipping address\n        "}</p>

              <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{"GSTIN / Tax Registration"}</span>
                <span className="font-code-tabular text-code-tabular text-on-surface font-semibold">{"29AAACP1234M1Z2"}</span>
                <span className="font-label-sm text-label-sm text-secondary">{"Registered Business Entity (B2B Tax Invoice)"}</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">{"Security & Risk Analysis"}</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n            Low Risk\n          "}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-on-surface-variant">{"Risk Confidence Score"}</span>
                  <span className="font-code-tabular text-code-tabular font-bold text-secondary">{"98 / 100"}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ "width": "98%" }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm pt-space-xs font-body-sm text-body-sm">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">{"check"}</span>
                  <div >
                    <span className="text-on-surface font-medium">{"IP Geolocation Match"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"Bengaluru, India (Exact match with delivery address)"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">{"check"}</span>
                  <div >
                    <span className="text-on-surface font-medium">{"Payment Velocity Normal"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"1 order within the last 24h period"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">{"check"}</span>
                  <div >
                    <span className="text-on-surface font-medium">{"Card / UPI 3D-Secure Passed"}</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{"Biometric MPIN authorization verified"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
