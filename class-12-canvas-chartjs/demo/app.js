'use strict';

var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
ctx.width = 50;
ctx.height = 50;

var backgroundColors = [
  'rgb(255, 99, 32)',
  'rgb(20, 40, 230)',
  'rgb(10, 240, 6)'
];

var datasetItem = {
  data: [10, 20, 40],
  backgroundColor: backgroundColors
}

var data = {
  labels: ['red', 'blue', 'green'],
  datasets: [datasetItem]
};

var pieChartConfig = {
  type: 'doughnut',
  data: data,
};

var pieChart = new Chart(ctx, pieChartConfig);
