import ChartDataOrders from "./ChartOrders"
import ChartDataReservation from "./ChartReservation"

const DashboardChartData = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <ChartDataOrders />
            <ChartDataReservation />
        </div>
    )
}

export default DashboardChartData