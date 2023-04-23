import React from "react";
import { Link } from "gatsby";

export const Logo: React.FC = () => (
    <Link to='/'
          className='text-xl text-heading dark:text-heading-dark font-black select-none cursor-pointer'
    >
        MD
    </Link>
);
