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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(name = "searchusertradebyaccount",urlPatterns = "/searchusertradebyaccount")
public class SearchUserTradeByAccountServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private UserService uService= new UserService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String account = request.getParameter("account");
        List<Map<String,Object>> searchusertrade=uService.selectUserTradeByAccount(account);
        List<Map<String,Object>> selectincome=uService.selectincomeByAccount(account);
        List<Map<String,Object>> selectpay=uService.selectpayByAccount(account);
        List<Map<String,Object>> selectdishonesty=uService.selectdishonestyByAccount(account);
        List<Map<String,Object>> selectmonth=uService.selectmonthByAccount(account);
        List<Map<String,Object>> selectmonth2=uService.selectmonthByAccount2(account);
        Gson gson = new Gson();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        Map<String, Object> combinedData = new HashMap<>();
        combinedData.put("searchusertrade", searchusertrade);
        combinedData.put("selectincome", selectincome);
        combinedData.put("selectpay", selectpay);
        combinedData.put("selectdishonesty", selectdishonesty);
        combinedData.put("selectmonth", selectmonth);
        combinedData.put("selectmonth2", selectmonth2);
        String combinedJson = gson.toJson(combinedData);
        response.getWriter().write(combinedJson);
    }
}
