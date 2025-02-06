import { BsFillPersonFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import ButtonLink from "../../button/ButtonLink";

const NavAction = () => {
  return (
    <div className="flex items-center gap-4 text-lg text-white">
      <Link to={"/profile"}>
        <BsFillPersonFill />
      </Link>
      <Link to={""}>
        <PiShoppingCartSimpleFill />
      </Link>
      <Link to={""}>
        <IoSearchSharp />
      </Link>
      <ButtonLink to="" className="">
        Order Online
      </ButtonLink>
    </div>
  );
};

export default NavAction;
