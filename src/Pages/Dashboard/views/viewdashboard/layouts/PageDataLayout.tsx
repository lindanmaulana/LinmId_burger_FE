import { ReactNode } from 'react'
import BreadCrumbs from '../../../../../components/breadcrumbs'

interface PageDataLayoutProps {
    children: ReactNode
}
const PageDataLayout = (props: PageDataLayoutProps) => {
    const {children} = props
  return (
    <>
      <BreadCrumbs />
      {children}
    </>
  )
}

export default PageDataLayout
