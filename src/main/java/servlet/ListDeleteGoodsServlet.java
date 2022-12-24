package servlet;

import service.GoodsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "listdeletegoods",urlPatterns = "/listdeletegoods")
public class ListDeleteGoodsServlet extends HttpServlet {
    protected GoodsService gService = new GoodsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        gService.userdelegoods(_id,1);
        PrintWriter out = response.getWriter();
        out.println("响应内容");
        out.close();
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
