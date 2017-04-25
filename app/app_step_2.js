import React from 'react';
import { View, Text } from 'react-native';
import MyComponent from '../components/MyComponent2';

class App extends React.Component {
  render() {
    return (
      <MyComponent
        title={'Welcome!'}
        subtitle={'(Open up main.js to start working)'}
      />
    );
  }
}

export default App;
