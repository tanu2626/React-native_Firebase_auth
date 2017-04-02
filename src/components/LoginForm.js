import React, { Component }from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

// class based component
class LoginForm extends Component {
  //state - used to have feedback from the user
  // Initialize the state object to have a single property
  state = { email: '', password: '', error: '', loading: false };

  //add a helper method
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

      // This statement returns a promise
      // promise in JS is a construct to handle asynchronous code
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }

// helper methods
  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: 'false' });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            // add a prop called value
            value={this.state.email}
            // add prop onChangeText, its a callback function with a fat arrow function
            // set the state with the text
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            // password is arbitrary in onChangeText, we can rename anything
            onChangeText={password => this.setState({ password })}
            />
        </CardSection>

        <Text style={styles.errorTextStyles}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
