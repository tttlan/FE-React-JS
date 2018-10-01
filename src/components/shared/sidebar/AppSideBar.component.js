import React, { Component } from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import './app-sidebar.scss';

class AppSidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nav>
                <NavItem href="#" > Link 1 </NavItem>
                <NavItem href="#" > Link 2 </NavItem>
                <NavItem href="#" > Link 3 </NavItem>
                <NavItem href="#" > Link 4 </NavItem>
            </Nav>
        )
    }
}

export default AppSidebar;