import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import Language from "./Language";
import Logo from "./Logo";

export default function FormHead() {
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
