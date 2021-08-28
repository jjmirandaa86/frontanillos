import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast, Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
//Agrego los REDUX
import { TYPES } from "../../../Library/Redux/Actions/messageActions";
import {
  messageInitialState,
  val,
} from "../../../Library/Redux/Reducers/messageReducers";

export default function AlertaInformativa(props) {
  const [muestraMensaje, setMuestraMensaje] = useState(true);
  const messageStore = useSelector((store) => store.message);
  const dispatch = useDispatch();

  const typeError = messageStore.typeError.filter(
    (el) => el.type === messageStore.type
  );

  //ocultar el mensaje en automatico
  useEffect((typeError) => {
    setTimeout(() => {
      setMuestraMensaje(false);
      dispatch({
        type: TYPES.MESSAGE_DELETE,
        payload: messageInitialState,
      });
    }, messageStore.timeShow);
  }, []);

  return (
    <>
      {muestraMensaje && (
        <Container>
          <div className="alertaInformativa">
            <Toast
              bg={typeError[0].color}
              onClose={() => false}
              show={muestraMensaje}
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
                  <Col xs={2}>
                    <img
                      src={typeError[0].img}
                      className="rounded mr-3"
                      alt={typeError[0].name}
                      width={15}
                      height={15}
                    />
                  </Col>
                  <Col xs={10}>
                    <strong className="mr-auto">{messageStore.title}</strong>
                  </Col>
                </Row>
              </Toast.Header>
              <Toast.Body>
                <div>{messageStore.body}</div>
                <div style={{ paddingTop: 12 }}>
                  {messageStore.date} {" - "} {messageStore.hour}
                </div>
              </Toast.Body>
            </Toast>
          </div>
        </Container>
      )}
    </>
  );
}
