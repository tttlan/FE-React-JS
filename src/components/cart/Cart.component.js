import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CartListComponent from './CartList.component';
import CartSummaryComponent from './CartSummary.component';

class CartComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
            total: this.calculateTotal(props.products)
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
                        <CartSummaryComponent total={this.state.total} />
                    </Col>
                </Row>
                
            </div>
        );
    }
}
  
export default CartComponent;