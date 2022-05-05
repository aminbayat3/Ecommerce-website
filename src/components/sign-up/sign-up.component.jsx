import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  isSubmit = null;

  onHandleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match!");
      return;
    }
    this.isSubmit = true; //for a fetch call using abortController is better// also in this case you can use a library called cancelable-promise

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      if(this.isSubmit) {
        this.setState(() => ({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));
      }
     
    } catch (error) {
      console.log('memory leak!', error);
    }
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  componentWillUnmount() {
    this.isSubmit = false;
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.onHandleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.onHandleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.onHandleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.onHandleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onHandleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
