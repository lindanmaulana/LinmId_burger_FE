import { useDispatch, useSelector } from "react-redux";
import { dataMenuAction } from "./type";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { handleSetMenutProducts, initialStateMenuProducts } from "../../../../../redux/slices/client/menuProduct";

const MenuAction = () => {
    const dispatch = useDispatch<AppDispatch>()
  const { idActive } = useSelector(
    (state: RootState) => state.client.menuProducts
  );
  
  const handleClickMenuProduct = (data: initialStateMenuProducts) => {
    dispatch(handleSetMenutProducts({categorie: data.categorie, idActive: data.idActive}))
  }

  return (
    <>
      {dataMenuAction?.map((menu) => (
        <button
        onClick={() => handleClickMenuProduct({categorie: menu.setType, idActive: menu.id})}
          key={menu.id}
          className={`${
            idActive === menu.id ? "bg-primary text-white" : "text-primary"
          } rounded-full py-2 text-sm`}
        >
          {menu.title}
        </button>
      ))}
    </>
  );
};

export default MenuAction;
