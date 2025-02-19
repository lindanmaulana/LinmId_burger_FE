import { ReactNode } from "react";
import Navbar from "../../components/navbar/ClientNavbar";
import Footer from "../../components/footer";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
export interface pageClientProps {
  children: ReactNode;
}
const disableFooter = ["/profile", "/profile/update"];
const disableNavbar = ["/profile", "/profile/update"];

const PageClient = (props: pageClientProps) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <header>{!disableNavbar.includes(pathname) ? <Navbar /> : null}</header>
      <main>{children}</main>
      {!disableFooter.includes(pathname) ? <Footer /> : null}
    </>
  );
};

export default PageClient;
