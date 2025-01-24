import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { ImageBurger } from "../../assets/images/burger";
import SAlert from "../../components/alert";
import PageAuthPrivacyPolicy from "./privacyPolicy";

const PageAuth = (props: { children: ReactNode }) => {
  return (
    <div>
      <div className="container h-screen max-w-5xl">
        <div className="flex items-center justify-center h-full">
          <div className="w-1/2 shrink-0">{props.children || <Outlet />}</div>
          <div className="h-[80%] bg-primary w-1/2 p-4 rounded-xl">
            <figure className="w-[70%]">
              <img
                src={ImageBurger.burgerLogo}
                alt="Burger Linm"
                className="w-full h-full"
              />
            </figure>
          </div>
        </div>
        <SAlert />
        <PageAuthPrivacyPolicy />
      </div>
    </div>
  );
};

export default PageAuth;
