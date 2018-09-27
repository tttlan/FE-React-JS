import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Home extends Component {
    render() {
        return (
            <Grid className="app-home">
                <Row className="show-grid">
                    <Col xs={12} md={12} className="app-home__content">
                        Home
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;