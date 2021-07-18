import React, { useState, useEffect } from "react";
import axios from "axios";

export const HookExpensive = () => {
  const r_api_token =
    "WeKHSYaSd1aLTd0K4Qz77kcallnDzyPTmkKKa702SA5L9YEGTfHI8Nbz6LNEJq7Sg55OvbzxUzNHRKGwrGO8xZ2BeR8ehqMSziG8SRJ4QsLASyrBHebqlpSeP61nCNTr8arijxzFRMeRQgl14lk0McXold34LHPiBJU4a9ZWBvsCmglPnbD5MAqfAcDS3Q8cHDOMY9Mmvgpq0CEwFhwHwDPpLgPlGfO7F9S9cQ67cmcpuRNbpFKp97YHphkICll"; //useSelector((state) => state.usuario.dato.api_token);
  const [dato, setDato] = useState([]);
  const [datoHead, setDatoHead] = useState({
    idExpense: "Gasto",
    idCountry: "Pais",
    idUser: "Empleado",
    idTypeEntry: "Tipo Gasto",
    idSupplier: "Proveedor",
    nameSupplier: "Nombre",
    serieInvoice: "Factura",
    dateInvoice: "Fecha Factura",
    amount: "Monto",
    image: "Ver",
    state: "Estado",
    created_at: "Creación",
    updated_at: "Actualización",
  });

  const datosEnviado = {
    idCountry: "EC",
    idUser: 500857,
    dateFirst: "2020-01-01",
    dateEnd: "2021-07-30",
  };

  let url = process.env.REACT_APP_EXPENSE_POST_USER_DATE;

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
    axios(cabeceraAxios)
      .then((response) => {
        console.log(">>>>>>>>>>>>>>");
        console.log(response);
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data.data) {
            setDato(response.data.data);
          } else {
            setDato([]);
          }
        } else {
          setDato([]);
        }
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {});
  }, []);

  return {
    dato,
    datoHead,
  };
};
