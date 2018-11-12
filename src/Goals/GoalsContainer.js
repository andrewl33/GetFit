import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

  componentDidMount() {
    const fillItemList = [];
    for (let i = 0; i < 100; i++) {
      fillItemList.push({
        id: i.toString(),
        title: `Goal item ${i}`,
      });
    }

    this.setState({ items: fillItemList });
  }

  _keyExtractor = item => item.id;

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
