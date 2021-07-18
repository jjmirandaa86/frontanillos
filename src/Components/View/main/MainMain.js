import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavMain from "./NavMain";
import ExpensiveGraphicsTorta from "../Graphics/ExpensiveGraphicsTorta";
import ExpensiveGraphics from "../Graphics/ExpensiveGraphics";
import Expensive from "./Expensive";

const MainMain = () => {
  return (
    <>
      <div>
        <NavMain />
        <br></br>
        <Container>
          <Row>
            <Col sm={8}>
              <Button variant="secondary">Reportar Gasto</Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              Filtro de fechas
              <br></br>
              Ultimo Mes
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
