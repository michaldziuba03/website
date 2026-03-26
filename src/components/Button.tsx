import React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
}

// Anchor variant — activated when `href` is provided
type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

// Native button variant — default (uses Base UI Button)
type ButtonAsButton = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof BaseButton>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-foreground text-white',
  secondary: 'bg-background-darken text-foreground',
};

const baseClasses =
  'inline-flex items-center gap-2 px-7 py-4 rounded-lg font-medium text-sm ' +
  'transition-opacity duration-150 hover:opacity-80 active:opacity-70 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 ' +
  'cursor-pointer select-none h-[52px]';

export function Button({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  // Per Base UI docs: links should NOT be rendered through the Button component.
  // Instead, style the <a> element directly to look like a button.
  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <BaseButton
      className={classes}
      {...(rest as React.ComponentPropsWithoutRef<typeof BaseButton>)}
    >
      {children}
    </BaseButton>
  );
}
