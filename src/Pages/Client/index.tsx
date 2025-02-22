import { ReactNode, useEffect } from "react";
import Navbar from "../../components/navbar/ClientNavbar";
import Footer from "../../components/footer";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";
import { snapMidtrans } from "../../components/snapMidtrans";
export interface pageClientProps {
  children: ReactNode;
}
const disableFooter = ["/profile", "/profile/update"];
const disableNavbar = ["/profile", "/profile/update"];

const PageClient = (props: pageClientProps) => {
  const { children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.appendChild(snapMidtrans);

    return () => {
      document.body.removeChild(snapMidtrans);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <header>{!disableNavbar.includes(pathname) ? <Navbar /> : null}</header>
        <main className="flex-grow">{children}</main>
        {!disableFooter.includes(pathname) ? <Footer /> : null}
      </div>
    </>
  );
};

export default PageClient;
