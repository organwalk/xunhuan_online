package service;

import dao.GoodsDao;
import model.Goods;
import model.User;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class GoodsService {
    private GoodsDao gDao=new GoodsDao();

    //主页推荐
    public List<Map<String,Object>> getGoodsList(int recommendType) {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.getGoodsList(recommendType);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //调用商品信息详情
    public List<Map<String,Object>> getGoodsById(Long _id) {
        List<Map<String,Object>> list=null;
        try {
            list = gDao.getGoodsById(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return list;
    }
    //用户购买商品至订单
    public void userbuygoods(int finished,Long _id,User user){
        try {
            gDao.userbuygoods(finished,_id,user);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //用户取消购买商品的订单
    public void usercancelgoods(int finished,Long _id){
        try {
            gDao.usercancelgoods(finished,_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //用户删除已发布的商品
    public void userdelegoods(Long _id,int recommendType){
        try {
            gDao.userdelegoods(_id,recommendType);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //调用我购买的订单信息详情
    public List<Map<String,Object>> getGoodsOrderById(Long _id) {
        List<Map<String,Object>> list=null;
        try {
            list = gDao.getGoodsOrderById(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return list;
    }
    //用户确认交易
    public void userconfirmbuygoods(int finished, Date finished_date, Long _id){
        try {
            gDao.userconfirmbuygoods(finished,finished_date,_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //调用我发起的订单信息详情
    public List<Map<String,Object>> getstartGoodsOrderById(Long _id) {
        List<Map<String,Object>> list=null;
        try {
            list = gDao.getstartGoodsOrderById(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return list;
    }
    //我购买的--未完成
    public List<Map<String,Object>> getbuyList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.getbuyList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //我购买的--已完成
    public List<Map<String,Object>> getdonebuyList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.getdonebuyList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //我发起的--未完成
    public List<Map<String,Object>> getStartList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.getStartList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //我发起的--已完成
    public List<Map<String,Object>> getdoneStartList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.getdoneStartList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //发布商品
    public void insert(Goods goods) {
        try {
            gDao.insert(goods);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //出售--搜索结果
    public List<Map<String,Object>> searchMGoodsList(int recommendType,String thing_name) {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.searchMGoodsList(recommendType,thing_name);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //现金交易列表
    public List<Map<String,Object>> tradeorderlist() {
        List<Map<String,Object>> list=null;
        try {
            list=gDao.tradeorderlist();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
