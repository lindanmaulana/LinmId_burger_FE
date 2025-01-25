import { Link } from "react-router-dom";
import STitleSection from "../title/titleSection";
import { dataFooterContact, dataFooterSocialMedia } from "./footer.type";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-primary">
      <div className="container max-w-6xl">
        <div className="flex flex-col gap-14">
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-4 text-white">
              <STitleSection className="!text-3xl">Contact Us</STitleSection>
              <ul className="flex flex-col items-center justify-center gap-3">
                {dataFooterContact?.map((contact) => (
                  <li key={contact.id} className="flex items-center gap-2">
                    <contact.icon />
                    <Link to={contact.url}>{contact.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4 text-white">
              <STitleSection className="!text-3xl">LinmId Burger</STitleSection>
              <p className="text-center max-w-96">
                Nikmati cita rasa istimewa dari burger legendaris kami, dibuat
                dengan bahan segar dan berkualitas untuk pengalaman tak
                terlupakan!
              </p>
              <div>
                <ul className="flex items-center justify-center gap-2">
                  {dataFooterSocialMedia?.map((sosmed) => (
                    <li
                      key={sosmed.id}
                      className="p-2 bg-white rounded-full group"
                    >
                      <a
                        href={sosmed.url}
                        className="group-hover:text-devOrange text-primary transition-global"
                      >
                        <sosmed.icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-white">
              <STitleSection className="!text-3xl">Opening Hours</STitleSection>
              <p className="text-center max-w-96">Everyday</p>
              <p>10.00 Am - 10.00 Pm</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-sm text-white">
            <p className="">© 2025 All Rights Reserved By LinmId Burger</p>
            <p>© Distributed By Linmid Official</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
