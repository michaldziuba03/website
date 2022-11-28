import React, { PropsWithChildren } from "react"
import './Container.scss';

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container">
        { children }
    </div>
  )
}

