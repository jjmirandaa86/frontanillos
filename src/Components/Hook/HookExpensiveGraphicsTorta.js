import axios from "axios";
import { useState, useEffect } from "react";

export const HookExpensiveGraphicsTorta = (props) => {
  const [datos, setDatos] = useState([]);

  const titleGraphics = "Total Gastos por mes";

  const datosEnviado = {
    idCountry: props.idCountry,
    idUser: props.idUser,
    dateFirst: props.dateFirst,
    dateEnd: props.dateEnd,
  };

  const cabeceraAxios = {
    method: "post",
    url: props.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE,
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
            const arr = [];
            const cabecera = ["Mes", "Total"];
            arr.push(cabecera);
            //recorro el array de datos
            response.data.map((el) => {
              let dato = [
                el.month.substr(0, 3) + " " + el.year,
                el.amountTotal,
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
  };
};
