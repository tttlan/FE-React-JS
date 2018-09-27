import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './cart.scss';

import CartComponent from './Cart.component';

class CartPageComponent extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <CartComponent products={this.props.products} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
  
export default CartPageComponent;