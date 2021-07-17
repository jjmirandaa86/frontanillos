import React from "react";
import { Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HookLogin } from "../Hook/HookLogin";
import * as CONSTANTE from "../../../Helpers/Constantes"; //Constantes
import { getHoraActual } from "../../../Helpers/funciones";

//Componentes Grafico UI
import Cargando from "../Vistas/Cargando";
import Fondo from "../Vistas/Formulario/Fondo";
import LoginForm from "./Formulario/LoginForm";
import PieFormulario from "./Formulario/PieFormulario";
import CabeceraFormulario from "./Formulario/CabeceraFormulario";
import AlertaInformativa from "./Alertas/AlertaInformativa";

//Parametros por de los datos.
const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!CONSTANTE.REGEXEMAIL.test(form.email.trim())) {
    errors.email =
      "El campo email es incorrecto, favor valide. Ejemplo: jmiranda@cbc.co";
  }

  if (!form.password.trim()) {
    errors.password = "El campo password es requerido";
  } else if (!CONSTANTE.REGEXPASSWORD.test(form.password.trim())) {
    errors.password =
      "El campo contraseña es incorrecto. Debe contener al menos un número 0-9, al menos una mayúscula, al menos una minúscula, al menos un carácter especial (.,*!?¿¡/#$%&), Longitud mínima de 8 caracteres, 64 máxima, No acepta espacios";
  }

  return errors;
};

const Login = () => {
  const {
    form,
    errors,
    loading,
    alerta,
    mensajeAlerta,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = HookLogin(initialForm, validationsForm);

  const { t } = useTranslation();

  return (
    <>
      {response && <Redirect to="/main" />}
      {alerta && (
        <AlertaInformativa
          titulo={process.env.REACT_APP_SERVIDOR_TITULO_API}
          fechaHora={getHoraActual()}
          mensaje={mensajeAlerta}
          estado={alerta}
        />
      )}

      <Fondo />
      {loading && (
        <div className="loader">
          <Cargando />
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="vh-100 justify-content-center align-items-center formLogin">
            <Card
              bg={process.env.REACT_APP_CONFIGURACION_FONDO_BG}
              text={
                process.env.REACT_APP_CONFIGURACION_FONDO_LETRA.toLowerCase() ===
                "light"
                  ? "dark"
                  : "white"
              }
            >
              <CabeceraFormulario />
              <Card.Body>
                <Card.Title className="text-center">
                  {t("app.componente.login.titulo")}
                </Card.Title>
                <Card.Text>
                  <LoginForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleBlur={handleBlur}
                    form={form}
                    errors={errors}
                  />
                </Card.Text>
              </Card.Body>
              <PieFormulario />
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
