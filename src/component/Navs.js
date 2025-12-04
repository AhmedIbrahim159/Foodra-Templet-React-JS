import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png"
import "./Navs.css"
function Navs() {
    return (
        <Navbar expand="lg" bg='light'>
            <Container>
                <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Explore Foods</Nav.Link>
                        <Nav.Link href="#link">Reviews</Nav.Link>
                        <Nav.Link href="#link">FAQ's</Nav.Link>

                    </Nav>
                    <Nav >
                        <Nav.Link className='phone'>+XX XXX XXX XXX</Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs


