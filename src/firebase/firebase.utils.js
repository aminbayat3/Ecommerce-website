import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-82rpgW4W8hK6kpkZHPIhtaausTwi0As",
    authDomain: "ecommerce-db-216e7.firebaseapp.com",
    projectId: "ecommerce-db-216e7",
    storageBucket: "ecommerce-db-216e7.appspot.com",
    messagingSenderId: "294928942920",
    appId: "1:294928942920:web:1ebe794630a4fadd67957d",
    measurementId: "G-WECCGEXCZP"
  };

  firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// firebase auth gives us session persistence: when we close the application and come back we can see we are still signed in

// we have localStorage and sessionStorage in the window object / sessionStorage we can keep the data as long as we dont close the application so we can refresh the page and still have our data whereas with localStorage as you can probably guess we will have the data even when we close the page
  