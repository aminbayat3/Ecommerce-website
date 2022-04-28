import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

// as we can see componentWillUnmount does not get called when we signout and this leads to memory leak since we cannot cancel the subscription or any asynchronous tasks. the solution is to do the cleanup inside of signInAndsignUpPage component instead
class App extends React.Component {
  // constructor() {
  //   super();

  //   this.componentCleanup = this.componentCleanup.bind(this);
  // }
  unsubscribeFromAuth = null;

  // componentCleanup() {
  //   this.unsubscribeFromAuth();
  //   console.log("cleanup")
  // }

  componentDidMount() {
    console.log('mount')
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot((snapShot) => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })


      }
      setCurrentUser(userAuth);

    });
    // window.addEventListener('beforeunload', this.componentCleanup); // this is for when we are refreshing the page:::When the page refreshes react doesn't have the chance to unmount the components as normal. Use the window.onbeforeunload event to set a handler for refresh
  }

  componentWillUnmount() { //we need this lifecycle method because when we leave the webiste we want to cleanup all the subscriptions
    this.unsubscribeFromAuth();
  }

//  componentWillUnmount() {
//    this.componentCleanup();
//    console.log('unmount');
//    window.removeEventListener('beforeunload', this.componentCleanup);
//  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user: { currentUser }}) => ({ currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
 

//git commit -m "updating our app to redirect to home if user is signed in"