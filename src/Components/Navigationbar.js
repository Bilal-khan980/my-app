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
                            to="/" 
                            style={location.pathname === '/used-cars' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            Used Cars
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={location.pathname === '/new-cars' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            New Cars
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={location.pathname === '/bikes' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            Bikes
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={location.pathname === '/auto-store' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            Auto Store
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={location.pathname === '/videos' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            Videos
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={location.pathname === '/forums' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            Forums
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            style={location.pathname === '/blog' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                        >
                            Blog
                        </Nav.Link>
                    </Nav>

                    <Nav className="ml-auto" style={{paddingLeft : '630px'}}>
                        {/* Post an Ad Button */}
                        <Button style={{backgroundColor : 'grey' , border : '3px solid black' }} as={Link} to="/">
                            Post an Ad
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigationbar;
