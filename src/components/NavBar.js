import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../styles/Navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='my-navbar'>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-button' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto top-menu'>
              {/* <Navbar.Brand href="/" className='navlink'>My Portfolio</Navbar.Brand> */}
              <Nav.Link className='navlink' href="/">My Portfolio</Nav.Link>
            </Nav>
            <Nav className="top-menu">
              <Nav.Link className='navlink' href="/">Home</Nav.Link>
              <Nav.Link className='navlink' href="/projects">Projects</Nav.Link>
              <Nav.Link className='navlink' href="/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar

