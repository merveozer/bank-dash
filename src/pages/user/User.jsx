import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1>Kullanıcıyı Düzenle</h1>
    
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYhRYXrrS3OGaE4hCHZCQh99kuca9aBHCg&usqp=CAU"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Merve ÖZER</span>
              <span className="userShowUserTitle">Yazılım Geliştirici</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Kullanıcı Detayları</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ozermerve</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">07.07.1996</span>
            </div>
            <span className="userShowTitle">İletişim Detayları</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">505 550 66 77</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ozermerve@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">İstanbul</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Düzenle</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Kullanıcı adı</label>
                <input
                  type="text"
                  placeholder="ozermerve"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>İsim Soyisim</label>
                <input
                  type="text"
                  placeholder="Merve Özer"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-mail</label>
                <input
                  type="text"
                  placeholder="ozermerve@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefon</label>
                <input
                  type="text"
                  placeholder="505 550 66 77"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adres</label>
                <input
                  type="text"
                  placeholder="İstanbul"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYhRYXrrS3OGaE4hCHZCQh99kuca9aBHCg&usqp=CAU"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  {" "}
                  <Publish className="userUpdateIcon" />{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Güncelle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
