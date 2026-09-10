import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { ActionModalState } from '@/types/admin';

interface ActionDialogProps {
  modal: ActionModalState | null;
  onClose: () => void;
  availableScreens?: string[];
}

export const ActionDialog: React.FC<ActionDialogProps> = ({ modal, onClose, availableScreens }) => {
  if (!modal) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;
    modal.run?.(values);
    onClose();
  };

  return (
    <Dialog open={!!modal} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="app-dialog sm:max-w-lg bg-white border border-[#e4e4e7] rounded-lg shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05)]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-base text-[#1a1b22]">{modal.title}</DialogTitle>
          <DialogDescription className="text-xs text-[#71717a]">
            {modal.body || 'Changes are saved locally in this browser workspace.'}
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-3.5 mt-3" onSubmit={handleSubmit}>
          {modal.fields?.map((label) => (
            <label key={label} className="flex flex-col gap-1.5 text-xs font-medium text-[#1a1b22]">
              <span>{label}</span>
              {label === 'Screen' && availableScreens ? (
                <select
                  name={label}
                  className="w-full h-9 px-3 border border-[#e4e4e7] rounded-md bg-white text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-1"
                >
                  {availableScreens.map((screen) => (
                    <option key={screen} value={screen}>
                      {screen}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={label}
                  required
                  type={label.toLowerCase().includes('email') ? 'email' : 'text'}
                  placeholder={`Enter ${label.toLowerCase()}...`}
                  className="w-full h-9 px-3 border border-[#e4e4e7] rounded-md bg-white text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-1"
                />
              )}
            </label>
          ))}
          {modal.action && (
            <button
              type="submit"
              className="w-full mt-2 h-9 px-4 rounded-md bg-[#006c49] hover:bg-[#00563a] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              {modal.action}
            </button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
