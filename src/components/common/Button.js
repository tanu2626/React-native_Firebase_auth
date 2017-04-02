import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// onPress should be same we mentioned prop on AlbumDetail
const Button = ({ onPress, children }) => {
  // Destructure button style from styles
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingButton: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
    }
};

export { Button };
// cannot use default when we are using exports * in index.js
// export default Button;

// TouchableOpacity is coming from react native.com
// it is only a button to get fade after user click the button

// Flex: 1 means
// we want this button to expand the content it possibly can
