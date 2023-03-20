import React from "react";
import { PropsWithChildrenAndClass } from "../types";
import classNames from "classnames";

export const Paragraph: React.FC<PropsWithChildrenAndClass> = (props) => {
    const style = classNames('text-paragraph md:text-lg py-2', props.className);
    return <p className={style}> {props.children} </p>
}
