<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据信息统计</title>
    <link href="../css/admin_goodsmanage.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../js/echarts.js"></script>
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
            <div class="goodstab2">
                <button class="usertran">用户交易统计</button>
                <button class="selltab">售卖信息统计</button>
                <button class="dishonest">需求信息统计</button>
                <button class="transaction">交易信息统计</button>
                <button class="registered">注册用户统计</button>
            </div>
            <div class="usert" id="usert">
                <div class="usertlist">
                    <div class="searchusert">
                        <div class='searcht'>
                            <div class='imgsearcht'><img class='searchicont' src='../image/搜索.png'></div>
                                <input class='searchinputt' name='bookname' type='text' placeholder='Search...'>
                                <input class='searchbuttomt' type='submit' value='Seach'>
                        </div>
                    </div>
                    <div class="usertinfor">
                        <div class="usertinfor-left">
                            <div class="usertsell" id="usertsell"></div>
                            <div class="threebox">
                                <div class="totalconsu">
                                    <h2>共计消费</h2>
                                    <h3>500元</h3>
                                </div>
                                <div class="totalincome">
                                    <h2>共计收入</h2>
                                    <h3>300元</h3>
                                </div>
                                <div class="defaultrate">
                                    <h2>违约率</h2>
                                    <h3>30%</h3>
                                </div>
                            </div>
                        </div>
                        <div class="usertinfor-right">
                            <div class="up-usericon">
                                <img src="../image/杏花.jpg">
                                <h3>陀思妥耶夫斯基</h3>
                                <h4>@tstyefu789</h4>
                                <div class="down-report">
                                    <h3>举报记录</h3>
                                    <table>
                                        <th>举报人</th>
                                        <th>理由</th>
                                        <tr>
                                            <td>@ketsar456</td>
                                            <td>无法联系</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="selllist" id="selllist" style="display: none;">
                <div class="listtab1">
                    <button id="totalsales">出售总量</button>
                    <button id="pricedata">价格数据</button>
                    <button id="growthtrend">增长趋势</button>
                </div>
                <div class="sellchart" id="totalsaleslist"></div>
                <div class="sellchart2" id="pricedatalist1" style="display: none;"></div>
                <div class="sellchart21" id="pricedatalist2" style="display: none;"></div>
                <div class="sellchart3" id="growthtrendlist" style="display: none;"></div>
            </div>
            <div class="dishon" id="dishon" style="display: none;">
                <div class="dishonchart2" id="college"></div>
                <div class="dishonchart" id="newoldlist"></div>
            </div>
            <div class="transa" id="transa" style="display: none;">
                <div class="transachart2" id="transdefault"></div>
                <div class="transachart" id="transasuccess"></div>
            </div>
            <div class="regist" id="regist" style="display: none;">
                <div class="registchart" id="registsum"></div>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" src="../js/admin_goodsmanage.js"></script>

</html>