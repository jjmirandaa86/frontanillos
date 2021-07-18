import React from "react";
import { Image } from "react-bootstrap";

const Icon = () => {
  return (
    <>
      <Image
        src="/Media/Ico/find.svg"
        //imageStyle={{ resizeMode: "stretch" }}
        style={{
          height: 30,
          width: 30,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default Icon;
