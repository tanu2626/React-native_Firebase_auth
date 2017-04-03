import React from 'react';
import { View } from 'react-native';


// Card Component // functional component

const Card = (props) => {
  return (
    // that is how we put styles inside view
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

// props.children means add this line <Text>{props.album.title}</Text>
// so instaed of writing whol, write props.children

// names are completely arbitrary, can be named anything meaningful
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
