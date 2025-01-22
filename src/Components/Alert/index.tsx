import { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuCircleCheckBig } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleClearAlert, handleClearTransition } from "../../redux/slices/alertMessage";
import { AppDispatch, RootState } from "../../redux/store";

const SAlert = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { active, message, transition, type } = useSelector(
    (state: RootState) => state.alertMessage
  );

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(handleClearAlert());
      }, 2000);

      setTimeout(() => {
        dispatch(handleClearTransition())
      }, 200)
    }
  }, [ active, dispatch]);

  return (
    <div
      className={` ${
        active
          ? `block ${transition ? "top-0 opacity-0" : "top-5 opacity-100"}`
          : "top-0 hidden"
      } transition-global fixed right-1/2 translate-x-1/2`}
    >
      <div
        className={`${
          type === "error" ? "bg-red-600" : "bg-blue-600"
        } min-w-72 p-3 rounded flex items-center justify-between gap-3`}
      >
        <p className="flex items-center gap-2 text-sm text-white">
          {type === "error" ? (
            <RiErrorWarningLine className="text-xl" />
          ) : (
            <LuCircleCheckBig className="text-xl" />
          )}
          {message}
        </p>
        <button onClick={() => dispatch(handleClearAlert())} className="px-2 text-xl text-white border-l">
          <IoCloseCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default SAlert;
