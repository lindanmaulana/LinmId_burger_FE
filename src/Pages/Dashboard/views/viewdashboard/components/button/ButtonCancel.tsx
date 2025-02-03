export interface ButtonCancelProps {
  onClick: () => void;
}

const ButtonCancel = (props: ButtonCancelProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="px-6 py-1 text-xs text-white rounded bg-devRed"
    >
      Cancel
    </button>
  );
};

export default ButtonCancel;
