import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = StyleSheet.create({
    black: {
        color: 'black'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        color: 'black',
        fontSize: 18,
    },
    thumbnailStyle:{
        height: 50,
        width: 50,
    },
    imageStyle:{
        width: null,
        height: 300,
        flex: 1,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
});

export default class AlbumDetail extends Component {
  render() {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: this.props.album.thumbnail_image }} />
                </View>
                <View styles={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                    <Text style={styles.black}>{this.props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: this.props.album.image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(this.props.album.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
  }
}