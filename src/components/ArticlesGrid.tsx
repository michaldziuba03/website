import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface ArticlesGridProps extends PropsWithChildren {
    className?: string;
}

export const ArticlesGrid: React.FC<ArticlesGridProps> = ({ children, className }) => {
    const styles = classNames('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-12', className);
    return (
        <div className={styles}>
            { children }
        </div>
    );
}