import React, { useState, useEffect } from "react";
import { Toast, Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function AlertaInformativa(props) {
  const [muestraMensaje, setMuestraMensaje] = useState(true);

  //ocultar el mensaje en automatico
  useEffect(() => {
    setTimeout(() => {
      setMuestraMensaje(false);
    }, 5000);
  }, []);

  return (
    <>
      {muestraMensaje && (
        <Container>
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
                      src={
                        props.iconoError
                          ? "Media/ico/cancel.svg"
                          : "Media/ico/success.svg"
                      }
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
        </Container>
      )}
    </>
  );
}
