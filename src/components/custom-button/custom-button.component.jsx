import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, type, isGoogleSignIn, onHandleClick }) => {
  return (
    <button
      type={type}
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} onClick={() => isGoogleSignIn ? onHandleClick() : null}
    >
      {children}
    </button>
  );
};

export default CustomButton;
