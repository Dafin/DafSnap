import React from 'react';
import { StyleSheet, Text, View, Button, Image , Platform} from 'react-native';

import Camera from 'react-native-snap-camera';
import Emoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text'

const HEADER_MARGIN = Platform.select({
    ios:0,
    android:24 
  });

export default class App extends React.Component {

  state = {
    emojiIsVisible: false,
    textIsVisible: false

  }


  changeEmojiState(){
    this.setState({
      emojiIsVisible: !this.state.emojiIsVisible

    })
  }


  changeTextState(){
    this.setState({
      textIsVisible: !this.state.textIsVisible
    })
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text 
      style={styles.title} 
      onPress={this.changeTextState.bind(this)}>
      SnapDaf
      </Text>


      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <Text>My Edits innit!!</Text>
      </View>

      <Emoji isVisible={this.emojiIsVisible}>
      <SnapText isVisible={this.textIsVisible}>
      <Camera type="front"/> 
      </SnapText>
      </Emoji>

      </View>
      );
    }
  }


  //styles


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'cyan'
    },

    header: {
      backgroundColor: 'orange',
      alignItems: 'center',
    },

    title: {
      fontSize : 30,
      backgroundColor: 'yellow',
      color: 'white',
      marginTop: 20
    },

    button: {
      backgroundColor: 'gray'
    }



  });
