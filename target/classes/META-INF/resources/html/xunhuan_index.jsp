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
  <title>鲟环</title>
  <link href="${path}/css/xunhuan_index.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="${path}/js/jquery-3.6.1.js"></script>
</head>

<body>
<jsp:include page="header.jsp">
  <jsp:param name="flag" value="9"></jsp:param>
</jsp:include>
  <div id="banner">
    <a class="item" href="#"><img src="${path}/image/banner1.jpg" /></a>
    <a class="item" href="#"><img src="${path}/image/banner2.jpg" /></a>
  </div>

  <div class="goods">

    <div>
      <h1>Pick Your Favorite Products!</h1>
    </div>

    <div class="tabbuy">
      <div class="trade" id="moneytrade">
        <img src="${path}/image/现金.png">
        <button id="divmoneytrade">MoneyTrade</button>
      </div>
      <div class="trade" id="wantbuy">
        <img src="${path}/image/清单.png">
        <button id="divwantbuy">WantBuy</button>
      </div>
    </div>

    <div class="goodslist" id="moneytradelist">
        <c:forEach items="${MoneyTrade}" var="g" begin="0" end="8">
              <div class="glist" id="glist">
                <img src=".${g.cover}">
                <div class="glist_content">
                  <h2>${g.thing_name}</h2>
                  <button>成色:${g.new_old}</button>
                  <br><br>
                  <div class="date">
                    <a>MoneyTrade</a>
                  </div>
                  <div class="condition">
                    <a>Price</a>
                    <p>${g.price}</p>
                  </div>
                  <br><br><br>
                  <div class="icon">
                    <img src=".${g.photo}">
                  </div>
                  <div class="text">
                    <a>${g.name}</a>
                    <p>@${g.account}</p>
                  </div>
                  <div class="add">
                    <button onclick="window.location='${path}goods_detail?_id=${g._id}&&account=${g.account}'">View Details</button>
                  </div>
                </div>
              </div>
        </c:forEach>
    </div>

    <div class="goodslist" id="wantbuylist">
      <c:forEach items="${NeedsTrade}" var="r" begin="0" end="8">
        <div class="glist" id="wlist">
          <img src=".${r.cover}">
          <div class="glist_content">
            <h2>${r.thing_name}</h2>
            <button>成色:${r.new_old}</button>
            <br><br>
            <div class="date">
              <a>NeedsTrade</a>
            </div>
            <div class="condition">
              <a>Price</a>
              <p>${r.price_low}-${r.price_high}</p>
            </div>
            <br><br><br>
            <div class="icon">
              <img src=".${r.photo}">
            </div>
            <div class="text">
              <a>${r.name}</a>
              <p>@${r.account}</p>
            </div>
            <div class="add">
              <button onclick="window.location='${path}needs_detail?_id=${r._id}&&account=${r.account}'">View Details</button>
            </div>
          </div>
        </div>
      </c:forEach>
    </div>
    <c:if test="${!empty userlogin1 }">
      <div class="float-button">
        <button onclick="window.location='${path}html/goods_add.jsp'"><img src="${path}/image/添加.png"></button>
      </div>
    </c:if>
    <c:if test="${!empty userlogin2 }">
      <div class="float-button2">
        <button onclick="window.location='${path}html/goods_need.jsp'"><img src="${path}/image/求购.png"></button>
      </div>
    </c:if>
  </div>
</body>
<script type="text/javascript" src="${path}/js/xunhuan_index.js"></script>

</html>