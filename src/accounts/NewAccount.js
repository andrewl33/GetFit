import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { _addNewUser, _getAllUsers } from '../Storage/UserStorage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    padding: 2,
  },
  text: {
    fontSize: 20,
  },
});

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={{ fontSize: 35 }}>New Account</Text>
      </View>
    );
  }
}

export default class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const { firstName, lastName, email, password } = this.state;

    Alert.alert('Welcome to GetFit!');
    console.log(
      ` firstName = ${firstName}\n`,
      `lastName  = ${lastName}\n`,
      `email     = ${email}\n`,
      `password  = ${password}`
    );

    await _addNewUser(this.state);
    await console.log(await _getAllUsers());
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>First Name: </Text>
          <TextInput
            style={styles.text}
            onChangeText={input => this.setState({ firstName: input })}
            placeholder="First Name"
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Last Name: </Text>
          <TextInput
            style={styles.text}
            onChangeText={input => this.setState({ lastName: input })}
            placeholder="Last Name"
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Email: </Text>
          <TextInput
            style={styles.text}
            onChangeText={input => this.setState({ email: input })}
            placeholder="Email"
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Password: </Text>
          <TextInput
            style={styles.text}
            onChangeText={input => this.setState({ password: input })}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <Button onPress={this.submit} title="Create Account" color="#800080" />
      </View>
    );
  }
}
