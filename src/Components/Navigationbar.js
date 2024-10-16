import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Assets/logox.png';

function Navigationbar() {
    const location = useLocation();

    // Styles
    const linkStyle = {
        color: 'white',
        padding: '10px 15px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        fontSize: '16px',
    };

    const activeLinkStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
    };

    const getLinkStyle = (path) => {
        return location.pathname === path ? { ...linkStyle, ...activeLinkStyle } : linkStyle;
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 90, paddingLeft: "35px", zIndex: "1000" }}>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height={150} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/usedcars" 
                            style={getLinkStyle('/usedcars')}
                        >
                            Used Cars
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/newcars" 
                            style={getLinkStyle('/newcars')}
                        >
                            New Cars
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/bikes" 
                            style={getLinkStyle('/bikes')}
                        >
                            Bikes
                        </Nav.Link>
                        {/* <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={getLinkStyle('/auto-store')}
                        >
                            Auto Store
                        </Nav.Link> */}
                        {/* <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={getLinkStyle('/videos')}
                        >
                            Videos
                        </Nav.Link> */}
                        {/* <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={getLinkStyle('/forums')}
                        >
                            Forums
                        </Nav.Link> */}
                        {/* <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={getLinkStyle('/blog')}
                        >
                            Blog
                        </Nav.Link> */}
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            style={getLinkStyle('/blog')}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" 
                            style={getLinkStyle('/blog')}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>

                    <Nav className="ml-auto" style={{paddingLeft : '630px'}}>
                        {/* Post an Ad Button */}
                        <Button style={{backgroundColor : 'grey' , border : '3px solid black' }} as={Link} to="/postads">
                            Post an Ad
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigationbar;
