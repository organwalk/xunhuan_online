package servlet;

import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "listdeleteneeds",urlPatterns = "/listdeleteneeds")
public class ListDeleteNeedsServlet extends HttpServlet {
    protected RequestsService rService = new RequestsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        rService.userdeleneeds(_id,2);
        PrintWriter out = response.getWriter();
        out.println("响应内容");
        out.close();
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
