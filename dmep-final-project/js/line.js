var chart = echarts.init(document.getElementById('main'));

option = {
    title: {
        show: true,
        text: '每个月查处人数',
        left: '0',
        textStyle: {
            color: '#191919',
            // fontFamily: 'Lora, Helvetica Neue, Helvetica, Arial, sans-serif',
        },
        // subtext: '2013年1月至10月及2017年7月以后的数据缺失，故不体现在图表中。',
        subtext: '(数据来源：中央纪委监察部网站 数据采集时间：2017年8月）',
        subtextStyle: {
            color: '#191919',
            fontSize: 12,
        },

    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // data: ['2014年', '2015年', '违规操办婚丧喜庆', '违规配备使用公车'],
        data: ['违规操办婚丧喜庆', '违规配备使用公车'],
        right: '10',
        textStyle: {
            color: '#191919',
            fontStyle: 'normal',
            fontWeight: '50',
            fontFamily: 'sans-serif',
            fontSize: '30',
        },
        top: 80

    },
    grid: {
        top: '25%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         magicType: {
    //             show: true,
    //             type: ['stack', 'tiled']
    //         },
    //         saveAsImage: {
    //             show: true
    //         }
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        min: 'datamin',
        // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        data: ['2013-11', '2013-12', '2014-01', '2014-02', '2014-03', '2014-04', '2014-05', '2014-06', '2014-07', '2014-08', '2014-09', '2014-10', '2014-11', '2014-12', '2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06'],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'black',
                width: 1,
            }
        }
    },
    yAxis: {
        // show: false,
        type: 'value',
        axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
                color: 'black',
                width: 1,
            }
        },
        // axisLabel: {
        //     show: true,
        // }
    },


    series: [
        // {
        //     name: '2014年',
        //     type: 'line',
        //     // stack: '总量',
        //     smooth: true,
        //     data: [2288, 5887, 3275, 3891, 4979, 5083, 4480, 4668, 6055, 5263, 5699, 4238],
        //     // data: [3038, 3387, 2288, 5887, 3275, 3891, 4979, 5083, 4480, 4668, 6055, 5263, 5699, 4238, 1650, 1509, 1931, 2508, 3141, 3111, 2842, 3268, 3490, 3808, 4833, 4785, 3945, 2263, 2672, 3115, 3215, 4108, 3044, 2901, 3489, 3320, 3894, 5019, 2778, 2077, 2733, 3514, 3991, 5671]
        //     showSymbol: false,
        //     lineStyle: {
        //         normal: {
        //             color: '#546aa1',
        //             width: 2,
        //         },
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#546aa1',
        //         }
        //     }
        // }, {
        //     name: '2015年',
        //     type: 'line',
        //     // stack: '总量',
        //     smooth: true,
        //     data: [1650, 1509, 1931, 2508, 3141, 3111, 2842, 3268, 3490, 3808, 4833, 4785],
        //     showSymbol: false,
        //     lineStyle: {
        //         normal: {
        //             color: '#9e5f8a',
        //             width: 2,
        //         },
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#9e5f8a',
        //         }
        //     }
        // }, 
        {
            name: '违规操办婚丧喜庆',
            type: 'line',
            // stack: '总量',
            smooth: true,
            // data: [3945, 2263, 2672, 3115, 3215, 4108, 3044, 2901, 3489, 3320, 3894, 5019],
            data: [201, 258, 237, 140, 193, 189, 230, 265, 307, 433, 473, 350, 376, 231, 284, 315, 466, 454, 535, 454, 503, 558, 558, 680, 691, 562, 518, 344, 402, 521, 498, 622, 415, 483, 556, 536, 657, 602, 407, 341, 417, 477, 602, 677, ],
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#ac2b24',
                    width: 3,
                },
            },
            itemStyle: {
                normal: {
                    color: '#ac2b24',
                }
            }
        },
        {
            name: '违规配备使用公车',
            type: 'line',
            // stack: '总量',
            smooth: true,
            // data: [2778, 2077, 2733, 3514, 3991, 5671],
            data: [496, 435, 493, 502, 475, 779, 1111, 776, 530, 483, 935, 599, 614, 372, 665, 640, 792, 996, 1185, 976, 857, 762, 869, 1134, 945, 894, 789, 690, 774, 736, 744, 832, 624, 601, 610, 712, 699, 876, 542, 533, 758, 970, 1031, 1659, ],
            showSymbol: false,
            lineStyle: {
                normal: {
                    // color: '#eea822',
                    color: '#bebebe',
                    width: 2,
                },
            },
            itemStyle: {
                normal: {
                    color: '#bebebe',
                }
            }
        },

    ]
};
chart.setOption(option);

$(window).on('resize', function() {
    if (chart != null && chart != undefined) {
        chart.resize();
        console.log(chart);
    }
});