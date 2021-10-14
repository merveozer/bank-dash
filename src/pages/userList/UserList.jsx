import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { userRows } from "../../dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { PieChart, Pie } from "recharts";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const data01 = [
    { name: "Tarım", value: 300 },
    { name: "Hizmet", value: 600 },
    { name: "Sanayi", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Kullanıcı Adı",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.userName}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Durum",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "İşlem",
      width: 150,
    },
    {
      field: "action",
      headerName: "Düzenle/Çıkar",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userEdit">Düzenle</button>
            </Link>
            <DeleteOutline
              className="userDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Link to="/newUser">
        <button className="userAddButton">Yeni Üye Oluştur</button>
      </Link>

      <div className="pieChart">
        <PieChart width={400} height={250}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>

        <div className="individialSector">
          <p className="individiualSectorTitle">
            Bireysel Müşteri Sektör Dağılımı
          </p>

          <ol className="list">
            <li className="listItem">Hizmet </li>
            <li className="listItem">Tarım</li>
            <li className="listItem">Sanayi</li>
          </ol>
        </div>

        <div className="individialJob">
          <p className="individiualJobTitle">
            Bireysel Müşteri Meslek Dağılımı
          </p>

          <ol className="list">
            <li className="listItem">Bilgisayar Mühendisi</li>
            <li className="listItem">Teknisyen</li>
            <li className="listItem">Doktor</li>
            <li className="listItem">Öğretmen</li>
            <li className="listItem">Şoför</li>
            <li className="listItem">Aşçı</li>
            <li className="listItem">Teknisyen</li>
            <li className="listItem">Doktor</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
