import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import './app-breadcrumb.scss';

class AppBreadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbs: [
                {
                    id: 'home',
                    name: 'Home',
                    icon: 'glyphicon glyphicon-home',
                    href: '/'
                },
                {
                    id: 'shopping_cart',
                    name: 'Shopping Cart',
                    icon: 'glyphicon glyphicon-shopping-cart',
                    href: '/cart'
                }
            ]
        };

        this.checkActiveBreadcrumbItem = this.checkActiveBreadcrumbItem.bind(this);
        this.showBreadcrumb = this.showBreadcrumb.bind(this);
    }

    checkActiveBreadcrumbItem(pathName) {
        const currentPathName = window.location.pathname;
        let active = false;

        if (currentPathName === pathName) {
            active = true;
        }

        return active;
    }

    showBreadcrumb(href) {
        const currentPathName = window.location.pathname;
        let show = false;

        if (currentPathName.indexOf(href) > -1) {
            show = true;
        }

        return show;
    }

    render() {
        return (
            <Breadcrumb className="app-breadcrumb">
                {
                    this.state.breadcrumbs.map((breadcrumb) => {
                        return (
                            this.showBreadcrumb(breadcrumb.href) ?
                                <Breadcrumb.Item key={breadcrumb.id} href={breadcrumb.href} active={this.checkActiveBreadcrumbItem(breadcrumb.href)} >
                                    <Glyphicon glyph={breadcrumb.icon} /> &nbsp; {breadcrumb.name}
                                </Breadcrumb.Item>
                                : ''
                        );
                    })
                }
            </Breadcrumb>
        );
    }
}

export default AppBreadcrumb;