import { ImageBurger } from "../../../../../assets/images/burger";
import ButtonLink from "../../../../../Components/Button/ButtonLink";
import LayoutContainer from "../../../../../Components/Layouts/LayoutContainer";
import LayoutSection from "../../../../../Components/Layouts/LayoutSection";
import STitleSection from "../../../../../Components/Title/titleSection";

const About = () => {
  return (
    <LayoutSection className="py-10 bg-primary">
      <LayoutContainer className="max-w-6xl">
        <div className="flex items-center justify-center gap-8 py-10 text-white ">
          <figure className="flex items-center justify-around w-1/2 shrink-0">
            <img
              src={ImageBurger.burgerLogo}
              alt="Burger"
              className="w-[70%]"
            />
          </figure>
          <div className="flex flex-col items-start w-1/2 gap-6">
            <STitleSection className="">We Are LinmId</STitleSection>
            <p>
              LinmidBurger hadir dengan cita rasa terbaik untuk memanjakan
              selera Anda. Kami percaya bahwa setiap gigitan burger adalah
              pengalaman yang istimewa. Pilih dari berbagai menu kami yang
              dibuat dengan bahan segar dan berkualitas. Jangan ragu untuk
              mencoba burger legendaris kami yang tidak pernah mengecewakan
            </p>
            <ButtonLink to="" className="!px-12 !py-3">
              Read More
            </ButtonLink>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default About;
