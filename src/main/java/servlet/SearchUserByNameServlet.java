package servlet;

import com.google.gson.Gson;
import service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;
@WebServlet(name = "searchuserbyname",urlPatterns = "/searchuserbyname")
public class SearchUserByNameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private UserService uService= new UserService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        String name = request.getParameter("name");
        String decodedName = URLDecoder.decode(name, "UTF-8");
        List<Map<String,Object>> searchuserbyname=uService.selectAllUserByName(decodedName);
        Gson gson = new Gson();
        String jsonnusers = gson.toJson(searchuserbyname);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(jsonnusers);
    }
}
