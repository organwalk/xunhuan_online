package servlet;

import model.User;
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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String account = request.getParameter("account");
        String password = request.getParameter("password");
        User user = uService.login(account, password);
        if(user==null) {
            request.setAttribute("failMsg", "账号或密码有误");
            request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
        }
        else if (user.getState().equals("封禁")){
            request.setAttribute("banMsg", "该账号已被封禁");
            request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
        }else if (user.getAccount().equals("admin")){
            request.getSession().setAttribute("user", user);
           response.sendRedirect("http://localhost:8080/Xunhuan_war_exploded/html/admin_workbench.html");
        }
        else {
            request.getSession().setAttribute("user", user);
            request.getRequestDispatcher("/html/user_index.jsp").forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
