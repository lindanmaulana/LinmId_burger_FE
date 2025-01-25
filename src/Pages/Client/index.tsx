import { ReactNode } from "react";
import Navbar from "../../components/navbar/ClientNavbar";
import Footer from "../../components/footer";
export interface pageClientProps {
  children: ReactNode;
}

const PageClient = (props: pageClientProps) => {
  const { children } = props;
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageClient;
