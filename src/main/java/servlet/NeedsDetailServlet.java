package servlet;

import model.User;
import service.GoodsService;
import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebServlet(name = "needs_detail",urlPatterns = "/needs_detail")
public class NeedsDetailServlet extends HttpServlet {
    private RequestsService rService = new RequestsService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User loginUser = (User) request.getSession().getAttribute("user");
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        String account = request.getParameter("account");
        List<Map<String,Object>> needsdetail=rService.getRequestsById(_id);
        request.setAttribute("needsdetail", needsdetail);
        if (loginUser==null){
            request.setAttribute("cantbuy", "登录后参与回应");
            request.getRequestDispatcher("./html/needs_detail.jsp").forward(request, response);
        }
        if (loginUser.getAccount().equals(account)){
            request.setAttribute("notbuy", "暂无人回应");
            request.getRequestDispatcher("./html/needs_detail.jsp").forward(request, response);
        }else{
            request.setAttribute("canbuy", "已登录");
            request.getRequestDispatcher("./html/needs_detail.jsp").forward(request, response);
        }

    }
}
