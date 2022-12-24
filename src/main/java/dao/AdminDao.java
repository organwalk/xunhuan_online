package dao;

import model.Admin;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import utils.DataSourceUtils;
import java.sql.SQLException;
public class AdminDao {

    //添加一位用户
    public void addAdmin(Admin admin) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "insert into tmanager(account,password,name,mobile,wechat,photo) values(?,md5(?),?,?,?,?)";
        r.update(sql,admin.getAccount(),admin.getPassword(),admin.getName(),admin.getMobile(),admin.getWechat(),admin.getPhoto());
    }
    //查看账号是否存在
    public boolean isAdminAccountExist(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select * from tmanager where account = ?";
        Admin u = r.query(sql, new BeanHandler<Admin>(Admin.class),account);
        if(u==null) {
            return false;
        }else {
            return true;
        }
    }
    //登录--账号密码匹配,账号状态查询
    public Admin selectByAccountPassword(String account,String password) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select * from tmanager where account=? and password=md5(?)";
        return r.query(sql, new BeanHandler<Admin>(Admin.class),account,password);
    }
}
