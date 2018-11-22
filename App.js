import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalsContainer from './src/Goals/GoalsContainer';
import { _developmentGoalInsert } from './src/Storage/GoalsStorage';
import CustomGoal from './src/CustomGoal/CustomGoal';



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

  routeHandler2 = () => {
    this.setState({ route: 'CustomGoal' });
  };

  render() {
    const { route } = this.state;

    return (
      <View style={styles.container}>
        {route === 'Home' && (
          <View style={styles.button}>
            <Button onPress={() => this.routeHandler('Goals')} title="Goals">
            //</Button>
            <Button onPress={() => this.routeHandler2('Goals')} title="Custom Goal">
            //</Button>
          </View>
        )}
        {route === 'Goals' && <GoalsContainer />}
        {route === 'Home' && (
          <View style={styles.button}>   
            <Button onPress={() => this.routeHandler2('Goals')} title="Custom Goal">
            //</Button>
          </View>
        )}                   
        {route === 'CustomGoal' && <CustomGoal />}
      </View>
    );
  }
}
