import React from 'react';

export default function SignIn() {
  return (
    <div className="w-full max-w-[1560px] mx-auto py-6 sm:py-8 px-4 sm:px-6 antialiased">
      <div className="flex flex-col w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">

          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-md p-space-xl sm:p-space-2xl">

              <div className="flex items-center justify-between gap-space-md mb-space-xl">
                <div className="flex items-center gap-space-md">
                  <img alt="Genbytez Platform Emblem" className="w-10 h-10 rounded-lg object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1VEQQnktHVHtApUIPb-F7K-MD8Zx2Eddvxsf-_OOJ4dv8PAGqc2ZkvuaFZ6kYTZYe6AidFGVyM0XkDKplybouT4U1E4dFn4T43luugG1ejX1jht23jjdw3woqxnqe1exm-t0oypwuUQPuWOyCAR_rfBBgFllEQMW3Cxooo9RVvKyQaWQCcO1m8w2sneyk_qjY30uQfeHrkbDdX_vboAEac8dl9W906bL1MU4uwsnqrDnSRa_SWUhOe7-kI" />
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">{"Genbytez Store"}</span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant">{"Console v4.18 • Cloud"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span >{"Cluster 01-US"}</span>
                </div>
              </div>
              <div className="mb-space-lg">
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs" id="auth-title">{"Welcome back to Genbytez Store Admin"}</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant" id="auth-subtitle">{"Enter your credentials to securely access your merchant dashboard and logistics pipelines."}</p>
              </div>

              <div className="grid grid-cols-2 gap-space-xs p-space-2xs bg-surface-container-high rounded-lg mb-space-xl">
                <button className="w-full py-space-xs px-space-md rounded font-label-md text-label-md transition-all bg-surface-container-lowest text-on-surface shadow-sm font-semibold" id="tab-signin" type="button" aria-label="Sign In">{"\n            Sign In\n          "}</button>
                <button className="w-full py-space-xs px-space-md rounded font-label-md text-label-md transition-all text-on-surface-variant hover:text-on-surface" id="tab-signup" type="button" aria-label="Create an Account">{"\n            Create an Account\n          "}</button>
              </div>

              <div className="flex flex-col gap-space-lg" id="panel-signin">
                <form className="flex flex-col gap-space-base">
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="signin-email">{"Work Email"}</label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-space-md text-outline-variant text-[18px]">{"alternate_email"}</span>
                      <input className="w-full h-10 pl-10 pr-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm" id="signin-email" placeholder="merchandiser@domain.com" required={true} type="email" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="signin-password">{"Password"}</label>
                      <a className="font-label-md text-label-md text-on-secondary-container hover:underline" href="#">{"Forgot password?"}</a>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-space-md text-outline-variant text-[18px]">{"lock"}</span>
                      <input className="w-full h-10 pl-10 pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm" id="signin-password" placeholder="••••••••••••" required={true} type="password" />
                      <button className="absolute right-space-sm p-space-2xs text-outline-variant hover:text-on-surface" type="button" aria-label="visibility">
                        <span className="material-symbols-outlined text-[18px]">{"visibility"}</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <label className="flex items-center gap-space-sm cursor-pointer select-none">
                      <input defaultChecked={true} className="w-4 h-4 rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer" type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{"Remember this device for 30 days"}</span>
                    </label>
                  </div>
                  <button className="w-full mt-space-xs h-10 rounded-lg bg-primary text-on-primary hover:bg-inverse-surface font-label-md text-label-md transition-all shadow-md flex items-center justify-center gap-space-xs" type="submit" aria-label="Sign In to Workspace \n arrow_forward">
                    <span >{"Sign In to Workspace"}</span>
                    <span className="material-symbols-outlined text-[16px]">{"arrow_forward"}</span>
                  </button>
                </form>

                <div className="relative flex items-center justify-center my-space-xs">
                  <div className="w-full h-[1px] bg-surface-container-highest"></div>
                  <span className="absolute px-space-md bg-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{"Or continue with"}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <button className="h-10 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors shadow-sm" type="button" aria-label="Google">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
                    </svg>
                    <span >{"Google"}</span>
                  </button>
                  <button className="h-10 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors shadow-sm" type="button" aria-label="GitHub">
                    <svg className="w-4 h-4 fill-on-surface" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                    </svg>
                    <span >{"GitHub"}</span>
                  </button>
                </div>
                <button className="w-full h-10 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors shadow-sm" type="button" aria-label="vpn_key \n Sign in with SAML / Okta SSO">
                  <span className="material-symbols-outlined text-[18px] text-secondary">{"vpn_key"}</span>
                  <span >{"Sign in with SAML / Okta SSO"}</span>
                </button>
              </div>

              <div className="hidden flex flex-col gap-space-lg" id="panel-signup">
                <div className="flex items-center justify-between p-space-sm bg-secondary-container rounded-lg">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-on-secondary-container">{"verified"}</span>
                    <span className="font-label-md text-label-md text-on-secondary-container font-semibold">{"Start your 14-day Pro tier trial"}</span>
                  </div>
                  <span className="font-code-tabular text-code-tabular text-on-secondary-container">{"No credit card required"}</span>
                </div>
                <form className="flex flex-col gap-space-base">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-base">
                    <div className="flex flex-col gap-space-2xs">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="signup-name">{"Full Name"}</label>
                      <input className="w-full h-10 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm" id="signup-name" placeholder="Elena Vance" required={true} type="text" />
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="signup-email">{"Work Email"}</label>
                      <input className="w-full h-10 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm" id="signup-email" placeholder="elena@northpacific.com" required={true} type="email" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="signup-slug">{"Store Workspace Handle"}</label>
                    <div className="flex items-center rounded-lg bg-surface-container-low shadow-sm focus-within:bg-surface-container-lowest overflow-hidden">
                      <span className="pl-space-md text-outline-variant font-code-tabular text-code-tabular select-none">{"https://"}</span>
                      <input className="flex-1 h-10 px-space-xs bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none" id="signup-slug" placeholder="acme-goods" required={true} type="text" />
                      <span className="pr-space-md py-space-xs text-on-surface-variant font-code-tabular text-code-tabular select-none">{".genbytez.store"}</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{"Your global store routing URL. Can be aliased to custom domains anytime."}</span>
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="signup-password">{"Create Master Password"}</label>
                      <span className="font-label-sm text-label-sm text-secondary font-medium" id="strength-label">{"Strong passphrase"}</span>
                    </div>
                    <div className="relative flex items-center">
                      <input className="w-full h-10 pl-space-md pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm" id="signup-password" placeholder="Minimum 10 characters" required={true} type="password" />
                      <button className="absolute right-space-sm p-space-2xs text-outline-variant hover:text-on-surface" type="button" aria-label="visibility">
                        <span className="material-symbols-outlined text-[18px]">{"visibility"}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-1 mt-1">
                      <div className="h-1 rounded bg-secondary" id="meter-1"></div>
                      <div className="h-1 rounded bg-secondary" id="meter-2"></div>
                      <div className="h-1 rounded bg-secondary" id="meter-3"></div>
                      <div className="h-1 rounded bg-surface-container-highest" id="meter-4"></div>
                    </div>
                  </div>
                  <div className="pt-space-xs">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{"\n                By creating a Genbytez merchant workspace, you agree to our \n                "}<a className="text-on-surface font-medium hover:underline" href="#">{"Terms of Service"}</a>{", \n                "}<a className="text-on-surface font-medium hover:underline" href="#">{"Acceptable Data Usage"}</a>{", and \n                "}<a className="text-on-surface font-medium hover:underline" href="#">{"Privacy Policy"}</a>{".\n              "}</p>
                  </div>
                  <button className="w-full mt-space-xs h-10 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-md text-label-md transition-all shadow-md flex items-center justify-center gap-space-xs" type="submit" aria-label="Create Store & Begin Pro Trial \n bolt">
                    <span >{"Create Store & Begin Pro Trial"}</span>
                    <span className="material-symbols-outlined text-[16px]">{"bolt"}</span>
                  </button>
                </form>
              </div>

              <div className="mt-space-xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">{"encrypted"}</span>
                  <span >{"SOC2 Type II & ISO 27001 Certified"}</span>
                </div>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center gap-space-2xs" href="#">
                  <span >{"Enterprise custom deployment"}</span>
                  <span className="material-symbols-outlined text-[14px]">{"open_in_new"}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-xl">

            <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md">
              <div className="flex items-center justify-between mb-space-base">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">{"Global Merchant Fleet"}</span>
                </div>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-code-tabular text-code-tabular">{"Live"}</span>
              </div>
              <div className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">{"1,248+ Stores"}</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">{"Managing over $480M in quarterly gross inventory across 42 localized tax zones."}</p>

              <div className="grid grid-cols-2 gap-space-md pt-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-low shadow-sm">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="font-label-sm text-label-sm">{"CORE UPTIME"}</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">{"network_check"}</span>
                  </div>
                  <div className="font-metric-display text-metric-display text-on-surface">{"99.99%"}</div>
                  <div className="font-code-tabular text-code-tabular text-secondary mt-1">{"SLA Verified"}</div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low shadow-sm">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="font-label-sm text-label-sm">{"AUTO-DISPATCH"}</span>
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">{"sync_saved_locally"}</span>
                  </div>
                  <div className="font-metric-display text-metric-display text-on-surface">{"120ms"}</div>
                  <div className="font-code-tabular text-code-tabular text-on-surface-variant mt-1">{"Real-time webhook"}</div>
                </div>
              </div>

              <div className="mt-space-lg p-space-md rounded-lg bg-surface-container-high">
                <div className="flex items-center justify-between text-on-surface mb-space-sm">
                  <span className="font-label-md text-label-md font-semibold">{"Cross-Warehouse Ingestion"}</span>
                  <span className="font-code-tabular text-code-tabular text-secondary">{"+18.4% peak"}</span>
                </div>
                <svg className="w-full h-12 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 48">
                  <path d="M0,40 Q30,35 60,38 T120,24 T180,18 T240,12 T300,4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                  <path d="M0,40 Q30,35 60,38 T120,24 T180,18 T240,12 T300,4 L300,48 L0,48 Z" fill="currentColor" fillOpacity="0.1"></path>
                </svg>
              </div>
            </div>

            <div className="bg-primary-container text-on-primary rounded-xl p-space-xl shadow-md relative overflow-hidden">
              <div className="flex items-center gap-space-xs text-secondary-fixed mb-space-md">
                <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>{"star"}</span>
                <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>{"star"}</span>
                <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>{"star"}</span>
                <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>{"star"}</span>
                <span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>{"star"}</span>
              </div>
              <blockquote className="font-body-lg text-body-lg text-inverse-on-surface mb-space-lg leading-relaxed">{"\n          â€œGenbytez gave us multi-region stock routing out of the box. Our operations team cut reconciliation overhead by 73% within our first 60 days on the platform.â€\n        "}</blockquote>
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface/20 flex items-center justify-center font-headline-sm text-headline-sm text-on-primary">{"\n              MK\n            "}</div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-primary">{"Marcus KÃ¤llstrÃ¶m"}</span>
                    <span className="font-label-sm text-label-sm text-on-primary-fixed-variant">{"VP of Digital Supply Chain, Valo Commerce"}</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[28px]">{"format_quote"}</span>
              </div>
            </div>

            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">{"Included in every tenant:"}</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-on-surface">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">{"hub"}</span>
                  <span className="font-body-sm text-body-sm font-medium">{"B2B & D2C Sync"}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">{"format_image_left"}</span>
                  <span className="font-body-sm text-body-sm font-medium">{"Role RBAC"}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">{"terminal"}</span>
                  <span className="font-body-sm text-body-sm font-medium">{"GraphQL API"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
