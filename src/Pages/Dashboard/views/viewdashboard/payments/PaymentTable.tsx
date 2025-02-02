import Table from "../components/table";
import Tbody from "../components/table/Tbody";
import TbodyItem from "../components/table/TbodyTd";
import TbodyTr from "../components/table/TbodyTr";
import Thead from "../components/table/Thead";
import { dataPayment } from "./payment.type";

export interface PaymentTableProps {
  data: dataPayment[];
  handleActionPayment: (id: string, status: string) => void
}

const PaymentTable = (props: PaymentTableProps) => {
  const { data } = props;
  return (
    <Table>
      <Thead
        titleHeading={[
          "Id Order",
          "User",
          "Amount",
          "Method",
          "Date",
          "Status",
          "",
          ""
        ]}
      />
      <Tbody>
        {data.map((payment: dataPayment) => (
          <TbodyTr key={payment._id}>
            <TbodyItem>{payment.id_order ? payment.id_order._id: null}</TbodyItem>
            <TbodyItem>{payment.id_user}</TbodyItem>
            <TbodyItem>{payment.amount}</TbodyItem>
            <TbodyItem>{payment.method}</TbodyItem>
            <TbodyItem>{payment.payment_date}</TbodyItem>
            <TbodyItem>{payment.status}</TbodyItem>
            <TbodyItem>
              <button></button>
            </TbodyItem>
            <TbodyItem>
              <button></button>
            </TbodyItem>
          </TbodyTr>
        ))}
      </Tbody>
    </Table>
  );
};

export default PaymentTable;
