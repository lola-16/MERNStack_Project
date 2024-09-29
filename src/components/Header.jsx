import React from 'react';
import './css/Header.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>شحن مجاني وخفض 100 جنيه للطلبات +999ج</p>
      </div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Link to="/" className="navbar-logo-text">DONICCI</Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="nav-links">
              <NavDropdown title="رجالي" id="men-dropdown">
                <NavDropdown.Item as={Link} to="/menShoe">أحذية رجالي </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ManSocks">جوارب رجالي</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="حريمي" id="women-dropdown">
                <NavDropdown.Item as={Link} to="/WomenSocks">جوارب حريمي</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="اطفال" id="kids-dropdown">
                <NavDropdown.Item as={Link} to="/ChildSocks">جوارب اطفال</NavDropdown.Item>
              </NavDropdown>
              <Link to="/Offers" className="offers">العروض</Link>
            </Nav>
          </Navbar.Collapse>
          <div className="nav-icons d-flex align-items-center">
            <Link className="icon" to="/Cart"><FaShoppingCart  /></Link>
            <Link className="icon" to="/Fav"><FaHeart  /></Link>
            <Link className="icon" to="/Login"><FaUser  /></Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
