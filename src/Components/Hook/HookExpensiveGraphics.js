import axios from "axios";
import { useState, useEffect } from "react";

export const HookExpensiveGraphics = () => {
  const titleGraphics = "Total Gastos por mes";
  const titleGraphicsX = "Mes";
  const titleGraphicsY = "Total";

  const r_idCountry = "EC"; //useSelector((state) => state.usuario.dato.idCountry);
  const r_idUser = "500857"; //useSelector((state) => state.usuario.dato.idUser);
  const r_api_token =
    "WeKHSYaSd1aLTd0K4Qz77kcallnDzyPTmkKKa702SA5L9YEGTfHI8Nbz6LNEJq7Sg55OvbzxUzNHRKGwrGO8xZ2BeR8ehqMSziG8SRJ4QsLASyrBHebqlpSeP61nCNTr8arijxzFRMeRQgl14lk0McXold34LHPiBJU4a9ZWBvsCmglPnbD5MAqfAcDS3Q8cHDOMY9Mmvgpq0CEwFhwHwDPpLgPlGfO7F9S9cQ67cmcpuRNbpFKp97YHphkICll"; //useSelector((state) => state.usuario.dato.api_token);

  const [idCountry, setIdCountry] = useState("EC"); //r_idCountry);
  const [idUser, setIdUser] = useState("500857"); //r_idUser);
  const [datos, setDatos] = useState([]);

  const datosEnviado = {
    idCountry: idCountry,
    idUser: idUser,
    dateFirst: "2020-01-01",
    dateEnd: "2021-07-30",
  };
  /* 
  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  var firstDay = new Date(y, m, 1);
  var lastDay = new Date(y, m + 1, 0);

  console.log(firstDay);
  console.log(lastDay);

  console.log(datosEnviado);
  console.log(r_api_token); */

  let url = process.env.REACT_APP_EXPENSE_POST_COUNT_MONTH_TOT_USER_DATE;

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
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data.data) {
            const arr = [];
            const cabecera = ["Mes", "Total"];
            arr.push(cabecera);
            //recorro el array de datos
            response.data.data.map((el) => {
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
  }, []);

  return {
    datos,
    titleGraphics,
    titleGraphicsX,
    titleGraphicsY,
  };
};
