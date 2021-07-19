import { Navbar, Container } from "react-bootstrap";
import Logo from "../share/Logo";

const NavMain = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMain;
