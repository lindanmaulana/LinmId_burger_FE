import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  urlLink: string;
  className: string;
}
const Card = (props: CardProps) => {
  const { title, urlLink, className } = props;
  return (
    <div className={`${className} flex flex-col divide-y rounded-md col-span-1`}>
      <h2 className="px-3 py-4 text-base text-white font-open-sans-regular">
        {title}
      </h2>
      <Link
        to={urlLink}
        className="flex items-center justify-between p-3 text-xs text-white underline font-open-sans-regular decoration-solid"
      >
        View Details <RiArrowRightSLine className="text-xl" />
      </Link>
    </div>
  );
};

export default Card;
