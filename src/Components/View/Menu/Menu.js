import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Icon from "../share/Icon";
import Logo from "../share/Logo";

const Menu = (props) => {
  return (
    <>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div onClick={() => props.setShowWindow("M")}>
            <Logo />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#new" onClick={() => props.setShowWindow("N")}>
                <Icon img={"/Media/Ico/add.svg"} xheight={10} xwidth={10} />{" "}
                {" Nuevo"}
              </Nav.Link>
              <Nav.Link href="#home" onClick={() => props.setShowWindow("F")}>
                <Icon
                  img={"/Media/Ico/controls3.svg"}
                  xheight={10}
                  xwidth={10}
                />
                {" Busqueda"}
              </Nav.Link>
              <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => props.setShowWindow("U")}
                >
                  <Icon img={"/Media/Ico/idCard3.svg"} />
                  {" jmiranda@cbc.co"}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Icon
                    img={"/Media/Ico/controls3.svg"}
                    xheight={10}
                    xwidth={10}
                  />
                  {" Salir"}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
