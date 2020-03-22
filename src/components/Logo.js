import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Logo extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.logoText}>Welcome username...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    color: '#ffffff',
    fontSize: 18,
    marginVertical: 15,
  },
});
