export interface TheadProps {
  titleHeading: string[];
}
const Thead = (props: TheadProps) => {
  const { titleHeading } = props;
  return (
    <thead>
      <tr className="text-sm text-left">
        {titleHeading?.map((head: string, index: number) => (
          <th key={index} className="p-2 border border-devBlack/30">
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
