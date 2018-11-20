import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default class SO_LoginExample extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined,
            password: undefined, 
        }
    }

    login() {
        console.log(this.state.email, this.state.password);
    }

    render() {
        return(
            <View>
            	<Text>Title</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({email: inputVal})}
                value={this.state.email}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    secureTextEntry={true}
                    onChangeText={(inputVal) => this.setState({password: inputVal})}
                value={this.state.password}
                />
                <Button
                    title="Login"
                    onPress={() => this.login()}
                />
            </View>
        )
    }

}