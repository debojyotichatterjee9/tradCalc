/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import InputScreen from './src/views/InputScreen';
import Routes from './src/Routes';
export default class App extends React.Component<{}> {
  render() {
    return (
      <>
        <View style={styles.container}>
          <StatusBar backgroundColor="#00363a" barStyle="light-content" />
          <Routes />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#006064',
    color: '#ffffff',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
