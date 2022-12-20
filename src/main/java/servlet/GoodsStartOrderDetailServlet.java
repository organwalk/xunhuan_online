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

@WebServlet(name = "goods_startorderdetail",urlPatterns = "/goods_startorderdetail")
public class GoodsStartOrderDetailServlet extends HttpServlet {
    private GoodsService gService = new GoodsService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //订单--我发起的
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        List<Map<String,Object>> goodsstartorderdetail=gService.getstartGoodsOrderById(_id);
        request.setAttribute("goodsstartorderdetail", goodsstartorderdetail);
        if (!goodsstartorderdetail.isEmpty()) {
            int finished = (int) goodsstartorderdetail.get(0).get("finished");
            if (finished==1){
                request.setAttribute("waitMsg2", "等待确认");
                request.getRequestDispatcher("./html/goods_startorderdetail.jsp").forward(request, response);
            }
            else if(finished==2){
                request.setAttribute("overMsg", "交易完成");
                request.getRequestDispatcher("./html/goods_startorderdetail.jsp").forward(request, response);
            }
        }else{
            request.setAttribute("nullMsg", "暂无人购买，");
            request.getRequestDispatcher("./html/goods_startorderdetail.jsp").forward(request, response);
        }



    }
}
