import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function Fondo({}) {
  const [tamanoWidth, setTamanoWidth] = useState(window.innerWidth);
  const [tamanoHeight, setTamanoHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setTamanoWidth(window.innerWidth);
    setTamanoHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Image
        src="/Media/Img/fondo.jpg"
        //imageStyle={{ resizeMode: "stretch" }}
        style={{
          width: "100%",
          height: tamanoHeight,
          width: tamanoWidth,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
}
