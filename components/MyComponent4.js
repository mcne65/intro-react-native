import React from 'react';
import { View, Text, Button } from 'react-native';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log('...... load app for the first time');
    console.log('constructor');
    this.state = {
      counter: 0
    };

    this.increase = this.increase.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');

    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  increase() {
    let { counter } = this.state;

    console.log('...... button is clicked, counter will increase');
    this.setState({
      counter: counter + 1
    });
  }

  render() {
    console.log('render');
    console.log('...... component is rendered');

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
