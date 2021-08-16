import React from "react";
import { Table, Badge, Container, Row, Col } from "react-bootstrap";
import { HookExpensive } from "../../Hook/HookExpensive";
import ExpensiveItem from "./ExpensiveItem";
import NavPagination from "../share/Pagination/NavPagination";
import RowPerPage from "../share/Pagination/RowPerPage";
import ShowRowFromTo from "../share/Pagination/ShowRowFromTo";
import Icon from "../share/Icon";

const Expensive = (props) => {
  const { dato, datoHead, datoPagination, handleChangeUrl } =
    HookExpensive(props);

  return (
    <>
      <Container>
        <Row>
          <Col sm={11}>
            <h2>
              <Badge bg="primary">Gastos Reportados</Badge>
            </h2>
          </Col>
          <Col sm={1}>
            <Icon img={"/Media/Ico/excel.svg"} xheight={30} xwidth={30} />
          </Col>
        </Row>
      </Container>

      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{datoHead.serieInvoice}</th>
            <th>{datoHead.dateInvoice}</th>
            <th>{datoHead.amount}</th>
            <th>{datoHead.idTypeEntry}</th>
            <th>{datoHead.state}</th>
            <th>{datoHead.image}</th>
          </tr>
        </thead>
        <tbody>
          {dato.length === 0 ? (
            <tr>No hay datos</tr>
          ) : (
            <>
              <ExpensiveItem
                REACT_APP_EXPENSE_PUT_STATE={props.REACT_APP_EXPENSE_PUT_STATE}
                data={dato}
              />
              <tr>
                <td colSpan="1">
                  <NavPagination
                    data={datoPagination}
                    handleChangeUrl={handleChangeUrl}
                  />
                </td>
                <td colSpan="3">
                  <RowPerPage data={datoPagination} />{" "}
                </td>
                <td colSpan="2">
                  <ShowRowFromTo data={datoPagination} />{" "}
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Expensive;
