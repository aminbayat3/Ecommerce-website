import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);

        this.setState(() => ({
            email: '',
            password: ''
        }));
    } catch (error) {
        console.log(error);
    }
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  onHandleClick = () => {
    signInWithGoogle();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            name="email"
            type="email"
            onHandleChange={this.onHandleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onHandleChange={this.onHandleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton type='button' onHandleClick={this.onHandleClick} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
