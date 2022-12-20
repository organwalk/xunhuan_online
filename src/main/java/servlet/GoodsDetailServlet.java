package servlet;

import model.Goods;
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

@WebServlet(name = "goods_detail",urlPatterns = "/goods_detail")
public class GoodsDetailServlet extends HttpServlet {

    private GoodsService gService = new GoodsService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User loginUser = (User) request.getSession().getAttribute("user");
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        String account = request.getParameter("account");
        List<Map<String,Object>> goodsdetail=gService.getGoodsById(_id);
        request.setAttribute("goodsdetail", goodsdetail);
        if (loginUser==null){
            request.setAttribute("cantbuy", "登录后加入订单");
            request.getRequestDispatcher("./html/goods_detail.jsp").forward(request, response);
        }
        if (loginUser.getAccount().equals(account)){
            request.setAttribute("notbuy", "暂无人购买");
            request.getRequestDispatcher("./html/goods_detail.jsp").forward(request, response);
        }else{
            request.setAttribute("canbuy", "已登录");
            request.getRequestDispatcher("./html/goods_detail.jsp").forward(request, response);
        }

    }
}
