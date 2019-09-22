import React from 'react';

import CustomBottom from '../../components/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map( cartItem => (
                <CartItem  key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomBottom> GO TO CHECKOUT </CustomBottom>
    </div>
)

const mapStateDispatch = ({ cart: {cartItems} }) =>({
    cartItems
});

export default connect(mapStateDispatch)(CartDropdown);