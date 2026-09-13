import React from 'react';

export default function Orders() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="flex flex-col gap-space-sm pb-space-lg">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="hover:text-on-surface transition-colors cursor-pointer">{"Genbytez Store"}</span>
            <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
            <span className="hover:text-on-surface transition-colors cursor-pointer">{"Sales & Operations"}</span>
            <span className="material-symbols-outlined text-[14px]">{"chevron_right"}</span>
            <span className="font-semibold text-on-surface">{"Orders"}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md pt-space-xs">
            <div >
              <div className="flex items-center gap-space-sm">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{"Orders"}</h1>
                <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-tabular text-code-tabular">{"\n            LIVE SYNC\n          "}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n          Track, fulfill, and manage domestic & cross-border customer orders across all sales channels.\n        "}</p>
            </div>
            <div className="flex items-center gap-space-sm flex-wrap">
              <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-colors font-label-md text-label-md" type="button" aria-label="file_download \n Export CSV">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"file_download"}</span>
                <span >{"Export CSV"}</span>
              </button>
              <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-colors font-label-md text-label-md" type="button" aria-label="tune \n More Filters">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"tune"}</span>
                <span >{"More Filters"}</span>
              </button>
              <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-primary text-on-primary shadow-sm hover:bg-primary/90 transition-colors font-label-md text-label-md" type="button" aria-label="add \n Create Draft Order">
                <span className="material-symbols-outlined text-[16px]">{"add"}</span>
                <span >{"Create Draft Order"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-space-lg rounded-lg bg-surface-container-lowest p-space-md shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[18px]">{"alarm"}</span>
            </div>
            <div >
              <p className="font-body-sm text-body-sm font-semibold text-on-surface">{"\n          28 orders require same-day dispatch cutoff in 1 hr 45 mins\n        "}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{"\n          BlueDart & Delhivery courier pickup window closes at 16:30 IST. 14 orders currently past standard staging SLA.\n        "}</p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm self-end sm:self-auto shrink-0">
            <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-colors shadow-sm" type="button" aria-label="print \n Batch Print 28 Shipping Labels \n arrow_forward">
              <span className="material-symbols-outlined text-[16px]">{"print"}</span>
              <span >{"Batch Print 28 Shipping Labels"}</span>
              <span className="material-symbols-outlined text-[14px]">{"arrow_forward"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">

          <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Total Orders"}</span>
              <span className="p-1 rounded bg-surface-container text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-[18px]">{"shopping_bag"}</span>
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline justify-between">
              <span className="font-metric-display text-metric-display text-on-surface">{"1,842"}</span>
              <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[12px]">{"trending_up"}</span>{"\n          +12.6%\n        "}</span>
            </div>
            <div className="mt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span >{"vs. 1,635 last month"}</span>
              <span className="font-code-tabular text-code-tabular">{"99.2% captured"}</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Awaiting Fulfillment"}</span>
              <span className="p-1 rounded bg-error-container text-on-error-container flex items-center">
                <span className="material-symbols-outlined text-[18px]">{"inventory_2"}</span>
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline justify-between">
              <span className="font-metric-display text-metric-display text-on-surface">{"28"}</span>
              <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">{"\n          14 Past SLA\n        "}</span>
            </div>
            <div className="mt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span >{"Needs warehouse pack"}</span>
              <span className="text-error font-medium">{"Critical"}</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Fulfilled & In Transit"}</span>
              <span className="p-1 rounded bg-surface-container text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-[18px]">{"local_shipping"}</span>
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline justify-between">
              <span className="font-metric-display text-metric-display text-on-surface">{"164"}</span>
              <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n          98.4% On-Time\n        "}</span>
            </div>
            <div className="mt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span >{"Active courier dispatches"}</span>
              <span className="font-code-tabular text-code-tabular">{"4 carriers"}</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{"Gross Order Volume"}</span>
              <span className="p-1 rounded bg-surface-container text-on-surface-variant flex items-center">
                <span className="material-symbols-outlined text-[18px]">{"payments"}</span>
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline justify-between">
              <span className="font-metric-display text-metric-display text-on-surface">{"₹3,412,850"}</span>
              <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">{"\n          +8.4%\n        "}</span>
            </div>
            <div className="mt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span >{"AOV ₹1,852"}</span>
              <span className="font-code-tabular text-code-tabular">{"30d cycle"}</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-lg shadow-sm">

          <div className="p-space-md flex items-center justify-between flex-wrap gap-space-sm bg-surface-container-low/40 rounded-t-lg">
            <div className="flex items-center gap-space-xs overflow-x-auto">
              <button className="px-space-md py-1 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm" type="button" aria-label="All Orders (1,842)">{"\n          All Orders (1,842)\n        "}</button>
              <button className="px-space-md py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-space-xs" type="button" aria-label="Unfulfilled \n 28">
                <span >{"Unfulfilled"}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">{"28"}</span>
              </button>
              <button className="px-space-md py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-space-xs" type="button" aria-label="Unpaid \n 6">
                <span >{"Unpaid"}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"6"}</span>
              </button>
              <button className="px-space-md py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-space-xs" type="button" aria-label="Open NDR / Exceptions \n 4">
                <span >{"Open NDR / Exceptions"}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">{"4"}</span>
              </button>
              <button className="px-space-md py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md shadow-sm" type="button" aria-label="Archived">{"\n          Archived\n        "}</button>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="px-space-sm py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow-sm" type="button" aria-label="view_column \n Edit Columns">
                <span className="material-symbols-outlined text-[14px]">{"view_column"}</span>
                <span >{"Edit Columns"}</span>
              </button>
              <button className="px-space-sm py-1 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 shadow-sm" type="button" aria-label="bookmark_add \n Save View">
                <span className="material-symbols-outlined text-[14px]">{"bookmark_add"}</span>
                <span >{"Save View"}</span>
              </button>
            </div>
          </div>

          <div className="p-space-md flex flex-col lg:flex-row lg:items-center gap-space-sm justify-between">

            <div className="relative flex-1 max-w-xl">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">{"\n          search\n        "}</span>
              <input className="w-full h-9 pl-9 pr-24 rounded bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm" placeholder="Filter by order #, customer name, phone, email, or AWB tracking..." type="text" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-code-tabular text-code-tabular">{"\n            /\n          "}</kbd>
              </div>
            </div>

            <div className="flex items-center gap-space-xs flex-wrap">

              <div className="relative">
                <button className="h-9 px-space-md rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-space-xs shadow-sm transition-colors" type="button" aria-label="Payment: \n All Statuses \n keyboard_arrow_down">
                  <span className="text-on-surface-variant font-normal">{"Payment:"}</span>
                  <span >{"All Statuses"}</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"keyboard_arrow_down"}</span>
                </button>
              </div>

              <div className="relative">
                <button className="h-9 px-space-md rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-space-xs shadow-sm transition-colors" type="button" aria-label="Fulfillment: \n All \n keyboard_arrow_down">
                  <span className="text-on-surface-variant font-normal">{"Fulfillment:"}</span>
                  <span >{"All"}</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"keyboard_arrow_down"}</span>
                </button>
              </div>

              <div className="relative">
                <button className="h-9 px-space-md rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-space-xs shadow-sm transition-colors" type="button" aria-label="Channel: \n All Channels \n keyboard_arrow_down">
                  <span className="text-on-surface-variant font-normal">{"Channel:"}</span>
                  <span >{"All Channels"}</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"keyboard_arrow_down"}</span>
                </button>
              </div>

              <div className="relative">
                <button className="h-9 px-space-md rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-space-xs shadow-sm transition-colors" type="button" aria-label="calendar_today \n Last 30 Days \n keyboard_arrow_down">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"calendar_today"}</span>
                  <span >{"Last 30 Days"}</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"keyboard_arrow_down"}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="px-space-md py-space-xs bg-surface-container flex items-center justify-between flex-wrap gap-space-sm text-body-sm font-body-sm">
            <div className="flex items-center gap-space-sm flex-wrap">
              <div className="flex items-center gap-space-xs">
                <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" id="selectAllOrders" type="checkbox" />
                <label className="font-label-md text-label-md text-on-surface font-medium cursor-pointer" htmlFor="selectAllOrders">{"\n            Select all 1,842 orders\n          "}</label>
              </div>
              <span className="text-on-surface-variant">{"|"}</span>
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Quick Actions:"}</span>
                <button className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm shadow-sm transition-colors" type="button" aria-label="Mark as Fulfilled">{"\n            Mark as Fulfilled\n          "}</button>
                <button className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm shadow-sm transition-colors" type="button" aria-label="Print Thermal Slips">{"\n            Print Thermal Slips\n          "}</button>
                <button className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm shadow-sm transition-colors" type="button" aria-label="Capture Payment">{"\n            Capture Payment\n          "}</button>
                <button className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm shadow-sm transition-colors" type="button" aria-label="Export Selected">{"\n            Export Selected\n          "}</button>
              </div>
            </div>
            <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>{"\n          Gateway Online\n        "}</span>
              <span >{"Auto-sync active (2m ago)"}</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <tr >
                  <th className="w-10 px-space-md py-space-sm" scope="col">
                    <span className="sr-only">{"Select Row"}</span>
                  </th>
                  <th className="px-space-md py-space-sm font-semibold" scope="col">{"Order"}</th>
                  <th className="px-space-md py-space-sm font-semibold" scope="col">{"Date & Time"}</th>
                  <th className="px-space-md py-space-sm font-semibold" scope="col">{"Customer & Location"}</th>
                  <th className="px-space-md py-space-sm font-semibold" scope="col">{"Items"}</th>
                  <th className="px-space-md py-space-sm font-semibold" scope="col">{"Payment"}</th>
                  <th className="px-space-md py-space-sm font-semibold" scope="col">{"Fulfillment Status"}</th>
                  <th className="px-space-md py-space-sm font-semibold text-right" scope="col">{"Total"}</th>
                  <th className="px-space-md py-space-sm font-semibold text-right" scope="col">{"Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">

                <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest group">
                  <td className="px-space-md py-3 text-center">
                    <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="px-space-md py-3">
                    <div className="flex items-center gap-space-xs">
                      <a className="font-code-tabular text-code-tabular font-bold text-on-surface hover:underline" href="#">{"\n                  #GB-8924\n                "}</a>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                  Storefront\n                "}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-3 font-code-tabular text-code-tabular text-on-surface-variant">
                    <div >{"Today"}</div>
                    <div className="text-[11px] text-on-surface-variant/80">{"14:22 IST"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="font-medium text-on-surface">{"Rohan Sharma"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"location_on"}</span>{"\n                Bengaluru, KA (560038)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="text-on-surface font-medium">{"3 items"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[130px]">{"GB-Pro Neo, +2 items"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Paid\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Razorpay UPI"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{"\n                Unfulfilled\n              "}</div>
                    <div className="text-[11px] text-error font-medium mt-0.5 flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">{"schedule"}</span>{"\n                Needs packing (35m left)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="font-code-tabular text-code-tabular font-bold text-on-surface">{"₹3,499.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Standard Air"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary/90 transition-colors shadow-sm" type="button" aria-label="Fulfill Order">{"\n                  Fulfill Order\n                "}</button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest group">
                  <td className="px-space-md py-3 text-center">
                    <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="px-space-md py-3">
                    <div className="flex items-center gap-space-xs">
                      <a className="font-code-tabular text-code-tabular font-bold text-on-surface hover:underline" href="#">{"\n                  #GB-8923\n                "}</a>
                      <span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">{"\n                  WhatsApp\n                "}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-3 font-code-tabular text-code-tabular text-on-surface-variant">
                    <div >{"Today"}</div>
                    <div className="text-[11px] text-on-surface-variant/80">{"13:45 IST"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="font-medium text-on-surface">{"Priya Nair"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"location_on"}</span>{"\n                Mumbai, MH (400050)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="text-on-surface font-medium">{"1 item"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[130px]">{"GB Studio Headset"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Paid\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Credit Card •• 4912"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[13px]">{"local_shipping"}</span>{"\n                In Transit\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Delhivery #DL904812"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="font-code-tabular text-code-tabular font-bold text-on-surface">{"₹1,849.00"}</div>
                    <div className="font-label-sm text-label-sm text-secondary font-medium">{"Est: Tomorrow"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors shadow-sm" type="button" aria-label="Track AWB">{"\n                  Track AWB\n                "}</button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest group">
                  <td className="px-space-md py-3 text-center">
                    <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="px-space-md py-3">
                    <div className="flex items-center gap-space-xs">
                      <a className="font-code-tabular text-code-tabular font-bold text-on-surface hover:underline" href="#">{"\n                  #GB-8922\n                "}</a>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                  Storefront\n                "}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-3 font-code-tabular text-code-tabular text-on-surface-variant">
                    <div >{"Today"}</div>
                    <div className="text-[11px] text-on-surface-variant/80">{"11:10 IST"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="font-medium text-on-surface">{"Vikramaditya Sen"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"location_on"}</span>{"\n                Kolkata, WB (700029)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="text-on-surface font-medium">{"2 items"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[130px]">{"GB Cloud Dock + Pack"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{"\n                Partially Refunded\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Net ₹3,290 (-₹1,000)"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[13px]">{"check_circle"}</span>{"\n                Delivered\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"BlueDart #BD742189"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="font-code-tabular text-code-tabular font-bold text-on-surface">{"₹4,290.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Express Air"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" aria-label="Details">{"\n                  Details\n                "}</button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest group">
                  <td className="px-space-md py-3 text-center">
                    <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="px-space-md py-3">
                    <div className="flex items-center gap-space-xs">
                      <a className="font-code-tabular text-code-tabular font-bold text-on-surface hover:underline" href="#">{"\n                  #GB-8921\n                "}</a>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                  Instagram Shop\n                "}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-3 font-code-tabular text-code-tabular text-on-surface-variant">
                    <div >{"Yesterday"}</div>
                    <div className="text-[11px] text-on-surface-variant/80">{"19:30 IST"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="font-medium text-on-surface">{"Ananya Patel"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"location_on"}</span>{"\n                Ahmedabad, GJ (380015)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="text-on-surface font-medium">{"4 items"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[130px]">{"Bundle Pack Alpha"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"\n                Paid\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"NetBanking HDFC"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[13px]">{"check_circle"}</span>{"\n                Delivered\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Shadowfax #SF3901"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="font-code-tabular text-code-tabular font-bold text-on-surface">{"₹7,850.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"Free Priority"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" aria-label="Details">{"\n                  Details\n                "}</button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest group">
                  <td className="px-space-md py-3 text-center">
                    <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="px-space-md py-3">
                    <div className="flex items-center gap-space-xs">
                      <a className="font-code-tabular text-code-tabular font-bold text-on-surface hover:underline" href="#">{"\n                  #GB-8920\n                "}</a>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                  Storefront\n                "}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-3 font-code-tabular text-code-tabular text-on-surface-variant">
                    <div >{"Yesterday"}</div>
                    <div className="text-[11px] text-on-surface-variant/80">{"16:15 IST"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="font-medium text-on-surface">{"Sameer Joshi"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"location_on"}</span>{"\n                Pune, MH (411004)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="text-on-surface font-medium">{"1 item"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[130px]">{"GB Cable Braided 2m"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{"\n                Pending (COD)\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Cash On Delivery"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{"\n                Unfulfilled\n              "}</span>
                    <div className="text-[11px] text-on-surface-variant mt-0.5">{"Awaiting COD Verification"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="font-code-tabular text-code-tabular font-bold text-on-surface">{"₹899.00"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">{"COD Fee Incl."}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors shadow-sm" type="button" aria-label="Verify COD">{"\n                  Verify COD\n                "}</button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest group">
                  <td className="px-space-md py-3 text-center">
                    <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                  </td>
                  <td className="px-space-md py-3">
                    <div className="flex items-center gap-space-xs">
                      <a className="font-code-tabular text-code-tabular font-bold text-on-surface hover:underline" href="#">{"\n                  #GB-8919\n                "}</a>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                  Storefront\n                "}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-3 font-code-tabular text-code-tabular text-on-surface-variant">
                    <div >{"Oct 28"}</div>
                    <div className="text-[11px] text-on-surface-variant/80">{"09:18 IST"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="font-medium text-on-surface">{"Meera Kapoor"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">{"location_on"}</span>{"\n                New Delhi, DL (110001)\n              "}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <div className="text-on-surface font-medium">{"2 items"}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[130px]">{"GB MagCharge Case"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{"\n                Refunded\n              "}</span>
                    <div className="font-code-tabular text-[11px] text-on-surface-variant mt-0.5">{"Razorpay Ref #9812"}</div>
                  </td>
                  <td className="px-space-md py-3">
                    <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"\n                Cancelled / RTO\n              "}</span>
                    <div className="text-[11px] text-on-surface-variant mt-0.5">{"Customer requested"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="font-code-tabular text-code-tabular font-bold line-through text-on-surface-variant">{"₹2,450.00"}</div>
                    <div className="font-label-sm text-label-sm text-error">{"Refund Processed"}</div>
                  </td>
                  <td className="px-space-md py-3 text-right">
                    <div className="flex items-center justify-end gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" aria-label="View Logs">{"\n                  View Logs\n                "}</button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="more_vert">
                        <span className="material-symbols-outlined text-[18px]">{"more_vert"}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container-low bg-surface-container-lowest rounded-b-lg">
            <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
              <span >{"Showing "}<strong className="text-on-surface font-semibold">{"1 to 6"}</strong>{" of "}<strong className="text-on-surface font-semibold">{"1,842"}</strong>{" orders"}</span>
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm">{"Rows per page:"}</span>
                <select className="h-7 px-1 rounded bg-surface-container text-on-surface font-code-tabular text-code-tabular border-none focus:outline-none cursor-pointer">
                  <option >{"10"}</option>
                  <option >{"25"}</option>
                  <option >{"50"}</option>
                  <option >{"100"}</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="p-1 rounded bg-surface-container-low text-on-surface-variant/50 cursor-not-allowed" disabled={true} type="button" aria-label="chevron_left">
                <span className="material-symbols-outlined text-[18px]">{"chevron_left"}</span>
              </button>
              <button className="w-7 h-7 rounded bg-primary text-on-primary font-code-tabular text-code-tabular font-medium flex items-center justify-center shadow-sm" type="button" aria-label="1">{"\n          1\n        "}</button>
              <button className="w-7 h-7 rounded bg-surface-container-low text-on-surface hover:bg-surface-container font-code-tabular text-code-tabular flex items-center justify-center transition-colors" type="button" aria-label="2">{"\n          2\n        "}</button>
              <button className="w-7 h-7 rounded bg-surface-container-low text-on-surface hover:bg-surface-container font-code-tabular text-code-tabular flex items-center justify-center transition-colors" type="button" aria-label="3">{"\n          3\n        "}</button>
              <span className="px-1 text-on-surface-variant font-code-tabular text-code-tabular">{"..."}</span>
              <button className="w-7 h-7 rounded bg-surface-container-low text-on-surface hover:bg-surface-container font-code-tabular text-code-tabular flex items-center justify-center transition-colors" type="button" aria-label="308">{"\n          308\n        "}</button>
              <button className="p-1 rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" type="button" aria-label="chevron_right">
                <span className="material-symbols-outlined text-[18px]">{"chevron_right"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-space-lg grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">{"sync"}</span>
            </div>
            <div >
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Auto-Routing Active"}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n          Incoming orders are automatically assigned to nearest fulfillment hubs in Bengaluru, Mumbai, and Delhi NCR.\n        "}</p>
              <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-medium mt-space-xs hover:underline" href="#">{"\n          View routing rules "}<span className="material-symbols-outlined text-[14px]">{"arrow_forward"}</span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">{"qr_code_scanner"}</span>
            </div>
            <div >
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Thermal Slip Format"}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n          Labels format set to 4x6\" Standard Zebra EPL/ZPL. Auto-manifest generation configured for BlueDart & Delhivery.\n        "}</p>
              <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-medium mt-space-xs hover:underline" href="#">{"\n          Configure printer "}<span className="material-symbols-outlined text-[14px]">{"arrow_forward"}</span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">{"shield"}</span>
            </div>
            <div >
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{"Fraud & RTO Shield"}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n          High-risk COD detection checked 128 orders today. 3 high-risk shipments automatically routed for OTP verification.\n        "}</p>
              <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-medium mt-space-xs hover:underline" href="#">{"\n          Manage risk scores "}<span className="material-symbols-outlined text-[14px]">{"arrow_forward"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
