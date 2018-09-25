import React, { Component } from 'react';

import CartPageComponent from '../components/cart/CartPage.component';

const products = [
    {
        id: 1,
        name: 'iPhone Xr 256 GB',
        price: 899,
        quantity: 1,
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/09/13/201809131225504712_1845892.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg'
    },
    {
        id: 2,
        name: 'iPhone Xs 512 GB',
        price: 1349,
        quantity: 1,
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/09/13/201809131225504712_1845892.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg'
    },
    {
        id: 3,
        name: 'iPhone Xs Max 512 GB',
        price: 1449,
        quantity: 1,
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/09/13/201809131225504712_1845892.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg'
    }
];

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    render() {
        return (
            <CartPageComponent products={products}/>
        );
    }
}
  
export default Cart;