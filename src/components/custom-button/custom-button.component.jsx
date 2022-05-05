import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  type,
  isGoogleSignIn,
  inverted,
  onHandleClick,
}) => {
  return (
    <button
      type={type}
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      onClick={() => (onHandleClick ? onHandleClick() : null)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
