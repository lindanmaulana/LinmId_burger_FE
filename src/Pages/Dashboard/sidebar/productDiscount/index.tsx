import { RiDiscountPercentLine } from "react-icons/ri"
import SidebarLink from "../../components/SidebarLink"

const SidebarProductDiscount = () => {
  return (
    <>
     <SidebarLink to="/dashboard/product-discount" className="">
        <RiDiscountPercentLine />
        Product Discount
     </SidebarLink>

    </>
  )
}

export default SidebarProductDiscount
