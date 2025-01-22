import React, { ReactNode } from "react"

export interface layoutSectionProps {
    style?: React.CSSProperties
    className: string
    children: ReactNode
}

const LayoutSection = (props: layoutSectionProps) => {
    const {style, className, children} = props
  return (
    <section className={className} style={style}>
      {children}
    </section>
  )
}

export default LayoutSection
