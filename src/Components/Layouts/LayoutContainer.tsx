import React, { ReactNode } from "react"

export interface layoutContainerProps {
    style?: React.CSSProperties
    className: string
    children: ReactNode
}

const LayoutContainer = (props: layoutContainerProps) => {
    const {children, style, className} = props
  return (
    <div className={`${className} container`} style={style}>
      {children}
    </div>
  )
}

export default LayoutContainer
