import { ReactNode } from "react";
import Navbar from "../../components/navbar/ClientNavbar";
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
    </>
  );
};

export default PageClient;
