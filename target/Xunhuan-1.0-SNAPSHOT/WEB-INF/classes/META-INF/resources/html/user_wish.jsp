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
    <title>我的求购</title>
    <link href="${path}/css/user_index.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>

<body>
<jsp:include page="header.jsp">
    <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
<div class="information">
    <div class="order"><button id="order" onclick="window.location='${path}MyOrderStart'" >My Order</button></div>
    <div class="profile"><button id="profile" onclick="window.location='${path}/html/user_index.jsp'">My Profile</button></div>
    <div class="wish"><button id="wish" onclick="window.location='${path}MyWishStart'" style="background-color: #333;">My Wish</button></div>
</div>
<c:if test="${!empty successMsg2 }">
    <div style="margin-top: -50px;margin-left: 210px;color: red;"><b>${successMsg2}</b></div>
</c:if>
    <div class="iswish">
        <div class="taborder">
            <button id="myneed">我需求的</button>
            <button id="myrespond">我回应的</button>
        </div>
        <div class="isalltable">
            <div class="wishfinish">
                <div id="wishlistall1" >
                    <button class="wundone">未完成</button>
                    <button class="wdone">已完成</button>
                    <!--未完成-->
                    <div id="worderlist1">
                        <c:forEach items="${wishList}" var="w" >
                                    <div class="orderlist wlist">
                                        <div class="goodsimg">
                                            <img src="${path}${w.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${w.thing_name}</h2>
                                            <button>成色:${w.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${w.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${w.name}</a>
                                                <p>@${w.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <b>${w.price_low}-${w.price_high}</b>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="dele">
                                                <input type="submit" value="Delete" onclick="window.location='${path}deleteneeds?_id=${w._id}'">
                                            </div>
                                            <div class="add">
                                                <input class="complete" type="submit" value="查看状态" onclick="window.location='${path}needs_startwishdetail?_id=${w._id}'" >
                                            </div>
                                        </div>
                                    </div>
                        </c:forEach>
                    </div>
                    <!--已完成-->
                    <div id="worderlist2" style="display:none;">
                        <c:forEach items="${donewishList}" var="dw" >
                                    <div class="orderlist wlist">
                                        <div class="goodsimg">
                                            <img src="${path}${dw.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${dw.thing_name}</h2>
                                            <button>成色:${dw.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${dw.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${dw.name}</a>
                                                <p>@${dw.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <b>${dw.price_low}-${dw.price_high}</b>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="add">
                                                <input class="complete" type="submit" value="订单详情" onclick="window.location='${path}needs_startwishdetail?_id=${dw._id}'">
                                            </div>
                                        </div>
                                    </div>
                        </c:forEach>
                    </div>
                </div>
                <!--我回应的-->
                <div id="wishlistall2" style="display: none;">
                    <button class="wiundone">未完成</button>
                    <button class="widone">已完成</button>
                    <!--未完成-->
                    <div id="wiorderlist1">
                        <c:forEach items="${responList}" var="r" >
                                    <div class="orderlist polist">
                                        <div class="goodsimg">
                                            <img src="${path}${r.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${r.thing_name}</h2>
                                            <button>成色:${r.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${r.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${r.name}</a>
                                                <p>@${r.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <b>${r.price_low}-${r.price_high}</b>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="dele">
                                                <input  type="submit" value="Cancel" onclick="window.location='${path}cancelwish?_id=${r._id}'">
                                            </div>
                                            <div class="add">
                                                <input class="complete" type="submit" value="查看状态" onclick="window.location='${path}needs_wishdetail?_id=${r._id}'">
                                            </div>
                                        </div>
                                    </div>
                        </c:forEach>
                    </div>
                    <!--已完成-->
                    <div id="wiorderlist2" style="display:none;">
                                    <c:forEach items="${doneresponList}" var="dr" >
                                    <div class="orderlist polist">
                                        <div class="goodsimg">
                                            <img src="${path}${dr.cover}">
                                        </div>
                                        <div class="goodsinfor">
                                            <h2>${dr.thing_name}</h2>
                                            <button>成色:${dr.new_old}</button>
                                            <br>
                                            <div class="sellericon">
                                                <img class="iconmessage" src="${path}${dr.photo}">
                                            </div>
                                            <div class="text">
                                                <a>${dr.name}</a>
                                                <p>@${dr.account}</p>
                                            </div>
                                            <div class="condition">
                                                <a>Price</a><br>
                                                <b>${dr.price_low}-${dr.price_high}</b>
                                            </div>
                                        </div>
                                        <div class="goodsbutton">
                                            <div class="add">
                                                <input class="complete" type="submit" value="订单详情" onclick="window.location='${path}needs_wishdetail?_id=${dr._id}'">
                                            </div>
                                        </div>
                                    </div>
                                    </c:forEach>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="usericon"><img src="${path}${user.photo}"></div>
</body>
<script type="text/javascript" src="${path}/js/user_index.js"></script>

</html>