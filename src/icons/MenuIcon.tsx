import React, { FC } from 'react'

interface IconProps {
    size: string;
}

export const MenuIcon: FC<IconProps> = ({ size }) => {
  return (
    <svg className='icon' width={size} height={size} viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.125 0.75H35.875V4H0.125V0.75ZM0.125 15.375H35.875V18.625H0.125V15.375ZM0.125 30H35.875V33.25H0.125V30Z" fill="black"/>
    </svg>
  )
}
