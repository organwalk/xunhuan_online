package service;

import dao.UserDao;
import model.User;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class UserService {
    private UserDao uDao = new UserDao();
    //实现注册
    public boolean register(User user) {
        try {
            if(uDao.isUserAccountExist(user.getAccount())) {
                return false;
            }
            uDao.addUser(user);
            return true;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return false;
    }
    //实现登录
    public User login(String account,String password) {
        User user=null;
        try {
            user = uDao.selectByAccountPassword(account, password);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        if(user!=null) {
            return user;
        }
        return null;
    }
    //实现修改用户信息
    public void updateUserInfor(User user) {
        try {
            uDao.updateUserInfor(user);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //实现修改密码
    public void updatePwd(User user) {
        try {
            uDao.updatePwd(user);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //实现获得所有用户信息
    public List<Map<String,Object>> selectAllUser() {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectAllUser();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //实现根据真实姓名查找用户信息
    public List<Map<String,Object>> selectAllUserByName(String name) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectAllUserByName(name);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //实现警告用户
    public void warningUser(Long _id) {
        try {
            uDao.warningUser(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //实现封禁用户
    public void banUser(Long _id) {
        try {
            uDao.banUser(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //实现解封用户
    public void unbanUser(Long _id) {
        try {
            uDao.unbanUser(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //根据账号获取用户交易信息
    public List<Map<String,Object>> selectUserTradeByAccount(String account) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectUserTradeByAccount(account);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    public List<Map<String,Object>> selectincomeByAccount(String account) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectincomeByAccount(account);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    public List<Map<String,Object>> selectpayByAccount(String account) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectpayByAccount(account);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    public List<Map<String,Object>> selectdishonestyByAccount(String account) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectdishonestyByAccount(account);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    public List<Map<String,Object>> selectmonthByAccount(String account) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectmonthByAccount(account);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    public List<Map<String,Object>> selectmonthByAccount2(String account) {
        List<Map<String,Object>> list=null;
        try {
            list=uDao.selectmonthByAccount2(account);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
