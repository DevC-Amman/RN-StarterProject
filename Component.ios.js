import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'red',
    margin: 10,
    padding: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default class CustomComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this._OnPress = this._OnPress.bind(this);

    console.log('constructor');
  }


  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevdata, newdata) {
    console.log('componentDidUpdate', prevdata, newdata);
  }

  _OnPress() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          OS: {this.props.platform}
        </Text>

        <Text style={styles.text}>
          Count {this.state.count}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this._OnPress}
        >
          <Text style={styles.buttonText}>Count Change</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
