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

@WebServlet(name = "IndexServlet",urlPatterns = "/index")
public class IndexServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private GoodsService gService=new GoodsService();
    private RequestsService rService = new RequestsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Map<String,Object>>MoneyTrade=gService.getGoodsList(1);
        request.setAttribute("MoneyTrade",MoneyTrade);
        List<Map<String,Object>>NeedsTrade=rService.getRequestsList(2,0);
        request.setAttribute("NeedsTrade",NeedsTrade);

        User loginUser = (User) request.getSession().getAttribute("user");
        if(loginUser!=null){
            request.setAttribute("userlogin1","获得发布商品权限");
            request.setAttribute("userlogin2","获得发布求购权限");
        }
        request.getRequestDispatcher("./html/xunhuan_index.jsp").forward(request,response);
    }
}
