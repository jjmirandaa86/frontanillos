import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Icon from "./Icon";
import Logo from "./Logo";

const NavMain = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Logo />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#newExpensive">
                <Button variant="outline-primary">
                  <Icon img={"/Media/Ico/add.svg"} /> Nuevo Gasto
                </Button>
              </Nav.Link>
              <Nav.Link href="#filter">
                <Button variant="outline-primary">
                  <Icon img={"/Media/Ico/controls3.svg"} /> Busqueda
                </Button>
              </Nav.Link>
              <Nav.Link href="#filter">
                <Button variant="outline-primary">Salir</Button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#user">
                <Button variant="outline-primary">
                  <Icon img={"/Media/Ico/controls3.svg"} /> jmiranda@cbc.co
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMain;
