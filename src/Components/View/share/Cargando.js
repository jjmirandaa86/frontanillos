import React from "react";
import { Container, Spinner } from "react-bootstrap";

export default function Cargando() {
  return (
    <>
      <Container>
        <div>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="danger" />
        </div>
      </Container>
    </>
  );
}
