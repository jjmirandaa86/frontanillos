import { Card } from "react-bootstrap";
import { routesPublic } from "../../../Helpers/Constantes";
import { useSelector } from "react-redux";
export default function Logo(props) {
  const ruta = useSelector((store) => store.general.app.img);

  let logo = "";
  if (props.nameDoc) {
    logo = ruta + props.nameDoc;
  } else {
    logo = ruta + "tesalia-cbc-logo-new.png";
  }

  return (
    <>
      <Card.Img variant="top" src={logo} style={{ width: props.pwidth }} />{" "}
    </>
  );
}

Logo.defaultProps = {
  pwidth: 100,
  //pheight: 100,
};
