import { ReactNode } from 'react'
export interface LabelProps {
    children: ReactNode
    htmlFor: string
}
const Label = (props: LabelProps) => {
    const {children, htmlFor} = props
  return (
    <label htmlFor={htmlFor} className="grid grid-cols-2">
        {children}
    </label>
  )
}

export default Label
