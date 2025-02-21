import { BsFillPersonFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import ButtonLink from "../../button/ButtonLink";
import useReduxCart from "../../../hooks/redux/client/useReduxCart";

const NavAction = () => {
  const {cart} = useReduxCart()
  
  return (
    <div className="flex items-center gap-4 text-lg text-white">
      <Link to={"/profile"}>
        <BsFillPersonFill />
      </Link>
      <Link to={"/cart"} className="relative">
        <PiShoppingCartSimpleFill />
        <p className={`${cart.length > 0 ? "block" : "hidden"} absolute right-0 flex items-center justify-center w-4 h-4 text-sm rounded-full bg-devOrange -top-2`}>{cart.length}</p>
      </Link>
      <Link to={""}>
        <IoSearchSharp />
      </Link>
      <ButtonLink to="/my-order" className="">
        Order Online
      </ButtonLink>
    </div>
  );
};

export default NavAction;
