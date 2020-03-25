import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Package from '../../package.json';
export default class InputScreen extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <View style={styles.bottomInfoTextContainer}>
          <Text style={styles.bottomInfoText}>
    © Debojyoti Chatterjee 
          </Text>
          <Text style={styles.versionInfo}>Version: {Package.version}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006064',
    color: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomInfoTextContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
  },
  bottomInfoText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16,
  },
  versionInfo : {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16,
  }
});
