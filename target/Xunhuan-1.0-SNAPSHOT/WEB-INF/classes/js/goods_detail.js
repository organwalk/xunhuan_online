$(function () {
    $("#indicator1").hover(function () {
      $("#indicator1").css("background-color","#333333")
      $("#indicator2").css("background-color","#9e9e9e")
      $("#indicator3").css("background-color","#9e9e9e")

      $("#picture2").hide(1000);
      $("#picture3").hide(1000);
      $("#picture1").show(1000);
    });

    $("#indicator2").hover(function () {
        $("#indicator2").css("background-color","#333333")
      $("#indicator1").css("background-color","#9e9e9e")
      $("#indicator3").css("background-color","#9e9e9e")


        $("#picture1").hide(1000);
        $("#picture3").hide(1000);
        $("#picture2").show(1000);
      });

    $("#indicator3").hover(function () {
        $("#indicator3").css("background-color","#333333")
      $("#indicator2").css("background-color","#9e9e9e")
      $("#indicator1").css("background-color","#9e9e9e")

        $("#picture2").hide(1000);
        $("#picture1").hide(1000);
        $("#picture3").show(1000);
    });
});

$(document).ready(function () {
  $('.choosereport1').change(function () {
      var v = $(this).val();
      switch (v) {
          case '1':
              $('.reportsubmit1').show(500);
              break;
          case '2':
            $('.reportsubmit1').show(500);
              break;
      }
  })
})


$('#someinfor').click(function () {
  $(".infor").hide(500)
  $(".other").show(500)

})


const returnLink = document.getElementById('returnLink');
const countdownEl = document.getElementById('jishuqi');
countdownEl.innerText="3"
let countdown = 2;
// 为返回链接添加点击事件处理程序
returnLink.addEventListener('click', function() {
    // 返回上一级页面
    window.history.back();
});
// 在设置的延迟时间内每隔一秒更新一次倒计时
const countdownInterval = setInterval(function() {
    countdownEl.innerText = countdown;
    countdown--;
    if (countdown < 0) {
        clearInterval(countdownInterval);
        window.history.back();
    }
}, 1000);
