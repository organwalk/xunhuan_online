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
@WebServlet(name = "MyWishStartServlet",urlPatterns = "/MyWishStart")
public class MyWishStartServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private RequestsService rService = new RequestsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //用户求购
        User loginUser = (User) request.getSession().getAttribute("user");
        //我需求的--未完成
        List<Map<String,Object>> wishList=rService.getwishList(2,loginUser);
        request.setAttribute("wishList",wishList);
        //我需求的--已完成
        List<Map<String,Object>> donewishList=rService.getdonewishList(2,loginUser);
        request.setAttribute("donewishList",donewishList);
        //我回应的--未完成
        List<Map<String,Object>> responList=rService.getresponList(2,loginUser);
        request.setAttribute("responList",responList);
        //我回应的--已完成
        List<Map<String,Object>> doneresponList=rService.getdoneresponList(2,loginUser);
        request.setAttribute("doneresponList",doneresponList);

        request.getRequestDispatcher("./html/user_wish.jsp").forward(request,response);
    }
}
