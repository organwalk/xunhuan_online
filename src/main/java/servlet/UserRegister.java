package servlet;

import model.User;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import service.UserService;

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

@WebServlet(name = "user_register",urlPatterns = "/user_rigister")
public class UserRegister extends HttpServlet {
    private UserService uService = new UserService();
    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        DiskFileItemFactory factory=new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> list = upload.parseRequest(request);
            User user = new User();
            for(FileItem item:list) {
                if(item.isFormField()) {
                    switch(item.getFieldName()) {
                        case "register_date":
                            String rregister_date = item.getString("utf-8");
                            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                            Date zregister_date = null;
                            try {
                                zregister_date = dateFormat.parse(rregister_date);
                            } catch (ParseException e) {
                                throw new RuntimeException(e);
                            }
                            Date register_date = new java.sql.Date(zregister_date.getTime());
                            user.setRegister_date(register_date);
                            break;
                        case "account":
                            user.setAccount(item.getString("utf-8"));
                            break;
                        case "password":
                            user.setPassword(item.getString("utf-8"));
                            break;
                        case "name":
                            user.setName(item.getString("utf-8"));
                            break;
                        case "mobile":
                            user.setMobile(item.getString("utf-8"));
                            break;
                        case "wechat":
                            user.setWechat(item.getString("utf-8"));
                            break;
                        case "department":
                            user.setDepartment(item.getString("utf-8"));
                            break;
                        case "_class":
                            user.set_class(item.getString("utf-8"));
                            break;
                    }
                }else {
                    if(item.getInputStream().available()<=0)continue;
                    String fileName = item.getName();
                    fileName = fileName.substring(fileName.lastIndexOf("."));
                    fileName = "/"+new Date().getTime()+fileName;
                    String path = this.getServletContext().getRealPath("/picture")+fileName;
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
                        case "photo":
                            user.setPhoto("/picture"+fileName);
                            break;
                    }
                }
            }
            uService.register(user);
            request.setAttribute("registersuccess", "注册成功，请登录");
            request.getRequestDispatcher("/html/xunhuan.jsp").forward(request, response);
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
