import { ReactNode } from "react"

export interface MenuHeadListProps {
  condition: boolean
  children: ReactNode
  styleActive?: string
  styleNonActive?: string
  className?: string
}
const MenuHeadList = (props: MenuHeadListProps) => {
  const {children, condition, styleActive, styleNonActive, className} = props
  return (
    <ul
        className={`${
          condition ? `${styleActive} h-36` : `${styleNonActive} h-0`
        } ${className} overflow-hidden flex flex-col justify-center gap-3 ps-6 transition-global`}
      >
        {children}
      </ul>
  )
}

export default MenuHeadList
