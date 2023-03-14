import React, { PropsWithChildren } from "react";

export const H1: React.FC<PropsWithChildren> = ({ children }) => (
    <h1 className='heading text-3xl md:text-4xl leading-normal'>{children}</h1>
)

export const H2: React.FC<PropsWithChildren> = ({ children }) => (
    <h1 className='heading text-2xl md:text-3xl leading-normal'>{children}</h1>
)
