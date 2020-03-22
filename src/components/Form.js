import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import factor from '../customFunctions/valueData';

const numberBucket = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default class Form extends React.Component<{}> {
  state = {
    highValue: 0.0,
    lowValue: 0.0,
    closeValue: 0.0,
    resultTables: {},
  };
  calculateData(highValue, lowValue, closeValue) {
    console.log(
      `highValue: ${highValue}, lowValue: ${lowValue}, closeValue: ${closeValue}`,
    );
    const highLowDifference = highValue - lowValue;
    console.log(`highLowDifference: ${highLowDifference}`);
    numberBucket.forEach(element => {
      if (highLowDifference % element === 0) {
        // console.log(`result: ${highLowDifference / element}`);
        const x = highLowDifference / element;
        console.log(`x:${x}`);
        if (factor[x]) {
          const factorValue = factor[x].primaryFactor * element;
          console.log(`factor: ${factorValue}`);
          const neutralPoint1 = this.state.closeValue + factorValue;
          const neutralPoint2 = this.state.closeValue - factorValue;
          console.log(neutralPoint1, neutralPoint2);
          const a1 = neutralPoint1 + factor[x].factor1 * element;
          const a2 = a1 + factor[x].factor2 * element;
          const a3 = a2 + factor[x].factor3 * element;
          const a4 = a3 + factor[x].factor4 * element;
          console.log(a1, a2, a3, a4);
          const b1 = neutralPoint2 - factor[x].factor1 * element;
          const b2 = b1 - factor[x].factor2 * element;
          const b3 = b2 - factor[x].factor3 * element;
          const b4 = b3 - factor[x].factor4 * element;
          console.log(b1, b2, b3, b4);
          this.setState(
            Object.assign(this.state.resultTables, {
              [x]: {
                a1: a1,
                a2: a2,
                a3: a3,
                a4: a4,
                neutralPoint1: neutralPoint1,
                neutralPoint2: neutralPoint2,
                b1: b1,
                b2: b2,
                b3: b3,
                b4: b4,
              },
            }),
          );
        }
      } else {
        console.log('Factor Not found!!!');
      }
    });
    console.log(this.state.resultTables);
  }
  render() {
    let {highValue, lowValue, closeValue} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          onChangeText={inputValue =>
            this.setState({highValue: parseFloat(inputValue)})
          }
          //   value={value}
          placeholder="Enter High Value..."
          placeholderTextColor="#ffffff"
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={inputValue =>
            this.setState({lowValue: parseFloat(inputValue)})
          }
          //   value={value}
          placeholder="Enter Low Value..."
          placeholderTextColor="#ffffff"
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={inputValue =>
            this.setState({closeValue: parseFloat(inputValue)})
          }
          //   value={value}
          placeholder="Enter Close Value..."
          placeholderTextColor="#ffffff"
          keyboardType="decimal-pad"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.calculateData(highValue, lowValue, closeValue)}>
          <Text style={styles.buttonText}> Calculate </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    height: 40,
    width: 300,
    backgroundColor: '#428e92',
    borderColor: '#00363a',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00363a',
    width: 300,
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
