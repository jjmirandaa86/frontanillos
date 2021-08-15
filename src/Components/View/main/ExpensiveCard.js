import React, { useState } from "react";
import {
  Card,
  CloseButton,
  Col,
  Row,
  Image,
  Button,
  Badge,
} from "react-bootstrap";
import { HookExpensiveCard } from "../../Hook/HookExpensiveCard";

const ExpensiveCard = (props) => {
  const inicialState = props.data;
  const {
    aprobador,
    zoomHeight,
    data,
    incrementZoomHeight,
    approveExpense,
    denyExpense,
  } = HookExpensiveCard(inicialState);

  return (
    <>
      <div className="showCardExpensive">
        <div className="container">
          <div className="vh-100 justify-content-center align-items-center formLogin">
            <div className="bg-light p-3">
              <CloseButton onClick={() => props.setIsHovering(false)} />
              <Card className="text-center" bg={"light"}>
                <Card.Header>
                  Visualización Factura: <strong>{data.serieInvoice}</strong>
                  {" - "}Id Interno: {data.idExpense}
                </Card.Header>
                <Card.Body onDoubleClick={() => props.setIsHovering(false)}>
                  <Card.Text>
                    <Row>
                      <Col sm={12}>
                        <Badge bg="primary">Proveedor</Badge>
                        <div>
                          {data.idSupplier}
                          {" - "} {data.nameSupplier}
                        </div>
                        <div>
                          {data.dateInvoice}
                          {" | $ "}
                          {data.amount} {" | "}
                          {data.stateName}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Badge bg="primary">Cliente Interno</Badge>
                        <div>
                          {data.idUser}
                          {" - "} {data.firtsName} {data.lastName}
                        </div>
                        <div>{data.position}</div>
                      </Col>
                    </Row>
                  </Card.Text>
                  <>
                    <Button size="sm" onClick={() => incrementZoomHeight("+")}>
                      +
                    </Button>{" "}
                    <Button size="sm" onClick={() => incrementZoomHeight("-")}>
                      -
                    </Button>{" "}
                    {aprobador && (
                      <>
                        <Button
                          size="sm"
                          variant={"success"}
                          onClick={() => approveExpense("-")}
                          disabled={
                            data.state === "I" || data.state === "N"
                              ? false
                              : true
                          }
                        >
                          ✓ Aprobar
                        </Button>{" "}
                        <Button
                          size="sm"
                          variant={"danger"}
                          onClick={() => denyExpense("-")}
                          disabled={
                            data.state === "I" || data.state === "A"
                              ? false
                              : true
                          }
                        >
                          ✗ Negar
                        </Button>
                      </>
                    )}
                  </>
                  <Row>
                    <Col xs={12} md={12}>
                      <Image
                        src={"http://localhost/apianillos/public/" + data.image}
                        width={zoomHeight}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpensiveCard;
