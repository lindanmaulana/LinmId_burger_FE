import NavAction from "./NavAction";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 w-full">
      <div className="container flex items-center justify-between max-w-6xl py-6">
        <h1 className="text-3xl text-white font-dancing-script-bold">Linmid</h1>
        <NavList />
        <NavAction />
      </div>
    </div>
  );
};

export default Navbar;
