import React, { FC } from 'react'

interface IconProps {
    size: string;
}

export const DevIcon: FC<IconProps> = ({ size }) => {
  return (
    <svg className='icon' width={size} height={size} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.57 28.28H12.826C13.5195 28.28 14.113 28.0333 14.6065 27.5398C15.0985 27.0478 15.3445 26.455 15.3445 25.7615V17.6585C15.3445 16.965 15.0985 16.3715 14.6065 15.878C14.113 15.386 13.5195 15.14 12.826 15.14H7.57V28.28ZM10.0885 25.7615V17.6585H12.826V25.7615H10.0885ZM18.2462 28.28L23.6117 28.2252V25.7615H19.1222V22.9145H21.9692V20.396H19.1222V17.6585H23.6117V15.14H18.2462C17.7717 15.14 17.3797 15.2948 17.0702 15.6043C16.7592 15.9153 16.6037 16.308 16.6037 16.7825V26.6375C16.6037 27.112 16.7592 27.504 17.0702 27.8135C17.3797 28.1245 17.7717 28.28 18.2462 28.28ZM29.5247 28.2252C29.9992 28.2252 30.4095 28.0698 30.7555 27.7588C31.103 27.4493 31.3315 27.0572 31.441 26.5827L34.507 15.14H31.879L29.5247 24.119L27.1705 15.14H24.5425L27.6085 26.5827C27.718 27.0572 27.9465 27.4493 28.294 27.7588C28.64 28.0698 29.0502 28.2252 29.5247 28.2252V28.2252ZM5.38 41.42C4.1755 41.42 3.14401 40.9915 2.28553 40.1345C1.42851 39.276 1 38.2445 1 37.04V6.38C1 5.1755 1.42851 4.14401 2.28553 3.28553C3.14401 2.42851 4.1755 2 5.38 2H36.04C37.2445 2 38.276 2.42851 39.1345 3.28553C39.9915 4.14401 40.42 5.1755 40.42 6.38V37.04C40.42 38.2445 39.9915 39.276 39.1345 40.1345C38.276 40.9915 37.2445 41.42 36.04 41.42H5.38Z" fill="#111111"/>
    </svg>
  )
}