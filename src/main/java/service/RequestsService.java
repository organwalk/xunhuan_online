package service;

import dao.RequestsDao;
import model.Goods;
import model.Requests;
import model.User;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class RequestsService {
    private RequestsDao rDao=new RequestsDao();
    //首页--求购商品推荐
    public List<Map<String,Object>> getRequestsList(int recommendType,int finished) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.getRequestsList(recommendType,finished);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //调用求购信息详情页
    public List<Map<String,Object>> getRequestsById(Long _id) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.getRequestsById(_id);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //用户回应求购信息
    public void userrespwish(int finished,Long _id,User user){
        try {
            rDao.userrespwish(finished,_id,user);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //用户取消已回应待确认的求购
    public void usercancelrespwish(int finished,Long _id){
        try {
            rDao.usercancelrespwish(finished,_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //用户删除已发布的求购信息
    public void userdeleneeds(Long _id,int recommendType){
        try {
            rDao.userdeleneeds(_id,recommendType);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //用户发布求购
    public void insert(Requests requests) {
        try {
            rDao.insert(requests);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //调用我需求的订单信息详情
    public List<Map<String,Object>> getstartNeedsWishById(Long _id) {
        List<Map<String,Object>> list=null;
        try {
            list = rDao.getstartNeedsWishById(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return list;
    }
    //调用我回应的订单信息详情
    public List<Map<String,Object>> getNeedsWishById(Long _id) {
        List<Map<String,Object>> list=null;
        try {
            list = rDao.getNeedsWishById(_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return list;
    }
    //用户回应求购
    public void userconfirmrequestneeds(int finished, Date finished_date, Long _id){
        try {
            rDao.userconfirmrequestneeds(finished,finished_date,_id);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    //我需求的--未完成
    public List<Map<String,Object>> getwishList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.getwishList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //我需求的--已完成
    public List<Map<String,Object>> getdonewishList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.getdonewishList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //我回应的--未完成
    public List<Map<String,Object>> getresponList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.getresponList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //我回应的--已完成
    public List<Map<String,Object>> getdoneresponList(int recommendType, User user) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.getdoneresponList(recommendType,user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //求购--搜索结果
    public List<Map<String,Object>> searchRequestsList(int recommendType,String thing_name) {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.searchRequestsList(recommendType,thing_name);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //求购信息列表
    public List<Map<String,Object>> requestsList() {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.requestsList();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //求购总量图表
    public List<Map<String,Object>> totaldemandList() {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.totaldemandList();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //求购总金额图表
    public List<Map<String,Object>> totaldemandpriceList() {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.totaldemandpriceList();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
    //各月成交平均价格
    public List<Map<String,Object>> averageneedprice() {
        List<Map<String,Object>> list=null;
        try {
            list=rDao.averageneedprice();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
