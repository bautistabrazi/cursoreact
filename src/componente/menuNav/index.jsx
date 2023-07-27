import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container className='header-container'>
        <Navbar.Brand as={NavLink} to='/' className='header-title'>B&B Mobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navs-links me-auto">
            <Nav.Link as={NavLink} to='/conocenos'>Conocenos</Nav.Link>
            <Nav.Link as={NavLink} to='/registrarse'>Registrate</Nav.Link>
            <NavDropdown  title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categorias/Ofertas'>Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categorias/Nuevos'>
                Nuevos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categorias/Vendidos'>
                Más Vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/'>
                Todos los productos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='carrito'>
            <CardWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;