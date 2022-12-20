<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户信息管理</title>
    <link href="../css/admin_usermanage.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../js/jquery-3.6.1.js"></script>
    <script type="text/javascript" src="../js/headerhtmladmin.js"></script>
</head>

<body>
    <div class="manage">
        <div class="managetab">
            <div class="usertab">
                <button>用户信息管理</button>
            </div>
            <div class="goodstab">
                <button>数据信息统计</button>
            </div>
        </div>
        <div class="usertable">
            <div class="usertab2">
                <button class="allusertab">全部用户</button>
                <button class="reportedtab">被举报用户</button>
                <button class="dishonest">不诚信用户</button>
            </div>
            <div class='searchuser'>
                <div class='imgsearch2'><img class='searchicon2' src='../image/搜索.png'></div>
                <input class='searchinput2' name='bookname' type='text' placeholder='Search...'>
                <input class='searchbuttom2' type='submit' value='Seach'>
            </div>
            <div class="alluser" id="alluser">
                <table>
                    <th>头像</th>
                    <th>账号</th>
                    <th>姓名</th>
                    <th>学院 / 班级</th>
                    <th>手机</th>
                    <th>微信</th>
                    <th>注册</th>
                    <th>状态</th>
                    <th>操作</th>
                    <tr>
                        <td class="ttd"><img class="usericon" src="../image/杏花.jpg"></td>
                        <td>@tstyefu789</td>
                        <td>陀思妥耶夫斯基</td>
                        <td>信息技术学院<br>软件213</td>
                        <td>18333333333</td>
                        <td>tstyefu789</td>
                        <td>2022-12-04 19:30:09</td>
                        <td>正常</td>
                        <td class="wtd">
                            <button class="warning">警告</button>
                            <br>
                            <button class="ban">封禁</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="ttd"><img class="usericon" src="../image/松路.jpg"></td>
                        <td>@ketsar456</td>
                        <td>科塔萨尔</td>
                        <td>信息技术学院<br>软件213</td>
                        <td>19355555555</td>
                        <td>ketsar456</td>
                        <td>2022-12-04 19:30:09</td>
                        <td>封禁</td>
                        <td class="wtd">
                            <button class="unban">解封</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="ttd"><img class="usericon" src="../image/banner1.jpg"></td>
                        <td>@nabkef123</td>
                        <td>纳博科夫</td>
                        <td>信息技术学院<br>软件213</td>
                        <td>17355555555</td>
                        <td>nabkef123</td>
                        <td>2022-12-04 19:30:09</td>
                        <td>被举报2次<br>已警告1次</td>
                        <td class="wtd">
                            <button class="warning">警告</button>
                            <br>
                            <button class="ban">封禁</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="alluser" id="reported">
                <table>
                    <th>头像</th>
                    <th>账号</th>
                    <th>姓名</th>
                    <th>学院 / 班级</th>
                    <th>手机</th>
                    <th>微信</th>
                    <th>注册</th>
                    <th>状态</th>
                    <th>操作</th>
                    <tr>
                        <td class="ttd"><img class="usericon" src="../image/banner1.jpg"></td>
                        <td>@nabkef123</td>
                        <td>纳博科夫</td>
                        <td>信息技术学院<br>软件213</td>
                        <td>17355555555</td>
                        <td>nabkef123</td>
                        <td>2022-12-04 19:30:09</td>
                        <td>被举报2次<br>已警告1次</td>
                        <td class="wtd">
                            <button class="warning">警告</button>
                            <br>
                            <button class="ban">封禁</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="alluser" id="dishonest">
                <table>
                    <th>头像</th>
                    <th>账号</th>
                    <th>姓名</th>
                    <th>学院 / 班级</th>
                    <th>手机</th>
                    <th>微信</th>
                    <th>注册</th>
                    <th>状态</th>
                    <th>操作</th>
                    <tr>
                        <td class="ttd"><img class="usericon" src="../image/松路.jpg"></td>
                        <td>@ketsar456</td>
                        <td>科塔萨尔</td>
                        <td>信息技术学院<br>软件213</td>
                        <td>19355555555</td>
                        <td>ketsar456</td>
                        <td>2022-12-04 19:30:09</td>
                        <td>封禁</td>
                        <td class="wtd">
                            <button class="unban">解封</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" src="../js/admin_usermanage.js"></script>

</html>