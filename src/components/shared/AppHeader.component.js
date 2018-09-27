import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import logo from '../../logo.svg';
import './app-header.scss';

class AppHeader extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect className="app-header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src={logo} className="app-header__logo" alt="logo" />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/" className="app-header__menu">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="/cart" className="app-header__menu">
                            Cart
                        </NavItem>
                    </Nav>
                    <Navbar.Text pullRight className="app-header__user">User</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppHeader;