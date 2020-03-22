/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Input from './src/components/Input';
export default class App extends React.Component<{}> {
  render() {
    return (
      <>
        <View style={styles.container}>
          <StatusBar backgroundColor="#00363a" barStyle="light-content" />
          <Input />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: '#006064',
    color: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
