// src/js/demo3.ts
document.addEventListener("DOMContentLoaded", () => {
  const barChartCanvasElement = document.getElementById("myChart");
  if (barChartCanvasElement) {
    new Chart(barChartCanvasElement, {
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
