import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ hidden }) => {      // in these situations when we want to return more than one block using an if statement we need to know that we should not wrap the entire if statement with a return function because the if statement itself will return something so that's why you will get an error if you wrap it with another return function             
  if (!hidden) {      // this approach is again not a good one since it gets rendered regardless of whether hidden is true or false, I know we wont go through that block of code inside of the if statement if condition was true, but still it's not a great way to handle this situation, so instead we can put a condition inside of the header component so if the condition was not true the cartDropdown component wont get rerendered atall and you can clearly see that this is a better way.   
    return (
      <div className='cart-dropdown'>
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  } else {
    return null;
  }


  // return(  // the wrong way
  //   if(hidden) {
  //     return (
  //       <div>
  //         <div className="cart-items">Amin</div>
  //         <CustomButton>GO TO CHECKOUT</CustomButton>
  //       </div>
  //     );
  //   }
  // )
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(CartDropdown);
