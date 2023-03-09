import React, { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
    <div className='container mx-auto px-32'>{children}</div>
);
