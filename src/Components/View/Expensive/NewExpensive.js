import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { HookNewExpensive } from "../../Hook/HookNewExpensive";
import * as CONSTANTE from "../../../Helpers/Constantes"; //Constantes

import {
  Card,
  CloseButton,
  Container,
  Col,
  Row,
  Image,
  Form,
  Button,
  FloatingLabel,
  InputGroup,
  Alert,
  FormControl,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialForm = {
  idExpense: 0,
  idCountry: "",
  idUser: 0,
  idTypeEntry: 0,
  idSupplier: "",
  nameSupplier: "",
  serieInvoice: "",
  dateInvoice: "1900/01/01",
  amount: 0,
  image: "",
  state: "A",
};

const validationsForm = (form) => {
  let errors = {};
  console.log("Valor:" + form.idSupplier);
  if (!form.idSupplier.trim()) {
    console.log("form.idSupplier");
    errors.idSupplier = "El campo RUC / Cedula es requerido";
  } else if (!CONSTANTE.REGEXNUMBER.test(form.idSupplier.trim())) {
    console.log("CONSTANTE.REGEXNUMBER");
    errors.idSupplier =
      "El campo RUC / Cedula, solo acepta numeros, favor valide. Ejemplo: 0923308654";
  }

  return errors;
};

const NewExpensive = (props) => {
  const {
    form,
    errors,
    loading,
    alerta,
    mensajeAlerta,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = HookNewExpensive(initialForm, validationsForm);

  return (
    <>
      <div className="container">
        <div className="vh-100 justify-content-center align-items-center formLogin">
          <div className="bg-light p-3">
            <CloseButton
              onClick={() => alert("cierra") /* props.setIsHovering(false) */}
            />
            <Card className="text-center" bg={"light"}>
              <Card.Header>Nuevo Gasto</Card.Header>
              <Card.Body>
                <Container>
                  <Form>
                    <Row>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          size="sm"
                          as="select"
                          type="select"
                          name="idTypeEntry"
                          onChange={handleChange}
                          /* onBlur={handleBlur} */
                          value={form.idTypeEntry}
                        >
                          <option value="1">Combustible Vehículo</option>
                          <option value="2">Deprec Vehículo Empleado</option>
                          <option value="3">Reembolso Alimentación</option>
                          <option value="4">Reembolso Movilización</option>
                        </Form.Control>
                        {errors.idTypeEntry && (
                          <Form.Text className="text-muted">
                            <Alert
                              variant={
                                process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                              }
                            >
                              {errors.idTypeEntry}
                            </Alert>
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group controlId="formBasicIdSupplier">
                        <Form.Control
                          type="number"
                          placeholder={"Ruc / Cedula"}
                          name="idSupplier"
                          onChange={handleChange}
                          value={form.idSupplier}
                          onBlur={handleBlur}
                        />
                        {errors.idSupplier && (
                          <Form.Text className="text-muted">
                            <Alert
                              variant={
                                process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                              }
                            >
                              {errors.idSupplier}
                            </Alert>
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Row>

                    {/*  <Row sm={12}>
                      <Form.Group>
                        <FormControl
                          size="sm"
                          type="text"
                          placeholder="Nombre del proveedor"
                          value={form.nameSupplier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={false}
                        />
                      </Form.Group>
                    </Row>
                    <Row sm={12}>
                      <Form.Group>
                        <FormControl
                          size="sm"
                          type="text"
                          placeholder="Serie de la factura"
                          value={form.nameSupplier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={false}
                        />
                      </Form.Group>
                    </Row>
                    <Row sm={12}>
                      <Form.Group>
                        <FormControl
                          size="sm"
                          type="text"
                          placeholder="Monto de la factura"
                          value={form.nameSupplier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={false}
                        />
                      </Form.Group>
                    </Row> */}
                  </Form>
                </Container>
                <Button type="submit" onClick={handleSubmit}>
                  Submit form
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewExpensive;
