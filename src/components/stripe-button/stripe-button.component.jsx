import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KyekMEtItLwx7DYrwXJPT29d4ut4mfVEClKiYJoCzOX1kzGChgyjiNqgm3nixef5Uz3hXZHSDPbWQoC0fE17BGr009x0TldRI'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Evolve Clothing'
            billingAddress
            shippingAddress
            image='../../../src/Shirt.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;