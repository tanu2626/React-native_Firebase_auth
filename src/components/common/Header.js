// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// component name should be same as the componentfile  name
const Header = (props) => {
  // use styles like so (Destructuring)
  const { textStyle, viewStyle } = styles;

  return (
    // Wrap text inside View
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// for styling each individual components
const styles = {
  // To style View
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make a component available to other parts of the app
export { Header };

// view
// purpose pf view: just to position text elements correctlt

// we will gonna wrap text with view
