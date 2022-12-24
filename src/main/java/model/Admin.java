package model;

import java.util.Date;

public class Admin {
    private Long _id;
    private String account;//账号
    private String password;//密码
    private String name;//真实姓名
    private String mobile;//手机号码
    private String wechat;//微信
    private String photo;//头像
    private Date create_date;
    private String state;//用户状态 正常 警告 封禁
    private String future;//保留

    public Long get_id(){return _id;}
    public void set_id(Long _id){this._id = _id;}
    public String getAccount(){return account;}
    public void setAccount(String account){this.account = account;}
    public String getPassword(){return password;}
    public void setPassword(String password){this.password = password;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}
    public String getMobile(){return mobile;}
    public void setMobile(String mobile){this.mobile = mobile;}
    public String getWechat(){return wechat;}
    public void setWechat(String wechat){this.wechat = wechat;}
    public String getPhoto(){return photo;}
    public void setPhoto(String photo){this.photo = photo;}
    public Date getCreate_date(){return create_date;}
    public void setCreate_date(Date create_date){this.create_date = create_date;}
    public String getState(){return  state;}
    public void setState(String state){this.state = state;}
    public String getFuture(){return future;}
    public void setFuture(String future){this.future = future;}
    @Override
    public String toString() {
        return "Admin [_id=" + _id + ", account=" + account + ", password=" + password + ", name=" + name + ", mobile="
                + mobile + ", wechat=" + wechat + ", photo="
                + photo + ", create_date =" + create_date +", state=" + state +", future=" + future +"]";
    }
}
