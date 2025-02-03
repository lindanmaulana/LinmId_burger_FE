import { dataOrder, statusOrder } from "../../../../../types/type-orders";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";
import Table from "../../../components/table";
import Tbody from "../../../components/table/Tbody";
import TbodyItem from "../../../components/table/TbodyTd";
import TbodyTr from "../../../components/table/TbodyTr";
import Thead from "../../../components/table/Thead";

export interface OrderTableProps {
  data: dataOrder[];
  handleActionOrder: (id: string, message: string, status: statusOrder) => void;
}
const OrderTable = (props: OrderTableProps) => {
  const { data, handleActionOrder } = props;

  return (
    <Table>
      <Thead
        titleHeading={[
          "Order id",
          "User id",
          "Status",
          "Total Price",
          "Date",
          "",
          "",
        ]}
      />
      <Tbody>
        {data.length > 0 ? data.map((order: dataOrder) => {
          const orderDate = helperFormatDate(order.createdAt);
          return (
            <TbodyTr key={order._id}>
              <TbodyItem>{order._id}</TbodyItem>
              <TbodyItem>{order.id_user}</TbodyItem>
              <TbodyItem className="text-center">
                <p
                  className={`
                    ${
                      order.status === "canceled"
                        ? "bg-red-500"
                        : order.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    } rounded text-white text-xs px-2 py-1`}
                >
                  {order.status}
                </p>
              </TbodyItem>
              <TbodyItem>{order.total_price}</TbodyItem>
              <TbodyItem>{orderDate}</TbodyItem>
              <TbodyItem>
                <button
                  onClick={() => {
                    handleActionOrder(
                      order._id,
                      `Apakah anda yakin untuk cancel order dengan id: ${order._id}`,
                      "canceled"
                    );
                  }}
                  className="px-6 py-1 text-xs text-white rounded bg-devRed"
                >
                  Cancel
                </button>
              </TbodyItem>
              <TbodyItem>
                <button
                  onClick={() =>
                    handleActionOrder(
                      order._id,
                      `Apakah anda yakin untuk approve order dengan id: ${order._id}`,
                      "completed"
                    )
                  }
                  className="px-6 py-1 text-xs text-white rounded bg-devBlue"
                >
                  Approve
                </button>
              </TbodyItem>
            </TbodyTr>
          );
        }): (
          <TbodyTr>
            <TbodyItem className="text-center" colSpan={7}>
              <p className="text-sm text-red-500">Not found</p>
            </TbodyItem>
          </TbodyTr>
        )}
      </Tbody>
    </Table>
  ); 
};

export default OrderTable;
