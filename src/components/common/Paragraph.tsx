import React, { PropsWithChildren } from "react";

export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
    return <p className='text-paragraph md:text-lg'>{children}</p>
}
