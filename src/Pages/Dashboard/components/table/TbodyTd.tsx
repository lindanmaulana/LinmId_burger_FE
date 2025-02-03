import { ReactNode } from "react"

export interface TbodyItemProps {
    children: ReactNode
    className?: string
}
const TbodyItem = (props: TbodyItemProps) => {
    const {children, className} = props
  return (
    
    <td className={`${className} p-2 border border-devBlack/30`}>{children}</td>
  )
}

export default TbodyItem
