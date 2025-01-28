import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { handleSetLocation } from "../../redux/slices/dashboard/breadCrumb";

const BreadCrumbs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const breadcrumbs = useMemo(() => {
    if(!pathname) return []
    
    const pathSegments = pathname.split("/").filter(Boolean);
    return pathSegments.map((segment) => `/${segment}`);
  }, [pathname]);

  useEffect(() => {
    if (breadcrumbs.length > 0) {
      const active = breadcrumbs[breadcrumbs.length - 1].replace("/", "");
      dispatch(handleSetLocation({ path: breadcrumbs, active }));
    }
  }, [breadcrumbs, dispatch]);

  return null
};

export default BreadCrumbs;