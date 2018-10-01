import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';

import './app-footer.scss';

class AppFooter extends Component {
    render() {
        return (
            <Navbar className="app-footer">
                <Navbar.Text>
                    Welcome to React.js
                </Navbar.Text>
            </Navbar>
        );
    }
}

export default AppFooter;