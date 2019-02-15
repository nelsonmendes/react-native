import React, { Component } from 'react';
import { View } from 'react-native';
import Greeting from './src/components/Greeting';

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}