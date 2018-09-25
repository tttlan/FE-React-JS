import React, { Component } from 'react';

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
                <div className="cart">
                    <div className="cart__items">
                        <CartListComponent
                            products={this.state.products}
                            handleChangeQuantity={this.handleChangeQuantity}
                            handleRemove={this.handleRemove}
                        />
                    </div>
                    <div className="cart_summary">
                        <div>{this.calculateTotal()}</div>
                    </div>
                </div>
                
            </div>
        );
    }
}
  
export default CartComponent;