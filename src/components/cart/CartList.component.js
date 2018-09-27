import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import CartItemComponent from './CartItem.component';

class CartListComponent extends Component {
    render() {
        return (<Table responsive>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.products.map(item => {
                        return (
                            <CartItemComponent
                                key={item.id}
                                item={item}
                                handleChangeQuantity={this.props.handleChangeQuantity}
                                handleRemove={this.props.handleRemove}
                            />
                        );
                    })
                }
            </tbody>
        </Table>
        );
    }
}

export default CartListComponent;