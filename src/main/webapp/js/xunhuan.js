$(function(){
    $("#creat").click(function(){
    $(".login").hide(900);
    $(".register").show(1000);
    });
    $("#Login1").click(function(){
        $(".register").hide(900);
        $(".login").show(1000);
        });
    $("#xunhuan").click(function(){
        $(".register").hide(900);
        $("#login").show(1000);
        });
  });
  
function input_file() {
    $('#input-file').click();
}
function img_preview(obj) {
    var file = obj.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        var img = document.getElementById("img-preview")
        img.src = e.target.result;
    };
}
//表单验证

function submitall(){
    var form = document.getElementById('form'); // 获得form表单的id
    var xhr = new XMLHttpRequest();
			var user = form.account.value.replace(/(^\s*)|(\s*$)/g, ""); // 过滤user左右的空格
			var pwd = form.password.value.replace(/(^\s*)|(\s*$)/g, ""); // 过滤pwd左右的空格
			if (user.length == 0 && pwd.length == 0) {
				document.getElementById("account").style.borderColor="red"
                document.getElementById("password").style.borderColor="red"
				return false; // 返回假
			}else if (user.length == 0) { // 获得id=form的name=user的value的长度
				document.getElementById("account").style.borderColor="red"
				return false; // 返回假
			}else if (pwd.length == 0) { // 获得id=form的name=pwd的value的长度
				document.getElementById("password").style.borderColor="red"
				return false; // 返回假
			}else{
				//window.open("../html/xunhuan_index.jsp")
                xhr.open("POST", "./user_login", true);
                xhr.send();
				return true; // 返回真
			}
}

$('#browse').click(function() {
      $('body').animate({opacity: 0}, 'slow', function() {
        window.location.href = '../index';
      });
  });

//注册表单验证
const form2 = document.getElementById('registerform');
const inputs = form2.querySelectorAll('input');
form2.addEventListener('submit', e => {
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            isValid = false;
        }
    });
    if (!isValid) {
        e.preventDefault();
    }
});
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});
