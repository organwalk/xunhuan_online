package servlet;

import model.User;
import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet(name = "addwish",urlPatterns = "/addwish")
public class AddWishServlet extends HttpServlet {

    protected RequestsService rService = new RequestsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        User loginUser = (User) request.getSession().getAttribute("user");
        rService.userrespwish(1,_id,loginUser);
        request.getRequestDispatcher("./MyWishStart").forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
