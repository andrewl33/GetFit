import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { _addNewGoal, _getAllGoals } from '../Storage/GoalsStorage';

export default class CreateCustomGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(), // unique id
      title: undefined,
      createDate: undefined,
      endDate: undefined,
      isActive: false, // initially inactive
      unitType: undefined,
      startAmount: 0, // initially 0
      progress: 0, // initially 0
      endAmount: undefined,
    };
  }

  async submit() {
    // console.log(
    //   this.state.id,
    //   this.state.title,
    //   this.state.createDate,
    //   this.state.endDate,
    //   this.state.isActive,
    //   this.state.unitType,
    //   this.state.startAmount,
    //   this.state.progress,
    //   this.state.endAmount
    // );
    // if (
    //   this.state.title == undefined ||
    //   this.state.createDate == undefined ||
    //   this.state.endDate == undefined ||
    //   this.state.unitType == undefined ||
    //   this.state.endAmount == undefined
    // ) {
    //   Alert.alert('Please leave nothing blank');
    // } else {
    //   Alert.alert(`${this.state.title} Added Successfully!`);
    // }

    await _addNewGoal(this.state);
    await console.log(await _getAllGoals());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create A Custom Goal</Text>
        <TextInput
          style={styles.ti}
          placeholder="title"
          onChangeText={text => this.setState({ title: text })}
        />
        <TextInput
          style={styles.ti}
          placeholder="start date"
          onChangeText={text => this.setState({ createDate: text })}
        />
        <TextInput
          style={styles.ti}
          placeholder="end date"
          onChangeText={text => this.setState({ endDate: text })}
        />
        <TextInput
          style={styles.ti}
          placeholder="amount"
          onChangeText={text => this.setState({ endAmount: text })}
        />
        <TextInput
          style={styles.ti}
          placeholder="unit"
          onChangeText={text => this.setState({ unitType: text })}
        />

        <View style={styles.button}>
          <Button onPress={() => this.submit()} title="Add Custom Goal">
            Add Custom Goal
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  header: {
    fontSize: 35,
  },
  button: {
    margin: 30,
  },
  ti: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
