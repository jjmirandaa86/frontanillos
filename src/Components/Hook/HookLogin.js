import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../Library/Redux/Actions/UserActions";

export const HookLogin = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [response, setResponse] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);

  /* useEffect(() => {
    setTimeout(() => {
      console.log("Cargando componentes..!!!");
    }, 5000);
  }, [loading]); */

  useEffect(() => {
    setTimeout(() => setAlerta(false), 2000);
  }, [alerta]);

  //Cambiar los valores de lo Inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //Pierde el foco de la pagina
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  //Cuando presiono el boton de ingresar al login
  const handleSubmit = (e) => {
    //Valido errores en el ingreso de datos
    setErrors(validationsForm(form));
    if (Object.keys(errors).length === 0) {
      const datosEnviado = {
        email: form.email,
        password: form.password,
      };

      const requestAxios = {
        method: "post",
        url: process.env.REACT_APP_USER_POST_LOGIN,
        data: datosEnviado,
        responseType: "json",
        credentials: "include",
        mode: "no-cors",
        headers: {
          Accept: "*/*",
        },
      };

      setLoading(true);
      axios(requestAxios)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            if (response.data.user) {
              setMensajeAlerta(response.data.msg);
              //Asigno el toquen a variable en redux
              dispatch(setUser(response.data.user));
              /* dispatch(setUsuarios(response.data.location));
              dispatch(setUsuarios(response.data.money));
              dispatch(setUsuarios(response.data.session)); */
              setResponse(true);
            } else {
              setMensajeAlerta(response.data.msg);
            }
          } else {
            setMensajeAlerta(
              "Error: " + response.status + ", " + response.statusText
            );
          }
        })
        .catch((e) => {
          setMensajeAlerta("Error: " + e.message);
          console.log("Catch API >>" + e);
        })
        .finally(() => {
          setLoading(false);
          setAlerta(true);
        });
    } else {
      setMensajeAlerta("Error: Debes ingresar Correo y contraseña");
      setAlerta(true);
    }
  };

  return {
    form,
    errors,
    loading,
    alerta,
    mensajeAlerta,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
