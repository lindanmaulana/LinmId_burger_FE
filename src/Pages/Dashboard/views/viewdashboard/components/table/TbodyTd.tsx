import { ReactNode } from "react"

export interface TbodyItemProps {
    children: ReactNode
}
const TbodyItem = (props: TbodyItemProps) => {
    const {children} = props
  return (
    
    <td className="p-2 border border-devBlack/30">{children}</td>
  )
}

export default TbodyItem
