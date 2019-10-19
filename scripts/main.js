Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'State Population Between 2017-2018'
  },
  subtitle: {
      text: 'https://www.census.gov/newsroom/press-kits/2018/pop-estimates-national-state.html'
  },


  xAxis: {
    categories: ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan']
  },
  yAxis: {
    title: {
      text: 'States'
    }
  },
  series: [{
    name: '2017',
    data: [39399349, 28322717, 20976812, 19590719, 12790447, 12786196]
  },

  {
    name: '2018',
    data: [39557045, 28701845, 21299325, 19542209, 12807060, 12741080]
  }]
});


Highcharts.chart('container2', {

    title: {
        text: 'Number of Homicides by Year'
    },

    subtitle: {
        text: 'Source: https://www.fbi.gov/services/cjis/ucr/publications'
    },

    yAxis: {
        title: {
            text: 'Number of Homicides Committed'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2013
        }
    },

    series: [{
        name: 'Violent Crime',
        data: [1168298, 1153022, 1199310, 1250162, 1247917, 1206836,]
    }, {
        name: 'Murder',
        data: [	14319, 14164, 15883, 17413, 17294, 16214,]
    }, {
        name: 'Rape',
        data: [113695, 118027, 126134, 132414, 135666, 139380,]
    }, {
        name: 'Robbery',
        data: [345093, 322905, 328109, 332797, 320596, 282061,]
    }, {
        name: 'Aggrevated Assault',
        data: [726777, 731089, 764057, 802982, 810319, 807410,]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
