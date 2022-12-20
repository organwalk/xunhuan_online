package servlet;

import model.User;
import service.GoodsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "addorder",urlPatterns = "/addorder")
public class AddOrderServlet extends HttpServlet {
    protected GoodsService gService = new GoodsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        User loginUser = (User) request.getSession().getAttribute("user");
        gService.userbuygoods(1,_id,loginUser);
        request.getRequestDispatcher("./MyOrderStart").forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
