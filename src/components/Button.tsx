import clsx from "clsx";

type IProps = {
  variant?: 'primary' | 'black' | 'outline';
  size?: 'lg' | 'md';
  hover?: 'circle' | 'none';
  href?: string;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ className, variant = 'primary', size = 'lg', hover = 'circle', children, ...props }: IProps) {
  const baseClass = clsx([
    "text-sm font-bold max-h-10 gap-2 justify-center items-center rounded-full relative cursor-pointer overflow-hidden",
    {
      "flex": !props.href,
      "inline-flex": props.href,
      "transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:duration-[600ms] before:ease-out hover:before:h-56 hover:before:w-56": hover === 'circle',
      "shadow-2xl bg-black text-white": variant === 'black',
      "before:bg-primary hover:shadow-primary": variant === 'black' && hover === 'circle',
      "shadow-2xl bg-primary text-white": variant === 'primary',
      "before:bg-black hover:shadow-black": variant === 'primary' && hover === 'circle',
      "bg-transparent border border-black text-black": variant === 'outline',
      "hover:shadow-2xl before:bg-black hover:shadow-black hover:text-white": variant === 'outline' && hover === 'circle',
      "py-6 px-9 md:px-12": size === 'lg',
      "py-4 px-8": size === 'md',
    },
    className,
  ])

  if (props.href) {
    return (
      <a {...props} className={baseClass}>
        <span className="relative z-10 gap-2 flex items-center justify-center">{children}</span>
      </a>
    );
  }

  return (
    <button {...props} className={baseClass}>
      <span className="relative z-10 flex gap-2 items-center justify-center">{children}</span>
    </button>
  );
}
