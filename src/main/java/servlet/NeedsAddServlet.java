package servlet;

import model.Requests;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import service.RequestsService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@WebServlet(name = "needs_add",urlPatterns = "/needs_add")
public class NeedsAddServlet extends HttpServlet {
    private RequestsService rService = new RequestsService();
    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        DiskFileItemFactory factory=new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> list = upload.parseRequest(request);
            Requests r = new Requests();
            for(FileItem item:list) {
                if(item.isFormField()) {
                    switch(item.getFieldName()) {
                        case "_owner":
                            r.set_owner(Long.parseLong(item.getString("utf-8")));
                            break;
                        case "thing_name":
                            r.setThing_name(item.getString("utf-8"));
                            break;
                        case "new_old":
                            r.setNew_old(Float.parseFloat(item.getString("utf-8")));
                            break;
                        case "memo":
                            r.setMemo(item.getString("utf-8"));
                            break;
                        case "price_low":
                            r.setPrice_low(Float.parseFloat(item.getString("utf-8")));
                            break;
                        case "price_high":
                            r.setPrice_high(Float.parseFloat(item.getString("utf-8")));
                            break;
                        case "publish_date":
                            String rpublish_date = item.getString("utf-8");
                            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                            Date zpublish_date = null;
                            try {
                                zpublish_date = dateFormat.parse(rpublish_date);
                            } catch (ParseException e) {
                                throw new RuntimeException(e);
                            }
                            Date publish_date = new java.sql.Date(zpublish_date.getTime());
                            r.setPublish_date(publish_date);
                            break;
                        case "typeid":
                            r.setType(Integer.parseInt(item.getString("utf-8")));
                            break;
                    }
                }else {
                    if(item.getInputStream().available()<=0)continue;
                    String fileName = item.getName();
                    fileName = fileName.substring(fileName.lastIndexOf("."));
                    fileName = "/"+new Date().getTime()+fileName;
                    String path = this.getServletContext().getRealPath("/goods_picture")+fileName;
                    InputStream in = item.getInputStream();
                    FileOutputStream out = new FileOutputStream(path);
                    byte[] buffer = new byte[1024];
                    int len=0;
                    while( (len=in.read(buffer))>0 ) {
                        out.write(buffer);
                    }
                    in.close();
                    out.close();
                    item.delete();
                    switch(item.getFieldName()) {
                        case "cover":
                            r.setCover("/goods_picture"+fileName);
                            break;
                        case "photo1":
                            r.setPhoto1("/goods_picture"+fileName);
                            break;
                        case "photo2":
                            r.setPhoto2("/goods_picture"+fileName);
                            break;
                    }
                }
            }
            rService.insert(r);
            response.sendRedirect("./MyWishStart");
        } catch (FileUploadException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
}
