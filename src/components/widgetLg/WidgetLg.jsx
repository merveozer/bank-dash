import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}> {type} </button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Son İşlemler</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Müşteri</th>
          <th className="widgetLgTh">Tarih</th>
          <th className="widgetLgTh">Ücret</th>
          <th className="widgetLgTh">İşlem Durumu</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgCustomer">
            <img
              src="https://cdn2.vectorstock.com/i/thumb-large/53/21/young-businessman-profile-over-white-background-vector-12055321.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Veysel Güren</span>
          </td>
          <td className="widgetLgDate">5 Ekim 2021</td>
          <td className="widgetLgAmou">$1345.33</td>
          <td className="widgetLgStatus">
            <Button type="Onaylandı"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgCustomer">
            <img
              src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-couple-boy-cute-avatar-image_1153281.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Harvey Specter</span>
          </td>
          <td className="widgetLgDate">4 Ekim 2021</td>
          <td className="widgetLgAmou">$1465.26</td>
          <td className="widgetLgStatus">
            <Button type="Reddedildi"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgCustomer">
            <img
              src="https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mike Ross</span>
          </td>
          <td className="widgetLgDate">4 Ekim 2021</td>
          <td className="widgetLgAmou">$1365.74</td>
          <td className="widgetLgStatus">
            <Button type="Beklemede"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgCustomer">
            <img
              src="https://image.shutterstock.com/image-vector/young-african-smiling-woman-short-260nw-1653682570.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jessica Pearson</span>
          </td>
          <td className="widgetLgDate">1 Ekim 2021</td>
          <td className="widgetLgAmou">$1785.86</td>
          <td className="widgetLgStatus">
            <Button type="Onaylandı"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
