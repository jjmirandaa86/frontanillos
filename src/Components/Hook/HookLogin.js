import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { regExpresion, routesApi } from "../../Helpers/Constantes";
//Agrego los REDUX
import { TYPES } from "../../Library/Redux/Actions/userActions";
import { userInitialState } from "../../Library/Redux/Reducers/userReducers";
import { TYPES as TYPES_GENERAL } from "../../Library/Redux/Actions/generalActions";
import { generalReducers } from "../../Library/Redux/Reducers/generalReducers";
import { TYPES as TYPES_MESSAGE } from "../../Library/Redux/Actions/messageActions";
import { messageReducers } from "../../Library/Redux/Reducers/messageReducers";
//Funciones
import { getHoraActual, getFechaActual } from "../../Helpers/funciones";

export const HookLogin = () => {
  const dispatch = useDispatch();

  const userSelector = useSelector((store) => store.user);
  //Parametros por de los datos.
  const initialForm = {
    idUser: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   console.log("entra use effect");
  //   setTimeout(() => setLoading(false), 500);
  // }, []);

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
    // Valido errores en el ingreso de datos
    setErrors(validationsForm(form));

    if (Object.keys(errors).length === 0) {
      const datosEnviado = {
        idUser: form.idUser,
        password: form.password,
      };

      const requestAxios = {
        method: "post",
        url: routesApi.REACT_APP_API + routesApi.REACT_APP_USER_LOGIN,
        data: datosEnviado,
        responseType: "json",
        credentials: "include",
        mode: "no-cors",
        headers: {
          Accept: "*/*",
        },
      };
      setLoading(true);
      axios(requestAxios).then((response) => {
        if (response.status === 200) {
          if (response.data.user) {
            const user = response.data.user[0];

            const info = {
              idUser: user.idUser,
              firtsName: user.firtsName,
              lastName: user.lastName,
              position: user.position,
              profile: user.profile,
              email: user.email,
              state: user.state,
            };

            const session = {
              api_token: user.api_token,
              date: getFechaActual(),
              hour: getHoraActual(),
            };

            const ubication = {
              idCountry: user.idCountry,
              countryName: user.countryName,
              idRegion: user.idRegion,
              regionsName: user.regionsName,
              idOffice: user.idOffice,
              officeName: user.officeName,
            };

            const money = {
              currency: user.currency,
              simbol: user.simbol,
            };

            const message = {
              type: "S",
              title: "Inicia Session",
              date: getFechaActual(),
              hour: getHoraActual(),
              body: response.data.msg,
              timeShow: 5000,
            };

            //USUARIO
            dispatch({
              type: TYPES.SET_USER_LOGIN_INFO,
              payload: { info, session, ubication },
            });

            //GENERAL
            dispatch({
              type: TYPES_GENERAL.SET_GENERAL_MONEY,
              payload: money,
            });

            //MENSAJE
            dispatch({
              type: TYPES_MESSAGE.SET_MESSAGE_SHOW,
              payload: message,
            });

            setMensajeAlerta(response.data.msg);

            setResponse(true);
          } else {
            if (response.data.msg) {
              setMensajeAlerta(response.data.msg);
            } else if (response.data.error.errorInfo[1] === 1062) {
              setMensajeAlerta("El usuario ya ingreso en otra session");
            }
          }
        } else {
          setMensajeAlerta(
            "Error: " + response.status + ", " + response.statusText
          );
        }
      });
      // .catch((e) => {
      //   setMensajeAlerta("Error: " + e.message);
      //   console.log("Catch API >>" + e);
      // })
      // .finally(() => {
      //   setLoading(false);
      //   setAlerta(true);
      // });
    } else {
      setMensajeAlerta("Error: Debes ingresar Correo y contraseña");
      setAlerta(true);
    }
  };

  //Validacion de Inputs
  const validationsForm = (form) => {
    let errors = {};
    if (!form.idUser.trim()) {
      errors.idUser = "El campo codigo colabrador es requerido";
    } else if (!regExpresion.NUMBERENTERO.test(form.idUser.trim())) {
      // CONSTANTE.REGEXEMAIL.test(form.email.trim())
      errors.idUser =
        "El campo codigo colabrador es incorrecto, favor valide. Ejemplo: 500857";
    }

    if (!form.password.trim()) {
      errors.password = "El campo password es requerido";
    } else if (!regExpresion.PASSWORD.test(form.password.trim())) {
      errors.password = "El campo contraseña no es incorrecto, favor valide.";
    }

    return errors;
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
