import { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineAppRegistration } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  handleClearTransition
} from "../../redux/slices/confirmationModal";
import { AppDispatch, RootState } from "../../redux/store";
import { TbChecks } from "react-icons/tb";
import { statusOrder } from "../../types/type-orders";
import { paymentStatus } from "../../types/type-payments";

export interface SConfirmationModalProps {
  confirm: (id: string, status: statusOrder | paymentStatus) => void;
  cancel: () => void;
}

const ConfirmModal = (props: SConfirmationModalProps) => {
  const { cancel, confirm } = props;
  const dispatch = useDispatch<AppDispatch>();
  
  const { active, message, transition } = useSelector(
    (state: RootState) => state.confirmationModal
  );

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(handleClearTransition());
      }, 200);
    }
  }, [active, dispatch]);

  return (
    <div
      className={` ${
        active
          ? `block ${transition ? "top-0 opacity-0" : "top-20 opacity-100"}`
          : "top-0 hidden"
      } transition-global z-50 fixed right-1/2 translate-x-1/2 px-3 py-1 rounded bg-devGray`}
    >
      <div
        className={`min-w-72 p-3 rounded flex flex-col gap-6`}
      >
        <p className="flex items-center gap-2 text-sm text-white">
          <MdOutlineAppRegistration className="text-xl" />
          {message}
        </p>
        <div className="flex items-center justify-end gap-3">
          <button onClick={cancel} className="flex items-center gap-2 px-3 py-1 text-sm text-white rounded bg-devRed">
            <IoCloseCircleOutline /> cancel
          </button>
          <button
            onClick={confirm}
            className="flex items-center gap-2 px-3 py-1 text-sm text-white rounded bg-devBlue"
          >
            <TbChecks /> confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
