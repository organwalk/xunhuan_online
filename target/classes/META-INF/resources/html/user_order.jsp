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
    <title>我的订单</title>
    <link href="${path}/css/user_index.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>

<body>
<jsp:include page="header.jsp">
    <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
    <div class="information">
        <div class="order"><button id="order" onclick="window.location='${path}MyOrderStart'" style="background-color: #333;">My Order</button></div>
        <div class="profile"><button id="profile" onclick="window.location='${path}/html/user_index.jsp'">My Profile</button></div>
        <div class="wish"><button id="wish" onclick="window.location='${path}MyWishStart'">My Wish</button></div>
    </div>
    <c:if test="${!empty successMsg }">
    <div style="margin-top: -50px;margin-left: 210px;color: red;"><b>${successMsg}</b></div>
    </c:if>
    <div class="isorder">
        <div class="taborder">
            <button id="mybuy">我购买的</button>
            <button id="mypush">我发起的</button>
        </div>
        <div class="isalltable">
            <div class="orderfinish">
                <div id="orderlistall1">
                    <button class="oundone">未完成</button>
                    <button class="odone">已完成</button>
                    <!--未完成-->
                    <div id="orderlist1">
                                <c:forEach items="${buyList}" var="b" >
                                    <div class="orderlist olist">
                                        <div class="goodsimg">
                                            <img src="${path}${b.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${b.thing_name}</h2>
                                            <button>成色:${b.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${b.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${b.name}</a>
                                                <p>@${b.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <p>${b.price}</p>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="dele">
                                                <input type="submit" value="Cancel" onclick="window.location='${path}cancelorder?_id=${b._id}'">
                                            </div>
                                            <div class="add">
                                                <input class="complete" type="submit" value="等待确认" onclick="window.location='${path}goods_orderdetail?_id=${b._id}'">
                                            </div>
                                        </div>
                                    </div>
                                </c:forEach>
                    </div>
                    <!--已完成-->
                    <div id="orderlist2" style="display:none;">
                        <c:forEach items="${donebuyList}" var="db" >
                                    <div class="orderlist olist">
                                        <div class="goodsimg">
                                            <img src="${path}${db.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${db.thing_name}</h2>
                                            <button>成色:${db.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${db.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${db.name}</a>
                                                <p>@${db.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <p>${db.price}</p>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="add">
                                                <input class="complete" type="submit" value="订单详情" onclick="window.location='${path}goods_orderdetail?_id=${db._id}'">
                                            </div>
                                        </div>
                                    </div>
                        </c:forEach>
                    </div>
                </div>
                <!--我发起的-->
                <div id="orderlistall2" style="display: none;">
                    <button class="pundone">未完成</button>
                    <button class="pdone">已完成</button>
                    <!--未完成-->
                    <div id="porderlist1">
                                <c:forEach items="${StartList}" var="s" >
                                    <div class="orderlist polist">
                                        <div class="goodsimg">
                                            <img src="${path}${s.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${s.thing_name}</h2>
                                            <button>成色:${s.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${s.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${s.name}</a>
                                                <p>@${s.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <p>${s.price}</p>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="dele">
                                                <input  type="submit" value="Delete" onclick="window.location='${path}deletegoods?_id=${s._id}'">
                                            </div>
                                            <div class="add">
                                                <input class="complete" type="submit" value="查看状态" onclick="window.location='${path}goods_startorderdetail?_id=${s._id}'">
                                            </div>
                                        </div>
                                    </div>
                                </c:forEach>
                    </div>
                    <!--已完成-->
                    <div id="porderlist2" style="display:none;">
                                    <c:forEach items="${doneStartList}" var="ds" >
                                    <div class="orderlist polist">
                                        <div class="goodsimg">
                                            <img src="${path}${ds.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${ds.thing_name}</h2>
                                            <button>成色:${ds.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${ds.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${ds.name}</a>
                                                <p>@${ds.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <p>${ds.price}</p>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="add">
                                                <input class="complete" type="submit" value="订单详情" onclick="window.location='${path}goods_startorderdetail?_id=${ds._id}'">
                                            </div>
                                        </div>
                                    </div>
                                    </c:forEach>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="usericon"><img src="${path}${user.photo}"></div>
</body>
<script type="text/javascript" src="${path}/js/user_index.js"></script>

</html>