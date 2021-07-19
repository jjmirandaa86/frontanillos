import React from "react";
import { Table } from "react-bootstrap";
import { HookExpensive } from "../../Hook/HookExpensive";
import ExpensiveItem from "./ExpensiveItem";
import PaginationTable from "./PaginationTable";

const Expensive = () => {
  const { dato, datoHead, datoPagination, handleChangeUrl } = HookExpensive();
  console.log(dato);
  return (
    <>
      <Table responsive striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>{datoHead.idTypeEntry}</th>
            <th>{datoHead.serieInvoice}</th>
            <th>{datoHead.dateInvoice}</th>
            <th>{datoHead.amount}</th>
            <th>{datoHead.state}</th>
            <th>{datoHead.image}</th>
          </tr>
        </thead>
        <tbody>
          <ExpensiveItem data={dato} />
        </tbody>
      </Table>
      <PaginationTable
        data={datoPagination}
        handleChangeUrl={handleChangeUrl}
      />
    </>
  );
};

export default Expensive;
