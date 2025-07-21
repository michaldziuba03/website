import clsx from "clsx";

interface IProps {
  isActive: boolean;
  href: string;
  children?: React.ReactNode;
}

export function SegmentedNavigationItem({ isActive, href, children }: IProps) {
  const baseClass = "py-3 px-6 rounded-full font-bold text-sm hover:bg-primary";
  const activeClass = "bg-white text-primary hover:bg-white";
  const inactiveClass = "bg-primary-darken text-white";

  return (
    <a
      href={href}
      className={clsx(baseClass, isActive ? activeClass : inactiveClass)}
    >
      {children}
    </a>
  );
}

export function SegmentedNavigation(props: { children: React.ReactNode }) {
  return (
    <div className="mt-8 max-w-min bg-primary-darken rounded-full mb-8 p-2 flex gap-3">
      {props.children}
    </div>
  );
}
