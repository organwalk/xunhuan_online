<%--
  Created by IntelliJ IDEA.
  User: haruki
  Date: 2022/12/29
  Time: 08:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>九九乘法表</title>
</head>
<body>
<table border="1">
    <c:forEach var="i" begin="1" end="9">
        <tr>
            <c:forEach var="j" begin="1" end="9">
                <td>${i} * ${j} = ${i * j}</td>
            </c:forEach>
        </tr>
    </c:forEach>
</table>
</body>
</html>

