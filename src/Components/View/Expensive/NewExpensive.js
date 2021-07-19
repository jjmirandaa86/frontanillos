import React, { useState } from "react";
import {
  Card,
  CloseButton,
  Container,
  Col,
  Row,
  Image,
  Form,
  Button,
} from "react-bootstrap";
const NewExpensive = () => {
  return (
    <>
      <div className="container">
        <div className="vh-100 justify-content-center align-items-center formLogin">
          <div className="bg-dark p-3">
            <CloseButton
              onClick={() => alert("cierra") /* props.setIsHovering(false) */}
            />
            <Card className="text-center" bg={"dark"}>
              <Card.Header>Reportar Nuevo Gasto</Card.Header>
              <Card.Body>
                <Container>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Guardar
                    </Button>
                  </Form>
                </Container>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewExpensive;

/* 
{ 
    "idCountry": "EC",
    "idUser": 500857,
    "idTypeEntry": 1,
    "idSupplier": "0923308654001",
    "nameSupplier": "Jefferson Miranda", 
    "serieInvoice": "001-001-009999999",
    "dateInvoice": "2021-01-01 05:31:17",
    "amount": 17,
    "image": "2021/jun/202107070431175008570923308654007.png",
    "state": "I"
}
*/
