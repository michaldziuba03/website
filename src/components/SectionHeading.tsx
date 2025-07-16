import type React from "react";

interface SectionHeadingProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionHeading({
  children,
  className = "",
  level = "h2",
  text,
}: SectionHeadingProps) {
  const baseClasses =
    "font-black text-2xl sm:text-3xl relative before:absolute before:w-8 sm:before:w-10 before:rounded-lg before:-top-3 sm:before:-top-4 before:bg-primary before:h-1.5 sm:before:h-2";
  const combinedClasses = `${baseClasses} ${className}`.trim();
  const HeadingTag = level;

  return (
    <HeadingTag className={combinedClasses}>{children || text}</HeadingTag>
  );
}
