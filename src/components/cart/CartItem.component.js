import React, { Component } from 'react';
import { Image, FormControl, Button } from 'react-bootstrap';

class CartItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: props.quantity || 1
        };
    }

    handleChangeQuantity = (event) => {
        this.props.handleChangeQuantity && this.props.handleChangeQuantity(this.props.item.id, event.target.value);
    }

    handleRemove = (productId) => {
        this.props.handleRemove && this.props.handleRemove(productId);
    }

    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>
                    <div>
                        <Image src={item.image} width={100} alt="product" rounded />
                    </div>
                    <div>
                        <div>{item.name}</div>
                        <div>{`$${item.price}`}</div>
                    </div>
                </td>
                <td>
                    <FormControl
                        type="number"
                        value={item.quantity}
                        placeholder="Enter quantity"
                        onChange={this.handleChangeQuantity}
                    />
                </td>
                <td>
                    {item.quantity * item.price}
                </td>
                <td>
                    <Button bsStyle="danger" onClick={this.handleRemove.bind(this, item.id)}>Remove</Button>
                </td>
            </tr>
        );
    }
}

export default CartItemComponent;