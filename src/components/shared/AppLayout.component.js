import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import AppHeader from './AppHeader.component';
import Routes from '../../routes/AppRoutes';
import AppBreadcrumb from './AppBreadcrumb.component';
import AppFooter from './AppFooter.component';

import './app-layout.scss';

class AppLayout extends Component {
    render() {
        return (
            <div className="app-layout">
                <AppHeader />

                <Grid className="app-layout__content">
                    <Row className="show-grid">
                        <Col xs={12} md={12} className="app-layout__content-view">
                            <AppBreadcrumb />
                            <Routes />
                        </Col>
                    </Row>
                </Grid>

                <AppFooter />
            </div>
        );
    }
}

export default AppLayout;