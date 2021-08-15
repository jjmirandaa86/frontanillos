import axios from "axios";
import { useState, useEffect } from "react";

export const HookExpensiveGraphicsLine = (props) => {
  const [datos, setDatos] = useState([]);
  let url = process.env.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE;

  const titleGraphics = "Total gastos por mes";
  const titleGraphicsX = "Mes";
  const titleGraphicsY = "Total";

  const datosEnviado = {
    idCountry: props.idCountry,
    idUser: props.idUser,
    dateFirst: props.dateFirst,
    dateEnd: props.dateEnd,
  };

  const cabeceraAxios = {
    method: "post",
    url: url,
    data: datosEnviado,
    responseType: "json",
    credentials: "include",
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${props.token}`,
    },
  };

  //carga los datos
  useEffect(() => {
    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data) {
            //.data
            const arr = [];
            const cabecera = ["Mes", "Cantidad"];
            arr.push(cabecera);
            //recorro el array de datos
            //response.data.data.map((el) => {
            response.data.map((el) => {
              let dato = [
                el.month.substr(0, 3) + " " + el.year,
                el.countExpensive,
              ];
              arr.push(dato);
            });
            setDatos(arr);
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
  }, []);

  return {
    datos,
    titleGraphics,
    titleGraphicsX,
    titleGraphicsY,
  };
};
