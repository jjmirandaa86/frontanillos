import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Chart } from "react-google-charts";
import Cargando from "../Vistas/Cargando";

export default function Barras(props) {
  const r_idCountry = useSelector((state) => state.usuario.dato.idCountry);
  const r_idUser = useSelector((state) => state.usuario.dato.idUser);
  const r_api_token = useSelector((state) => state.usuario.dato.api_token);

  const [idCountry, setIdCountry] = useState("EC"); //r_idCountry);
  const [idUser, setIdUser] = useState("500856"); //r_idUser);
  const [datos, setDatos] = useState([]);

  const datosEnviado = {
    idCountry: idCountry,
    idUser: idUser,
    dateFirst: "2021-05-01",
    dateEnd: "2021-07-30",
  };

  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  var firstDay = new Date(y, m, 1);
  var lastDay = new Date(y, m + 1, 0);

  console.log(firstDay);
  console.log(lastDay);

  console.log(datosEnviado);
  console.log(r_api_token);

  let url = process.env.REACT_APP_USER_GRAFIC;

  const cabeceraAxios = {
    method: "post",
    url: url,
    data: datosEnviado,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${r_api_token}`,
    },
  };

  //carga los datos
  useEffect(() => {
    console.log("Barras -> useEffect");

    axios(cabeceraAxios)
      .then((response) => {
        console.log(response);
        //Si consulta con exito
        if (response.status === 200) {
          console.log("Entro al status 200");
          if (response.data.data) {
            const arr = [];
            const cabecera = ["Mes", "Total"];
            arr.push(cabecera);
            //recorro el array de datos
            response.data.data.map((el) => {
              console.log(el.month);
              let dato = [el.month.substr(0, 3) + " " + el.year, el.totalRow];
              arr.push(dato);
            });
            setDatos(arr);
            console.log(arr);
          } else {
            setDatos([]);
          }
        } else {
          setDatos([]);
        }
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {});
  }, [idUser]);

  return (
    <>
      <div className="container">
        <Chart
          width={"500"}
          height={"500"}
          chartType="Bar"
          loader={
            <div>
              <Cargando />
            </div>
          }
          data={datos}
          options={{
            title: "Monthly Coffee Production by Country",
            vAxis: { title: "Cups" },
            hAxis: { title: "Month" },
            seriesType: "bars",
            series: { 2: { type: "line" } },
          }}
        />
      </div>
    </>
  );
}
