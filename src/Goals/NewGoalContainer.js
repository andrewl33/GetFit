import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { _getNewGoals } from '../Storage/GoalsStorage';
import GoalListItem from './GoalListItem';

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
});

export default class NewGoalsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  AlertText = () => {
    Alert.alert('Goal Added!');
  };

  componentDidMount = async () => {
    const objs = await _getNewGoals(); // comes in as obj of objs
    // convert object of objects into array of objects
    const newGoals = Object.keys(objs).map(key => {
      const ar = objs[key];
      return ar;
    });
    this.setState({ items: newGoals });
  };

  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <GoalListItem title={item.title} />;

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
          <Button onPress={() => this.AlertText()} title="Add New Goals">
            Add New Goals
          </Button>
        </View>
      </View>
    );
  }
}
