<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>发布求购信息</title>
    <link href="../css/goods_add.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../js/jquery-3.6.1.js"></script>
</head>
<body>
<jsp:include page="header.jsp">
    <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
    <div class="goods_detail">
        <form action="../needs_add" method="post" enctype="multipart/form-data">
        <input type="hidden" name="_owner" value="${user._id}">
            <input type="hidden" name="typeid" value="2">
            <input type="hidden" name="publish_date" class="publish_date">
        <div class="imgall">
            <div class="picture" id="picture1">
                <img src="../image/uploadimg.png" onclick="input_file1()" id="img-preview1">
                <input type="file" name="cover" onchange="img_preview1(this)" id="input-file1">
            </div>
            <div class="picture" id="picture2">
                <img src="../image/uploadimg.png" onclick="input_file2()" id="img-preview2">
                <input type="file" name="photo1" onchange="img_preview2(this)" id="input-file2">
            </div>
            <div class="picture" id="picture3">
                <img src="../image/uploadimg.png" onclick="input_file3()" id="img-preview3">
                <input type="file" name="photo2" onchange="img_preview3(this)" id="input-file3">
            </div>
        </div>
        <div class="informationall">
            <div class="indicator">
                <div><button id="indicator1"></button></div>
                <div><button id="indicator2"></button></div>
                <div><button id="indicator3"></button></div>
            </div>
            <div class="textall">
                <div class="rlist_content">
                    <input type="text" name="thing_name" placeholder="请输入商品名称" maxlength="10" required><br>
                    <select name="new_old">
                        <option disabled="disabled" selected="selected" >几成新</option>
                        <option value="1">全新</option>
                        <option value="0.8">8成新</option>
                        <option value="0.5">5成新</option>
                        <option value="0.3">3成新</option>
                        <option value="0">破烂</option>
                    </select>
                    <br><br>
                    <div class="condition">
                        <a>Price</a><br>
                        <input type="text" placeholder="最低金额" name="price_low" required>
                        <input type="text" placeholder="最高金额" name="price_high" required>
                    </div>
                    <div class="infor">
                        <textarea name="memo" placeholder="请输入描述内容" required></textarea>
                    </div>
                    <br>
                    <div class="icon">
                        <img src="..${user.photo}">
                    </div>
                    <div class="text">
                        <a>${user.name}</a>
                        <p>@${user.account}</p>
                    </div>
                    <div class="add">
                        <button type="submit">发布求购</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
</body>
    <script type="text/javascript" src="../js/goods_add.js"></script>
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