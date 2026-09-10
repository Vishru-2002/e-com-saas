import React from 'react';

export default function Categories() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl">
          <div >
            <div className="flex items-center gap-space-xs mb-space-2xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold bg-secondary/10 px-space-xs py-0.5 rounded-full">{"Catalog Taxonomy Engine"}</span>
              <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"• v2.4.9"}</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{"Category Hierarchy"}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-0.5">{"\n        Organize catalog taxonomies, parent-child category relationships, and storefront navigation menus.\n      "}</p>
          </div>

          <div className="flex items-center flex-wrap gap-space-sm">
            <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" type="button" aria-label="ios_share \n Export Structure">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"ios_share"}</span>
              <span >{"Export Structure"}</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" type="button" aria-label="sync \n Re-index Categories">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"sync"}</span>
              <span >{"Re-index Categories"}</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-lg py-1.5 rounded bg-primary text-on-primary hover:bg-surface-tint transition-all shadow-md font-label-md text-label-md" type="button" aria-label="add_circle \n Add Root Category">
              <span className="material-symbols-outlined text-[18px]">{"add_circle"}</span>
              <span >{"Add Root Category"}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mb-space-2xl">
          <div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex items-center justify-between">
            <div >
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Total Categories"}</div>
              <div className="font-metric-display text-metric-display text-on-surface mt-1">{"36"}</div>
              <div className="font-label-sm text-label-sm text-secondary flex items-center gap-space-2xs mt-0.5 font-medium">
                <span className="material-symbols-outlined text-[14px]">{"check_circle"}</span>
                <span >{"4 new this month"}</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[20px]">{"account_tree"}</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex items-center justify-between">
            <div >
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Depth Levels"}</div>
              <div className="font-metric-display text-metric-display text-on-surface mt-1">{"4"}</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-2xs mt-0.5">
                <span >{"Max safe storefront depth: 5"}</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[20px]">{"layers"}</span>
            </div>
            
          </div>
          <div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex items-center justify-between">
            <div >
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Assigned SKUs"}</div>
              <div className="font-metric-display text-metric-display text-on-surface mt-1">{"1,248"}</div>
              <div className="font-label-sm text-label-sm text-secondary flex items-center gap-space-2xs mt-0.5 font-medium">
                <span className="material-symbols-outlined text-[14px]">{"verified"}</span>
                <span >{"99.2% classified"}</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[20px]">{"inventory_2"}</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex items-center justify-between">
            <div >
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Storefront Menus"}</div>
              <div className="font-metric-display text-metric-display text-on-surface mt-1">{"8"}</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-2xs mt-0.5">
                <span >{"Primary, Mega, Mobile & Footer"}</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[20px]">{"menu_open"}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

          <div className="lg:col-span-7 flex flex-col gap-space-md">

            <div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col gap-space-sm">
              <div className="relative flex items-center w-full">
                <span className="material-symbols-outlined absolute left-space-sm text-outline-variant text-[18px]">{"search"}</span>
                <input className="w-full h-9 pl-9 pr-24 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Filter categories by name, slug or ID..." type="text" />
                <span className="absolute right-space-sm font-code-tabular text-code-tabular text-on-surface-variant/70 bg-surface-container px-space-xs py-0.5 rounded">{"36 nodes"}</span>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-space-xs">
                  <button className="px-space-xs py-1 rounded hover:bg-surface-container text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 transition-colors" type="button" aria-label="unfold_more \n Expand All">
                    <span className="material-symbols-outlined text-[16px]">{"unfold_more"}</span>
                    <span >{"Expand All"}</span>
                  </button>
                  <span className="text-surface-container-highest">{"•"}</span>
                  <button className="px-space-xs py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 transition-colors" type="button" aria-label="unfold_less \n Collapse All">
                    <span className="material-symbols-outlined text-[16px]">{"unfold_less"}</span>
                    <span >{"Collapse All"}</span>
                  </button>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-outline-variant">{"drag_indicator"}</span>
                  <span >{"Drag nodes to re-parent"}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">

              <div className="group flex flex-col rounded transition-colors hover:bg-surface-container-low/60 p-space-xs">
                <div className="flex items-center justify-between h-9 px-space-xs">
                  <div className="flex items-center gap-space-xs min-w-0">
                    <span className="material-symbols-outlined text-[16px] text-outline cursor-grab opacity-40 group-hover:opacity-100">{"drag_indicator"}</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded hover:bg-surface-container text-on-surface-variant" type="button" aria-label="expand_more">
                      <span className="material-symbols-outlined text-[18px]">{"expand_more"}</span>
                    </button>
                    <div className="w-5 h-5 rounded bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[14px]">{"devices"}</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">{"Electronics & Hardware"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant bg-surface-container-low px-1.5 py-0.5 rounded ml-1">{"428"}</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">{"Visible"}</span>
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Add Subcategory" type="button" aria-label="add">
                        <span className="material-symbols-outlined text-[16px]">{"add"}</span>
                      </button>
                      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Edit Category" type="button" aria-label="edit">
                        <span className="material-symbols-outlined text-[16px]">{"edit"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pl-8 flex flex-col gap-0.5 mt-0.5">
                  <div className="group/sub flex items-center justify-between h-8 px-space-xs rounded hover:bg-surface-container-low/80">
                    <div className="flex items-center gap-space-xs min-w-0">
                      <span className="material-symbols-outlined text-[14px] text-outline cursor-grab opacity-30 group-hover/sub:opacity-100">{"drag_indicator"}</span>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"expand_more"}</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium truncate">{"Audio & Acoustics"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant/80">{"112"}</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="text-secondary text-[11px] font-medium font-label-sm">{"Visible"}</span>
                      <button className="opacity-0 group-hover/sub:opacity-100 p-0.5 rounded hover:bg-surface-container text-on-surface-variant" type="button" aria-label="add">
                        <span className="material-symbols-outlined text-[14px]">{"add"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="pl-7 flex flex-col gap-0.5">
                    <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                        <span className="font-body-sm text-body-sm truncate">{"Wireless Headphones"}</span>
                        <span className="font-code-tabular text-code-tabular text-outline">{"64"}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                        <span className="font-body-sm text-body-sm truncate">{"Studio DACs & Amps"}</span>
                        <span className="font-code-tabular text-code-tabular text-outline">{"48"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="group/sub flex items-center justify-between h-8 px-space-xs rounded hover:bg-surface-container-low/80 mt-1">
                    <div className="flex items-center gap-space-xs min-w-0">
                      <span className="material-symbols-outlined text-[14px] text-outline cursor-grab opacity-30 group-hover/sub:opacity-100">{"drag_indicator"}</span>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"expand_more"}</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium truncate">{"Charging & Power"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant/80">{"98"}</span>
                    </div>
                    <span className="text-secondary text-[11px] font-medium font-label-sm">{"Visible"}</span>
                  </div>
                  <div className="pl-7 flex flex-col gap-0.5">
                    <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                        <span className="font-body-sm text-body-sm truncate">{"GaN Fast Chargers"}</span>
                        <span className="font-code-tabular text-code-tabular text-outline">{"54"}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                        <span className="font-body-sm text-body-sm truncate">{"Braided Cables & Hubs"}</span>
                        <span className="font-code-tabular text-code-tabular text-outline">{"44"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded bg-surface-container-low/40 p-space-xs shadow-sm">
                <div className="flex items-center justify-between h-9 px-space-xs">
                  <div className="flex items-center gap-space-xs min-w-0">
                    <span className="material-symbols-outlined text-[16px] text-outline cursor-grab">{"drag_indicator"}</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" type="button" aria-label="expand_more">
                      <span className="material-symbols-outlined text-[18px]">{"expand_more"}</span>
                    </button>
                    <div className="w-5 h-5 rounded bg-primary text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">{"chair_alt"}</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">{"Office & Workspace"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface bg-surface-container-highest px-1.5 py-0.5 rounded font-semibold ml-1">{"512"}</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">{"Visible"}</span>
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface" type="button" aria-label="add">
                      <span className="material-symbols-outlined text-[16px]">{"add"}</span>
                    </button>
                  </div>
                </div>

                <div className="pl-8 flex flex-col gap-1 mt-1">

                  <div className="flex flex-col bg-surface-container-lowest rounded shadow-sm p-1">
                    <div className="flex items-center justify-between h-8 px-space-xs bg-surface-container-low rounded">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="material-symbols-outlined text-[14px] text-secondary cursor-grab">{"drag_indicator"}</span>
                        <span className="material-symbols-outlined text-[16px] text-secondary font-semibold">{"expand_more"}</span>
                        <span className="font-body-md text-body-md text-on-surface font-semibold truncate">{"Ergonomic Seating"}</span>
                        <span className="font-code-tabular text-code-tabular text-secondary font-semibold bg-secondary/15 px-1 rounded">{"184"}</span>
                        <span className="px-1.5 py-0.2 bg-secondary text-on-secondary rounded-full font-label-sm text-[10px] uppercase font-bold tracking-wider">{"Active Edit"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-secondary text-[11px] font-semibold font-label-sm">{"Visible"}</span>
                        <button className="p-0.5 rounded hover:bg-surface-container text-on-surface" type="button" aria-label="more_vert">
                          <span className="material-symbols-outlined text-[14px]">{"more_vert"}</span>
                        </button>
                      </div>
                    </div>

                    <div className="pl-6 py-1 flex flex-col gap-0.5">
                      <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container text-on-surface">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">{"Mesh Task Chairs"}</span>
                          <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"92"}</span>
                        </div>
                        <span className="material-symbols-outlined text-[14px] text-outline-variant hover:text-on-surface cursor-pointer">{"arrow_forward"}</span>
                      </div>
                      <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container text-on-surface">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">{"Executive Leather Chairs"}</span>
                          <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"48"}</span>
                        </div>
                        <span className="material-symbols-outlined text-[14px] text-outline-variant hover:text-on-surface cursor-pointer">{"arrow_forward"}</span>
                      </div>
                      <div className="flex items-center justify-between h-7 px-space-xs rounded hover:bg-surface-container text-on-surface">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[14px] text-outline opacity-20">{"drag_indicator"}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">{"Active Stools & Perches"}</span>
                          <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"44"}</span>
                        </div>
                        <span className="material-symbols-outlined text-[14px] text-outline-variant hover:text-on-surface cursor-pointer">{"arrow_forward"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="group/sub flex items-center justify-between h-8 px-space-xs rounded hover:bg-surface-container-low">
                    <div className="flex items-center gap-space-xs min-w-0">
                      <span className="material-symbols-outlined text-[14px] text-outline cursor-grab opacity-30 group-hover/sub:opacity-100">{"drag_indicator"}</span>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"chevron_right"}</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium truncate">{"Desks & Tables"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"210"}</span>
                    </div>
                    <span className="text-secondary text-[11px] font-medium font-label-sm">{"Visible"}</span>
                  </div>

                  <div className="group/sub flex items-center justify-between h-8 px-space-xs rounded hover:bg-surface-container-low">
                    <div className="flex items-center gap-space-xs min-w-0">
                      <span className="material-symbols-outlined text-[14px] text-outline cursor-grab opacity-30 group-hover/sub:opacity-100">{"drag_indicator"}</span>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">{"chevron_right"}</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium truncate">{"Desk Accessories & Organization"}</span>
                      <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"118"}</span>
                    </div>
                    <span className="text-secondary text-[11px] font-medium font-label-sm">{"Visible"}</span>
                  </div>
                </div>
              </div>

              <div className="group flex items-center justify-between h-10 px-space-xs rounded hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-space-xs min-w-0">
                  <span className="material-symbols-outlined text-[16px] text-outline cursor-grab opacity-30 group-hover:opacity-100">{"drag_indicator"}</span>
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"chevron_right"}</span>
                  <div className="w-5 h-5 rounded bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[14px]">{"apparel"}</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate">{"Apparel & Merchandise"}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant bg-surface-container-low px-1.5 py-0.5 rounded ml-1">{"180"}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">{"Visible"}</span>
                  <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-surface-container text-on-surface-variant" type="button" aria-label="more_vert">
                    <span className="material-symbols-outlined text-[16px]">{"more_vert"}</span>
                  </button>
                </div>
              </div>

              <div className="group flex items-center justify-between h-10 px-space-xs rounded hover:bg-surface-container-low transition-colors opacity-75">
                <div className="flex items-center gap-space-xs min-w-0">
                  <span className="material-symbols-outlined text-[16px] text-outline cursor-grab opacity-30 group-hover:opacity-100">{"drag_indicator"}</span>
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{"chevron_right"}</span>
                  <div className="w-5 h-5 rounded bg-surface-container flex items-center justify-center text-outline">
                    <span className="material-symbols-outlined text-[14px]">{"inventory"}</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate">{"Archival / Clearance"}</span>
                  <span className="font-code-tabular text-code-tabular text-on-surface-variant bg-surface-container-low px-1.5 py-0.5 rounded ml-1">{"128"}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">{"Hidden / Draft"}</span>
                  <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-surface-container text-on-surface-variant" type="button" aria-label="more_vert">
                    <span className="material-symbols-outlined text-[16px]">{"more_vert"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container p-space-base rounded-lg flex items-start gap-space-md">
              <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">{"tips_and_updates"}</span>
              <div >
                <h4 className="font-headline-sm text-headline-sm text-on-surface">{"Hierarchy Best Practice"}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n            Storefront SEO performance peaks at 3 taxonomy levels. Products assigned to leaf nodes (Level 3) automatically cascade upward into parent categories in facet search filters.\n          "}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest p-space-xl rounded-lg shadow-sm flex flex-col gap-space-lg">

              <div className="flex items-start justify-between gap-space-sm pb-space-md bg-surface-container-low/30 p-space-md rounded">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                    <span >{"Office & Workspace"}</span>
                    <span className="material-symbols-outlined text-[12px]">{"chevron_right"}</span>
                    <span className="text-on-surface font-semibold">{"Ergonomic Seating"}</span>
                  </div>
                  <div className="flex items-center gap-space-xs mt-1">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{"Ergonomic Seating"}</h2>
                    <span className="font-code-tabular text-code-tabular text-outline bg-surface-container px-space-xs py-0.5 rounded">{"CAT-8820"}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">{"Storefront"}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked={true} className="sr-only peer" type="checkbox" />
                    <div className="w-10 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-space-md">
                <div >
                  <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">{"Category Name"}</label>
                  <input className="w-full h-9 px-space-md rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none" type="text" defaultValue="Ergonomic Seating" />
                </div>
                <div >
                  <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">{"URL Handle / Slug"}</label>
                  <div className="flex items-center bg-surface-container-low rounded px-space-sm h-9 overflow-hidden">
                    <span className="font-code-tabular text-code-tabular text-outline select-none shrink-0">{"store.genbytez.com/c/"}</span>
                    <input className="w-full bg-transparent font-code-tabular text-code-tabular text-on-surface focus:outline-none pl-1" type="text" defaultValue="office-workspace/ergonomic-seating" />
                  </div>
                </div>
                <div >
                  <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">{"Parent Category"}</label>
                  <div className="relative">
                    <select className="w-full h-9 px-space-md pr-8 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface appearance-none focus:ring-1 focus:ring-primary focus:outline-none" defaultValue={"Office & Workspace (Root Tier)"}>
                      <option >{"Office & Workspace (Root Tier)"}</option>
                      <option >{"Electronics & Hardware (Root Tier)"}</option>
                      <option >{"Apparel & Merchandise (Root Tier)"}</option>
                      <option >{"None (Make this a Root Category)"}</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-space-sm top-2 text-[18px] text-outline pointer-events-none">{"expand_more"}</span>
                  </div>
                </div>

                <div >
                  <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">{"Category Hero Banner & Visuals"}</label>
                  <div className="flex items-center gap-space-md p-space-sm bg-surface-container-low rounded">
                    <img className="w-20 h-14 object-cover rounded shadow-sm shrink-0" data-alt="A high-end modern minimalist office space showcasing a sleek ergonomic mesh task chair in matte black and silver finishes, soft ambient natural lighting through large studio windows, architectural interior design aesthetics with clean lines matching a corporate commerce catalog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSlehX7ifnedq9d2P-RqQRM8Bx-4rAhOK7-exW9ZvpIbw-yz1H0bP9eAi3d9CGgL2PrzlLoUyyMkwIQ2Iq7hpAdhKwg-A3l8Krd60ytYR2nt94DnntX0fiFmG-_6iSaFOZsvDavgiRWoVN6PYkj5AVFfZ0pOHqBWMRwq7fOWagccI1g9POmYQQKhMzd0OHJVrOJMvBrW0LZoe6a-I8HSE20mz4R7X4-dTwkUcn5ZKOwh_A0_Nw5UeQ" />
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{"hero-ergonomic-v2.webp"}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{"1920 Ã— 480 px • 142 KB"}</span>
                      <div className="flex items-center gap-space-sm mt-1">
                        <button className="font-label-sm text-label-sm text-primary hover:underline font-semibold" type="button" aria-label="Replace">{"Replace"}</button>
                        <button className="font-label-sm text-label-sm text-error hover:underline" type="button" aria-label="Remove">{"Remove"}</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                  <label className="block font-label-md text-label-md text-on-surface font-medium mb-1.5">{"SEO Description / Storefront Teaser"}</label>
                  <textarea className="w-full p-space-sm rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none resize-none" rows={2} defaultValue={"Engineered for lumbar support, active posture recovery, and 12-hour desk marathons. Premium mesh and executive finishes."}></textarea>
                </div>
              </div>

              <div className="bg-surface-container-low/60 p-space-md rounded flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-secondary">{"auto_awesome"}</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">{"Dynamic Product Rules"}</span>
                  </div>
                  <span className="font-label-sm text-label-sm font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{"Smart Taxonomy"}</span>
                </div>
                <div className="flex items-center gap-space-md">
                  <label className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant cursor-pointer">
                    <input className="accent-primary" name="assignment_type" type="radio" />
                    <span >{"Manual Select"}</span>
                  </label>
                  <label className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface font-semibold cursor-pointer">
                    <input defaultChecked={true} className="accent-primary" name="assignment_type" type="radio" />
                    <span >{"Automated Matching"}</span>
                  </label>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-xs rounded text-body-sm font-body-sm text-on-surface shadow-xs">
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant px-1 bg-surface-container rounded">{"IF"}</span>
                    <span className="font-medium">{"Product Type"}</span>
                    <span className="text-on-surface-variant font-code-tabular text-code-tabular">{"equals"}</span>
                    <span className="font-semibold bg-surface-container-low px-1.5 py-0.5 rounded">{"\"Ergonomic Seating\""}</span>
                  </div>
                  <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-xs rounded text-body-sm font-body-sm text-on-surface shadow-xs">
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant px-1 bg-surface-container rounded">{"AND"}</span>
                    <span className="font-medium">{"Tag"}</span>
                    <span className="text-on-surface-variant font-code-tabular text-code-tabular">{"includes"}</span>
                    <span className="font-semibold bg-surface-container-low px-1.5 py-0.5 rounded">{"\"lumbar-support\""}</span>
                  </div>
                </div>

                <div >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">{"Matched Catalog Inventory"}</span>
                    <span className="font-code-tabular text-code-tabular text-secondary font-bold">{"184 items matched"}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-space-xs">
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest p-1.5 rounded">
                      <img className="w-7 h-7 rounded object-cover" data-alt="A compact studio thumbnail of an aerodynamic black mesh desk chair with adjustable chrome arms and headrest isolated on a light neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAPFkV1Ugel_7SVv1JKtfxzeBeLNngNGpYXy4fHayHJ2YmEufrVaHymty8C2tShkzQ0RQodDP3lPBrTqliU7BhwcOaHmYgDrucRuvodU63E7DUbcB5VHTMhI1EpgPIKJ3JdptNfUnkFjeCAoom4Eq0Zb11svrABrVmf9MGmHy4-gffJDj6lkz6fjAO9p6y6-UfY3JA-p-kXtgOPLmxHUCJAbhLmZGM9aKjPNDKh2Dx9clae0vyOuOl" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-on-surface truncate">{"AeroFlow X1 Mesh"}</span>
                        <span className="font-code-tabular text-[10px] text-on-surface-variant">{"$489.00"}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs bg-surface-container-lowest p-1.5 rounded">
                      <img className="w-7 h-7 rounded object-cover" data-alt="A compact studio product shot of a luxury caramel brown full-grain leather executive high-back office chair with brushed aluminum star base" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2oFOgDIyOiil30vnNyHigZYTCQAn2o3Q7hPogZWOwPCXJ9w2Pw-GR6QPrtsGrdjNFzdzc44SeBmhRm3i0GympOi5Mwp5kHdS68ji9n62PUuPeUWygTezSNCceiVkGBqOy04eaEBS85QQs1_NqsuDUBCMmufoDqQx0BsggB_zYNXL0drvdnfrO39bMOcUED5I4PiviuEK8jPvdNVozomGp4spDV3SwDflyG5YbpYJ5m_eSdi6Fqyg" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-on-surface truncate">{"Vantage Executive"}</span>
                        <span className="font-code-tabular text-[10px] text-on-surface-variant">{"$820.00"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs pt-space-xs">
                <span className="font-label-md text-label-md text-on-surface font-semibold mb-1">{"Storefront Placement"}</span>
                <label className="flex items-center gap-space-sm p-space-xs rounded hover:bg-surface-container-low cursor-pointer">
                  <input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary" type="checkbox" />
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">{"Show in Main Navigation Menu"}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{"Renders under primary tier hover header"}</span>
                  </div>
                </label>
                <label className="flex items-center gap-space-sm p-space-xs rounded hover:bg-surface-container-low cursor-pointer">
                  <input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary" type="checkbox" />
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">{"Mega Menu Promo Spotlight"}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{"Displays hero banner in 4-column dropdown deck"}</span>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between pt-space-md bg-surface-container-low/20 -mx-space-xl -mb-space-xl p-space-xl rounded-b-lg">
                <button className="inline-flex items-center gap-space-2xs text-error hover:bg-error-container hover:text-on-error-container px-space-sm py-1.5 rounded transition-colors font-label-md text-label-md" type="button" aria-label="delete \n Delete Category">
                  <span className="material-symbols-outlined text-[18px]">{"delete"}</span>
                  <span >{"Delete Category"}</span>
                </button>
                <div className="flex items-center gap-space-sm">
                  <button className="px-space-md py-1.5 rounded bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button" aria-label="Cancel">{"\n              Cancel\n            "}</button>
                  <button className="px-space-lg py-1.5 rounded bg-secondary text-on-secondary hover:bg-secondary/90 shadow-sm font-label-md text-label-md font-semibold transition-all" type="button" aria-label="Save Category Changes">{"\n              Save Category Changes\n            "}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
