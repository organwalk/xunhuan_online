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
    <title>订单详情</title>
    <link href="${path}/css/goods_detail.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>

<body>
<jsp:include page="header.jsp">
    <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
    <div class="goods_detail">
        <c:if test="${!empty nullMsg }">
            <div id="notmanbuy">${nullMsg}<a id="returnLink"><b id="jishuqi"></b>秒后自动返回</a></div>
        </c:if>
        <c:forEach items="${needsstartwishdetail}" var="g" begin="0" end="0">
        <div class="imgall">
            <div class="picture" id="picture1">
                <img src=".${g.cover}">
            </div>
            <div class="picture" id="picture2">
                <img src=".${g.photo1}">
            </div>
            <div class="picture" id="picture3">
                <img src=".${g.photo2}">
            </div>
        </div>
        <div class="informationall">
            <div class="indicator">
                <div><button id="indicator1"></button></div>
                <div><button id="indicator2"></button></div>
                <div><button id="indicator3"></button></div>
            </div>
            <div class="textall">
                <div class="glist_content">
                    <h2>${g.thing_name}</h2>
                    <button>成色:${g.new_old}</button>
                    <br><br>
                    <div class="date">
                        <a>Release Date</a>
                        <p>${g.publish_date}</p>
                    </div>
                    <div class="condition">
                        <a>Price</a><br>
                        <p>${g.price_low}-${g.price_high}</p>
                    </div>
                    <div class="infor">
                        <p>${g.memo}</p>
                    </div>
                    <div class="other" style="display: none;">
                        <div class="date" id="finish">
                            <a>Finish Date</a>
                            <p>--${g.finished_date}--</p>
                        </div>

                        <div class="report">
                            <select class="choosereport1">
                                <option disabled="disabled" selected="selected">举报用户</option>
                                <option value="1">质量问题</option>
                                <option value="2">无法联系</option>
                            </select>
                            <div class="reportsubmit1">
                                <input type="submit">
                            </div>
                        </div>
                        <div id="date2">
                            <div class="date2" style="float: left;">
                                <a>学院</a>
                                <p>${g.department}</p>
                            </div>
                            <div class="date2" style="float: left;margin-left: 50px;">
                                <a>班级</a>
                                <p>${g._class}</p>
                            </div>
                            <div class="date2" style="float: left;">
                                <a>手机号码</a>
                                <p>${g.mobile}</p>
                            </div>
                            <div class="date2"style="float: left;margin-left: 30px;">
                                <a>微信号</a>
                                <p>${g.wechat}</p>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="icon">
                        <img src=".${g.photo}">
                    </div>
                    <div class="text">
                        <a>${g.name}</a>
                        <p>@${g.account}</p>
                    </div>
                    <div class="icon" style="margin-top:10px;margin-left: 10px;" id="someinfor">
                        <img src="${path}/image/举报.png" style="width: 30px;height: 30px;">
                    </div>
                    <div class="add">
                        <c:if test="${!empty waitMsg2 }">
                            <form action="${path}confirmrequestneeds" method="Get">
                                <input type="hidden" name="_id" value="${g._id}">
                                <input type="hidden" name="finished_date" class="finished_date">
                                <button type="submit" onclick="submitForm()" id="confirm1">${waitMsg2}</button>
                            </form>
                        </c:if>
                        <c:if test="${!empty overMsg }">
                            <button id="confirm2">${overMsg}</button>
                        </c:if>
                    </div>
                </div>
            </div>
        </div>
        </c:forEach>
    </div>
</body>
<script type="text/javascript" src="${path}/js/goods_detail.js"></script>
<script>
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
</script>
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
        document.querySelector(".finished_date").value= getCurrentDate();
        var a = document.querySelector(".finished_date").value
        console.log(a)
    }
</script>
</html>