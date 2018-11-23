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
    const {
      title,
      isActive,
      createDate,
      endDate,
      unitType,
      startAmount,
      progress,
      endAmount,
    } = this.props;
    const remain = endAmount - progress;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>
          Start:{createDate} End:{endDate}
        </Text>
        <Text style={styles.text}>
          Progress: {progress} {unitType} out of {endAmount} {unitType}
        </Text>
        <Text style={styles.text}>
          {remain} {unitType} to go!
        </Text>
      </View>
    );
  }
}

// defines what is passed down to GoalListItem
GoalListItem.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  endAmount: PropTypes.number.isRequired,
  unitType: PropTypes.string.isRequired,
};
