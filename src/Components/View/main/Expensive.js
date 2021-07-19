import React from "react";
import { Table, Badge } from "react-bootstrap";
import { HookExpensive } from "../../Hook/HookExpensive";
import ExpensiveItem from "./ExpensiveItem";
import NavPagination from "../share/Pagination/NavPagination";
import RowPerPage from "../share/Pagination/RowPerPage";
import ShowRowFromTo from "../share/Pagination/ShowRowFromTo";

const Expensive = () => {
  const { dato, datoHead, datoPagination, handleChangeUrl } = HookExpensive();
  console.log(dato);
  return (
    <>
      <h2>
        <Badge bg="primary">Gastos Reportados</Badge>
      </h2>
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
          <ExpensiveItem data={dato} />
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
        </tbody>
      </Table>
    </>
  );
};

export default Expensive;
