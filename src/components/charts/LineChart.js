import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart() {
  let labels = [];
  for (let i = 1; i < 8; i++) labels.push(i);
  let data = [100, 130, 200, 400, 487, 600, 300];

  return (
    <div className="line-chart">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Line Chart",
              data: data,
              backgroundColor: ["#a6a6a6"],
              tension: 0.5,
              fill: true,
              borderCapStyle: "square"
            }
          ]
        }}
        options={{
          maintainAspectRatio: true,
          legend: {
            labels: {
              fontSize: 10
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
