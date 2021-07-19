import React from "react";
import { Image } from "react-bootstrap";

const Icon = (props) => {
  return (
    <>
      <Image
        src={props.img}
        style={{
          height: 20,
          width: 20,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default Icon;
