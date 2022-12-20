package dao;

import model.Goods;
import model.User;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;
import utils.DataSourceUtils;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class GoodsDao {

    //首页--现金交易推荐
    public List<Map<String,Object>> getGoodsList(int recommendType) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id\n" +
                "and g.finished = 0 and tuser._id=g._owner";
        return r.query(sql, new MapListHandler(),recommendType);
    }
    //调用商品详情
    public List<Map<String,Object>> getGoodsById(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, g.publish_date,t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where g._id=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id and tuser._id=g._owner\n";
        return r.query(sql, new MapListHandler(),_id);
    }
    //调用我购买的订单详情
    public List<Map<String,Object>> getGoodsOrderById(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select tuser.account, tuser.photo, tuser.name, tuser.mobile,tuser.wechat,tuser.department,tuser._class,g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, g.publish_date,g.finished,g.finished_date,t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where g._id=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id and tuser._id=g._owner\n";
        return r.query(sql, new MapListHandler(),_id);
    }
    //调用我发起的订单详情
    public List<Map<String,Object>> getstartGoodsOrderById(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select tuser.account, tuser.photo, tuser.name, tuser.mobile,tuser.wechat,tuser.department,tuser._class,g._id, g.thing_name,g.new_old, g.memo, g.price, g._buyer, g.publish_date,g.finished,g.finished_date,t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where g._id=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id and tuser._id=g._buyer";
        return r.query(sql, new MapListHandler(),_id);
    }
    //用户确认交易
    public void userconfirmbuygoods(int finished, Date finished_date,Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "update tthings set finished=?,finished_date=? where _id=?";
        r.update(sql,finished,finished_date,_id);
    }
    //用户购买商品至订单
    public void userbuygoods(int finished,Long _id,User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "update tthings set finished=?,_buyer=? where _id=?";
        r.update(sql,finished,user.get_id(),_id);
    }
    //用户取消购买商品的订单
    public void usercancelgoods(int finished,Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "update tthings set finished=?,_buyer=NULL where _id=?";
        r.update(sql,finished,_id);
    }
    //用户删除已发布的商品
    public void userdelegoods(Long _id,int recommendType) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "delete from tthings where _id = ?";
        String sql2 = "delete from tthingsphoto where _thing = ?";
        String sql3 = "delete from recommend where goods_id =? and type=?";
        r.update(sql3,_id,recommendType);
        r.update(sql2,_id);
        r.update(sql,_id);
    }
    //用户发布商品
    public void insert(Goods g) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "insert into tthings(_owner,thing_name,new_old,memo,price,type_id,publish_date) values(?,?,?,?,?,?,?)";
        String getid ="select max(_id) from tthings";
        String sql2 = "insert into tthingsphoto(_thing,cover,photo1,photo2) values(?,?,?,?)";
        String sql3 = "insert into recommend(type,goods_id) values(?,?)";
        r.update(sql,g.get_owner(),g.getThing_name(),g.getNew_old(),g.getMemo(),g.getPrice(),g.getType(),g.getPublish_date());
        r.update(sql2,r.query(getid,new ScalarHandler()),g.getCover(),g.getPhoto1(),g.getPhoto2());
        r.update(sql3,g.getType(),r.query(getid,new ScalarHandler()));
    }

    //我购买的--未完成
    public List<Map<String,Object>> getbuyList(int recommendType ,User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id\n" +
                "and tuser._id=g._owner and g.finished = 1 and g._buyer= ?";
        return r.query(sql, new MapListHandler(),recommendType,user.get_id());
    }
    //我购买的--已完成
    public List<Map<String,Object>> getdonebuyList(int recommendType ,User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id\n" +
                "and tuser._id=g._owner and g.finished = 2 and g._buyer= ?";
        return r.query(sql, new MapListHandler(),recommendType,user.get_id());
    }
    //我发起的--未完成
    public List<Map<String,Object>> getStartList(int recommendType ,User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id\n" +
                "and tuser._id=g._owner and g.finished <> 2 and tuser.account = ?";
        return r.query(sql, new MapListHandler(),recommendType,user.getAccount());
    }
    //我发起的--已完成
    public List<Map<String,Object>> getdoneStartList(int recommendType ,User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id\n" +
                "and tuser._id=g._owner and g.finished = 2 and tuser.account = ?";
        return r.query(sql, new MapListHandler(),recommendType,user.getAccount());
    }
    //出售--搜索结果
    public List<Map<String,Object>> searchMGoodsList(int recommendType,String thing_name) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price, g._buyer, g.type_id,t.name typename, p.cover, p.photo1, p.photo2 from tuser, recommend r, tthings g, type t, tthingsphoto p where type=?\n" +
                "and thing_name=? and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and p._thing = g._id\n" +
                "and g.finished = 0 and tuser._id=g._owner";
        return r.query(sql, new MapListHandler(),recommendType,thing_name);
    }
    //现金交易列表
    public List<Map<String,Object>> tradeorderlist() throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="SELECT g.*, u1.name as owner_name, u2.name as buyer_name\n" +
                "FROM tthings g\n" +
                "LEFT JOIN tuser u1 ON g._owner = u1._id\n" +
                "LEFT JOIN tuser u2 ON g._buyer = u2._id\n";
        return r.query(sql, new MapListHandler());
    }
}
