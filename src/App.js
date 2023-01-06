import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
function App() {
  const [data, setData] = useState([]);
  const url = "http://localhost:6969/data";
  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    getData();
    // getData();
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));
    // axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(response =>{
    //     setPosts(response.data)
    // })
    // console.log(response.data)
  }, []);
  // const row = [
  //   { id: 1, body: "Hello", title: "World", userID: "IDsdfsd" },
  //   { id: 2, body: "blabla", title: "baaa", userID: "IfsdfsdfD" },
  //   { id: 3, body: "qwerty", title: "weee", userID: "IsdfsdD" },
  // ];
  // const row = data.map((data) => ({
  //   id: data.id,
  //   body: data.body,
  //   title: data.title,
  //   userID: data.userId,
  // }));
  // const columns = [
  //   { field: "id", headerName: "id", width: 50 },
  //   { field: "body", headerName: "body", width: 300, editable: true },
  //   { field: "title", headerName: "title", width: 300, editable: true },
  //   { field: "userID", headerName: "userId", width: 300 },
  // ];
  const column = [
    {
      title: "MID",
      field: "MID",
      cellStyle: {
        backgroundColor: "#8400ff",
        color: "#FFF",
      },
    },
    {
      title: "Mcode",
      field: "Mcode",
      cellStyle: {
        backgroundColor: "#8400ff",
        color: "#FFF",
      },
    },
    {
      title: "Mconfdate",
      field: "Mconfdate",
      cellStyle: {
        backgroundColor: "#8400ff",
        color: "#FFF",
      },
    },
    {
      title: "MmarkName",
      field: "MmarkName",
      cellStyle: {
        backgroundColor: "#8400ff",
        color: "#FFF",
      },
    },
    {
      title: "Mplantdate",
      field: "Mplantdate",
      cellStyle: {
        backgroundColor: "#8400ff",
        color: "#FFF",
      },
    },
    {
      title: "MrsVal",
      field: "MrsVal",
      cellStyle: {
        backgroundColor: "#8400ff",
        color: "#FFF",
      },
    },
  ];

  return (
    <div className="App">
      <MaterialTable
        options={{
          headerStyle: {
            backgroundColor: "#9607f5",
            color: "#FFF",
          },
          filtering: true,
        }}
        data={data}
        // row={row}
        columns={column}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              fetch(url, {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(newData),
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getData();
                  resolve();
                });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              fetch(url + "/" + oldData.id, {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(newData),
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getData();
                  resolve();
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              console.log(oldData);
              fetch(url + "/" + oldData.id, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getData();
                  resolve();
                });
            }),
          // onRowAdd: (newData) =>
          //   new Promise((resolve, reject) => {
          //     //Backend call
          //     fetch("http://localhost:3006/contacts", {
          //       method: "POST",
          //       headers: {
          //         "Content-type": "application/json",
          //       },
          //       body: JSON.stringify(newData),
          //     })
          //       .then((resp) => resp.json())
          //       .then((resp) => {
          //         getData();
          //         resolve();
          //       });
          //   }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve, reject) => {
          //     //Backend call
          //     fetch("http://localhost:3006/contacts" + "/" + oldData.id, {
          //       method: "PUT",
          //       headers: {
          //         "Content-type": "application/json",
          //       },
          //       body: JSON.stringify(newData),
          //     })
          //       .then((resp) => resp.json())
          //       .then((resp) => {
          //         getData();
          //         resolve();
          //       });
          //   }),
        }}
      />
    </div>
  );
}

export default App;
