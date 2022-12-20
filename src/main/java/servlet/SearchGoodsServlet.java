package servlet;

import com.google.gson.Gson;
import service.GoodsService;
import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

@WebServlet(name = "searchgoods",urlPatterns = "/searchgoods")
public class SearchGoodsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private GoodsService gService=new GoodsService();
    private RequestsService rService = new RequestsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        String thing_name = request.getParameter("thing_name");
        int type = Integer.parseInt(request.getParameter("type"));
        String decodedThingName = URLDecoder.decode(thing_name, "UTF-8");
        if(type==1){
        List<Map<String,Object>>searchMGoods=gService.searchMGoodsList(type,decodedThingName);
        Gson gson = new Gson();
        String jsonmgoods = gson.toJson(searchMGoods);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(jsonmgoods);}
        if(type==2){
            List<Map<String,Object>>searchNGoods=rService.searchRequestsList(type,decodedThingName);
            Gson gson = new Gson();
            String jsonmgoods = gson.toJson(searchNGoods);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonmgoods);}
    }
}
