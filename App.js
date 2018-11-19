import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalsContainer from './src/Goals/GoalsContainer';
import { _developmentGoalInsert } from './src/Storage/GoalsStorage';

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
  };

  routeHandler = () => {
    this.setState({ route: 'Goals' });
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
      </View>
    );
  }
}
