import { HookFondo } from "../../Hook/HookFondo";
import { Image } from "react-bootstrap";

export default function Fondo() {
  const { tamanoHeight, tamanoWidth } = HookFondo();

  return (
    <>
      <Image
        src="/Media/img/fondo.jpg"
        //imageStyle={{ resizeMode: "stretch" }}
        style={{
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
