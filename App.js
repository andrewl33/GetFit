import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import GoalsContainer from './src/Goals/GoalsContainer';
import NewGoalsContainer from './src/Goals/NewGoalContainer';
import CreateCustomGoal from './src/Goals/CreateCustomGoal';
import { _developmentGoalInsert, _developmentNewGoalInsert } from './src/Storage/GoalsStorage';
import NewAccount from './src/accounts/NewAccount';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  tabs = [
    {
      key: 'goals',
      icon: 'format-list-bulleted',
      label: 'Goals',
      barColor: '#388E3C',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'new-goals',
      icon: 'plus',
      label: 'New',
      barColor: '#B71C1C',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'custom-goals',
      icon: 'plus',
      label: 'Custom',
      barColor: '#E64A19',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
    {
      key: 'new-account',
      icon: 'plus',
      label: 'Account',
      barColor: '#800080',
      pressColor: 'rgba(0, 0, 0, 0.16)',
    },
  ];

  state = {
    route: this.tabs[0].key,
  };

  componentDidMount = async () => {
    await _developmentGoalInsert();
    await _developmentNewGoalInsert();
  };

  routeHandler = routeType => {
    this.setState({ route: routeType });
  };

  renderTab = ({ tab, isActive }) => (
    <FullTab
      key={tab.key}
      isActive={isActive}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
      barColor={tab.barColor}
    />
  );

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} isActive={isActive} />
  );

  render() {
    const { route } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {route === 'goals' && <GoalsContainer />}
          {route === 'new-goals' && <NewGoalsContainer />}
          {route === 'custom-goals' && <CreateCustomGoal />}
          {route === 'new-account' && <NewAccount />}
        </View>
        <BottomNavigation
          activeTab={route}
          renderTab={this.renderTab}
          tabs={this.tabs}
          onTabPress={newTab => this.routeHandler(newTab.key)}
          style={{ width: '100%' }}
        />
      </View>
    );
  }
}
