import React from "react";
import { Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HookLogin } from "../Hook/HookLogin";

//Componentes Grafico UI
import Cargando from "./share/Cargando";
import Fondo from "./share/Fondo";
import LoginForm from "./login/LoginForm";
import FormFooter from "./share/FormFooter";
import FormHead from "./share/FormHead";
import AlertaInformativa from "./share/AlertaInformativa";
import "../../App.css";
import { styleApp } from "../../Helpers/Constantes";

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
  } = HookLogin();

  const { t } = useTranslation();

  return (
    <>
      {response && <Redirect to="/main" />}
      {alerta && (
        <AlertaInformativa
          titulo={process.env.REACT_APP_SERVIDOR_TITULO_API}
          fechaHora={"11111"}
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
              bg={styleApp.GENERAL.APP_GENERAL_COLOR_FONDO}
              text={
                styleApp.GENERAL.APP_GENERAL_COLOR_LETRA.toLowerCase() ===
                "light"
                  ? "dark"
                  : "white"
              }
            >
              <FormHead />
              <Card.Body>
                <Card.Title className="text-center">
                  {"Inicia Session"}
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
              <FormFooter />
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
