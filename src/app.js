import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase libraries
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


// BOILERPLATE

// Root of an application
// class based Component

class App extends Component {
  // add lifecycle methods are methods that are authomatically called
  componentWillMount() {
    // coming from firebase web setup
    firebase.initializeApp({
      apiKey: "AIzaSyD4kBrx6kVl273joUoMirMshISqHKyv10w",
      authDomain: "authentication-62294.firebaseapp.com",
      databaseURL: "https://authentication-62294.firebaseio.com",
      projectId: "authentication-62294",
      storageBucket: "authentication-62294.appspot.com",
      messagingSenderId: "1058894981956"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
        </View>
    );
  }
}

export default App;
