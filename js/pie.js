var myChart = echarts.init(document.getElementById('pie'));
option = {
    title: {
        text: '违规干部婚礼收取的人均礼金数额',
        subtext: '数据来源：中央纪委监察部网站',
        x: 'left',
        show: true,
        // left: '30',
        textStyle: {
            color: '#191919',
            fontSize: 18,
            fontFamily: 'Lora, Helvetica Neue, Helvetica, Arial, sans-serif'
                // fontWeight: 20
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        x: 'center',
        y: 'bottom',
        data: ['100元以下', '101-200元', '201-300元', '301-400元', '401-500元', '501元以上']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    color: ['#c23531', '#61a0a8', '#d48265', '#91c7ae', '#bda29a', '#ca8622', '#a1a1af', '#6e7074'],
    series: [{
        // name: '福利形式',
        type: 'pie',
        radius: [30, 110],
        // center: ['75%', '50%'],
        roseType: 'area',
        data: [{
                value: 22,
                name: '100元以下'
            }, {
                value: 34,
                name: '101-200元'
            }, {
                value: 22,
                name: '201-300元'
            }, {
                value: 13,
                name: '301-400元'
            }, {
                value: 12,
                name: '401-500元'
            }, {
                value: 18,
                name: '500元以上'
            }
            // {value:40, name:'rose8'}
        ]
    }]
};

myChart.setOption(option);
$(window).on('resize', function() {
    if (myChart != null && myChart != undefined) {
        myChart.resize();
        console.log(myChart);
    }
});