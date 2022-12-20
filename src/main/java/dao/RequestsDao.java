package dao;

import model.Requests;
import model.User;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;
import utils.DataSourceUtils;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class RequestsDao {

    //首页--求购商品推荐
    public List<Map<String,Object>> getRequestsList(int recommendType,int finished) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high,g._giver,g.cover,g.photo1,g.photo2, t.name typename from tuser, recommend r, trequests g, type t where type=? and finished=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished = 0 ";
        return r.query(sql, new MapListHandler(),recommendType,finished);
    }

    //调用求购信息详情页
    public List<Map<String,Object>> getRequestsById(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high,g.publish_date,g.finished_date,g._giver,g.cover,g.photo1,g.photo2, t.name typename from tuser, recommend r, trequests g, type t where g._id=? and finished=0\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished = 0 ";
        return r.query(sql, new MapListHandler(),_id);
    }

    //用户回应求购信息
    public void userrespwish(int finished,Long _id,User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "update trequests set finished=?,_giver=? where _id=?";
        r.update(sql,finished,user.get_id(),_id);
    }
    //用户取消已回应待确认的求购
    public void usercancelrespwish(int finished,Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "update trequests set finished=?,_giver=NULL where _id=?";
        r.update(sql,finished,_id);
    }
    //用户删除已发布的求购信息
    public void userdeleneeds(Long _id,int recommendType) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "delete from trequests where _id = ?";
        String sql2 = "delete from recommend where goods_id =? and type=?";
        r.update(sql2,_id,recommendType);
        r.update(sql,_id);
    }
    //用户发布求购
    public void insert(Requests n) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "insert into trequests(_owner,thing_name,new_old,memo,price_low,price_high,type_id,cover,photo1,photo2,publish_date) values(?,?,?,?,?,?,?,?,?,?,?)";
        String getid ="select max(_id) from trequests";
        String sql2= "insert into recommend(type,goods_id) values(?,?)";
        r.update(sql,n.get_owner(),n.getThing_name(),n.getNew_old(),n.getMemo(),n.getPrice_low(),n.getPrice_high(),n.getType(),n.getCover(),n.getPhoto1(),n.getPhoto2(),n.getPublish_date());
        r.update(sql2,n.getType(),r.query(getid,new ScalarHandler()));
    }
    //调用我需求的求购详情
    public List<Map<String,Object>> getstartNeedsWishById(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select tuser.account, tuser.photo, tuser.name, tuser.mobile,tuser.wechat,tuser.department,tuser._class,g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high,g._giver,g.cover, g.photo1, g.photo2,g.finished,g.publish_date,g.finished_date,t.name typename from tuser, trequests g, type t where g._id=?\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._giver\n";
        return r.query(sql, new MapListHandler(),_id);
    }
    //调用我回应的求购详情
    public List<Map<String,Object>> getNeedsWishById(Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "select tuser.account, tuser.photo, tuser.name, tuser.mobile,tuser.wechat,tuser.department,tuser._class,g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high,g._giver,g.cover, g.photo1, g.photo2,g.finished,g.publish_date,g.finished_date,t.name typename from tuser, trequests g, type t where g._id=?\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner\n";
        return r.query(sql, new MapListHandler(),_id);
    }
    //用户回应求购
    public void userconfirmrequestneeds(int finished, Date finished_date, Long _id) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql = "update trequests set finished=?,finished_date=? where _id=?";
        r.update(sql,finished,finished_date,_id);
    }
    //我需求的--未完成
    public List<Map<String,Object>> getwishList(int recommendType , User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high, g._giver, g.cover,g.photo1,g.photo2,t.name typename from tuser, recommend r, trequests g, type t where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished <> 2 and tuser.account = ?";
        return r.query(sql, new MapListHandler(),recommendType,user.getAccount());
    }
    //我需求的--已完成
    public List<Map<String,Object>> getdonewishList(int recommendType , User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high, g._giver, g.cover,g.photo1,g.photo2,t.name typename from tuser, recommend r, trequests g, type t where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished = 2 and tuser.account = ?";
        return r.query(sql, new MapListHandler(),recommendType,user.getAccount());
    }
    //我回应的--未完成
    public List<Map<String,Object>> getresponList(int recommendType , User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high, g._giver, g.cover,g.photo1,g.photo2,t.name typename from tuser, recommend r, trequests g, type t where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished = 1 and g._giver= ?";
        return r.query(sql, new MapListHandler(),recommendType,user.get_id());
    }
    //我回应的--已完成
    public List<Map<String,Object>> getdoneresponList(int recommendType , User user) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high, g._giver, g.cover,g.photo1,g.photo2,t.name typename from tuser, recommend r, trequests g, type t where type=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished = 2 and g._giver= ?";
        return r.query(sql, new MapListHandler(),recommendType,user.get_id());
    }
    //求购搜索结果
    public List<Map<String,Object>> searchRequestsList(int recommendType,String thing_name) throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="select tuser.account, tuser.photo, tuser.name, g._id, g._owner, g.thing_name,g.new_old, g.memo, g.price_low,g.price_high,g._giver,g.cover,g.photo1,g.photo2,g.type_id,t.name typename from tuser, recommend r, trequests g, type t where type=? and thing_name=?\n" +
                "and r.goods_id=g._id\n" +
                "and g.type_id=t.id\n" +
                "and tuser._id=g._owner and g.finished = 0 ";
        return r.query(sql, new MapListHandler(),recommendType,thing_name);
    }
    //求购信息列表
    public List<Map<String,Object>> requestsList() throws SQLException {
        QueryRunner r = new QueryRunner(DataSourceUtils.getDataSource());
        String sql="SELECT g.*, u1.name as owner_name, u2.name as giver_name\n" +
                "FROM trequests g\n" +
                "LEFT JOIN tuser u1 ON g._owner = u1._id\n" +
                "LEFT JOIN tuser u2 ON g._giver = u2._id\n";
        return r.query(sql, new MapListHandler());
    }
}
