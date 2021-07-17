import React, { useState } from "react";
import { Toast, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function AlertaInformativa(props) {
  return (
    <>
      <div className="alertaInformativa">
        <Toast
          onClose={() => false}
          show={props.estado}
          animation={true}
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            width: 270,
          }}
        >
          <Toast.Header closeButton={false}>
            <Row>
              <Col xs={1}>
                <img
                  src="bear.svg"
                  className="rounded mr-3"
                  alt=""
                  width={15}
                  height={15}
                />
              </Col>
              <Col xs={7}>
                <strong className="mr-auto">{props.titulo}</strong>
              </Col>
              <Col xs={3}>
                <small>{props.fechaHora}</small>
              </Col>
            </Row>
          </Toast.Header>
          <Toast.Body>{props.mensaje}</Toast.Body>
        </Toast>
      </div>
    </>
  );
}

//parametros por defecto si no se envian desde la llamada del componente
AlertaInformativa.defaultProps = {
  titulo: "Mapa-Tesalia",
  fechaHora: "20:89",
  mensaje: "Error al ingresar con tus credenciales, favor re-ingresa.",
  tiempoOcualta: 2000,
};
