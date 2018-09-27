import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

import './app-breadcrumb.scss';

class AppBreadcrumb extends Component {
    render() {
        return (
            <Breadcrumb className="app-breadcrumb">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/cart">
                    Shopping Cart
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default AppBreadcrumb;