import { Card } from "react-bootstrap";

export default function Logo(props) {
  let logo = "";
  if (props.nameDoc) {
    logo = "/Media/img/" + props.nameDoc;
  } else {
    logo = "/Media/img/tesalia-cbc-logo-new.png";
  }

  return (
    <>
      <Card.Img variant="top" src={logo} style={{ width: props.pwidth }} />
    </>
  );
}

Logo.defaultProps = {
  pwidth: 100,
  //pheight: 100,
};
