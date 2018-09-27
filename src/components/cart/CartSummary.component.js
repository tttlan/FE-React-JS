import React, { Component } from 'react';

class CartSummaryComponent extends Component {
    render() {
        return (
            <div>{'$' + this.props.total}</div>
        );
    }
}
  
export default CartSummaryComponent;