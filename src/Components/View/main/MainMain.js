import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavMain from "../share/NavMain";
import ExpensiveGraphicsTorta from "../Graphics/ExpensiveGraphicsTorta";
import ExpensiveGraphics from "../Graphics/ExpensiveGraphics";
import Expensive from "./Expensive";

const MainMain = () => {
  return (
    <>
      <div>
        <NavMain />
        <Container>
          <Row>
            <Col sm={12}>
              <br></br>
              <Expensive />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ExpensiveGraphicsTorta />
            </Col>
            <Col sm={6}>
              <ExpensiveGraphics />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainMain;
