import React, { useRef } from "react";
import { HookNewExpensive } from "../../Hook/HookNewExpensive";
import IconButton from "../share/IconButton";
import Cargando from "../share/Cargando";
import AlertaInformativa from "../share/AlertaInformativa";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Alert,
} from "react-bootstrap";

const initialForm = {
  idExpense: 0,
  idCountry: "EC",
  idUser: 500857,
  idTypeEntry: 0,
  idSupplier: "",
  nameSupplier: "",
  serieInvoice: "",
  dateInvoice: "1900/01/01",
  amount: "",
  image: "",
  state: "A",
};

const NewExpensive = (props) => {
  const {
    form,
    file,
    setFiles,
    errors,
    loading,
    alertaToast,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = HookNewExpensive(props, initialForm);

  const inputRef = useRef();

  return (
    <>
      {alertaToast.estado && (
        <AlertaInformativa
          titulo={alertaToast.titulo}
          fechaHora={alertaToast.fechaHora}
          mensaje={alertaToast.mensaje}
          estado={alertaToast.estado}
          iconoError={alertaToast.iconoError}
        />
      )}
      {loading && (
        <div className="loader">
          <Cargando />
        </div>
      )}
      {!loading && (
        <Container style={{ paddingTop: 20 }}>
          <Card className="text-center" bg={"light"}>
            <Card.Header>Nuevo Gasto {errors.idSupplier}</Card.Header>
            <Card.Body>
              <Container>
                <Form>
                  {/* Type de Gasto*/}
                  <Row>
                    <Col xs={12} sm={12} lg={12}>
                      <FloatingLabel label="Tipo de Gasto" className="mb-1">
                        <Form.Select
                          aria-label="Floating label select example"
                          name="idTypeEntry"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={form.idTypeEntry}
                          autoFocus
                        >
                          <option value="1">Combustible Vehículo</option>
                          <option value="2">Deprec Vehículo Empleado</option>
                          <option value="3">Reembolso Alimentación</option>
                          <option value="4">Reembolso Movilización</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  {/* ID proveedor */}
                  <Row>
                    <Col xs={12} sm={6} lg={6}>
                      <Form.Floating className="mb-1">
                        <Form.Control
                          id="floatingInputIdSupplier"
                          type="number"
                          name="idSupplier"
                          onChange={handleChange}
                          value={form.idSupplier}
                          onBlur={handleBlur}
                          maxLength={13}
                          minLength={10}
                        />
                        <label htmlFor="floatingInputCustom">
                          Identificacion / RUC (Proveedor)
                        </label>
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
                      </Form.Floating>
                    </Col>
                    {/* Nombre proveedor */}
                    <Col xs={12} sm={6} lg={6}>
                      <Form.Floating className="mb-1">
                        <Form.Control
                          id="floatingInputNameSupplier"
                          type="text"
                          placeholder="Estación de Servicio Leon"
                          name="nameSupplier"
                          onChange={handleChange}
                          value={form.nameSupplier}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="floatingInputCustom">
                          Razon Social (Proveedor)
                        </label>
                        {errors.nameSupplier && (
                          <Form.Text className="text-muted">
                            <Alert
                              variant={
                                process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                              }
                            >
                              {errors.nameSupplier}
                            </Alert>
                          </Form.Text>
                        )}
                      </Form.Floating>
                    </Col>
                  </Row>
                  {/* Serie de la factura */}
                  <Row>
                    <Col xs={12} sm={6} lg={6}>
                      <Form.Floating className="mb-1">
                        <Form.Control
                          id="floatingSerieInvoice"
                          type="text"
                          name="serieInvoice"
                          onChange={handleChange}
                          value={form.serieInvoice}
                          onBlur={handleBlur}
                          maxLength={15}
                          a
                        />
                        <label htmlFor="floatingInputCustom">
                          Serie de la Factura
                        </label>
                        {errors.serieInvoice && (
                          <Form.Text className="text-muted">
                            <Alert
                              variant={
                                process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                              }
                            >
                              {errors.serieInvoice}
                            </Alert>
                          </Form.Text>
                        )}
                      </Form.Floating>
                    </Col>
                    {/* Fecha de la factura */}
                    <Col xs={12} sm={6} lg={6}>
                      <Form.Floating className="mb-1">
                        <Form.Control
                          id="floatingInputDateInvoice"
                          type="date"
                          name="dateInvoice"
                          onChange={handleChange}
                          value={form.dateInvoice}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="floatingInputCustom">Fecha</label>
                        {errors.dateInvoice && (
                          <Form.Text className="text-muted">
                            <Alert
                              variant={
                                process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                              }
                            >
                              {errors.dateInvoice}
                            </Alert>
                          </Form.Text>
                        )}
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    {/* Monto */}
                    <Col xs={12} sm={6} lg={6}>
                      <Form.Floating className="mb-1">
                        <Form.Control
                          id="floatingInputc"
                          type="number"
                          placeholder="0"
                          name="amount"
                          onChange={handleChange}
                          value={form.amount}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="floatingInputCustom">Monto</label>
                        {errors.amount && (
                          <Form.Text className="text-muted">
                            <Alert
                              variant={
                                process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                              }
                            >
                              {errors.amount}
                            </Alert>
                          </Form.Text>
                        )}
                      </Form.Floating>
                    </Col>
                    {/* Foto*/}
                    <Col xs={12} sm={6} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          onChange={() => setFiles(inputRef.current.files[0])}
                          ref={inputRef}
                          id="input"
                          type="file"
                          size="sm"
                        />
                      </Form.Group>
                      {errors.image && (
                        <Form.Text className="text-muted">
                          <Alert
                            variant={
                              process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA
                            }
                          >
                            {errors.image}
                          </Alert>
                        </Form.Text>
                      )}
                    </Col>
                  </Row>
                </Form>
                <div className="d-grid gap-2" style={{ padding: 10 }}>
                  <IconButton
                    img={"/Media/Ico/save.svg"}
                    title={"Guardar"}
                    handleButton={handleSubmit}
                    size={"sm"}
                  />
                  <IconButton
                    img={"/Media/Ico/cancel.svg"}
                    title={"Cancelar"}
                    handleButton={() => props.setShowWindow("M")}
                    size={"sm"}
                  />
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export default NewExpensive;
