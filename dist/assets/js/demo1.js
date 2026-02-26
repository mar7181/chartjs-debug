import {
  Chart,
  registerables
} from "./chunk-AI4S6MPP.js";

// node_modules/chart.js/auto/auto.js
Chart.register(...registerables);
var auto_default = Chart;

// src/js/demo1.ts
document.addEventListener("DOMContentLoaded", () => {
  const barChartCanvasElement = document.getElementById("myChart");
  if (barChartCanvasElement) {
    new auto_default(barChartCanvasElement, {
      type: "bar",
      data: {
        labels: ["jan", "feb", "mar"],
        datasets: [
          {
            label: "Apples",
            data: [100, 200, 300]
          },
          {
            label: "Oranges",
            data: [25, 30, 50]
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            offset: true,
            type: "category"
          },
          y: {
            stacked: true,
            beginAtZero: true,
            type: "linear"
          }
        }
      }
    });
  }
});
