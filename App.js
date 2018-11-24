import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalsContainer from './src/Goals/GoalsContainer';
import NewGoalsContainer from './src/Goals/NewGoalContainer';
import CreateCustomGoal from './src/Goals/CreateCustomGoal';
import { _developmentGoalInsert, _developmentNewGoalInsert } from './src/Storage/GoalsStorage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#841584',
    width: 300,
    height: 45,
  },
});

export default class App extends React.Component {
  state = {
    route: 'Home',
  };

  componentDidMount = async () => {
    await _developmentGoalInsert();
    await _developmentNewGoalInsert();
  };

  routeHandler = routeType => {
    this.setState({ route: routeType });
  };

  render() {
    const { route } = this.state;

    return (
      <View style={styles.container}>
        
        {route === 'Home' && (
          <View style={styles.button}>
            <Button onPress={() => this.routeHandler('Goals')} title="Goals">
              Goals
            </Button>
          </View>
        )}
        {route === 'Goals' && <GoalsContainer />}
        
        {route === 'Home' && (
          <View style={styles.button}>
            <Button onPress={() => this.routeHandler('New Goals')} title="Add New Goals">
              Add New Goals
            </Button>
          </View>
        )}
        {route === 'New Goals' && <NewGoalsContainer />}
        
        {route === 'Home' && (
          <View style={styles.button}>
            <Button onPress={() => this.routeHandler('Create Custom Goal')} title="Create Custom Goal">
              Create Custom Goal
            </Button>
          </View>
        )}
        {route === 'Create Custom Goal' && <CreateCustomGoal />}

      </View>
    );
  }
}
