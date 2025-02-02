import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";

// **Register komponen Chart.js yang dibutuhkan**
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface BarChartProps {
    data: ChartData<"bar">
    options: ChartOptions<"bar">
}

const BarChart = (props: BarChartProps) => {
    const {data, options} = props
  return <Bar data={data} options={options} />;
};

export default BarChart;
