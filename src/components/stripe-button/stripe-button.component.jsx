import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_2dQL9hvPyxjEWht8k3K4hK6q000XFWEKqY';

    const onToken = token =>{
        alert('Payment sucessful')
    }

    return(
        <StripeCheckout 
            label="Pay Now"    
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price} €`  }
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;