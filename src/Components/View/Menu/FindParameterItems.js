import { useEffect } from "react";
import { Row, Form, Col, Alert, FloatingLabel } from "react-bootstrap";
import IconButton from "../share/IconButton";
import { HookFilter } from "../../Hook/HookFilter";

const FindParameterItems = (props) => {
  const { typeEntry, states, handleSave } = HookFilter();
  // const ComboTypeEntry = [];

  // useEffect(
  //   (ComboTypeEntry) => {
  //     ComboTypeEntry = () => {
  //       <select>
  //         {typeEntry.map(function (el) {
  //           return <option value={el.idTypeEntry}>{el.name}</option>;
  //         })}
  //       </select>;
  //     };
  //   },
  //   [typeEntry]
  // );

  // console.log("hola desde fiend");
  // console.log(typeEntry);
  // console.log(states);

  return (
    <>
      {/* {typeEntry && <ComboTypeEntry />}  */}

      <Form>
        <Row>
          <Col xs={12} sm={6} lg={6}>
            <Form.Floating className="mb-1">
              <Form.Control
                id="floatingInputDateInvoice"
                type="date"
                name="dateInvoice"
                /* onChange={handleChange}
              value={form.dateInvoice}
              onBlur={handleBlur}
              isValid={form.dateInvoice && !errors.dateInvoice} */
              />
              <label htmlFor="floatingInputCustom">Desde:</label>
              {/* {errors.dateInvoice && (
              <Form.Text className="text-muted">
              <Alert
              variant={process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA}
              >
              {errors.dateInvoice}
              </Alert>
              </Form.Text>
            )} */}
            </Form.Floating>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <Form.Floating className="mb-1">
              <Form.Control
                id="floatingInputDateInvoice"
                type="date"
                name="dateInvoice"
                /* onChange={handleChange}
              value={form.dateInvoice}
              onBlur={handleBlur}
              isValid={form.dateInvoice && !errors.dateInvoice} */
              />
              <label htmlFor="floatingInputCustom">Hasta:</label>
              {/* {errors.dateInvoice && (
              <Form.Text className="text-muted">
                <Alert
                  variant={process.env.REACT_APP_CONFIGURACION_FONDO_ALERTA}
                >
                  {errors.dateInvoice}
                </Alert>
              </Form.Text>
            )} */}
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={6}>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Tipo de Gasto"
              className="mb-1"
            >
              <Form.Select
                aria-label="Floating label select example"
                name="idTypeEntry"
                /* onChange={handleChange}
              onBlur={handleBlur}
              value={form.idTypeEntry}
              isValid={form.idTypeEntry && !errors.idTypeEntry} */
                autoFocus
              >
                <option value="">Todos</option>
                <option value="1">Combustible Vehículo</option>
                <option value="2">Deprec Vehículo Empleado</option>
                <option value="3">Reembolso Alimentación</option>
                <option value="4">Reembolso Movilización</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Estado"
              className="mb-1"
            >
              <Form.Select
                aria-label="Floating label select example"
                name="idTypeEntry"
                /*  onChange={handleChange}
              onBlur={handleBlur}
              value={form.idTypeEntry}
              isValid={form.idTypeEntry && !errors.idTypeEntry} */
                autoFocus
              >
                <option value="">Todos</option>
                <option value="I">Ingresada</option>
                <option value="R">Rechazada</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <IconButton
              img={"/Media/Ico/save.svg"}
              title={"Guardar"}
              handleButton={handleSave}
              size={"sm"}
            />{" "}
            <IconButton
              img={"/Media/Ico/cancel.svg"}
              title={"Cancelar"}
              handleButton={() => props.setShowWindow("M")}
              size={"sm"}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FindParameterItems;
