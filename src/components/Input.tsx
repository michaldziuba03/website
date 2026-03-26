import React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof BaseInput> {
  label?: string;
  error?: string;
  /** Forwarded id — required when `label` is provided for a11y */
  id?: string;
}

const inputBaseClasses =
  'w-full h-[52px] px-4 py-3 rounded-lg text-sm font-normal ' +
  'bg-background-darken text-foreground ' +
  'border border-2 border-transparent ' +
  'placeholder:text-foreground/40 ' +
  'transition-colors duration-150 ' +
  'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed ' +
  'data-[invalid]:border-red-500';

export function Input({ label, error, id, className = '', ...rest }: InputProps) {
  const classes = `${inputBaseClasses} ${className}`.trim();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-bold text-foreground/80 select-none"
        >
          {label}
        </label>
      )}
      <BaseInput id={id} className={classes} {...rest} />
      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
