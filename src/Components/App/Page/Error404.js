import React from "react";
import { Link } from "react-router-dom";
import { Card, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next"; //Traducciones
//Componentes Grafico UI
import Fondo from "../Vistas/Formulario/Fondo";
import Logo from "../Vistas/Logo";

const Error404 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Fondo />
      <div class="error404">
        <Alert variant="danger">
          {
            //onClose={() => setShow(false)}
          }
          <Logo pwidth={200} />
          <Alert.Heading>Error 404</Alert.Heading>
          <h1>Upss, No encontramos la pagina que nos solicitaste.</h1>
          <br></br>
          <h2>
            Inicia Session{" "}
            <Link to="/login" className="link">
              Aqui
            </Link>
          </h2>
        </Alert>
      </div>
    </>
  );
};

export default Error404;
