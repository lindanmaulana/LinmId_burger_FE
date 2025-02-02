import { Chart, ChartData, ChartOptions } from "chart.js";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale, // 📌 Registrasikan ini
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
export interface LineChartProps {
  data: ChartData<"line">;
  options: ChartOptions<"line">;
}

  // 📌 Registrasi manual komponen Chart.js
  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);
  

const LineChart = (props: LineChartProps) => {
  const { data, options } = props;
  useEffect(() => {
    return () => {
      Chart.getChart("line-chart")?.destroy(); // Hancurkan chart sebelum unmount
    };
  }, []);

  return <Line id="line-chart" data={data} options={options} />;
};

export default LineChart;
