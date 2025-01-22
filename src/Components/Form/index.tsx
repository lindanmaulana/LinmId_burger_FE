import { ReactNode } from "react";
import { ImageBurger } from "../../assets/images/burger";

export interface formProps {
    children: ReactNode
    title: string
    subtitle: string
}

const SForm = (props: formProps) => {
    const {children, title, subtitle} = props
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 max-w-[75%]">
        <figure className="max-w-10">
          <img
            src={ImageBurger.burgerLogo}
            alt="Burger Linm"
            className="w-full h-full"
          />
        </figure>
        <h2 className="text-[40px] font-open-sans-bold text-primary">
          {title}
        </h2>
        <p className="text-base text-primary/70">
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  );
};

export default SForm;
