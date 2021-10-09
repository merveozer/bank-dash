import React from "react";
import "./sidebar.css";
import {
  Receipt,
  AccountBox,
  Autorenew,
  AccountTree,
  AccountBalanceWallet,
  AttachMoney,
  DevicesOther,
  Payment,
  Timeline
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hızlı İşlemler</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Receipt className="sidebarIcon" />
              Faturalar
            </li>
            <li className="sidebarListItem">
              <AccountBox className="sidebarIcon" />
              Kayıtlı Hesaplar
            </li>
            <li className="sidebarListItem">
              <Autorenew className="sidebarIcon" />
              Otomatik Ödeme Tanımla
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hesaplar</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AccountTree className="sidebarIcon" />
              Katılma Hesapları
            </li>
            <li className="sidebarListItem">
              <AccountBalanceWallet className="sidebarIcon" />
              Cari Hesaplar
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Döviz Hesapları
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Ödemeler ve Hizmetler</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Payment className="sidebarIcon" />
              Ödemeler
            </li>
            <li className="sidebarListItem">
              <DevicesOther className="sidebarIcon" />
              Diğer Bankacılık Hizmetleri
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Satışlar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
