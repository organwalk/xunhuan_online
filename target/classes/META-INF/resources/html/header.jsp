<%
  String path = request.getContextPath();
  String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
  request.setAttribute("path", basePath);
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
  <link href='${path}/css/header.css' rel='stylesheet' type='text/css' />
  <script type='text/javascript' src='${path}/js/jquery-3.6.1.js'></script>
</head>

<body>
<div class='header'>
  <div class='circular'><img src='${path}/image/圆环.png'></div>
  <div id='xunhuan'><a href='${path}index'>鲟环</a></div>
  <div class='user'>
    <div id='icon'><a href="${path}html/user_index.jsp"><img id='usericon' onerror="javascript:this.src='${path}/image/头像(白).png'" src='${path}${user.photo}'></a></div>
    <div id='login'><a id='username' href='${path}html/user_index.jsp'>${user.name}</a></div>
  </div>
  <div class='search'>
    <div class='imgsearch'><img class='searchicon' src='${path}/image/搜索.png'></div>
    <form action="http://localhost:8080/Xunhuan_war_exploded/searchgoods" method="get" id="sousuobiaodan">
    <input id="sousuokuang" class='searchinput' name='thing_name' type='text' placeholder='Search...'>
    <input id="tijiaosousuo" class='searchbuttom'  type="submit" value='Seach'>
    </form>
  </div>
</div>
  <div class='exit'>
    <div class='leftimg'>
      <img src='${path}/image/退出.png'>
    </div>
    <div class='righta'>
      <a href='${path}user_logout'>退出</a>
    </div>
  </div>
<div id="mask" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #333; z-index: 99; display: none;animation: mask-animation 1s linear forwards;"></div>
</body>
<script>

  $('#username').hover(function () {
    $('.exit').slideDown(500);
  });
  $('#usericon').hover(function () {
    $('.exit').slideUp(500);
  });
  $('#sousuokuang').click(function() {
      window.location.href = 'http://localhost:8080/Xunhuan_war_exploded/html/goods_search.html';
  });
  $('#sousuobiaodan').submit(function(event) {
    event.preventDefault();
  });
</script>
</html>
