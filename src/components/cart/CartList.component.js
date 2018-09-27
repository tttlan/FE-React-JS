import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import CartItemComponent from './CartItem.component';
import CartSummaryComponent from './CartSummary.component';

class CartListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table responsive>
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
                    <tr>
                        <td>
                            Total
                        </td>
                        <td colSpan="3">
                            <CartSummaryComponent total={this.props.total} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
  
export default CartListComponent;