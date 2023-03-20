import React from "react";
import { PropsWithChildrenAndClass } from "../types";
import classNames from "classnames";

export const Container: React.FC<PropsWithChildrenAndClass> = ({ children, className }) => {
    const styles = classNames('mx-auto px-6 container md:px-6 lg:px-10 xl:px-36', className);
    return (
        <div className={styles}>
            {children}
        </div>
    );
}
