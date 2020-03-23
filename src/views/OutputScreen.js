import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class OutputScreen extends React.Component<{}> {
  state = {
    data: '',
  };
  navigateBack = () => {
    Actions.pop();
  };
  componentDidMount() {
    this.setState({
      data: this.props,
    });
  }
  render() {
    console.log(this.state);
    const {highValue, lowValue, closeValue} = this.state.data;
    return (
      <View style={styles.container}>
        <Text>Output Screen</Text>
        <Text>highValue: {highValue}</Text>
        <Text>lowvalue: {lowValue}</Text>
        <Text>closeValue: {closeValue}</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.navigateBack()}>
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#00363a',
    width: 170,
    borderColor: '#428e92',
    borderRadius: 25,
    borderWidth: 3,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
