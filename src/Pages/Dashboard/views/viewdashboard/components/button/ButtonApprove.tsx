export interface ButtonApproveProps {
  onClick: () => void;
}
const ButtonApprove = (props: ButtonApproveProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="px-6 py-1 text-xs text-white rounded bg-devBlue"
    >
      Approve
    </button>
  );
};

export default ButtonApprove;
