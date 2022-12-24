package service;

import dao.AdminDao;
import model.Admin;
import java.sql.SQLException;

public class AdminService {
    private AdminDao aDao = new AdminDao();
    //实现注册
    public boolean register(Admin admin) {
        try {
            if(aDao.isAdminAccountExist(admin.getAccount())) {
                return false;
            }
            aDao.addAdmin(admin);
            return true;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return false;
    }
    //实现登录
    public Admin login(String account,String password) {
        Admin admin=null;
        try {
            admin = aDao.selectByAccountPassword(account, password);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        if(admin!=null) {
            return admin;
        }
        return null;
    }
}
