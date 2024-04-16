import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import logo from '../images/logo.svg'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="my-navbar">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-button"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto top-menu">
              <NavLink to="." end>
                <Image src={logo} alt="logo" className="logo" />
              </NavLink>
            </Nav>
            <Nav className="top-menu">
              <NavLink className="nav-home" to="." end>
                <IoHome className="mb-2" />
              </NavLink>
              <NavLink className="navlink" to="projects">
                Projects
              </NavLink>
              <NavLink className="navlink" to="links">
                Links
              </NavLink>
              <NavLink className="navlink" to="contacts">
                Contacts
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
