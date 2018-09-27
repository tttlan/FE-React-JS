import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import CartListComponent from './CartList.component';

class CartComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
            total: this.calculateTotal(props.products)
        };
    }

    handleChangeQuantity = (productId, quantity) => {
        let { products } = this.state; console.log(productId, quantity)
        for (let product of products) {
            if (product.id === productId) {
                product.quantity = quantity;
                break;
            }
        }
        const total = this.calculateTotal(this.state.products);
        this.setState({ products, total });
    }

    handleRemove = (productId) => {
        let { products } = this.state;
        products = products.filter(product => product.id !== productId);
        const total = this.calculateTotal(products);
        this.setState({ products, total });
    }

    calculateTotal = (products) => {
        return products.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
    }

    render() {
        return (
            <Grid bsClass="cart">
                <Row>
                    <Col sm={12} md={12}>
                        <CartListComponent
                            products={this.state.products}
                            total={this.state.total}
                            handleChangeQuantity={this.handleChangeQuantity}
                            handleRemove={this.handleRemove}
                        />
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default CartComponent;