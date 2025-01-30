import { ReactNode } from "react";
import BreadCrumbs from "../../../../../components/breadcrumbs";
import { BsTable } from "react-icons/bs";

interface PageDataLayoutProps {
  children: ReactNode;
  title: string
}
const PageDataLayout = (props: PageDataLayoutProps) => {
  const { children, title } = props;
  return (
    <>
      <BreadCrumbs />
      <div className="overflow-hidden border rounded border-devBlack/30">
        <div className="p-3 bg-devWhiteGrey">
          <h3 className="flex items-center gap-2 text-base font-open-sans-regular">
            <BsTable />
            Data Table {title}
          </h3>
        </div>
        <div className="p-3">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageDataLayout;
