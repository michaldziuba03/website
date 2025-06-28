import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({ 
  children, 
  className = '', 
  as: Element = 'div' 
}: ContainerProps) {
  return (
    <Element className={`px-8 max-w-screen-xl w-full mx-auto ${className}`}>
      {children}
    </Element>
  );
}
