import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { handleSetFood, initialStateFood } from "../../redux/slices/client/HomeFood";
import { dataActionFood } from "./type";

const ActionFood = () => {
    const dispatch = useDispatch<AppDispatch>()
  const { idActive } = useSelector(
    (state: RootState) => state.client.homeFood
  );
  
  const HandleClickFoodMenu = (data: initialStateFood) => {
    dispatch(handleSetFood({categorie: data.categorie, idActive: data.idActive}))
  }

  return (
    <>
      {dataActionFood?.map((menu) => (
        <button
        onClick={() => HandleClickFoodMenu({categorie: menu.setType, idActive: menu.id})}
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

export default ActionFood;
