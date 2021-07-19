import React, { useState } from "react";
import Icon from "../share/Icon";
import ExpensiveCard from "./ExpensiveCard";
import { Link, Row, Col } from "react-bootstrap";

const ExpensiveItem = (data) => {
  const [isHovering, setIsHovering] = useState(false);
  const [datoExpensive, setDatoExpensive] = useState({});

  const ListData = () => (
    <>
      {data.data.map((element) => (
        <tr key={element.idExpense}>
          <td>{element.serieInvoice}</td>
          <td>{element.dateInvoice}</td>
          <td>{Number(element.amount)}</td>
          <td>{element.idTypeEntry}</td>
          {/* <td>{new Date(element.created_at).toLocaleDateString("fr-CA")}</td> */}
          <td>{element.state}</td>
          <td>
            <label
              onClick={() => {
                setIsHovering(true);
                setDatoExpensive(element);
              }}
            >
              <Icon img={"/Media/Ico/search.svg"} />
            </label>
            <label>
              <Icon img={"/Media/Ico/edit.svg"} />
            </label>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <>
      <ListData />
      {isHovering && (
        <>
          <ExpensiveCard data={datoExpensive} setIsHovering={setIsHovering} />
        </>
      )}
    </>
  );
};

export default ExpensiveItem;
