import React, { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
    <div className='mx-auto px-6 container md:px-6 lg:px-10 xl:px-32'>
        {children}
    </div>
);
