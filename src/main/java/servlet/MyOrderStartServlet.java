package servlet;

import model.User;
import service.GoodsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;
@WebServlet(name = "MyOrderStartServlet",urlPatterns = "/MyOrderStart")
public class MyOrderStartServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private GoodsService gService=new GoodsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //用户订单
        User loginUser = (User) request.getSession().getAttribute("user");
        //我购买的--未完成
        List<Map<String,Object>> buyList=gService.getbuyList(1,loginUser);
        request.setAttribute("buyList",buyList);
        //我购买的--已完成
        List<Map<String,Object>> donebuyList=gService.getdonebuyList(1,loginUser);
        request.setAttribute("donebuyList",donebuyList);
        //我发起的--未完成
        List<Map<String,Object>> StartList=gService.getStartList(1,loginUser);
        request.setAttribute("StartList",StartList);
        //我发起的--已完成
        List<Map<String,Object>> doneStartList=gService.getdoneStartList(1,loginUser);
        request.setAttribute("doneStartList",doneStartList);

        request.getRequestDispatcher("./html/user_order.jsp").forward(request,response);
    }
}
