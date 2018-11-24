import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { _getNewGoals, _addNewGoal, _getAllGoals } from '../Storage/GoalsStorage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: 50,
  },
  header: {
    fontSize: 35,
  },
  flatList: {
    alignSelf: 'stretch',
  },
  button: {
    margin: 30,
  },
});

export default class NewGoalsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    const objs = await _getNewGoals(); // comes in as obj of objs
    // convert object of objects into array of objects
    const newGoals = Object.keys(objs).map(key => {
      const ar = objs[key];
      ar.selected = false;
      return ar;
    });
    this.setState({ items: newGoals });
  };

  showGoalDetails = ({ item }) => {
    Alert.alert(
      `Goal:  ${item.endAmount} ${item.unitType}\n When:  ${item.createDate} to ${item.endDate}`
    );
  };

  /**
   * Goal Selection
   */

  selectItem = ({ item }) => {
    const newItem = { ...item };
    newItem.selected = !newItem.selected;

    this.setState(prevState => {
      const newState = [...prevState.items];
      const index = prevState.items.indexOf(item);
      newState[index] = newItem;
      return {
        items: newState,
      };
    });
  };

  addSelectedGoals = async () => {
    const { items } = this.state;

    for (const item of items) {
      if (item.selected) {
        const newItem = { ...item }; // don't know if item is passed by reference
        delete newItem.selected;
        await _addNewGoal(newItem);
      }
    }

    // TODO: remove, used for development
    console.log(await _getAllGoals());
  };

  /**
   * FlatList Methods
   */
  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => (
    <View style={styles.button}>
      <Button onPress={() => this.showGoalDetails({ item })} title={item.title} />
      <Button
        onPress={() => this.selectItem({ item })}
        title={item.selected ? 'Selected' : 'Select'}
      />
    </View>
  );

  render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Select A Goal</Text>
        <FlatList
          style={styles.flatList}
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <View style={styles.button}>
          <Button onPress={() => this.addSelectedGoals()} title="Add Selected Goals">
            Add New Goals
          </Button>
        </View>
      </View>
    );
  }
}
