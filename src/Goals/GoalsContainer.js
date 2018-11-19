import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { _getAllGoals } from '../Storage/GoalsStorage';
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

export default class GoalsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    const objs = await _getAllGoals(); // comes in as obj of objs
    // convert object of objects into array of objects
    const goals = Object.keys(objs).map(key => {
      const ar = objs[key];
      return ar;
    });
    this.setState({ items: goals });
  };

  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <GoalListItem title={item.title} />;

  render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>GoalsContainer</Text>
        <FlatList
          style={styles.flatList}
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
