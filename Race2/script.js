const ctx = document.getElementById("myChart").getContext("2d");
let chart;
let data = [];
let currentHeight = 1;

function updateChart(value) {
  if (data.length >= 100) {
    data.shift();
  }

  if (value === 1) {
    currentHeight++;
  } else if (value === -1) {
    currentHeight--;
  }

  data.push(currentHeight);

  if (chart) {
    chart.data.datasets[0].data = data;
    chart.update();
  } else {
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 100 }, (_, i) => i + 0),
        datasets: [
          {
            label: "Chart",
            data: data,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: undefined,
            max: undefined,
          },
        },
      },
    });
  }
}

const ws = new WebSocket("ws://10.3.6.181:8080/number");
ws.onmessage = function (event) {
  const value = JSON.parse(event.data);
  console.log(value);
  updateChart(value.data);
};
