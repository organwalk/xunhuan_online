<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>搜索结果</title>
  <link href="../css/xunhuan_index.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="../js/jquery-3.6.1.js"></script>
  <script type="text/javascript" src="../js/headerhtml.js"></script>
</head>

<body>

  <div class="goods">

    <div>
      <h1>Search Results</h1>
    </div>

    <div class="tabbuy">
      <div class="trade" id="moneytrade">
        <img src="../image/现金.png">
        <button id="divmoneytrade">MoneyTrade</button>
      </div>
      <div class="trade" id="wantbuy">
        <img src="../image/清单.png">
        <button id="divwantbuy">WantBuy</button>
      </div>
    </div>

    <div class="goodslist" id="moneytradelist">
      <table>
        <tbody>
          <tr>
            <td>
              <div class="glist" id="glist">
                <img src="../goods_picture/3.jpg">
                <div class="glist_content">
                  <h2>读完的书刊</h2>
                  <button>8成新</button>
                  <br><br>
                  <div class="date">
                    <a>Release Date</a>
                    <p>2022.12.02</p>
                  </div>
                  <div class="condition">
                    <a>Price</a>
                    <p>300元</p>
                  </div>
                  <br><br><br>
                  <div class="icon">
                    <img src="../image/杏花.jpg">
                  </div>
                  <div class="text">
                    <a>陀思妥耶夫斯基</a>
                    <p>@tstyefu789</p>
                  </div>
                  <div class="add">
                    <button onclick="window.location='goods_detail.jsp'">Add Order</button>
                  </div>
                </div>
              </div>
            </td>
            <td><div class="glist">
              <img src="../goods_picture/2.jpg">
              <div class="glist_content">
                <h2>前年买的索尼头戴式耳机</h2>
                <button>5成新</button>
                <br><br>
                <div class="date">
                  <a>Release Date</a>
                  <p>2022.12.01</p>
                </div>
                <div class="condition">
                  <a>Price</a>
                  <p>800元</p>
                </div>
                <br><br><br>
                <div class="icon">
                  <img src="../image/杏花.jpg">
                </div>
                <div class="text">
                  <a>陀思妥耶夫斯基</a>
                  <p>@tstyefu789</p>
                </div>
                <div class="add">
                  <button onclick="window.location='goods_detail.jsp'">Add Order</button>
                </div>
              </div>
            </div></td>
            <td><div class="glist">
              <img src="../goods_picture/3.jpg">
              <div class="glist_content">
                <h2>读完的书刊</h2>
                <button>8成新</button>
                <br><br>
                <div class="date">
                  <a>Release Date</a>
                  <p>2022.12.02</p>
                </div>
                <div class="condition">
                  <a>Price</a>
                  <p>100元</p>
                </div>
                <br><br><br>
                <div class="icon">
                  <img src="../image/杏花.jpg">
                </div>
                <div class="text">
                  <a>陀思妥耶夫斯基</a>
                  <p>@tstyefu789</p>
                </div>
                <div class="add">
                  <button onclick="window.location='goods_detail.jsp'">Add Order</button>
                </div>
              </div>
            </div></td>
          </tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    </div>

    <div class="goodslist" id="wantbuylist">
      <table>
        <tbody>
          <tr>
            <td>
              <div class="glist" id="wlist">
                <img src="../goods_picture/3.jpg">
                <div class="glist_content">
                  <h2>读完的书刊</h2>
                  <button>8成新</button>
                  <br><br>
                  <div class="date">
                    <a>Release Date</a>
                    <p>2022.12.02</p>
                  </div>
                  <div class="condition">
                    <a>Price</a>
                    <p>300元</p>
                  </div>
                  <br><br><br>
                  <div class="icon">
                    <img src="../image/杏花.jpg">
                  </div>
                  <div class="text">
                    <a>陀思妥耶夫斯基</a>
                    <p>@tstyefu789</p>
                  </div>
                  <div class="add">
                    <button onclick="window.location='goods_detail.jsp'">Add Order</button>
                  </div>
                </div>
              </div>
            </td>
            <td><div class="glist">
              <img src="../goods_picture/2.jpg">
              <div class="glist_content">
                <h2>索尼的头戴式耳机</h2>
                <button>5成新</button>
                <br><br>
                <div class="date">
                  <a>Release Date</a>
                  <p>2022.12.01</p>
                </div>
                <div class="condition">
                  <a>Price</a>
                  <p>800元</p>
                </div>
                <br><br><br>
                <div class="icon">
                  <img src="../image/杏花.jpg">
                </div>
                <div class="text">
                  <a>陀思妥耶夫斯基</a>
                  <p>@tstyefu789</p>
                </div>
                <div class="add">
                  <button onclick="window.location='goods_detail.jsp'">Add Order</button>
                </div>
              </div>
            </div></td>
            <td><div class="glist">
              <img src="../goods_picture/3.jpg">
              <div class="glist_content">
                <h2>读完的书刊</h2>
                <button>8成新</button>
                <br><br>
                <div class="date">
                  <a>Release Date</a>
                  <p>2022.12.02</p>
                </div>
                <div class="condition">
                  <a>Price</a>
                  <p>100元</p>
                </div>
                <br><br><br>
                <div class="icon">
                  <img src="../image/杏花.jpg">
                </div>
                <div class="text">
                  <a>陀思妥耶夫斯基</a>
                  <p>@tstyefu789</p>
                </div>
                <div class="add">
                  <button onclick="window.location='goods_detail.jsp'">Add Order</button>
                </div>
              </div>
            </div></td>
          </tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    </div>
    
  </div>
</body>
<script type="text/javascript" src="../js/xunhuan_index.js"></script>

</html>