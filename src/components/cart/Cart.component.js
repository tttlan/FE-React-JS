import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CartListComponent from './CartList.component';

class CartComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
            total: 0
        };
    }

    handleChangeQuantity = (productId, quantity) => {
        let { products } = this.state;console.log(productId, quantity)
        for (let product of products) {
            if (product.id === productId) {
                product.quantity = quantity;
                break;
            }
        }
        this.setState({ products });
    }

    handleRemove = (productId) => {
        let { products } = this.state;
        products = products.filter(product => product.id !== productId);
        this.setState({ products });
    }

    calculateTotal = () => {
        return this.state.products.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
    }

    render() {
        return (
            <div>
                <div>Items in your cart</div>
                <Row>
                    <Col sm={8}>
                        <CartListComponent
                            products={this.state.products}
                            handleChangeQuantity={this.handleChangeQuantity}
                            handleRemove={this.handleRemove}
                        />
                    </Col>
                    <Col sm={4}>
                        <div>{'$' + this.calculateTotal()}</div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}
  
export default CartComponent;