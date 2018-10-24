import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.div}><Text>Ola</Text></View>
        <View style={styles.div}><Text>Ola</Text></View>
        <View style={styles.div}><Text>Ola</Text></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row'
  },
  div: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
