import React from 'react';
import { View, Text } from 'react-native';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>
          { title }
        </Text>

        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>
          { subtitle }
        </Text>
      </View>
    );
  }
};

MyComponent.defaultProps = {
  title: 'Default title',
  subtitle: 'Default subtitle'
};

export default MyComponent;
