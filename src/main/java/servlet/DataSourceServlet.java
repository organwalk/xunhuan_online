package servlet;

import com.google.gson.Gson;
import service.GoodsService;
import service.RequestsService;
import service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(name = "datasource",urlPatterns = "/datasource")
public class DataSourceServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private GoodsService gService = new GoodsService();
    private RequestsService rService = new RequestsService();
    private UserService uService = new UserService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Map<String,Object>> totalsales=gService.totalsaleslist();
        List<Map<String,Object>> totaldemand=rService.totaldemandList();
        List<Map<String,Object>> totalsalesprice=gService.totalsalespricelist();
        List<Map<String,Object>> totaldemandprice=rService.totaldemandpriceList();
        List<Map<String,Object>> newoldgoodslist=gService.newoldgoodsList();
        List<Map<String,Object>> departmentlist=uService.departmentlist();
        List<Map<String,Object>> bandepartmentlist=uService.bandepartmentlist();
        List<Map<String,Object>> averagesellingprice=gService.averagesellingprice();
        List<Map<String,Object>> averageneedprice=rService.averageneedprice();
        Gson gson = new Gson();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        Map<String, Object> combinedData = new HashMap<>();
        combinedData.put("totalsales", totalsales);
        combinedData.put("totaldemand", totaldemand);
        combinedData.put("totalsalesprice", totalsalesprice);
        combinedData.put("totaldemandprice",totaldemandprice);
        combinedData.put("newoldgoodslist",newoldgoodslist);
        combinedData.put("departmentlist",departmentlist);
        combinedData.put("bandepartmentlist",bandepartmentlist);
        combinedData.put("averagesellingprice",averagesellingprice);
        combinedData.put("averageneedprice",averageneedprice);
        String combinedJson = gson.toJson(combinedData);
        response.getWriter().write(combinedJson);
    }
}
