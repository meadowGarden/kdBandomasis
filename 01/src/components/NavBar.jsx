import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link />
        <Navbar.Brand href="/">home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/newemployee">register employee</Nav.Link>
          <Nav.Link href="/employees">employess</Nav.Link>
          <Nav.Link href="/feedback">feedback</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
