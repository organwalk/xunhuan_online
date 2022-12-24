package servlet;

import model.Admin;
import model.User;
import service.AdminService;
import service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "user_login",urlPatterns = "/user_login")
public class UserLoginServlet extends HttpServlet {
    private UserService uService = new UserService();
    private AdminService aService = new AdminService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String account = request.getParameter("account");
        String password = request.getParameter("password");
        String userType = request.getParameter("userType");
        if (userType.equals("user")) {
            User user = uService.login(account, password);
            if (user == null) {
                request.setAttribute("failMsg", "账号或密码有误");
                request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
            } else if (user.getState().equals("封禁")) {
                request.setAttribute("banMsg", "该账号已被封禁");
                request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
            }else {
                request.getSession().setAttribute("user", user);
                request.getRequestDispatcher("/html/user_index.jsp").forward(request, response);
            }
        }
        else if (userType.equals("admin")){
            Admin admin = aService.login(account, password);
            if (admin == null) {
                request.setAttribute("failMsg", "账号或密码有误");
                request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
            }else{
                request.getSession().setAttribute("admin", admin);
                response.sendRedirect("http://localhost:8080/Xunhuan_war_exploded/html/admin_workbench.html");
            }
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
