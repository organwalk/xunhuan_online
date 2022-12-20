$('.usertab').click(function () {
    $('body').animate({ opacity: 0 }, 'slow', function () {
        window.location.href = '../html/admin_usermanage.jsp';
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
    $(".usertran").css("background-color", "#9e9e9e")
    $(".regist").show(500)
    $(".selllist").hide(500)
    $(".dishon").hide(500)
    $(".transa").hide(500)
    $(".usert").hide(500)
});
$('.usertran').click(function () {
    $(".usertran").css("background-color", "#333333")
    $(".selltab").css("background-color", "#9e9e9e")
    $(".dishonest").css("background-color", "#9e9e9e")
    $(".transaction").css("background-color", "#9e9e9e")
    $(".registered").css("background-color", "#9e9e9e")
    $(".usert").show(500)
    $(".selllist").hide(500)
    $(".dishon").hide(500)
    $(".transa").hide(500)
    $(".regist").hide(500)
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
var myChart = echarts.init(document.getElementById('totalsaleslist'),null,{
    width: 780,
    // 图表高度
    height: 450
});
var option = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        data:  ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    series: [
        {
            name: '现金交易商品出售量',
            type: 'bar',
            data: [30, 20, 30, 40, 50, 60, 70],
        },
        {
            name: '求购交易商品收购量',
            type: 'bar',
            data: [50, 40, 30, 20, 10, 80, 60],
        }
    ],
    yAxis: {
        min: 0
    },
    grid: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} 件',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: '两种交易类型的总出售量/收购量',
        left: 'center',
        top: 'bottom',
    },
    backgroundColor: "#FFF"
};
myChart.setOption(option);

//售卖信息统计--价格数据
var myChart2 = echarts.init(document.getElementById('pricedatalist1'),null,{
    width: 500,
    // 图表高度
    height: 450
});
var option2 = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        data:  ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    series: [
        {
            name: '现金交易商品平均价格',
            type: 'bar',
            data: [300, 200, 300, 400, 500, 600, 700],
        },
        {
            name: '求购交易商品平均价格',
            type: 'bar',
            data: [500, 400, 300, 200, 100, 80, 60],
        }
    ],
    yAxis: {
        min: 0,
        max:1000
    },
    grid: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} 元',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: '两种交易类型的平均成交价格',
        left: 'center',
        top: 'bottom',
    },
    backgroundColor: "#FFF"
};
myChart2.setOption(option2);

//成交价格总额
var myChart3 = echarts.init(document.getElementById('pricedatalist2'),null,{
    width: 500,
    // 图表高度
    height: 450
});
var option3 = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    series: [
        {
            name: '现金交易成交总额',
            type: 'bar',
            data: [20000, 10000, 9000, 25000, 10000, 7000, 15000],
        },
        {
            name: '求购交易成交总额',
            type: 'bar',
            data: [15000, 20000, 17000, 8000, 10000, 8000, 6000],
        }
    ],
    yAxis: {
        min: 0
    },
    grid: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} 元',
        textStyle: "#000",
        backgroundColor: "#FFF",
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: '两种交易类型的成交价格总额',
        left: 'center',
        top: 'bottom',
    },
    backgroundColor: "#FFF"
};
myChart3.setOption(option3);

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
var myChart4 = echarts.init(document.getElementById('growthtrendlist'),null,{
    width: 780,
    // 图表高度
    height: 450
});
var option4 = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    series: [{
        name: '现金交易金额增长率',
        type: 'line',
        data: growthRates,
    },
    {
        name: '求购交易金额增长率',
        type: 'line',
        data: growthRates2,
        itemStyle: {
            // 柱状颜色
            color: '#2f4554'
        }
    }],    
    yAxis: {
        type: 'value'
    },
    grid: {
        show: false
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
        text: '两种交易类型的售卖总金额增长率',
        left: 'center',
        top: 'bottom',
    },
    backgroundColor: "#FFF"
};
myChart4.setOption(option4);

//需求信息统计--求购商品新旧程度喜好
var myChart5 = echarts.init(document.getElementById('college'),null,{
    width: 500,
    // 图表高度
    height: 450
});

// 指定饼图的配置项和数据
var option5 = {
    title: {
        text: '求购商品新旧程度喜好分析',
        left: 'center',
        top: 'bottom',
    },
    label: {
        formatter: '{b}',
    },
    grid: {
        bottom: '10%',
        containLabel: true
    },
    series: [
        {
            name: '新旧程度',
            type: 'pie',
           
            data: [
                { value: 20, name: '全新' },
                { value: 40, name: '八成新' },
                { value: 20, name: '五成新' },
                { value: 15, name: '三成新' },
                { value: 5, name: '破烂' }
            ]
        }
    ],
    tooltip: {
        formatter: function (params) {
            return params.name + ': ' + params.value + '%';
        }
    }
};

// 使用配置项和数据显示图表
myChart5.setOption(option5);

//需求信息统计--求购商品学院人数占比
var myChart6 = echarts.init(document.getElementById('newoldlist'),null,{
    width: 500,
    // 图表高度
    height: 450
});

// 指定饼图的配置项和数据
var option6 = {
    title: {
        text: '求购商品学院人数占比',
        left: 'center',
        top: 'bottom',
    },
    label: {
        formatter: '{b}',
    },
    grid: {
        bottom: '10%',
        containLabel: true
    },
    series: [
        {
            name: '新旧程度',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                { value: 17, name: '信息技术学院' },
                { value: 17, name: '财贸学院' },
                { value: 26, name: '机电技术学院' },
                { value: 25, name: '艺术设计学院' },
                { value: 15, name: '汽车技术学院' }
            ]
        }
    ],
    tooltip: {
        formatter: function (params2) {
            return params2.name + ': ' + params2.value + '%';
        }
    }
};

// 使用配置项和数据显示图表
myChart6.setOption(option6);

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
var myChart7 = echarts.init(document.getElementById('transasuccess'),null,{
    width: 500,
    // 图表高度
    height: 450
});
var option7 = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    series: [{
        name: '现金交易成交量增长率',
        type: 'line',
        data: successRates,
    },
    {
        name: '求购交易成交量增长率',
        type: 'line',
        data: successRates2,
        itemStyle: {
            // 柱状颜色
            color: '#2f4554'
        }
    }],    
    yAxis: {
        type: 'value'
    },
    grid: {
        show: false
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
        text: '两种交易类型的成交量增长率',
        left: 'center',
        top: 'bottom',
    },
    backgroundColor: "#FFF"
};
myChart7.setOption(option7);


//交易信息统计--各学院近半年违约率

// 基于准备好的dom，初始化echarts实例
var myChart8 = echarts.init(document.getElementById('transdefault'),null,{
    width: 500,
    // 图表高度
    height: 450
});

// 指定图表的配置项和数据
var option8 = {
    title: {
        text: '商品交易违约率'
    },
    tooltip: {
        formatter: '{b}<br />{c} %',
    },
    legend: {
        data:['现金交易违约率','求购交易违约率'],
        top:20
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: ["信息技术学院","财贸学院","机电技术学院","艺术设计学院","汽车技术学院"],
        axisLabel: {
            rotate: 60
        }
    },
    series: [{
        name: '现金交易违约率',
        type: 'bar',
        barWidth: 20,
        barGap: 0,
        data: [17, 17, 26, 25, 15],
    },
    {
        name: '求购交易违约率',
        type: 'bar',
        barWidth: 20,
        barGap: 0,
        data: [16, 16, 27, 26, 15]
    }],
    title: {
        // 标题文本
        text: '两种交易类型的违约率',
        left: 'center',
        top: 'bottom',
    },
};

// 注册用户统计--各学院人数
myChart8.setOption(option8);
var totaldata = [110, 90, 200, 150, 130]
var total = totaldata.reduce(function(a, b) {
    return a + b;
});
var myChart9 = echarts.init(document.getElementById('registsum'),null,{
    width: 780,
    // 图表高度
    height: 450
});
var option9 = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        data: ["信息技术", "财贸学院", "机电技术", "艺术设计", "汽车技术"]
    },
    yAxis: {
        min:0,
    },
    series: [{
        name:'注册人数',
        type: 'bar',
        data: [110, 90, 200, 150, 130],
        itemStyle: {
            // 柱状颜色
            color: '#2f4554'
        }
    },
    {
        name: '封禁人数',
        type: 'bar',
        barWidth: 20,
        barGap: 0,
        data: [16, 16, 27, 26, 15]
    }],
    grid: {
        show: false
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
        text: '各学院注册人数(共'+total+'人)',
        left: 'center',
        top: 'bottom',
    },
    backgroundColor: "#FFF"
};
myChart9.setOption(option9);

var usersell=[5,2,3,4,2,1,2]
var userneed=[4,3,5,7,2,3,2]
// 指定用户出售量
var myChart10 = echarts.init(document.getElementById('usertsell'),null,{
    width: 450,
    // 图表高度
    height: 200
});
var option10 = {
    legend: {
        show: true,
        right:50,
        top: 20,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    series: [{
        name:'出售量',
        type: 'line',
        data: usersell,
        smooth: true,
        symbol: 'none',
        
    },
    {
        name:'求购量',
        type: 'line',
        data: userneed,
        smooth: true,
        symbol: 'none',
        
    }],    
    yAxis: {
        type: 'value',
        show: false
    },
    grid: {
        show: false,
        y:70
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br />{c} 件',
        textStyle: "#000",
        backgroundColor: "#FFF",
        trigger: 'axis',
        extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        itemGap: 5
    },
    title: {
        // 标题文本
        text: 'Monthly sales volume',
        left: 35,
        top:15
    },
    backgroundColor: "#FFF"
};
myChart10.setOption(option10);