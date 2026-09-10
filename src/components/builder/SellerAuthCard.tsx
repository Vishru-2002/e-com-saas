import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

interface SellerAuthCardProps {
  onSuccess: () => void;
}

export const SellerAuthCard: React.FC<SellerAuthCardProps> = ({ onSuccess }) => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      onSuccess();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="registration-layout">
      <section className="registration-story">
        <div className="eyebrow">A LITTLE IDEA. A BIG BEGINNING.</div>
        <h1>
          Your ideas.
          <br />
          Your people.
          <br />
          <span>Your kind of store.</span>
        </h1>
        <p>
          Create a home for your business. Choose a look you love, add your first collection, and
          manage everything from your own store admin.
        </p>

        <div className="registration-benefits">
          {[
            ['palette', 'Make it yours', 'Beautiful themes, ready for your brand.'],
            ['language', 'Your own address', 'A store link today. Your domain when you’re ready.'],
            ['inventory_2', 'Everything in one place', 'Products, orders, and customers, connected.'],
          ].map(([i, t, d]) => (
            <div key={i}>
              <span className="material-symbols-outlined">{i}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="registration-foot">
          BUILT FOR INDEPENDENT BUSINESSES <span>↗</span>
        </div>
      </section>

      <section className="registration-form">
        <div className="registration-form-inner">
          <div className="step-kicker">LET’S GET STARTED</div>
          <h2>{isLogin ? 'Welcome back.' : 'Meet your new workspace.'}</h2>
          <p>
            {isLogin
              ? 'Sign in to pick up where you left off.'
              : 'Create your account, then make your shop your own.'}
          </p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <label>
                Full name
                <input
                  name="name"
                  placeholder="Sarah Anderson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                />
              </label>
            )}

            <label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="you@yourbusiness.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="At least 10 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={10}
                required
              />
            </label>

            {error && <p role="alert" className="seller-error">{error}</p>}

            <button className="seller-primary" type="submit" disabled={busy}>
              <span>
                {busy
                  ? 'Please wait…'
                  : isLogin
                  ? 'Sign in to your workspace'
                  : 'Create my account'}
              </span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          <div className="auth-switch">
            {isLogin ? 'New to Genbytez?' : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? 'Create an account' : 'Sign in'}
            </button>
          </div>

          <div className="registration-note">
            <span className="material-symbols-outlined">lock</span>
            <span>Your store stays unpublished until you’re ready.</span>
          </div>
        </div>
      </section>
    </main>
  );
};
