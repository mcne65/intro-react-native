import React from 'react';
import { View, Text, Button } from 'react-native';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.increase = this.increase.bind(this);
  }

  increase() {
    let { counter } = this.state;

    this.setState({
      counter: counter + 1
    });
  }

  render() {
    const { title, subtitle } = this.props;
    const { counter } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>
          { title }
        </Text>

        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>
          { subtitle }
        </Text>

        <Text style={{ fontSize: 40, fontWeight: '900', marginTop: 40 }}>
          { counter }
        </Text>

        <Button
          title={'Increase!'}
          onPress={this.increase}
        />
      </View>
    );
  }
};

MyComponent.defaultProps = {
  title: 'Default title',
  subtitle: 'Default subtitle'
};

export default MyComponent;
