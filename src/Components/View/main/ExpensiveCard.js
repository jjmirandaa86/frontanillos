import React, { useState } from "react";
import { Card, CloseButton, Container, Col, Row, Image } from "react-bootstrap";

const ExpensiveCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="vh-100 justify-content-center align-items-center formLogin">
          <div className="bg-dark p-3">
            <CloseButton onClick={() => props.setIsHovering(false)} />
            <Card className="text-center" bg={"dark"}>
              <Card.Header>
                Factura {" | "} {props.data.serieInvoice} {" | "}{" "}
                {props.data.idSupplier}
                {" | "} {props.data.nameSupplier} {" | "} {props.data.amount}
              </Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <Col xs={12} md={12}>
                      <Image
                        src={
                          process.env.REACT_APP_SERVIDOR_REPO_IMAGE +
                          "/" +
                          props.data.image
                        }
                        style={{ width: 500 }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpensiveCard;
