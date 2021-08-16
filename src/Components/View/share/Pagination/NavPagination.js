import React, { useState } from "react";
import { Container, Pagination, Row, Col } from "react-bootstrap";
import Icon from "../Icon";

const NavPagination = (props) => {
  const ListPagination = () => (
    <>
      <Pagination size="sm">
        {props.data.prevPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={"/Media/Ico/first.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.firstPageUrl)}
          >
            <Icon img={"/Media/Ico/first.svg"} />
          </Pagination.Item>
        )}
        {props.data.prevPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={"/Media/Ico/back.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.prevPageUrl)}
          >
            <Icon img={"/Media/Ico/back.svg"} />
          </Pagination.Item>
        )}
        {props.data.nextPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={"/Media/Ico/next.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.nextPageUrl)}
          >
            <Icon img={"/Media/Ico/next.svg"} />
          </Pagination.Item>
        )}
        {props.data.nextPageUrl === null ? (
          <Pagination.Item disabled>
            <Icon img={"/Media/Ico/last.svg"} />
          </Pagination.Item>
        ) : (
          <Pagination.Item
            onClick={() => props.handleChangeUrl(props.data.lastPageUrl)}
          >
            <Icon img={"/Media/Ico/last.svg"} />
          </Pagination.Item>
        )}
      </Pagination>
    </>
  );

  return (
    <>
      <ListPagination />
    </>
  );
};

export default NavPagination;
