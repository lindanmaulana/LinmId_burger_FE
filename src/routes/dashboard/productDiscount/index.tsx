import { useRoutes } from "react-router-dom";
import ProductDiscount from "../../../pages/dashboard/views/viewProducts/ProductDiscount";
import ProductDiscountUpdate from "../../../pages/dashboard/views/viewProducts/ProductDiscountUpdate";

const RouterProductDiscount = () => {
  const router = useRoutes([
    {
      index: true,
      element: <ProductDiscount />,
    },
    {
      path: ":id",
      element: <ProductDiscountUpdate />,
    },
  ]);

  return router;
};

export default RouterProductDiscount;
