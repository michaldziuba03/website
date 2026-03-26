import React from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const textareaBaseClasses =
  'w-full px-4 py-3 rounded-lg text-sm font-normal ' +
  'bg-background-darken text-foreground ' +
  'border border-2 border-transparent ' +
  'placeholder:text-foreground/40 ' +
  'transition-colors duration-150 ' +
  'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed ' +
  'resize-none min-h-28';

export function Textarea({
  label,
  error,
  id,
  className = '',
  ...rest
}: TextareaProps) {
  const classes = `${textareaBaseClasses} ${className}`.trim();

  return (
    <div className="flex flex-col gap-1 h-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-bold text-foreground/80 select-none"
        >
          {label}
        </label>
      )}
      <textarea id={id} className={`${classes} flex-1`} {...rest} />
      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
