import React from "react";
import { Table } from "react-bootstrap";
import { HookExpensive } from "../../Hook/HookExpensive";
import ExpensiveItem from "./ExpensiveItem";

const Expensive = () => {
  const { dato, datoHead } = HookExpensive();
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
    </>
  );
};

export default Expensive;
