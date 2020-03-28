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
import {Actions} from 'react-native-router-flux';

const numberBucket = [2, 3, 5, 7];
const undivisibleAdder = 0.07;
export default class Form extends React.Component<{}> {
  state = {
    highValue: 0.0,
    lowValue: 0.0,
    closeValue: 0.0,
    resultTables: {},
  };
  calculateData(highValue, lowValue, closeValue) {
    if (!highValue || !lowValue || !closeValue) {
      alert('Please enter all the values correctly!');
    } else {
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
                  id: x,
                  a1: a1.toFixed(2),
                  a2: a2.toFixed(2),
                  a3: a3.toFixed(2),
                  a4: a4.toFixed(2),
                  neutralPoint1: neutralPoint1.toFixed(2),
                  neutralPoint2: neutralPoint2.toFixed(2),
                  b1: b1.toFixed(2),
                  b2: b2.toFixed(2),
                  b3: b3.toFixed(2),
                  b4: b4.toFixed(2),
                },
              }),
            );
          }
        }
        //  else if (
        //   highLowDifference % 2 !== 0 &&
        //   highLowDifference % element !== 0
        // ) {
        //   console.log('undivisibleAdder!');
        //   const x = parseInt(highLowDifference / element, 10);
        //   console.log(`x:${x}`);
        //   if (factor[x]) {
        //     const factorValue =
        //       factor[x].primaryFactor * element + undivisibleAdder;
        //     console.log(`factor: ${factorValue}`);
        //     const neutralPoint1 = this.state.closeValue + factorValue;
        //     const neutralPoint2 = this.state.closeValue - factorValue;
        //     console.log(neutralPoint1, neutralPoint2);
        //     const a1 =
        //       neutralPoint1 + factor[x].factor1 * element + undivisibleAdder;
        //     const a2 = a1 + factor[x].factor2 * element + undivisibleAdder;
        //     const a3 = a2 + factor[x].factor3 * element + undivisibleAdder;
        //     const a4 = a3 + factor[x].factor4 * element + undivisibleAdder;
        //     console.log(a1, a2, a3, a4);
        //     const b1 =
        //       neutralPoint2 - factor[x].factor1 * element + undivisibleAdder;
        //     const b2 = b1 - factor[x].factor2 * element + undivisibleAdder;
        //     const b3 = b2 - factor[x].factor3 * element + undivisibleAdder;
        //     const b4 = b3 - factor[x].factor4 * element + undivisibleAdder;
        //     console.log(b1, b2, b3, b4);
        //     this.setState(
        //       Object.assign(this.state.resultTables, {
        //         [x]: {
        //           id: x,
        //           a1: a1.toFixed(2),
        //           a2: a2.toFixed(2),
        //           a3: a3.toFixed(2),
        //           a4: a4.toFixed(2),
        //           neutralPoint1: neutralPoint1.toFixed(2),
        //           neutralPoint2: neutralPoint2.toFixed(2),
        //           b1: b1.toFixed(2),
        //           b2: b2.toFixed(2),
        //           b3: b3.toFixed(2),
        //           b4: b4.toFixed(2),
        //         },
        //       }),
        //     );
        //   }
        // } 
        else {
          console.log('Factor not found!!!');
          const factorValue = factor[2].primaryFactor * element;
          const y = highLowDifference / 2;
            console.log(`factor: ${factorValue}`);
            const neutralPoint1 = this.state.closeValue + (y * factor[2].primaryFactor);
            const neutralPoint2 = this.state.closeValue - (y * factor[2].primaryFactor);
            console.log(neutralPoint1, neutralPoint2);
            const a1 = neutralPoint1 + factor[2].factor1 * y;
            const a2 = a1 + factor[2].factor2 * y;
            const a3 = a2 + factor[2].factor3 * y;
            const a4 = a3 + factor[2].factor4 * y;
            console.log(a1, a2, a3, a4);
            const b1 = neutralPoint2 - factor[2].factor1 * y;
            const b2 = b1 - factor[2].factor2 * y;
            const b3 = b2 - factor[2].factor3 * y;
            const b4 = b3 - factor[2].factor4 * y;
            console.log(b1, b2, b3, b4);
            this.setState(
              Object.assign(this.state.resultTables, {
                '2': {
                  id: 2,
                  a1: a1.toFixed(2),
                  a2: a2.toFixed(2),
                  a3: a3.toFixed(2),
                  a4: a4.toFixed(2),
                  neutralPoint1: neutralPoint1.toFixed(2),
                  neutralPoint2: neutralPoint2.toFixed(2),
                  b1: b1.toFixed(2),
                  b2: b2.toFixed(2),
                  b3: b3.toFixed(2),
                  b4: b4.toFixed(2),
                },
              }),
            );
        }
      });
      console.log(this.state.resultTables);
      Actions.outputScreen(this.state);
    }
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
          selectionColor="#263238"
          keyboardType="decimal-pad"
          onSubmitEditing={() => this.lowValue.focus()}
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
          ref={input => (this.lowValue = input)}
          onSubmitEditing={() => this.closeValue.focus()}
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
          ref={input => (this.closeValue = input)}
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
