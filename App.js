import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}> Hello World</Text>


        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>My Edits start here right!!</Text>
        </View>

      </View>
    );
  }
}



//4.styles


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'orange',    
  },

    title: {
    fontSize : 30,
    backgroundColor: 'yellow',
    color: 'white',
  }


});
