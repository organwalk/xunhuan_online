package dao;

import model.User;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.MapListHandler;
import utils.DataSourceUtils;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class UserDao {

    //添加一位用户
    public void addUser(User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "insert into tuser(account,password,name,mobile,wechat,department,_class,photo) values(?,md5(?),?,?,?,?,?,?)";
        r.update(sql,user.getAccount(),user.getPassword(),user.getName(),user.getMobile(),user.getWechat(),user.getDepartment(),user.get_class(),user.getPhoto());
    }
    //查看账号是否存在
    public boolean isUserAccountExist(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select * from tuser where account = ?";
        User u = r.query(sql, new BeanHandler<User>(User.class),account);
        if(u==null) {
            return false;
        }else {
            return true;
        }
    }
    //登录--账号密码匹配,账号状态查询
    public User selectByAccountPassword(String account,String password) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select * from tuser where account=? and password=md5(?)";
        return r.query(sql, new BeanHandler<User>(User.class),account,password);
    }
    //更新一位用户信息
    public void updateUserInfor(User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql ="update tuser set name=?,mobile=?,wechat=?,department=?,_class=?,photo=? where account = ?";
        r.update(sql,user.getName(),user.getMobile(),user.getWechat(),user.getDepartment(),user.get_class(),user.getPhoto(),user.getAccount());
    }
    //更改密码
    public void updatePwd(User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql ="update tuser set password = md5(?) where account = ?";
        r.update(sql,user.getPassword(),user.getAccount());
    }
    //获得所有用户的信息
    public List<Map<String,Object>> selectAllUser() throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "SELECT tuser.*, COUNT(tuserreport.report) as report_count\n" +
                "FROM tuser\n" +
                "INNER JOIN tuserreport ON tuser._id = tuserreport.account\n" +
                "GROUP BY tuser._id\n";
        return r.query(sql, new MapListHandler());
    }
    //根据真实姓名获取用户信息
    public List<Map<String,Object>> selectAllUserByName(String name) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "SELECT tuser.*, COUNT(tuserreport.report) as report_count\n" +
                "FROM tuser " +
                "INNER JOIN tuserreport ON tuser._id = tuserreport.account\n" +
                "where name=? GROUP BY tuser._id\n";
        return r.query(sql, new MapListHandler(),name);
    }
    //警告用户
    public void warningUser(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql ="update tuser set state='警告' where _id = ?";
        r.update(sql,_id);
    }
    //封禁用户
    public void banUser(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql ="update tuser set state='封禁' where _id = ?";
        r.update(sql,_id);
    }
    //解封用户
    public void unbanUser(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql ="update tuser set state='正常' where _id = ?";
        r.update(sql,_id);
    }
    //根据账号获取用户交易信息
    public List<Map<String,Object>> selectUserTradeByAccount(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String userinfo = "select * from tuser where account = ?";
        return r.query(userinfo, new MapListHandler(), account);
    }
    public List<Map<String,Object>> selectincomeByAccount(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String income = "SELECT SUM(income) AS income\n" +
                "FROM (\n" +
                "    SELECT price AS income FROM tthings WHERE _owner = (SELECT _id FROM tuser WHERE account = ?) AND finished = 2\n" +
                "    UNION All\n" +
                "    SELECT price_low AS income FROM trequests WHERE _giver = (SELECT _id FROM tuser WHERE account = ?) AND finished = 2\n" +
                ") AS t";
        return r.query(income, new MapListHandler(), account,account);
    }
    public List<Map<String,Object>> selectpayByAccount(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String pay = "SELECT SUM(pay) AS pay\n" +
                "FROM (\n" +
                "    SELECT price AS pay FROM tthings WHERE _buyer = (SELECT _id FROM tuser WHERE account = ?) AND finished = 2\n" +
                "    UNION \n" +
                "    SELECT price_low AS pay FROM trequests WHERE _owner = (SELECT _id FROM tuser WHERE account = ?) AND finished = 2\n" +
                ") AS p";
        return r.query(pay, new MapListHandler(), account,account);
    }
    public List<Map<String,Object>> selectdishonestyByAccount(String account) throws SQLException {
        QueryRunner runner = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "SELECT CONCAT(ROUND(num_report / allsell* 100, 1), '%') as dishonest\n" +
                "FROM (\n" +
                "    SELECT COUNT(tuserreport.report) as num_report\n" +
                "    FROM tuserreport, tuser\n" +
                "    WHERE tuser.account = ? AND tuserreport.account = tuser._id\n" +
                ") as num_report_subquery, (\n" +
                "    SELECT COUNT(owner) as allsell\n" +
                "    FROM (\n" +
                "        SELECT tthings._owner as owner\n" +
                "        FROM tthings, tuser\n" +
                "        WHERE tuser.account = ? AND tthings._owner = tuser._id AND finished = 2\n" +
                "        UNION ALL\n" +
                "        SELECT trequests._owner as owner\n" +
                "        FROM trequests, tuser\n" +
                "        WHERE tuser.account = ? AND trequests._owner = tuser._id AND finished = 2\n" +
                "    ) as a\n" +
                ") as allsell_subquery";
        return runner.query(sql, new MapListHandler(), account, account, account);
    }
    public List<Map<String,Object>> selectmonthByAccount(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String month = "SELECT MONTH(finished_date) as month, COUNT(tthings._owner) as count\n" +
                "FROM tthings, tuser\n" +
                "WHERE tuser.account = ? AND tthings._owner = tuser._id AND finished = 2 AND finished_date BETWEEN '2022-06-01' AND '2022-12-31'\n" +
                "GROUP BY MONTH(finished_date)";
        return r.query(month, new MapListHandler(), account);
    }
    public List<Map<String,Object>> selectmonthByAccount2(String account) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String month = "SELECT MONTH(finished_date) as month, COUNT(trequests._owner) as count\n" +
                "FROM trequests, tuser\n" +
                "WHERE tuser.account = ? AND trequests._owner = tuser._id AND finished = 2 AND finished_date BETWEEN '2022-06-01' AND '2022-12-31'\n" +
                "GROUP BY MONTH(finished_date)";
        return r.query(month, new MapListHandler(), account);
    }
    //各学院注册用户图表
    public List<Map<String,Object>> departmentlist() throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="SELECT\n" +
                "    CASE department\n" +
                "        WHEN '信息技术学院' THEN '信息技术'\n" +
                "        WHEN '机电技术学院' THEN '机电技术'\n" +
                "        WHEN '财贸学院'THEN '财贸学院'\n" +
                "        WHEN '汽车技术学院' THEN '汽车技术'\n" +
                "        ELSE '艺术设计'\n" +
                "    END as xueyuan,\n" +
                "    COUNT(_id) as count\n" +
                "FROM tuser\n" +
                "GROUP BY xueyuan";
        return r.query(sql, new MapListHandler());
    }
    public List<Map<String,Object>> bandepartmentlist() throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="SELECT\n" +
                "    CASE department\n" +
                "        WHEN '信息技术学院' THEN '信息技术'\n" +
                "        WHEN '机电技术学院' THEN '机电技术'\n" +
                "        WHEN '财贸学院' THEN '财贸学院'\n" +
                "        WHEN '汽车技术学院' THEN '汽车技术'\n" +
                "        ELSE '艺术设计'\n" +
                "    END as xueyuan,\n" +
                "    SUM(CASE WHEN state = '封禁' THEN 1 ELSE 0 END) as count\n" +
                "FROM tuser\n" +
                "GROUP BY xueyuan\n";
        return r.query(sql, new MapListHandler());
    }
}
