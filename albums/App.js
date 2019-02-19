import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View 
      style={{ alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
            height: '100%',
            flex: 1,
           }}>
        <Header name='Valeera' />
        <AlbumList />
      </View>
    );
  }
}
