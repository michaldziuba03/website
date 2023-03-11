import React, { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
    <div className='mx-auto px-6 md:container md:px-32'>
        {children}
    </div>
);
