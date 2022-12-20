function input_file() {
    $('#input-file').click();
}
function img_preview(obj) {
    var file = obj.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        var img = document.getElementById("img-preview");
        img.src = e.target.result;
    };
}


$('#tabtwo2').hover(function () {
    $("#tabtwo2").css("background-color", "#333333")
    $("#tabtwo1").css("background-color", "#9e9e9e")
    $(".allchangeinfor").hide(500)
    $(".card2").show(500)

});
$('#tabtwo1').hover(function () {
    $("#tabtwo1").css("background-color", "#333333")
    $("#tabtwo2").css("background-color", "#9e9e9e")
    $(".allchangeinfor").show(50)
    $(".card2").hide(50)

});

$('#order').click(function () {
    $("#order").css("background-color", "#333333")
    $("#profile").css("background-color", "#9e9e9e")
    $("#wish").css("background-color", "#9e9e9e")
    $(".isprofile").hide(700)
    $(".iswish").hide(700)
    $(".isorder").show(700)
});
$('#profile').click(function () {
    $("#wish").css("background-color", "#9e9e9e")
    $("#order").css("background-color", "#9e9e9e")
    $("#profile").css("background-color", "#333333")
    $(".isorder").hide(700)
    $(".iswish").hide(700)
    $(".isprofile").show(700)
});
$('#wish').click(function () {
    $("#profile").css("background-color", "#9e9e9e")
    $("#order").css("background-color", "#9e9e9e")
    $("#wish").css("background-color", "#333333")
    $(".iswish").show(700)
    $(".isorder").hide(700)
    $(".isprofile").hide(700)
});


$('.odone').click(function () {
    $(".odone").css("border-bottom","3px solid #333")
    $(".oundone").css("border-bottom","3px solid #fff")
    $("#orderlist1").hide(700)
    $("#orderlist2").show(700)
});

$('.oundone').click(function () {
    $(".oundone").css("border-bottom","3px solid #333")
    $(".odone").css("border-bottom","3px solid #fff")
    $("#orderlist1").show(700)
    $("#orderlist2").hide(700)
});

$('.pdone').click(function () {
    $(".pdone").css("border-bottom","3px solid #333")
    $(".pundone").css("border-bottom","3px solid #fff")
    $("#porderlist1").hide(700)
    $("#porderlist2").show(700)
});

$('.pundone').click(function () {
    $(".pundone").css("border-bottom","3px solid #333")
    $(".pdone").css("border-bottom","3px solid #fff")
    $("#porderlist1").show(700)
    $("#porderlist2").hide(700)
});

$('.wdone').click(function () {
    $(".wdone").css("border-bottom","3px solid #333")
    $(".wundone").css("border-bottom","3px solid #fff")
    $("#worderlist1").hide(700)
    $("#worderlist2").show(700)
});

$('.wundone').click(function () {
    $(".wundone").css("border-bottom","3px solid #333")
    $(".wdone").css("border-bottom","3px solid #fff")
    $("#worderlist1").show(700)
    $("#worderlist2").hide(700)
});

$('.widone').click(function () {
    $(".widone").css("border-bottom","3px solid #333")
    $(".wiundone").css("border-bottom","3px solid #fff")
    $("#wiorderlist1").hide(700)
    $("#wiorderlist2").show(700)
});

$('.wiundone').click(function () {
    $(".wiundone").css("border-bottom","3px solid #333")
    $(".widone").css("border-bottom","3px solid #fff")
    $("#wiorderlist1").show(700)
    $("#wiorderlist2").hide(700)
});

$('#mybuy').click(function () {
    $("#mypush").css("background-color", "#9e9e9e")
    $("#mybuy").css("background-color", "#333333")
    $("#orderlistall1").show(700)
    $("#orderlistall2").hide(700)
});

$('#mypush').click(function () {
    $("#mybuy").css("background-color", "#9e9e9e")
    $("#mypush").css("background-color", "#333333")
    $("#orderlistall1").hide(700)
    $("#orderlistall2").show(700)
});

$('#myneed').click(function () {
    $("#myrespond").css("background-color", "#9e9e9e")
    $("#myneed").css("background-color", "#333333")
    $("#wishlistall2").hide(700)
    $("#wishlistall1").show(700)
});

$('#myrespond').click(function () {
    $("#myneed").css("background-color", "#9e9e9e")
    $("#myrespond").css("background-color", "#333333")
    $("#wishlistall1").hide(700)
    $("#wishlistall2").show(700)
});

//ajax部分
//修改密码




