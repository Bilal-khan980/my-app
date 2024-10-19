import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Assets/logox.png';

function Navigationbar() {
    const location = useLocation();
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const navbarStyle = {
        height: 90,
        paddingLeft: '35px',
        zIndex: 1000,
        transition: 'backdrop-filter 0.3s ease',
    };

    const navbarCollapseStyle = {
        backdropFilter: isNavbarExpanded && windowWidth < 768 ? 'blur(8px)' : 'none', 
        backgroundColor: isNavbarExpanded && windowWidth < 768 ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        transition: 'backdrop-filter 0.3s ease, background-color 0.3s ease',
    };

    const logoStyle = {
        height: windowWidth < 768 ? 60 : 150, 
        transition: 'height 0.3s ease',
    };

    const handleLinkClick = () => {
        if (windowWidth < 768) {
            setIsNavbarExpanded(false); 
        }
    };

    return (
        <>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                style={navbarStyle}
                expanded={isNavbarExpanded}
                onToggle={(expanded) => setIsNavbarExpanded(expanded)}
            >
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        style={logoStyle}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={navbarCollapseStyle}
                >
                    <Nav className="mr-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/usedcars" 
                            style={getLinkStyle('/usedcars')}
                            onClick={handleLinkClick}
                        >
                            Used Cars
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/newcars" 
                            style={getLinkStyle('/newcars')}
                            onClick={handleLinkClick} 
                        >
                            New Cars
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/bikes" 
                            style={getLinkStyle('/bikes')}
                            onClick={handleLinkClick} 
                        >
                            Bikes
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            style={getLinkStyle('/about')}
                            onClick={handleLinkClick} 
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" 
                            style={getLinkStyle('/contact')}
                            onClick={handleLinkClick}    
                        >
                            Contact Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/loginpage" 
                            style={getLinkStyle('/contact')}
                            onClick={handleLinkClick}    
                        >
                            Login/Register
                        </Nav.Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <Button
                            style={{ backgroundColor: 'grey', border: '3px solid black', margin: '10px 0' }}
                            as={Link}
                            to="/postads"
                            onClick={handleLinkClick}    
                        >
                            Post an Ad
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigationbar;
