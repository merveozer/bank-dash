import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return ( 
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
         <img className="logo" src="https://www.albaraka.com.tr/_assets/img/albaraka-logo.svg" alt="" /> 
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge"> 2 </span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge"> 2 </span> 
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.pinimg.com/736x/0c/85/a3/0c85a3dafffe885e63fbd47b44a42dab.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
