import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import Language from "../Formulario/Language";
import Logo from "../Logo";

export default function CabeceraFormulario(props) {
  return (
    <>
      <Card.Header>
        <Row>
          <Col xs={6}>
            <Logo pwidth={130} />
          </Col>
          <Col xs={6}>
            <Language />
          </Col>
        </Row>
      </Card.Header>
    </>
  );
}
