import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

import './app-breadcrumb.scss';

class AppBreadcrumb extends Component {
    checkActiveBreadcrumbItem(pathName) {
        const currentPathName = window.location.pathname;
        let active = false;

        switch (currentPathName) {
            case pathName:
                active = true;
                break;
            case pathName:
                active = true;
                break;
            default:
                break;

        }

        console.log(active);
        return active;
    }

    render() {
        return (
            <Breadcrumb className="app-breadcrumb">
                <Breadcrumb.Item active={this.checkActiveBreadcrumbItem('/')}>Home</Breadcrumb.Item>
                {
                    this.checkActiveBreadcrumbItem('/cart') ?
                        <Breadcrumb.Item active={this.checkActiveBreadcrumbItem('/cart')}>Shopping Cart</Breadcrumb.Item> : ''
                }
            </Breadcrumb>
        );
    }
}

export default AppBreadcrumb;