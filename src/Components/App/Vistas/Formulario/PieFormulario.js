import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, Badge } from "react-bootstrap";

export default function PieFormulario() {
  const { t } = useTranslation();
  return (
    <>
      <Card.Footer className="text-center">
        {t("app.empresa.nombre")} {" - "}
        <Badge variant={process.env.REACT_APP_CONFIGURACION_FONDO_BG}>
          <Link to={{ pathname: "https://www.acertijo.dev/" }} target="_blank">
            {t("app.empresa.website")}
          </Link>
        </Badge>
        <br></br>
        {t("app.empresa.correo")} <br></br>
        {t("app.empresa.leyenda")}
      </Card.Footer>
    </>
  );
}
