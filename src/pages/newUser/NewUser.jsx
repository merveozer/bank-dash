import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Yeni Kullanıcı</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label> Kullanıcı Adı</label>
          <input type="text" placeholder="merveozer" />
        </div>
        <div className="newUserItem">
          <label>İsim Soyisim</label>
          <input type="text" placeholder="Merve Özer" />
        </div>
        <div className="newUserItem">
          <label>E-mail</label>
          <input type="email" placeholder="merveozer@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Parola</label>
          <input type="password" placeholder="Parola" />
        </div>
        <div className="newUserItem">
          <label>Telefon</label>
          <input type="text" placeholder="555 445 33 22" />
        </div>
        <div className="newUserItem">
          <label>Adres</label>
          <input type="text" placeholder="İstanbul" />
        </div>
        <div className="newUserItem">
          <label>Cinsiyet</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Kadın</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Erkek</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Diğer</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Kullanıcı tipi nedir?</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Bireysel</option>
            <option value="no">Ticari</option>
            <option value="no">Tüzel</option>
          </select>
        </div>
        <button className="newUserButton">Oluştur</button>
      </form>
    </div>
  );
}
