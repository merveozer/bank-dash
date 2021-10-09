import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">En Yüksek Satışa Sahip 4 Personel</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-cartoon-hand-drawn-business-man-avatar-png-image_2620283.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Cemal Can Bekmez</span>
            <span className="widgetSmallUserTitle">Veri Mühendisi</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Görüntüle
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmk8jzrdj1LgKJsccGN-36swQ80EZmXS-FKaVMZeTLhfaEquHW6zyy0x-gmlXxS1EIP4&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Gamze Yavuz</span>
            <span className="widgetSmallUserTitle">Bilgisayar Mühendisi</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Görüntüle
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNik2mhTvPVe_ROe29SIS1WqKq6ejAyr_3w&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Ecem Avcı</span>
            <span className="widgetSmallUserTitle">Bilgisayar Mühendisi</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Görüntüle
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Merve Özer</span>
            <span className="widgetSmallUserTitle">Yazılım Geliştirici</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Görüntüle
          </button>
        </li>
      </ul>
    </div>
  );
}
