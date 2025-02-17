import { useLocation } from "react-router-dom";
import NavAction from "./NavAction";
import NavList from "./NavList";
const paths = ["/"]
const Navbar = () => {
  const {pathname} = useLocation()

  const styleNav = paths.includes(pathname)
  
  return (
    <div className={`${styleNav ? "bg-transparent absolute top-0 right-0" : "bg-primary"}  z-50 w-full`}>
      <div className="container flex items-center justify-between max-w-6xl py-6">
        <h1 className="text-3xl text-white font-dancing-script-bold">Linmid</h1>
        <NavList />
        <NavAction />
      </div>
    </div>
  );
};

export default Navbar;
