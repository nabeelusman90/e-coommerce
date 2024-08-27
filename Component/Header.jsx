import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../photos/logogym.png'
function Header() {
  return (
    <Navbar
      expand="lg"
      className="nav"
      sticky="top"
      style={{ margintop: "15px" }}
    >
      <Container fluid>
        <Navbar.Brand className="logo">
    <img src={logo} height={50} width={60}/>

        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="item" style={{ maxHeight: "100px" }}>
            <Nav.Link>
              <NavLink to="/">Home <i className="fa-solid fa-house"></i></NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/Aboutus"> AboutUs <i className="fas fa-user"></i></NavLink>
            </Nav.Link>
            <NavDropdown title="Product">
              <div className="product" >
                <NavDropdown.Item>
                  <NavLink to="/Product/men">Men</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/Product/women"> Women</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/Product/Supplements"> Supplements</NavLink>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link>
              <NavLink to="/contactus"> ContactUs <i className="fa-solid fa-phone"></i></NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
