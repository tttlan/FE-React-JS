import React, { Component } from 'react';
import Header from './Header.component';
import Routes from '../../routes/Routes';

class Layout extends Component {
    render() {
        return (
            <div className="app-layout">
                <Header />
                <Routes />
            </div>
        );
    }
}

export default Layout;