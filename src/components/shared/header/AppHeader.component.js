import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import logo from '../../../logo.svg';
import './app-header.scss';

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    handleOpenSidebar = () => {
        this.props.handleOpenSidebar && this.props.handleOpenSidebar();
    }

    render() {
        return (
            <Navbar className="app-header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src={logo} className="app-header__logo" alt="logo" />
                        </a>
                        <Button className="btn-sidebar" bsStyle="primary" onClick={this.handleOpenSidebar}>
                            <Glyphicon glyph="menu-hamburger" />
                        </Button>
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