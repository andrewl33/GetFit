import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

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
        <Text style={{fontSize: 35}}>New Account</Text>
      </View>
    );
  }
}

class InputBox extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.text}
          placeholder={this.props.p}
        />
      </View>
    );
  }
}

class InputRow extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>{this.props.label}: </Text>
        <InputBox p={this.props.label} />
      </View>
    );
  }
}

export default class NewAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <InputRow label="First Name" />
        <InputRow label="Last Name" />
        <InputRow label="Email" />
        <InputRow label="Password" />
        <View style={{marginTop: 20}}>
          <Button
            onPress={() => Alert.alert("Welcome to GetFit!")}
            title="Create Account"
            color="#800080"
          />
        </View>
      </View>
    );
  }
}
