package filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter("/*")
public class AuthFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request1 = (HttpServletRequest) request;
        HttpServletResponse response1 = (HttpServletResponse) response;
        HttpSession session = request1.getSession();
         Object user = session.getAttribute("user");

         String[] urls = {"/html/xunhuan.jsp","/html/header.jsp","/html/xunhuan_index.jsp","/html/goods_detail.jsp","/html/goods_search.html","/searchgoods","/image/","/goods_picture/","/picture/","/css/","/js/","/index","/goods_detail","/needs_detail","/user_login","/user_rigister"};
         String url = request1.getRequestURL().toString();
         for (String s : urls) {
            if (url.contains(s)) {
                chain.doFilter(request, response);
                return;
            }
        }
         if (user!=null){
             chain.doFilter(request, response);
         }else {
             response1.sendRedirect("/Xunhuan_war_exploded/html/xunhuan.jsp");
         }
    }
}
