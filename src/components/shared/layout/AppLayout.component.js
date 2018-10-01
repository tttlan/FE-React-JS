import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Routes from '../../../routes/AppRoutes';
import AppHeader from '../header/AppHeader.component';
import AppBreadcrumb from '../breadcrumb/AppBreadcrumb.component';
import AppFooter from '../footer/AppFooter.component';
import AppSidebar from '../sidebar/AppSideBar.component';

import './app-layout.scss';

class AppLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    handleOpenSidebar = () => {
        console.log('fds');
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="app-layout">
                <AppHeader handleOpenSidebar={this.handleOpenSidebar} />

                <Grid className="app-layout__content">
                    <Row className="show-grid">
                        {
                            this.state.show ?
                                <Col xs={3} md={3} className="app-layout__sidebar">
                                    <AppSidebar show={this.state.show} handleOpenSidebar={this.handleOpenSidebar}/>
                                </Col> : ''
                        }
                        <Col xs={this.state.show ? 9 : 12} md={this.state.show ? 9 : 12} className="app-layout__content-view">
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