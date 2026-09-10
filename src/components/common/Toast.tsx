import React from 'react';

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div role="status" aria-live="polite" className="app-toast">
      {message}
    </div>
  );
};
