import React from 'react';

import CustomBottom from '../../components/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateDispatch = state =>({
    cartItems: selectCartItems(state)
});

const mapStateToProps = state => ({
    selectCartItems: selectCartItems(state)
});

export default connect(mapStateDispatch)(CartDropdown); 