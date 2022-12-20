package servlet;

import service.GoodsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@WebServlet(name = "confirmbuygoods",urlPatterns = "/confirmbuygoods")
public class ConfirmbuygoodsServlet extends HttpServlet {
    protected GoodsService gService = new GoodsService();
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String rfinished_date = request.getParameter("finished_date");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date zfinished_date = null;
        try {
            zfinished_date = dateFormat.parse(rfinished_date);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        Date finished_date = new java.sql.Date(zfinished_date.getTime());
        Long _id = (long) Integer.parseInt(request.getParameter("_id"));
        gService.userconfirmbuygoods(2,finished_date,_id);
        request.getRequestDispatcher("./MyOrderStart").forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
