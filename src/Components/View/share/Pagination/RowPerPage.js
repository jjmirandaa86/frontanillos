import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RowPerPage = (props) => {
  console.log(props.data);

  const ListPagination = () => (
    <>
      <Container fluid="sm">
        <Row>
          <Col>Filas por pagina: {props.data.perPage}</Col>
        </Row>
      </Container>
    </>
  );

  return (
    <>
      <ListPagination />
    </>
  );
};

export default RowPerPage;
