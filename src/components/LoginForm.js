import React, { Component }from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

// class based component
class LoginForm extends Component {
  //state - used to have feedback from the user
  // Initialize the state object to have a single property
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            // add a prop called value
            value={this.setState}
            // add prop onChangeText, its a callback function with a fat arrow function
            // set the state with the text
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }} />
        </CardSection>

        <CardSection />

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
