package servlet;

import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(name = "confirmrequestneeds",urlPatterns = "/confirmrequestneeds")
public class ConfirmrequestneedsServlet extends HttpServlet {
    protected RequestsService rService = new RequestsService();
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
        rService.userconfirmrequestneeds(2,finished_date,_id);
        request.getRequestDispatcher("./MyWishStart").forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
