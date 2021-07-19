import React, { useState } from "react";
import { Container, Pagination, Row, Col } from "react-bootstrap";

const PaginationTable = (props) => {
  console.log(props.data);

  const ListPagination = () => (
    <>
      <Container fluid="sm">
        <Row>
          <Col>Filas por pagina: {props.data.perPage}</Col>
          <Col>
            {props.data.fromPage}
            {"-"}
            {props.data.toPage}
            {" de "}
            {props.data.totalPage}
          </Col>
          <Col>
            <Pagination size="sm">
              {props.data.prevPageUrl === null ? (
                <Pagination.Item disabled>{"|<"}</Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => props.handleChangeUrl(props.data.firstPageUrl)}
                >
                  {"|<"}
                </Pagination.Item>
              )}
              {props.data.prevPageUrl === null ? (
                <Pagination.Item disabled>{"<"}</Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => props.handleChangeUrl(props.data.prevPageUrl)}
                >
                  {"<"}
                </Pagination.Item>
              )}
              {props.data.nextPageUrl === null ? (
                <Pagination.Item disabled>{">"}</Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => props.handleChangeUrl(props.data.nextPageUrl)}
                >
                  {">"}
                </Pagination.Item>
              )}
              {props.data.nextPageUrl === null ? (
                <Pagination.Item disabled>{">|"}</Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => props.handleChangeUrl(props.data.lastPageUrl)}
                >
                  {">|"}
                </Pagination.Item>
              )}
            </Pagination>
          </Col>
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

export default PaginationTable;
