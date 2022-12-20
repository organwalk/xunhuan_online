package servlet;

import com.google.gson.Gson;
import service.GoodsService;
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

@WebServlet(name = "showmoneytrade",urlPatterns = "/showmoneytrade")
public class ShowMoneyTradeListServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
    private GoodsService gService = new GoodsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            List<Map<String,Object>> tradeorderlist=gService.tradeorderlist();
            Gson gson = new Gson();
            String jsontradeorderlist = gson.toJson(tradeorderlist);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsontradeorderlist);
    }

}

