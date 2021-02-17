import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contacts">
                CONTACTS
            </Link>
            <Link className="option" to="/checkout">
                CHECKOUT
            </Link>

            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}> SIGN&nbsp;OUT </div>
                :
                <Link className="option" to="/signin">  SIGN&nbsp;IN </Link>
            }
            <CartIcon />
        </div>
        {  hidden ? null : <CartDropdown/> }
        
    </div>
)

const mapStateProps = ({ user:{ currentUser }, cart:{ hidden } } ) => ({
    currentUser,
    hidden
});

export default connect(mapStateProps)(Header);

