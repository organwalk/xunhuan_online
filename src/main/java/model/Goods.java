package model;

import java.util.Date;

public class Goods {
	private Long _id;
	private Long _owner;//商品发布者
	private String thing_name;//商品名称
	private float new_old;//新旧程度，譬如0.8表示8成新
	private String memo;//商品描述
	private float price;//商品价格
	private Date publish_date;//商品发布日期
	private int finished;//是否已经交易，0：未交易，1：现金交易，2：物物交易
	private Date finished_date;//交易日期
	private Long _buyer;//商品购买者
	private String cover;//商品首图
	private String photo1;
	private String photo2;
	private String future;//保留
	private int type;

	private boolean isMoneyTrade;//现金交易
	private boolean isNeedsTrade;//商品求购
	

	public boolean getisMoneyTrade(){return isMoneyTrade;}
	public void setisMoneyTrade(boolean isMoneyTrade){this.isMoneyTrade = isMoneyTrade;}
	public boolean getisNeedsTrade(){return isNeedsTrade;}
	public void setisNeedsTrade(boolean isThingsTrade){this.isNeedsTrade = isThingsTrade;}

	@Override
	public String toString() {
		return "Goods [_id=" + _id + ", _owner=" + _owner + ", thing_name=" + thing_name + ", new_old=" + new_old + ", memo=" + memo
				+ ", price=" + price + ", publish_date=" + publish_date + ", finished=" + finished + ", finished_date=" + finished_date +
				", _buyer=" + _buyer + ", future=" + future + ", type=" + type + "]";
	}
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
	public float getPrice(){return price;}
	public void setPrice(float price){this.price = price;}
	public Date getPublish_date(){return publish_date;}
	public void setPublish_date(Date publish_date){this.publish_date = publish_date;}
	public int getFinished(){return finished;}
	public void setFinished(int finished){this.finished = finished;}
	public Date getFinished_date(){return finished_date;}
	public void setFinished_date(){this.finished_date = finished_date;}
	public Long get_buyer(){return _buyer;}
	public void set_buyer(Long _buyer){this._buyer = _buyer;}
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

	
	
}
