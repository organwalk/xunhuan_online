$(function () {
    $("#indicator1").hover(function () {
        $("#indicator1").css("background-color", "#333333")
        $("#indicator2").css("background-color", "#9e9e9e")
        $("#indicator3").css("background-color", "#9e9e9e")

        $("#picture2").hide(500);
        $("#picture3").hide(500);
        $("#picture1").show(500);
    });

    $("#indicator2").hover(function () {
        $("#indicator2").css("background-color", "#333333")
        $("#indicator1").css("background-color", "#9e9e9e")
        $("#indicator3").css("background-color", "#9e9e9e")


        $("#picture1").hide(500);
        $("#picture3").hide(500);
        $("#picture2").show(500);
    });

    $("#indicator3").hover(function () {
        $("#indicator3").css("background-color", "#333333")
        $("#indicator2").css("background-color", "#9e9e9e")
        $("#indicator1").css("background-color", "#9e9e9e")

        $("#picture2").hide(500);
        $("#picture1").hide(500);
        $("#picture3").show(500);
    });

    $(document).ready(function () {
        $('#selectinput').change(function () {
            var v = $(this).val();
            switch (v) {
                case '1':
                    $('#price').show(500);
                    $('#things').hide(500);
                    break;
                case '2':
                    $('#price').show(500);
                    break;
            }
        })
    })

});

function input_file1() {
    $('#input-file1').click();
}
function img_preview1(obj) {
    var file1 = obj.files[0];
    var reader1 = new FileReader();
    reader1.readAsDataURL(file1);
    reader1.onload = function (e) {
        var img1 = document.getElementById("img-preview1")
        img1.src = e.target.result;
    };
}

function input_file2() {
    $('#input-file2').click();
}
function img_preview2(obj) {
    var file2 = obj.files[0];
    var reader2 = new FileReader();
    reader2.readAsDataURL(file2);
    reader2.onload = function (e) {
        var img2 = document.getElementById("img-preview2")
        img2.src = e.target.result;
    };
}

function input_file3() {
    $('#input-file3').click();
}
function img_preview3(obj) {
    var file3 = obj.files[0];
    var reader3 = new FileReader();
    reader3.readAsDataURL(file3);
    reader3.onload = function (e) {
        var img3 = document.getElementById("img-preview3")
        img3.src = e.target.result;
    };
}



