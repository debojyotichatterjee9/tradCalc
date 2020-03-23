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

function Item({id}) {
  console.log('8888888888888888888');
  console.log(id);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text>
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
        <Text>Output Screen</Text>
        <Text>highValue: {highValue}</Text>
        <Text>lowvalue: {lowValue}</Text>
        <Text>closeValue: {closeValue}</Text>
        
        <FlatList
          data={this.state.resultData}
          extraData={this.state}
          renderItem={({item}) => <Item id={item.id} />}
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#000000',
  },
});
