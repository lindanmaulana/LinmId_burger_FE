import ChartDataOrders from "./ChartOrders"
import ChartDataReviews from "./ChartReviews"

const DashboardChartData = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <ChartDataOrders />
            <ChartDataReviews />
        </div>
    )
}

export default DashboardChartData