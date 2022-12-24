<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    request.setAttribute("path", basePath);
%>
<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>鲟环--登录</title>
    <link href="${path}/css/xunhuan.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>
<body>
    <div class="left">
        <img id="xunhuan" src="${path}/image/xunhuan.jpg">
        <div class="login" id="login">
            <h1>Welcome Back</h1><br>
            <span>Please log in to your account</span>
            <br><br><br>
            <c:if test="${!empty registersuccess }">
                <div class="tipmess">${registersuccess }</div>
            </c:if>
            <c:if test="${!empty failMsg }">
                <div class="tipmess">${failMsg }</div>
            </c:if>
            <c:if test="${!empty banMsg }">
                <div class="tipmess">${banMsg }</div>
            </c:if>
            <c:if test="${!empty changepwdmsg }">
                <div class="tipmess">${changepwdmsg }</div>
            </c:if>
            <form id="form" action="${path}user_login" method="post">
            <input class="usertype" style="width: 20px;height: 20px;font-size: 15px;padding-left: 5px;margin-left: 55px" type="radio" name="userType" value="user" checked>&nbsp;User&nbsp;&nbsp;
            <input class="usertype" style="width: 20px;height: 20px;font-size: 15px;padding-left: 5px" type="radio" name="userType" value="admin">&nbsp;Admin
            <div><label>Account</label><br>
            <input type="text" id="account" name="account"placeholder="Enter your account"><br><br>
            <label>Password</label><br>
            <input type="password" id="password" name="password" placeholder="Enter your password"></div><br>
            <input type="submit" value="Log in" id="submit" onclick="return submitall()"><br><br>
            </form>
            <span>Don't have an account? <a id="creat" href="#">Creat it</a></span>
        </div>
        <div class="register">
            <h1>Creat new account</h1><br>
            <span>Already A Member? <a id="Login1" href="#">Log in</a></span>
            <br><br><br>
            <form id="registerform" action="${path}user_rigister" method="Post" enctype="multipart/form-data">
                <input type="hidden" name="publish_date" class="publish_date">
            <div class="icon">
                <img src="${path}/image/头像.png" onclick="input_file()" id="img-preview">
                <input type="file" name="photo" onchange="img_preview(this)" id="input-file"><br></div><br><br>
            <div class="short"><label>Real Name</label><br>
            <input type="text" name="name" placeholder="Enter your name"></div>
            <div class="short"><label>Class</label><br>
            <input type="text" name="_class" placeholder="Enter your class"></div><br><br><br>
            <label>Department</label><br>
            <input type="text" name="department" placeholder="Enter your department"><br>
            <label>Wechat</label><br>
            <input type="text" name="wechat" placeholder="Enter your wechat"><br>
            <label>Mobile</label><br>
            <input type="text" name="mobile" placeholder="Enter your mobile"><br>
            <label>Account</label><br>
            <input type="text" name="account" placeholder="Enter your account">
            <label>Password</label><br>
            <input type="password" name="password" placeholder="Enter your password"><br><br>
            <input type="submit" value="Creat Account" id="register">
            </form>
            </div>
            
        </div>
    <div class="right">
    <div class="menu">
            <button id="menu"><img src="${path}/image/菜单.png"></button>
    </div>
    <div class="up">
        <div class="text">
            <h1>鲟环</h1>
            <p>CircularEconomy</p><br>
            <span>服务于校园的线上二手物品交易平台</span>
        </div>
        <div class="img">
            <img src="${path}/image/xunhuan_index.jpeg">
        </div>
    </div>
    <div class="browse"><button id="browse">Browse Web</button></div>
    <div class="about">
        <div class="email2"><span>harukisea0@gmail.com</span></div>
        <div class="email"><img src="${path}/image/谷歌.png"></div>
        <div class="email1"><a href="https://github.com/seaharuki">seaharuki</a></div>
        <div class="email"><img src="${path}/image/github.png"></div>
    </div>
</div>
</body>
<script type="text/javascript" src="${path}/js/xunhuan.js"></script>
<script>
    // 获取当前日期，格式为yyyy-mm-dd
    function getCurrentDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;
        return year + "-" + month + "-" + day;
    }
    window.onload = function() {
        console.log(getCurrentDate())
        // 获取当前日期并赋值给隐藏域
        document.querySelector(".publish_date").value= getCurrentDate();
        var a = document.querySelector(".publish_date").value
        console.log(a)
    }
</script>
</html>