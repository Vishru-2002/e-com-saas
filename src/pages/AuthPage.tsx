import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { storageService } from '@/services/storageService';

interface AuthPageProps {
  initialMode?: 'signin' | 'signup';
  onSuccess?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  initialMode,
  onSuccess,
}) => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab based on prop or route
  const isSignupRoute = initialMode === 'signup' || location.pathname === '/signup';
  const [isSignUp, setIsSignUp] = useState(isSignupRoute);

  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsSignUp(true);
    } else if (location.pathname === '/signin' || location.pathname === '/login' || location.pathname === '/') {
      setIsSignUp(false);
    }
  }, [location.pathname]);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [storeSlug, setStoreSlug] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // States
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSsoDialog, setShowSsoDialog] = useState(false);
  const [ssoDomain, setSsoDomain] = useState('');

  // Password Strength Meter
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 10) score += 1;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strengthScore = getPasswordStrength(password);
  const strengthLabels = ['Too short', 'Weak', 'Fair passphrase', 'Strong passphrase', 'Very strong passphrase'];

  const handleNameChange = (val: string) => {
    setName(val);
    if (!storeSlug || storeSlug === name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')) {
      setStoreSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        if (!name.trim()) throw new Error('Please enter your full name.');
        if (!email.trim() || !email.includes('@')) throw new Error('Please enter a valid work email address.');
        if (password.length < 6) throw new Error('Master password must be at least 6 characters.');
        if (!agreeTerms) throw new Error('Please agree to the Terms of Service and Privacy Policy.');

        await register(name, email, password);
      } else {
        if (!email.trim()) throw new Error('Please enter your email address.');
        if (!password) throw new Error('Please enter your password.');

        await login(email, password);
      }

      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/builder');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = async () => {
    setError('');
    setLoading(true);
    try {
      await login('sarah@genbytez.com', 'demopassword123');
      if (onSuccess) onSuccess();
      else navigate('/builder');
    } catch {
      // If user was wiped, register demo user
      try {
        await register('Sarah Anderson', 'sarah@genbytez.com', 'demopassword123');
        if (onSuccess) onSuccess();
        else navigate('/builder');
      } catch (err) {
        setError((err as Error).message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider: string) => {
    setError('');
    setLoading(true);
    const demoEmail = `${provider.toLowerCase()}-merchant@genbytez.com`;
    const demoName = `${provider} Merchant`;
    try {
      await login(demoEmail, 'demopassword123');
      if (onSuccess) onSuccess();
      else navigate('/builder');
    } catch {
      try {
        await register(demoName, demoEmail, 'demopassword123');
        if (onSuccess) onSuccess();
        else navigate('/builder');
      } catch (err) {
        setError((err as Error).message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSsoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ssoDomain.trim()) return;
    setShowSsoDialog(false);
    handleSocialAuth(`SSO-${ssoDomain.split('.')[0]}`);
  };

  const handleResetData = () => {
    storageService.resetAll();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between antialiased">
      {/* Top Subtle Brand Bar */}
      <header className="w-full border-b border-surface-container-highest/60 bg-surface-container-lowest/80 backdrop-blur-md">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">
              g›
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              Genbytez
            </span>
            <span className="hidden sm:inline-block text-outline-variant font-light">|</span>
            <span className="hidden sm:inline-block font-label-sm text-xs text-on-surface-variant">
              Multi-Tenant Commerce Cloud
            </span>
          </div>


        </div>
      </header>

      {/* Main Split Screen matching screens/SignIn.tsx */}
      <main className="flex-1 w-full max-w-[1560px] mx-auto py-8 sm:py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">

          {/* LEFT 7 COLUMNS: Official Authentication Form */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-md p-space-xl sm:p-space-2xl border border-surface-container-high/40">

              {/* Form Emblem & Cluster Header */}
              <div className="flex items-center justify-between gap-space-md mb-space-xl">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline-md font-bold shadow-sm">
                    g›
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                      Genbytez Store Platform
                    </span>
                    <span className="font-code-tabular text-code-tabular text-on-surface-variant text-xs">
                      Console v4.18 • Merchant Cloud
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm border border-surface-container-highest">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>SOC2 Verified</span>
                </div>
              </div>

              {/* Headline */}
              <div className="mb-space-lg">
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs font-semibold">
                  {isSignUp
                    ? 'Create Your Genbytez Merchant Workspace'
                    : 'Welcome Back to Store Admin'}
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {isSignUp
                    ? 'Initialize your multi-tenant store, catalog architecture, and global settlement pipeline in minutes.'
                    : 'Enter your credentials to securely access your merchant dashboard and logistics pipelines.'}
                </p>
              </div>

              {/* Two-Tab Switch */}
              <div className="grid grid-cols-2 gap-space-xs p-space-2xs bg-surface-container-high rounded-lg mb-space-xl">
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(false);
                    setError('');
                    if (location.pathname !== '/') navigate('/');
                  }}
                  className={`w-full py-space-xs px-space-md rounded font-label-md text-label-md transition-all cursor-pointer ${
                    !isSignUp
                      ? 'bg-surface-container-lowest text-on-surface shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(true);
                    setError('');
                    if (location.pathname !== '/signup') navigate('/signup');
                  }}
                  className={`w-full py-space-xs px-space-md rounded font-label-md text-label-md transition-all cursor-pointer ${
                    isSignUp
                      ? 'bg-surface-container-lowest text-on-surface shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Create an Account
                </button>
              </div>

              {/* Error Message Alert */}
              {error && (
                <div
                  role="alert"
                  className="mb-space-lg p-space-sm rounded-lg bg-error-container text-on-error-container text-xs flex items-center gap-2 border border-error/20 animate-in fade-in"
                >
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span>{error}</span>
                </div>
              )}

              {/* SIGN IN PANEL */}
              {!isSignUp ? (
                <div className="flex flex-col gap-space-lg">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-space-base">
                    {/* Email */}
                    <div className="flex flex-col gap-space-2xs">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="signin-email">
                        Work Email
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-space-md text-outline text-[18px]">
                          alternate_email
                        </span>
                        <input
                          id="signin-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="merchandiser@domain.com"
                          className="w-full h-10 pl-10 pr-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-space-2xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="signin-password">
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setError('Password reset instructions have been dispatched to your email.')}
                          className="font-label-md text-label-md text-secondary hover:underline cursor-pointer"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-space-md text-outline text-[18px]">
                          lock
                        </span>
                        <input
                          id="signin-password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full h-10 pl-10 pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-space-sm p-space-2xs text-outline hover:text-on-surface cursor-pointer"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {showPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center justify-between pt-space-xs">
                      <label className="flex items-center gap-space-sm cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={rememberDevice}
                          onChange={(e) => setRememberDevice(e.target.checked)}
                          className="w-4 h-4 rounded bg-surface-container-high text-primary focus:ring-0 cursor-pointer"
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Remember this device for 30 days
                        </span>
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-space-xs h-10 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-all shadow-md flex items-center justify-center gap-space-xs cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <span className="material-symbols-outlined text-[18px] animate-spin">
                            progress_activity
                          </span>
                          <span>Authenticating…</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In to Workspace</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Or divider */}
                  <div className="relative flex items-center justify-center my-space-xs">
                    <div className="w-full h-[1px] bg-surface-container-highest"></div>
                    <span className="absolute px-space-md bg-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                      Or continue with
                    </span>
                  </div>

                  {/* Social buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <button
                      type="button"
                      onClick={() => handleSocialAuth('Google')}
                      className="h-10 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors shadow-sm cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                      </svg>
                      <span>Google</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialAuth('GitHub')}
                      className="h-10 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors shadow-sm cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-on-surface" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                      </svg>
                      <span>GitHub</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowSsoDialog(true)}
                    className="w-full h-10 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      vpn_key
                    </span>
                    <span>Sign in with SAML / Okta SSO</span>
                  </button>
                </div>
              ) : (
                /* SIGN UP PANEL */
                <div className="flex flex-col gap-space-lg">
                  {/* Pro Trial Banner */}
                  <div className="flex items-center justify-between p-space-sm bg-secondary-container rounded-lg border border-secondary/20">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-on-secondary-container">
                        verified
                      </span>
                      <span className="font-label-md text-label-md text-on-secondary-container font-semibold">
                        Start your 14-day Pro tier trial
                      </span>
                    </div>
                    <span className="font-code-tabular text-code-tabular text-on-secondary-container text-xs">
                      No credit card required
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-space-base">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-base">
                      <div className="flex flex-col gap-space-2xs">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="signup-name">
                          Full Name <span className="text-error">*</span>
                        </label>
                        <input
                          id="signup-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          placeholder="Elena Vance"
                          className="w-full h-10 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors shadow-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-space-2xs">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="signup-email">
                          Work Email <span className="text-error">*</span>
                        </label>
                        <input
                          id="signup-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="elena@northpacific.com"
                          className="w-full h-10 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Store Workspace Handle */}
                    <div className="flex flex-col gap-space-2xs">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="signup-slug">
                        Store Workspace Handle
                      </label>
                      <div className="flex items-center rounded-lg bg-surface-container-low shadow-sm focus-within:bg-surface-container-lowest border border-transparent focus-within:border-outline-variant overflow-hidden">
                        <span className="pl-space-md text-outline font-code-tabular text-xs select-none">
                          https://
                        </span>
                        <input
                          id="signup-slug"
                          type="text"
                          value={storeSlug}
                          onChange={(e) => setStoreSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, ''))}
                          placeholder="acme-goods"
                          className="flex-1 h-10 px-space-xs bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none"
                        />
                        <span className="pr-space-md py-space-xs text-on-surface-variant font-code-tabular text-xs select-none">
                          .genbytez.store
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Your global store routing URL. Can be aliased to custom domains anytime.
                      </span>
                    </div>

                    {/* Master Password with Strength Meter */}
                    <div className="flex flex-col gap-space-2xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="signup-password">
                          Create Master Password <span className="text-error">*</span>
                        </label>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {strengthLabels[strengthScore]}
                        </span>
                      </div>
                      <div className="relative flex items-center">
                        <input
                          id="signup-password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          minLength={6}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Minimum 6 characters"
                          className="w-full h-10 pl-space-md pr-10 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-outline-variant transition-colors shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-space-sm p-space-2xs text-outline hover:text-on-surface cursor-pointer"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {showPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </button>
                      </div>

                      {/* 4-bar strength indicator */}
                      <div className="grid grid-cols-4 gap-1.5 mt-1.5">
                        <div
                          className={`h-1.5 rounded transition-all ${
                            strengthScore >= 1 ? 'bg-secondary' : 'bg-surface-container-highest'
                          }`}
                        />
                        <div
                          className={`h-1.5 rounded transition-all ${
                            strengthScore >= 2 ? 'bg-secondary' : 'bg-surface-container-highest'
                          }`}
                        />
                        <div
                          className={`h-1.5 rounded transition-all ${
                            strengthScore >= 3 ? 'bg-secondary' : 'bg-surface-container-highest'
                          }`}
                        />
                        <div
                          className={`h-1.5 rounded transition-all ${
                            strengthScore >= 4 ? 'bg-secondary' : 'bg-surface-container-highest'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="pt-space-xs">
                      <label className="flex items-start gap-space-sm cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="w-4 h-4 rounded mt-0.5 bg-surface-container-high text-primary focus:ring-0 cursor-pointer"
                        />
                        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                          By creating a Genbytez merchant workspace, you agree to our{' '}
                          <a href="#terms" className="text-on-surface font-medium hover:underline">
                            Terms of Service
                          </a>
                          ,{' '}
                          <a href="#data" className="text-on-surface font-medium hover:underline">
                            Acceptable Data Usage
                          </a>
                          , and{' '}
                          <a href="#privacy" className="text-on-surface font-medium hover:underline">
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </label>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-space-xs h-10 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-md text-label-md font-semibold transition-all shadow-md flex items-center justify-center gap-space-xs cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <span className="material-symbols-outlined text-[18px] animate-spin">
                            progress_activity
                          </span>
                          <span>Creating Workspace…</span>
                        </>
                      ) : (
                        <>
                          <span>Create Store & Begin Pro Trial</span>
                          <span className="material-symbols-outlined text-[16px]">bolt</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* Quick Testing Actions (Demo Login & Reset Data) */}
              <div className="mt-space-lg pt-space-md border-t border-surface-container-highest/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={handleQuickDemo}
                  className="text-secondary hover:underline inline-flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">bolt</span>
                  <span>One-Click Demo Merchant Login</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetData}
                  className="text-outline hover:text-error transition-colors hover:underline inline-flex items-center gap-1 text-[11px] cursor-pointer"
                  title="Wipe local browser storage to test from scratch"
                >
                  <span className="material-symbols-outlined text-[13px]">restart_alt</span>
                  <span>Reset All Local Data</span>
                </button>
              </div>

              {/* Security Footnote */}
              <div className="mt-space-md pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm border-t border-surface-container-highest/40 text-on-surface-variant text-xs">
                <div className="flex items-center gap-space-xs font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    encrypted
                  </span>
                  <span>SOC2 Type II & ISO 27001 Certified</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSsoDialog(true)}
                  className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center gap-space-2xs cursor-pointer"
                >
                  <span>Enterprise custom deployment</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT 5 COLUMNS: Global Merchant Fleet Stats & Social Proof matching screens/SignIn.tsx */}
          <div className="lg:col-span-5 flex flex-col gap-space-xl">

            {/* Global Merchant Fleet Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md border border-surface-container-high/40">
              <div className="flex items-center justify-between mb-space-base">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Global Merchant Fleet
                  </span>
                </div>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-code-tabular text-xs font-bold">
                  Live
                </span>
              </div>
              <div className="font-headline-xl text-headline-xl text-on-surface mb-space-xs font-bold tracking-tight">
                1,248+ Stores
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                Managing over $480M in quarterly gross inventory across 42 localized tax zones.
              </p>

              <div className="grid grid-cols-2 gap-space-md pt-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-low shadow-xs border border-surface-container-highest/60">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="font-label-sm text-label-sm font-semibold">CORE UPTIME</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      network_check
                    </span>
                  </div>
                  <div className="font-metric-display text-2xl text-on-surface font-bold">
                    99.99%
                  </div>
                  <div className="font-code-tabular text-xs text-secondary mt-1 font-semibold">
                    SLA Verified
                  </div>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low shadow-xs border border-surface-container-highest/60">
                  <div className="flex items-center justify-between text-on-surface-variant mb-1">
                    <span className="font-label-sm text-label-sm font-semibold">AUTO-DISPATCH</span>
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                      sync_saved_locally
                    </span>
                  </div>
                  <div className="font-metric-display text-2xl text-on-surface font-bold">
                    120ms
                  </div>
                  <div className="font-code-tabular text-xs text-on-surface-variant mt-1">
                    Real-time webhook
                  </div>
                </div>
              </div>

              {/* Sparkline Graph */}
              <div className="mt-space-lg p-space-md rounded-lg bg-surface-container-high border border-surface-container-highest">
                <div className="flex items-center justify-between text-on-surface mb-space-sm text-xs">
                  <span className="font-label-md text-label-md font-semibold">
                    Cross-Warehouse Ingestion
                  </span>
                  <span className="font-code-tabular text-code-tabular text-secondary font-bold">
                    +18.4% peak
                  </span>
                </div>
                <svg
                  className="w-full h-12 text-secondary"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 48"
                >
                  <path
                    d="M0,40 Q30,35 60,38 T120,24 T180,18 T240,12 T300,4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0,40 Q30,35 60,38 T120,24 T180,18 T240,12 T300,4 L300,48 L0,48 Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="bg-primary-container text-on-primary rounded-xl p-space-xl shadow-md relative overflow-hidden">
              <div className="flex items-center gap-space-xs text-secondary-fixed mb-space-md">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">
                    star
                  </span>
                ))}
              </div>
              <blockquote className="font-body-md text-body-md text-inverse-on-surface mb-space-lg leading-relaxed italic">
                “Genbytez gave us multi-region stock routing out of the box. Our operations team cut reconciliation overhead by 73% within our first 60 days on the platform.”
              </blockquote>
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-headline-sm text-headline-sm text-on-primary font-bold">
                    MK
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-sm text-on-primary font-semibold">
                      Marcus Källström
                    </span>
                    <span className="font-label-sm text-xs text-primary-fixed-dim">
                      VP of Digital Supply Chain, Valo Commerce
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[28px] opacity-40">
                  format_quote
                </span>
              </div>
            </div>

            {/* Platform Feature Badges */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-surface-container-high/40">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Included in every merchant workspace:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-on-surface">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    hub
                  </span>
                  <span className="font-body-sm text-body-sm font-medium">B2B & D2C Sync</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    verified_user
                  </span>
                  <span className="font-body-sm text-body-sm font-medium">Role RBAC</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    terminal
                  </span>
                  <span className="font-body-sm text-body-sm font-medium">GraphQL API</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-surface-container-highest/60 bg-surface-container-lowest py-4 text-center text-xs text-on-surface-variant">
        <div className="max-w-[1560px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Genbytez Platform. Built for autonomous commerce.</span>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-on-surface transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-on-surface transition-colors">Privacy Policy</a>
            <a href="#status" className="hover:text-on-surface transition-colors">System Status</a>
          </div>
        </div>
      </footer>

      {/* Enterprise SAML SSO Modal */}
      {showSsoDialog && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-surface-container-lowest text-on-surface rounded-2xl max-w-md w-full p-6 shadow-2xl border border-surface-container-highest space-y-4">
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">vpn_key</span>
                <h3 className="font-headline-sm text-lg font-bold">Enterprise SSO</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSsoDialog(false)}
                className="w-8 h-8 rounded-lg hover:bg-surface-container-high flex items-center justify-center text-outline cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <form onSubmit={handleSsoSubmit} className="space-y-3 text-xs">
              <p className="text-on-surface-variant">
                Enter your company domain or Okta/Azure AD tenant handle to initiate SAML 2.0 redirection.
              </p>
              <div>
                <label className="block font-medium mb-1">Corporate Domain</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. acmecorp.com"
                  value={ssoDomain}
                  onChange={(e) => setSsoDomain(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-highest text-xs focus:outline-none focus:bg-surface-container-lowest"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-semibold hover:bg-primary-container transition-all cursor-pointer"
              >
                Continue with SSO
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
