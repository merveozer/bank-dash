import "./salesList.css";
import React, { useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { salesRows } from "../../dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function SalesList() {
  const [data, setData] = useState(salesRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Satış Adı",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="salesListItem">
            <img src={params.row.img} alt="" className="salesListImg" />
            {params.row.name}
          </div>
        );
      },
    },

    { field: "stock", headerName: "Yön", width: 200 },
    {
      field: "status",
      headerName: "Durum",
      width: 120,
    },
    {
      field: "price",
      headerName: "İşlem Ücreti",
      width: 150,
    },
    {
      field: "action",
      headerName: "Düzenle/Çıkar",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/sales/" + params.row.id}>
              <button className="salesListEdit">Düzenle</button>
            </Link>
            <DeleteOutline
              className="salesDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="salesList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
