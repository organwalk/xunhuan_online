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
    <title>鲟环--个人中心</title>
    <link href="${path}/css/user_index.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>

<body>
<jsp:include page="header.jsp">
    <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
<input type="hidden" name="account" value="${user.account}">
        <div class="information">
            <div class="order"><button id="order" onclick="window.location='${path}MyOrderStart'">My Order</button></div>
            <div class="profile"><button id="profile" onclick="window.location='${path}/html/user_index.jsp'" style="background-color: #333;">My Profile</button></div>
            <div class="wish"><button id="wish" onclick="window.location='${path}MyWishStart'">My Wish</button></div>
        </div>
    <div class="isprofile">
        <div class="card">
            <form action="${path}user_changeinfor" method="post" enctype="multipart/form-data">
                <div class="icon">
                    <img src="${path}${user.photo}" onclick="input_file()" id="img-preview">
                    <input type="file" name="photo" onchange="img_preview(this)" id="input-file"><br><br>
                    <img src="../image/上传图片2.png">
                    <h5>&nbsp Account:&nbsp@${user.account}</h5>
                    <h5 style="margin-left: 5px;margin-top: 10px;">状态:${user.state}</h5>
                </div><br><br><br>
                <div class="change">
                    <div class="tabtwo">
                        <div><button id="tabtwo1"></button></div>
                        <div><button id="tabtwo2"></button></div>
                    </div>
                    <div class="allchangeinfor">
                        <div class="divshort">
                            <div class="shorttextinput">
                                <label>真实姓名</label><br>
                                <input name="name" value="${user.name}" placeholder="请输入真实姓名">
                            </div>
                            <div class="shorttextinput">
                                <label>班级名称</label><br>
                                <input name="_class" value="${user._class}" placeholder="请输入班级名称">
                            </div>
                        </div>
                        <br><br>
                        <div class="textinput">
                            <label>学院名称</label><br>
                            <input name="department" value="${user.department}" placeholder="请输入您的学院名称">
                        </div>
                        <div class="textinput">
                            <label>微信号码</label><br>
                            <input name="wechat" value="${user.wechat}" placeholder="请输入您的微信号码">
                        </div>
                        <div class="textinput">
                            <label>手机号码</label><br>
                            <input name="mobile" value="${user.mobile}" placeholder="请输入您的手机号码">
                        </div><br>
                        <div class="submitbutton">
                            <input type="submit" id="changetext" value="提交修改">
                        </div>
                    </div>
                </div>
            </form>
            <div class="card2">
                <c:if test="${!empty failchangepwdMsg }">
                    <div class="failchangepwdmsg" style="color:red;margin-left:50px">${failchangepwdMsg }</div>
                </c:if>
                <form id="changepwdform" action="${path}user_changepwd" method="post">
                    <div class="textinput">
                        <label id="changela1">原密码</label><br>
                        <input id="changepwd1" type="password" name="password" placeholder="请输入您的原密码">
                    </div><br>
                    <div class="textinput">
                        <label id="changela2">新密码</label><br>
                        <input id="changepwd2" type="password" name="newPassword" placeholder="请输入您的新密码">
                    </div><br>
                    <div class="submitbutton">
                        <input id="changepwdsubmit" type="submit" value="提交修改">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="usericon"><img src="${path}${user.photo}"></div>
</body>
<script type="text/javascript" src="${path}js/user_index.js"></script>

</html>