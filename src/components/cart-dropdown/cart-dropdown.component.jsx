import React from 'react';

import CustomBottom from '../../components/custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomBottom> GO TO CHECKOUT </CustomBottom>
    </div>
)

export default CartDropdown;