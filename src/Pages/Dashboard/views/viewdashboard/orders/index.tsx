import { BsTable } from "react-icons/bs"
import useQueryOrders from "../../../../../hooks/query/orders/useQueryOrders"
import PageDataLayout from "../layouts/PageDataLayout"

const ViewDashboardOrders = () => {
    const {dataOrder, errorOrder, loadingOrder} = useQueryOrders()

    if(loadingOrder) return <p>Loading...</p>

    if(errorOrder) return <p>Error...</p>

    console.log(dataOrder.data)

    return (
        <PageDataLayout>
            <div className="border rounded-md">
                <div className="p-3 bg-devWhiteGrey">
                    <h3 className="flex items-center gap-2 text-base font-open-sans-regular"><BsTable />Data Table Orders</h3>
                </div>
                <div>
                    <div></div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </PageDataLayout>
    )
}

export default ViewDashboardOrders