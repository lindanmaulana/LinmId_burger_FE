import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Registrasi elemen yang diperlukan oleh Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export interface DoughnutChartProps {
  data: ChartData<"doughnut">;
  options: ChartOptions<"doughnut">;

}

const DoughnutChart = (props: DoughnutChartProps) => {
  const { data, options } = props;
  const dataChart = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const optionsChart = {
    responsive: options.responsive,
    maintainAspectRatio: options.maintainAspectRatio,
    plugins: options.plugins
  };

  return (
    <div className="w-80 h-80">
      <Doughnut data={dataChart} options={optionsChart} />
    </div>
  );
};

export default DoughnutChart;
