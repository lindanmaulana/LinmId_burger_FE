import { RxHamburgerMenu } from "react-icons/rx"
import DashboardNavbarAction from "./DashboardNavbarAction"
import DashboardNavbarProfileMenu from "./DashboardNavbarProfileMenu"

const DashboardNavbar = () => {
    return (
        <header className="relative p-4 bg-primary">
            <div className="container flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-20">
                    <h2 className="text-xl text-white">LinmId Burger</h2>
                    <button className="text-white"><RxHamburgerMenu /></button>
                </div>
                <DashboardNavbarAction />
                <DashboardNavbarProfileMenu />
            </div>
        </header>
    )
}

export default DashboardNavbar