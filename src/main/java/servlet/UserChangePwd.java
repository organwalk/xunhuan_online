package servlet;

import model.User;
import service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@WebServlet(name = "user_changepwd",urlPatterns = "/user_changepwd")

public class UserChangePwd extends HttpServlet {

    private UserService uService = new UserService();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String password = request.getParameter("password");
        String newPwd = request.getParameter("newPassword");
        User u = (User) request.getSession().getAttribute("user");
        MessageDigest md5 = null;
        try {
            md5 = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        byte[] digest = md5.digest(password.getBytes(StandardCharsets.UTF_8));
        String passwordMd5 = DatatypeConverter.printHexBinary(digest);
        passwordMd5 = passwordMd5.toLowerCase();
        if(passwordMd5.equals(u.getPassword())) {
            u.setPassword(newPwd);
            uService.updatePwd(u);
            request.setAttribute("changepwdmsg", "密码修改成功，请重新登录");
            request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
        }else {
            request.setAttribute("failchangepwdMsg", "您的原密码输入有误");
            request.getRequestDispatcher("/html/user_index.jsp").forward(request, response);
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
