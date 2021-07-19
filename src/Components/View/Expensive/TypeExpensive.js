import React, { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
const TypeExpensive = () => {
  /* const data = [
    {
      idTypeEntry: 1,
      idCountry: "EC",
      name: "Combustible Vehículos Emp",
      state: "A",
      created_at: "2021-07-17T15:29:30.000000Z",
      updated_at: "2021-07-17T15:29:30.000000Z",
    },
    {
      idTypeEntry: 2,
      idCountry: "EC",
      name: "Deprec Vehículo Empleado",
      state: "A",
      created_at: "2021-07-17T15:29:30.000000Z",
      updated_at: "2021-07-17T15:29:30.000000Z",
    },
    {
      idTypeEntry: 3,
      idCountry: "EC",
      name: "Reembolso Alimentacion Q2",
      state: "A",
      created_at: "2021-07-17T15:29:30.000000Z",
      updated_at: "2021-07-17T15:29:30.000000Z",
    },
    {
      idTypeEntry: 4,
      idCountry: "EC",
      name: "Reembolso Movilizacion Q2",
      state: "A",
      created_at: "2021-07-17T15:29:30.000000Z",
      updated_at: "2021-07-17T15:29:30.000000Z",
    },
  ];

  const ListData = () => (
    <>
      {data.map((element) => (
        <p>{element.name}</p>
      ))}
    </>
  ); */

  // <option key={element.idTypeEntry}>{element.name}</option>
  //<ListData />

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Usuario</Form.Label>
              <Form.Control placeholder="500857" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Factura</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default TypeExpensive;
