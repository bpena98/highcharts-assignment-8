Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Fruit Consumption'
  },
  xAxis: {
    categories: ['Tangerines', 'Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
    title: {
      text: 'Fruit that was eaten last week'
    }
  },
  series: [{
    name: 'Tom',
    data: [6, 1, 0, 4]
  }, {
    name: 'Jerry',
    data: [6, 5, 7, 3]
  }]
});
