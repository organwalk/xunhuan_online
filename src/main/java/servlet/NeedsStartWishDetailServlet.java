package servlet;

import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@WebServlet(name = "needs_startwishdetail",urlPatterns = "/needs_startwishdetail")
public class NeedsStartWishDetailServlet extends HttpServlet {
    private RequestsService rService = new RequestsService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //求购--我需求的
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        List<Map<String,Object>> needsstartwishdetail=rService.getstartNeedsWishById(_id);
        request.setAttribute("needsstartwishdetail", needsstartwishdetail);
        if (!needsstartwishdetail.isEmpty()) {
            int finished = (int) needsstartwishdetail.get(0).get("finished");
            if (finished==1){
                request.setAttribute("waitMsg2", "交易确认");
                request.getRequestDispatcher("./html/needs_startwishdetail.jsp").forward(request, response);
            }
            else if(finished==2){
                request.setAttribute("overMsg", "交易完成");
                request.getRequestDispatcher("./html/needs_startwishdetail.jsp").forward(request, response);
            }
        }else{
            request.setAttribute("nullMsg", "暂无人回应，");
            request.getRequestDispatcher("./html/needs_startwishdetail.jsp").forward(request, response);
        }



    }
}
