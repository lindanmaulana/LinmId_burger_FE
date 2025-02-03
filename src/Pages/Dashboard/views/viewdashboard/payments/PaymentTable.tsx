import { helperFormatDate } from "../../../../../utils/helpers/formatDate";
import ButtonApprove from "../components/button/ButtonApprove";
import ButtonCancel from "../components/button/ButtonCancel";
import Table from "../../../components/table";
import Tbody from "../../../components/table/Tbody";
import TbodyItem from "../../../components/table/TbodyTd";
import TbodyTr from "../../../components/table/TbodyTr";
import Thead from "../../../components/table/Thead";
import { dataPayment, paymentStatus } from "./payment.type";

export interface PaymentTableProps {
  data: dataPayment[];
  handleActionPayment: (
    id: string,
    message: string,
    status: paymentStatus
  ) => void;
}

const PaymentTable = (props: PaymentTableProps) => {
  const { data, handleActionPayment } = props;
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
          "",
        ]}
      />
      <Tbody>
        {data.map((payment: dataPayment) => {
          const paymentDate = helperFormatDate(payment.payment_date);
          return (
            <TbodyTr key={payment._id}>
              <TbodyItem>
                {payment.id_order ? payment.id_order._id : null}
              </TbodyItem>
              <TbodyItem>{payment.id_user}</TbodyItem>
              <TbodyItem>{payment.amount}</TbodyItem>
              <TbodyItem>{payment.method}</TbodyItem>
              <TbodyItem>{paymentDate}</TbodyItem>
              <TbodyItem className="text-center">
                <p
                  className={`
                    ${
                      payment.status === "failed"
                        ? "bg-red-500"
                        : payment.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    } rounded text-white text-xs px-2 py-1`}
                >
                  {payment.status}
                </p>
              </TbodyItem>
              <TbodyItem>
                <ButtonCancel
                  onClick={() =>
                    handleActionPayment(
                      payment._id,
                      `Apakah anda yakin untuk cancel payment dengan id: ${payment._id}`,
                      "failed"
                    )
                  }
                />
              </TbodyItem>
              <TbodyItem>
                <ButtonApprove
                  onClick={() =>
                    handleActionPayment(
                      payment._id,
                      `Aapakah anda yakin untuk approve payment dengan id: ${payment._id}`,
                      "completed"
                    )
                  }
                />
              </TbodyItem>
            </TbodyTr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default PaymentTable;
