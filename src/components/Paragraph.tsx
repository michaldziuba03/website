import React, { PropsWithChildren } from "react";

export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
    return <p className='text-paragraph dark:text-paragraph-dark text-lg'>{children}</p>
}
