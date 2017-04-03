import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase libraries
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


// BOILERPLATE

// Root of an application
// class based Component

class App extends Component {
  state = { loggedIn: null };
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

// HELPER
renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
