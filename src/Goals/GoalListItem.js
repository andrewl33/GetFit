import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default class GoalListItem extends PureComponent {
  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

// defines what is passed down to GoalListItem
GoalListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
