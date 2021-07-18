import React, { useState } from "react";
import Icon from "../share/Icon";
import ExpensiveCard from "./ExpensiveCard";

const ExpensiveItem = (data) => {
  const [isHovering, setIsHovering] = useState(false);
  const [datoExpensive, setDatoExpensive] = useState({});

  const ListData = () => (
    <>
      {data.data.map((element) => (
        <tr key={element.idExpense}>
          <td>{element.idTypeEntry}</td>
          <td>{element.serieInvoice}</td>
          <td>{element.dateInvoice}</td>
          <td>{Number(element.amount)}</td>
          {/* <td>{new Date(element.created_at).toLocaleDateString("fr-CA")}</td> */}
          <td>{element.state}</td>
          <td>
            <div
              onClick={() => {
                setIsHovering(true);
                setDatoExpensive(element);
              }}
            >
              <Icon />
            </div>
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
