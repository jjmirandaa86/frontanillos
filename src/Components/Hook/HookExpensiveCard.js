import React, { useState, useEffect } from "react";
import axios from "axios";

export const HookExpensiveCard = (
  REACT_APP_EXPENSE_PUT_STATE,
  inicialState
) => {
  const r_api_token =
    "WeKHSYaSd1aLTd0K4Qz77kcallnDzyPTmkKKa702SA5L9YEGTfHI8Nbz6LNEJq7Sg55OvbzxUzNHRKGwrGO8xZ2BeR8ehqMSziG8SRJ4QsLASyrBHebqlpSeP61nCNTr8arijxzFRMeRQgl14lk0McXold34LHPiBJU4a9ZWBvsCmglPnbD5MAqfAcDS3Q8cHDOMY9Mmvgpq0CEwFhwHwDPpLgPlGfO7F9S9cQ67cmcpuRNbpFKp97YHphkICll"; //useSelector((state) => state.usuario.dato.api_token);
  const [data, setData] = useState(inicialState);
  const [aprobador, setAprobador] = useState(true);

  //Zoom Img
  const [valorZoom, setValorZoom] = useState(70);
  const [zoomHeight, setZoomHeight] = useState(300);
  const [url, setUrl] = useState(REACT_APP_EXPENSE_PUT_STATE);

  const incrementZoomHeight = (operador) => {
    if (operador === "+") {
      const newHeight = (zoomHeight * valorZoom) / 100;
      setZoomHeight(zoomHeight + newHeight);
    } else {
      const newHeight = (zoomHeight * valorZoom) / 100;
      setZoomHeight(zoomHeight - newHeight);
    }
  };

  const approveExpense = () => {
    setData({ ...data, state: "A" });
  };

  const denyExpense = () => {
    setData({ ...data, state: "N" });
  };

  useEffect(() => {
    const datosEnviado = {
      idExpense: data.idExpense,
      state: data.state,
    };

    const cabeceraAxios = {
      method: "put",
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

    axios(cabeceraAxios)
      .then((response) => {
        //Si consulta con exito
        if (response.status === 200) {
          if (response.data.data) {
            console.log(response.data.data.msg);
          } else {
            console.log(response.data.data);
            /* setDato([]); */
          }
        } else {
          console.log(response.data.data);
          /* setDato([]); */
        }
      })
      .catch((e) => {
        console.log("Catch API >>" + e);
      })
      .finally(() => {});
  }, [data.state]);

  return {
    aprobador,
    zoomHeight,
    data,
    incrementZoomHeight,
    approveExpense,
    denyExpense,
  };
};
