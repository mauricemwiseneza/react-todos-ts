import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>  
          <Nav.Link as={Link} to="/about">About</Nav.Link>  
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
