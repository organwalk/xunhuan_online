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



