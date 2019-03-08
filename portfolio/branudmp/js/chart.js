
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['活用度', 'PV数', 'CV数', '投資費用']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            borderRadius: 10,
            pointWidth: 20,
        }
    },
    series: [{
        name: 'John',
        data: [80, 200, 5, 500]
    }]
});
