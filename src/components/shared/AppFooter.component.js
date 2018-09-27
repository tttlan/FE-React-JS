import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './app-footer.scss';

class AppFooter extends Component {
    render() {
        return (
            <Grid className="app-footer">
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        Footer
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AppFooter;