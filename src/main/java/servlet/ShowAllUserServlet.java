package servlet;

import com.google.gson.Gson;
import service.UserService;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebServlet(name = "showalluser",urlPatterns = "/showalluser")
public class ShowAllUserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
    private UserService uService=new UserService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            List<Map<String,Object>> alluser=uService.selectAllUser();
            Gson gson = new Gson();
            String jsonalluser = gson.toJson(alluser);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonalluser);
    }

}
