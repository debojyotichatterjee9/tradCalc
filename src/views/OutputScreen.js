import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

function Item({item}) {
  console.log('8888888888888888888');
  console.log(item);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        Factor:<Text> {item.id}</Text>
      </Text>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Resistance Final:</Text><Text style={styles.rightCol}>{item.a4}</Text>
        </View>
        <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Resistance Major:</Text><Text style={styles.rightCol}>{item.a3}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Resistance Minor:</Text><Text style={styles.rightCol}>{item.a2}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Resistance Low:</Text><Text style={styles.rightCol}>{item.a1}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Neutral Point 1:</Text><Text style={styles.rightCol}>{item.neutralPoint1}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Neutral Point 2:</Text><Text style={styles.rightCol}>{item.neutralPoint2}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Support Low:</Text><Text style={styles.rightCol}>{item.b1}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Support Minor:</Text><Text style={styles.rightCol}>{item.b2}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Support Major:</Text><Text style={styles.rightCol}>{item.b3}</Text>
      </View>
      <View style={styles.rows}>
      <Text style={styles.leftCol}>
        Support Final:</Text><Text style={styles.rightCol}>{item.b4}</Text>
      </View>
    </View>
  );
}
export default class OutputScreen extends React.Component<{}> {
  state = {
    data: '',
    resultData: [],
  };
  navigateBack = () => {
    Actions.pop();
  };
  async componentDidMount() {
    await this.setState({
      data: this.props,
    });
    for (let [key, value] of Object.entries(this.state.data.resultTables)) {
      this.setState(prevState => ({
        resultData: [...prevState.resultData, value],
      }));
      console.log(this.state.resultData);
    }
  }
  render() {
    const {highValue, lowValue, closeValue} = this.state.data;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
        <Text style={styles.topText}> High Value: {highValue} |</Text>
        <Text style={styles.topText}> Low Value: {lowValue} |</Text>
        <Text style={styles.topText}> Close Value: {closeValue} </Text>
        </View>
        
        <FlatList
          data={this.state.resultData}
          extraData={this.state}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id.toString()}
        />

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
  item: {
    backgroundColor: '#006064',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  topContainer: {
    // flex: 1,
    backgroundColor: '#00363a',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 5,
    borderColor: '#428e92',
    borderWidth: 1.5,
    textAlign: 'center',
  },
  topText: {
    color: '#48a999',
    fontWeight: "bold"
  },
  title: {
    backgroundColor: '#00363a',
    fontSize: 18,
    color: '#48a999',
    fontWeight: 'bold',
    marginBottom: 0,
    padding: 5,
    borderColor: '#428e92',
    borderWidth: 1.5,
    textAlign: 'center',
  },
  rows: {
    flex: 1, 
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: '#428e92',
    borderWidth: 1.5,
  },
  leftCol: {
    fontSize: 16,
    color: '#ffffff',
    padding: 5,
  },
  rightCol: {
    fontSize: 16,
    color: '#ffffff',
    padding: 5,
    paddingLeft: 10,
  }
});
