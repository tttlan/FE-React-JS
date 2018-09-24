import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import FilterableUserTable from './FilterableUserTable.component';

class UsersComponent extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <FilterableUserTable users={this.props.users} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
  
export default UsersComponent;