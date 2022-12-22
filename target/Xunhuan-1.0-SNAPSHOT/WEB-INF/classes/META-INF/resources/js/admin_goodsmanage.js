$('.usertab').click(function () {
    $('body').animate({ opacity: 0 }, 'slow', function () {
        window.location.href = '../html/admin_usermanage.html';
    });
});
$('.selltab').click(function () {
    $(".selltab").css("background-color", "#333333")
    $(".dishonest").css("background-color", "#9e9e9e")
    $(".transaction").css("background-color", "#9e9e9e")
    $(".registered").css("background-color", "#9e9e9e")
    $(".usertran").css("background-color", "#9e9e9e")
    $(".selllist").show(500)
    $(".dishon").hide(500)
    $(".transa").hide(500)
    $(".regist").hide(500)
    $(".usert").hide(500)
});
$('.dishonest').click(function () {
    $(".dishonest").css("background-color", "#333333")
    $(".selltab").css("background-color", "#9e9e9e")
    $(".transaction").css("background-color", "#9e9e9e")
    $(".registered").css("background-color", "#9e9e9e")
    $(".usertran").css("background-color", "#9e9e9e")
    $(".dishon").show(500)
    $(".selllist").hide(500)
    $(".transa").hide(500)
    $(".regist").hide(500)
    $(".usert").hide(500)
});
$('.transaction').click(function () {
    $(".transaction").css("background-color", "#333333")
    $(".selltab").css("background-color", "#9e9e9e")
    $(".dishonest").css("background-color", "#9e9e9e")
    $(".registered").css("background-color", "#9e9e9e")
    $(".usertran").css("background-color", "#9e9e9e")
    $(".transa").show(500)
    $(".selllist").hide(500)
    $(".dishon").hide(500)
    $(".regist").hide(500)
    $(".usert").hide(500)
});
$('.registered').click(function () {
    $(".registered").css("background-color", "#333333")
    $(".selltab").css("background-color", "#9e9e9e")
    $(".dishonest").css("background-color", "#9e9e9e")
    $(".transaction").css("background-color", "#9e9e9e")
    $(".regist").show(500)
    $(".selllist").hide(500)
    $(".dishon").hide(500)
    $(".transa").hide(500)
    $(".usert").hide(500)
});

$("#totalsales").hover(function () {
    $("#pricedata").css("border-bottom", "1px solid #f7f7f7")
    $("#growthtrend").css("border-bottom", "1px solid #f7f7f7")
    $("#totalsales").css("border-bottom", "1px solid #333")
    $("#pricedatalist1").hide(500);
    $("#pricedatalist2").hide(500);
    $("#growthtrendlist").hide(500);
    $("#totalsaleslist").show(500);
});
$("#pricedata").hover(function () {
    $("#totalsales").css("border-bottom", "1px solid #f7f7f7")
    $("#growthtrend").css("border-bottom", "1px solid #f7f7f7")
    $("#pricedata").css("border-bottom", "1px solid #333")
    $("#pricedatalist1").show(500);
    $("#pricedatalist2").show(500);
    $("#growthtrendlist").hide(500);
    $("#totalsaleslist").hide(500);
});
$("#growthtrend").hover(function () {
    $("#totalsales").css("border-bottom", "1px solid #f7f7f7")
    $("#pricedata").css("border-bottom", "1px solid #f7f7f7")
    $("#growthtrend").css("border-bottom", "1px solid #333")
    $("#pricedatalist1").hide(500);
    $("#pricedatalist2").hide(500);
    $("#growthtrendlist").show(500);
    $("#totalsaleslist").hide(500);
});



//售卖信息统计--出售总量
var myChart = echarts.init(document.getElementById('totalsaleslist'), null, {
    width: 470,
    // 图表高度
    height: 390
});
var option = {
    legend: {
        show: true,
        left:170,
        top: 20,
    },
    xAxis: {
        data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    series: [
        {
            name: '现金',
            type: 'bar',
            data: [30, 20, 30, 40, 50, 60, 70],
            smooth: true,
            itemStyle: {
                normal: {
                    barBorderRadius:[15,15,0,0],
                    color:'#333',
                    lineStyle: {
                        width: 1.5
                    }
                }
            },
        },
        {
            name: '求购',
            type: 'bar',
            data: [50, 40, 30, 20, 10, 80, 60],
            smooth: true,
            itemStyle: {
                normal: {
                    barBorderRadius:[15,15,0,0],
                    color:'#c84946',
                    lineStyle: {
                        width: 1.5
                    }
                }
            },
        }
    ],
    yAxis: {
        min: 0,
    },
    grid: {
        show: false,
        x: 40,
        y: 100,
        x2: 5,
        y2: 50,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} 件',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5,
        axisPointer: {
            type: 'line',  // 线型指示器
            lineStyle: {
                color: '#ccc',  // 线的颜色
                width: 1  // 线的宽度
            }
        }
    },
    title: {
        text: '总出售量/收购量',
        left: 20,
        top: 15,
    },
    backgroundColor: "#FFF"
};
myChart.setOption(option);


//售卖信息统计--增长趋势
var prices = [20000, 10000, 9000, 25000, 10000, 7000, 15000];
var growthRates = [];
for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
        growthRates.push(0);
    } else {
        growthRates.push(((prices[i] - prices[i - 1]) / prices[i - 1] * 100).toFixed(2));
    }
}
var prices2 = [15000, 20000, 17000, 8000, 10000, 8000, 6000];
var growthRates2 = [];
for (let i = 0; i < prices2.length; i++) {
    if (i === 0) {
        growthRates2.push(0);
    } else {
        growthRates2.push(((prices2[i] - prices2[i - 1]) / prices2[i - 1] * 100).toFixed(2));
    }
}
var myChart4 = echarts.init(document.getElementById('growthtrendlist'), null, {
    width: 600,
    // 图表高度
    height: 240
});
var option4 = {
    legend: {
        show: true,
        right: 50,
        top: 20,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    series: [{
        name: '现金',
        type: 'line',
        smooth:true,
        data: growthRates,
    },
    {
        name: '求购',
        type: 'line',
        data: growthRates2,
        smooth:true,
        itemStyle: {
            // 柱状颜色
            color: '#2f4554'
        }
    }],
    yAxis: {
        type: 'value'
    },
    grid: {
        show: false,
        height:'65%',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} %',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: '总金额增长率',
        left: 20,
        top: 20,
        textStyle:{
        color:'#9e9e9e'
    }
    },
    backgroundColor: "#FFF"
};
myChart4.setOption(option4);

//需求信息统计--求购商品新旧程度喜好
var myChart5 = echarts.init(document.getElementById('college'), null, {
    width: 210,
    // 图表高度
    height: 240
});

// 指定饼图的配置项和数据
var option5 = {
    title:{
        text: '新旧商品数量',
        left: 0,
        top:5,
        textStyle:{
            color:'#9e9e9e',
            fontSize:15
        }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '80%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 500, name: '全新' },
          { value: 735, name: '八成' },
          { value: 580, name: '五成' },
          { value: 484, name: '三成' },
          { value: 10, name: '破烂' }
        ],
        top: -30,
        left:0
      }
    ]
  };

// 使用配置项和数据显示图表
myChart5.setOption(option5);

//交易信息统计--交易成功率
var success = [20000, 10000, 9000, 25000, 10000, 7000, 15000];
var successRates = [];
for (let i = 0; i < success.length; i++) {
    if (i === 0) {
        successRates.push(0);
    } else {
        successRates.push(((success[i] - success[i - 1]) / success[i - 1] * 100).toFixed(2));
    }
}
var success2 = [15000, 20000, 17000, 8000, 10000, 8000, 6000];
var successRates2 = [];
for (let i = 0; i < success2.length; i++) {
    if (i === 0) {
        successRates2.push(0);
    } else {
        successRates2.push(((success2[i] - success2[i - 1]) / success2[i - 1] * 100).toFixed(2));
    }
}
var myChart7 = echarts.init(document.getElementById('transasuccess'), null, {
    width: 530,
    // 图表高度
    height: 185
});
var option7 = {
    legend: {
        show: true,
        left: 150,
        top: 20,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    series: [{
        name: '现金',
        type: 'line',
        smooth:true,
        data: successRates,
    },
    {
        name: '求购',
        type: 'line',
        data: successRates2,
        smooth:true,
        itemStyle: {
            // 柱状颜色
            color: '#333'
        }
    }],
    yAxis: {
        type: 'value',
        show:false
    },
    grid: {
        show: false,
        width: '90%',  // 调整图表的宽度
        height: '70%', // 调整图表的高度
        x: 30,
        y: 60,
        x2: 0,
        y2: 30,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} %',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: '成交量增长率',
        left: 30,
        top: 20,
    },
    backgroundColor: "#FFF"
};
myChart7.setOption(option7);



// 注册用户统计--各学院人数
var totaldata = [110, 90, 200, 150, 130]
var total = totaldata.reduce(function (a, b) {
    return a + b;
});
var myChart9 = echarts.init(document.getElementById('registsum'), null, {
    width: 530,
    // 图表高度
    height: 185
});
var option9 = {
    legend: {
        show: true,
        left: 250,
        top: 25,
        selected: {  // 设置默认选中的图例
            '注册人数': true,  // 默认选中注册人数这条线
            '封禁人数': false  // 默认不选中封禁人数这条线
        }
    },
    xAxis: {
        show:false,
        data: ["信息技术", "财贸学院", "机电技术", "艺术设计", "汽车技术"]
    },
    yAxis: {
        show:false,
        min: 0,
    },
    series: [{
        name: '注册人数',
        type: 'line',
        data: [110, 90, 200, 150, 130],
        smooth:true,
        itemStyle: {
            // 柱状颜色
            color: '#c84946'
        },
        areaStyle: {
            color: {
                type: 'linear',  // 设置渐变色
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#efc8c8'  // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#FFFFFF'  // 100% 处的颜色
                }],
                global: false  // 缺省为 false
            }
        },  
    },
    {
        name: '封禁人数',
        type: 'line',
        barWidth: 20,
        barGap: 0,
        data: [16, 16, 27, 26, 15]
    }],
    grid: {
        show: false,
        width: '100%',  // 调整图表的宽度
        height: '70%', // 调整图表的高度
        x: 0,
        y: 80,
        x2: 0,
        y2: 30,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} 人',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: '各学院注册人数(共' + total + '人)',
        left: 30,
        top: '20',
    },
    backgroundColor: "#FFF"
};
myChart9.setOption(option9);