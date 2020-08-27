import React, {Component} from 'react';
import {Col, Navbar, Nav, NavDropdown, FormControl} from "react-bootstrap";

class Header extends Component {
    render() {
        const headerStyle = {
            "borderBottom": "1px solid lightgreen",
            "padding": "15px 0",
            "marginBottom": "15px"
        };

        return (
            <Col sm={12} style={headerStyle}>
                <h1 className="text-center">Our Online Class</h1>

                <Navbar bg="light" expand="lg">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/courses">Courses</Nav.Link>
                            <Nav.Link href="/cart-details">Cart Details</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </Col>


        );
    }
}

export default Header;