import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import Icon from "./Icon";
import Logo from "./Logo";

const NavMain = () => {
  return (
    <>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Logo />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Icon img={"/Media/Ico/add.svg"} xheight={10} xwidth={10} />{" "}
                {" Nuevo"}
              </Nav.Link>
              <Nav.Link href="#home">
                <Icon
                  img={"/Media/Ico/controls3.svg"}
                  xheight={10}
                  xwidth={10}
                />
                {" Busqueda"}
              </Nav.Link>
              <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">
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

export default NavMain;
