import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, LayoutDashboard, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((props: { error: Error; resetErrorBoundary: () => void }) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
  copied: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      copied: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    console.error('Captured by ErrorBoundary:', error, errorInfo);
  }

  resetErrorBoundary = (): void => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      copied: false,
    });
  };

  handleCopy = (): void => {
    const { error, errorInfo } = this.state;
    const textToCopy = `Error: ${error?.name || 'Error'}: ${error?.message || 'Unknown'}\n\nStack:\n${error?.stack || ''}\n\nComponent Stack:\n${errorInfo?.componentStack || ''}`;
    navigator.clipboard?.writeText(textToCopy).then(() => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2500);
    });
  };

  render(): ReactNode {
    const { hasError, error, errorInfo, showDetails, copied } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      if (typeof fallback === 'function') {
        return fallback({ error, resetErrorBoundary: this.resetErrorBoundary });
      }
      if (fallback) {
        return fallback;
      }

      return (
        <main className="min-h-screen bg-[#09090b] text-[#fafafa] flex items-center justify-center p-4 sm:p-6 font-sans antialiased">
          <div className="w-full max-w-xl bg-[#121215] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header / Icon */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 shadow-inner">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[11px] font-semibold uppercase tracking-wider mb-2">
                  Application Fault Caught
                </div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Something went wrong
                </h1>
                <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                  An unexpected client-side exception occurred while rendering this view. Your session data is safely stored.
                </p>
              </div>
            </div>

            {/* Error Message Box */}
            <div className="mt-5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-rose-300 break-words flex items-start gap-2">
              <span className="text-zinc-500 select-none">&gt;</span>
              <span className="flex-1">{error.message || 'An unhandled rendering exception occurred'}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={this.resetErrorBoundary}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Try Recovering
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700/60 transition-all cursor-pointer"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-transparent hover:bg-zinc-800/60 text-zinc-400 hover:text-white text-xs font-medium transition-all"
              >
                <Home className="w-4 h-4" />
                Home
              </a>
              <a
                href="/overview"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-transparent hover:bg-zinc-800/60 text-zinc-400 hover:text-white text-xs font-medium transition-all"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </a>
            </div>

            {/* Expandable Technical Trace */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => this.setState({ showDetails: !showDetails })}
                className="flex items-center justify-between w-full text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <span>Diagnostic Technical Details</span>
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showDetails && (
                <div className="mt-3 relative">
                  <div className="flex items-center justify-between pb-2 text-[11px] text-zinc-500">
                    <span>Stack trace</span>
                    <button
                      type="button"
                      onClick={this.handleCopy}
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Trace</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 bg-zinc-950 rounded-lg text-[11px] text-zinc-300 font-mono overflow-x-auto max-h-52 border border-zinc-800/80 leading-relaxed whitespace-pre-wrap">
                    {error.stack || error.message}
                    {errorInfo?.componentStack ? `\n\nComponent Hierarchy:${errorInfo.componentStack}` : ''}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </main>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
