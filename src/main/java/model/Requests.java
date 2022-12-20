package model;

import java.util.Date;

public class Requests {
    private Long _id;
    private Long _owner;//商品发布者
    private String thing_name;//商品名称
    private float new_old;//新旧程度，譬如0.8表示8成新
    private String memo;//商品描述
    private float price_low;//商品最低价格
    private float price_high;//商品最高价格
    private Date publish_date;//商品发布日期
    private int finished;//是否已经交易，0：未交易，1：已下订单，2：确认交易
    private Date finished_date;//交易日期
    private Long _giver;
    private String cover;//商品首图
    private String photo1;
    private String photo2;
    private String future;//保留
    private int type;


    public Long get_id(){return _id;}
    public void set_id(Long _id){this._id = _id;}
    public Long get_owner(){return _owner;}
    public void set_owner(long _owner){this._owner = _owner;}
    public String getThing_name(){return thing_name;}
    public void setThing_name(String thing_name){this.thing_name = thing_name;}
    public float getNew_old(){return new_old;}
    public void setNew_old(float new_old){this.new_old = new_old;}
    public String getMemo(){return memo;}
    public void setMemo(String memo){this.memo = memo;}
    public float getPrice_low(){return price_low;}
    public void setPrice_low(float price_low){this.price_low = price_low;}
    public float getPrice_high(){return price_high;}
    public void setPrice_high(float price_high){this.price_high = price_high;}
    public Date getPublish_date(){return publish_date;}
    public void setPublish_date(Date publish_date){this.publish_date = publish_date;}
    public int getFinished(){return finished;}
    public void setFinished(int finished){this.finished = finished;}
    public Date getFinished_date(){return finished_date;}
    public void setFinished_date(){this.finished_date = finished_date;}
    public Long get_giver(){return _giver;}
    public void set_giver(Long _giver){this._giver = _giver;}
    public String getCover(){return cover;}
    public void setCover(String cover){this.cover = cover;}
    public String getPhoto1(){return photo1;}
    public void setPhoto1(String photo1){this.photo1 = photo1;}
    public String getPhoto2(){return photo2;}
    public void setPhoto2(String photo2){this.photo2 = photo2;}
    public String getFuture(){return future;}
    public void setFuture(String future){this.future = future;}
    public int getType(){return type;}
    public void setType(int type){this.type = type;}

    public Requests() {
        super();
    }
    public Requests(Long _id, Long _owner, String thing_name, float new_old, String memo, float price_low, float price_high,Date publish_date, int finished,
                 Date finished_date,Long _giver,String future,int type) {
        super();
        this._id = _id;
        this._owner = _owner;
        this.thing_name = thing_name;
        this.new_old = new_old;
        this.memo = memo;
        this.price_low = price_low;
        this.price_high = price_high;
        this.publish_date = publish_date;
        this.finished = finished;
        this.finished_date = finished_date;
        this._giver =_giver;
        this.future = future;
        this.type = type;
    }
}
