import React, { Component }from 'react';
import { Button, Card, CardSection, Input } from './common';

// class based component
class LoginForm extends Component {
  //state - used to have feedback from the user
  // Initialize the state object to have a single property
  state = { email: '', password: '' };

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

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
