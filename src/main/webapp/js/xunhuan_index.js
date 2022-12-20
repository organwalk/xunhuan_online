$(document).ready(function () {
  var i = 0;
  var timer;
  //用jquery方法设置第一张图片显示，其余隐藏
  $('.item').eq(0).show().siblings('.item').hide();
  //调用showTime()函数（轮播函数）
  showTime();
  //创建一个showTime函数
  function showTime() {
    //定时器
    timer = setInterval(function () {
      //调用一个Show()函数
      Show();
      i++;
      //当图片是最后一张的后面时，设置图片为第一张
      if (i == 2) {
        i = 0;
      }
    }, 7000);
  }
  //创建一个Show函数
  function Show() {
    $('.item').toggle(4000);
  }
});



$(function () {
  $("#moneytrade").click(function () {
    $("#divmoneytrade").css("background-color","#333333")
    $("#moneytrade").css("background-color","#333333")
    $("#divwantbuy").css("background-color","#9e9e9e")
    $("#wantbuy").css("background-color","#9e9e9e")


    $("#wantbuylist").hide(1000);
    $("#moneytradelist").show(1000);
  });


  $("#wantbuy").click(function () {
    $("#divwantbuy").css("background-color","#333333")
    $("#wantbuy").css("background-color","#333333")
    $("#divmoneytrade").css("background-color","#9e9e9e")
    $("#moneytrade").css("background-color","#9e9e9e")
    $("#wantbuylist").css("display","grid")
    $("#moneytradelist").hide(1000);
    $("#wantbuylist").show(1000);
  });

});





