import { ReactNode } from "react"

export interface TbodyItemProps {
    children: ReactNode
    className?: string
    colSpan?: number
}
const TbodyItem = (props: TbodyItemProps) => {
    const {children, className, colSpan} = props
  return (
    
    <td colSpan={colSpan} className={`${className} p-2 border border-devBlack/30`}>{children}</td>
  )
}

export default TbodyItem
