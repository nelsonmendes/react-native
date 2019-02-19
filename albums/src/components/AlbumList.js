import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const styles = StyleSheet.create({
    red: {
        color: 'red'
    },
    viewStyle: {
      width: '100%',
    }
});

export default class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log('component will mount in album list');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => this.setState({ albums: res.data }))
  }

  renderAlbums(){
    console.log('renderAlbums');
    return(this.state.albums.map((album,k) => {
      return(
        <AlbumDetail key={ k } album={ album } />
      )
    })
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={styles.viewStyle}>
        <Text style={styles.red}>Album List!</Text>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
