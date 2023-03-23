document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Utah resort snowfall for 2022-2023 season',
      align: 'center',
    },
    xAxis: {
      categories: [
        'Snowbasin',
        'Cherry',
        'Brian Head',
        'Alta',
        'Brighton',
        'Nordic Valley',
      ],
    },
    yAxis: {
      min: 20,
      title: {
        text: 'Snow Depth (in)',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color:
            // theme
            (Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            'gray',
          textOutline: 'none',
        },
      },
    },
    legend: {
      align: 'left',
      x: 70,
      verticalAlign: 'top',
      y: 70,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: 'Snowfall',
        data: [433, 361, 362, 703, 718, 301],
      },
      {
        name: 'Base',
        data: [169, 80, 118, 190, 164, 95],
      },
    ],
  })
})
