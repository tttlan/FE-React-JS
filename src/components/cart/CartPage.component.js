import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Cart.scss';

import CartComponent from './Cart.component';

class CartPageComponent extends Component {
    render() {
        return (
            <Grid>
                <Row>Shopping Cart</Row>
                <Row>
                    <Col xs={12}>
                        <CartComponent products={this.props.products} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
  
export default CartPageComponent;