import React from "react";

//Componentes Grafico UI
import Cargando from "./Cargando";
import Fondo from "./Formulario/Fondo";
import LoginForm from "./Formulario/LoginForm";
import PieFormulario from "./Formulario/PieFormulario";
import CabeceraFormulario from "./Formulario/CabeceraFormulario";
import AlertaInformativa from "./Alertas/AlertaInformativa";
import Barras from "../Graficos/Barras";

const Main = () => {
  return (
    <>
      <div className="container">
        Hola desde Main
        <Barras />
      </div>
    </>
  );
};

export default Main;
