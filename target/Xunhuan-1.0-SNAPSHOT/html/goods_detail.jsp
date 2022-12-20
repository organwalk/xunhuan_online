<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    request.setAttribute("path", basePath);
%>
<%@ page language="java" contentType="text/html; charset=utf-8" isELIgnored="false"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>商品详情</title>
    <link href="${path}/css/goods_detail.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>

<body>
<jsp:include page="header.jsp">
    <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
    <div class="goods_detail">
<c:forEach items="${goodsdetail}" var="g" begin="0" end="0">
        <div class="imgall">
            <div class="picture" id="picture1" >
                <img src=".${g.cover}">
            </div>
            <div class="picture" id="picture2" >
                <img src=".${g.photo1}">
            </div>
            <div class="picture" id="picture3" >
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
                        <p>${g.price}</p>
                    </div>
                    <div class="infor">
                        <p>${g.memo}</p>
                    </div>
                    <br>
                    <div class="icon">
                        <img src=".${g.photo}">
                    </div>
                    <div class="text">
                        <a>${g.name}</a>
                        <p>@${g.account}</p>
                    </div>
                    <div class="add">
                        <c:if test="${!empty cantbuy }">
                            <button onclick="window.location='${path}html/xunhuan.jsp'">${cantbuy }</button>
                        </c:if>
                        <c:if test="${!empty notbuy }">
                            <button >${notbuy }</button>
                        </c:if>
                        <c:if test="${!empty canbuy }">
                        <button onclick="window.location='${path}addorder?_id=${g._id}'">Add Order</button>
                        </c:if>
                    </div>
                </div>
            </div>
        </div>
</c:forEach>
    </div>
</body>
<script type="text/javascript" src="${path}/js/goods_detail.js"></script>

</html>