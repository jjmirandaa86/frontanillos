import React from "react";
import { Spinner } from "react-bootstrap";

export default function Cargando() {
  return (
    <>
      <div>
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
      </div>
    </>
  );
}
