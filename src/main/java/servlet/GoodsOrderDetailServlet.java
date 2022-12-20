package servlet;

import service.GoodsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebServlet(name = "goods_orderdetail",urlPatterns = "/goods_orderdetail")
public class GoodsOrderDetailServlet extends HttpServlet {
    private GoodsService gService = new GoodsService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //订单--我购买的
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        List<Map<String,Object>> goodsorderdetail=gService.getGoodsOrderById(_id);
        request.setAttribute("goodsorderdetail", goodsorderdetail);
        int finished = (int) goodsorderdetail.get(0).get("finished");
        if(finished==1){
            request.setAttribute("waitMsg2", "交易确认");
            request.getRequestDispatcher("./html/goods_orderdetail.jsp").forward(request, response);
        }else if(finished==2){
            request.setAttribute("overMsg", "交易完成");
            request.getRequestDispatcher("./html/goods_orderdetail.jsp").forward(request, response);
        }



    }
}
