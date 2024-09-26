import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>شحن مجاني وخفض 100 جنيه للطلبات +999ج</p>
      </div>
      <Navbar expand="lg" className="navbar">
        <div className="container-fluid justify-content-center">
          <Navbar.Brand href="/" className="navbar-logo">
            <img src="https://doniccieg.com/storage/2023/02/donicci-social.png" alt="Donicci Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="nav-links">
              <NavDropdown title="رجالي" id="men-dropdown">
                <NavDropdown.Item as={Link} to="/menShoe">
                  أحذية رجالي
                </NavDropdown.Item>
                <NavDropdown.Item href="#men2">جوارب رجالي</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="حريمي" id="women-dropdown">
                <NavDropdown.Item href="#women1">أحذية حريمي</NavDropdown.Item>
                <NavDropdown.Item href="#women2">جوارب حريمي</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="اطفال" id="kids-dropdown">
                <NavDropdown.Item href="#kids1">أحذية أطفال</NavDropdown.Item>
                <NavDropdown.Item href="#kids2">جوارب أطفال</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="العروض" id="offers-dropdown">
                <NavDropdown.Item href="#offer1">عرض 1</NavDropdown.Item>
                <NavDropdown.Item href="#offer2">عرض 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="nav-icons d-flex align-items-center">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-user"></i>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
