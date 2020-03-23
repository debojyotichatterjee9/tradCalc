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
export default class InputScreen extends React.Component<{}> {
  render() {
    return (
      <View>
        <Logo />
        <Form />
        <View style={styles.bottomInfoTextContainer}>
          <Text style={styles.bottomInfoText}>
            Enter the values to calculate...
          </Text>
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
});
