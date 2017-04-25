import React from 'react';
import { View, Text } from 'react-native';

class MyComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>
          Welcome!
        </Text>

        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>
          (Open up main.js to start working)
        </Text>
      </View>
    );
  }
};

export default MyComponent;
