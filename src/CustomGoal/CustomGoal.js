import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default class SO_LoginExample extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
        	id: undefined,
            title: undefined,
            createDate: undefined, 
            endDate: undefined,
            isActive: undefined,
            unitSteps: undefined,
            startAmount: undefined,
            progress: undefined,
            endAmount: undefined
        }
    }

    submit() {
        console.log(this.state.id, this.state.title, this.state.createDate, this.state.endDate, this.state.isActive, this.state.unitSteps, this.state.startAmount, this.state.progress, this.state.endAmount);
    }

    render() {
        return(
            <View>
            	<Text>Crate A Custom Goal</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({id: inputVal})}
                    placeholder="Id"
                value={this.state.id}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({title: inputVal})}
                    placeholder="Title"
                value={this.state.title}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({createdate: inputVal})}
                    placeholder="Date Created"
                value={this.state.createdate}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({endDate: inputVal})}
                    placeholder="Date Ending"
                value={this.state.endDate}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({isActive: inputVal})}
                    placeholder="Is Active?"
                value={this.state.isActive}
                />                
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({unitSteps: inputVal})}
                    placeholder="Unit Steps"
                value={this.state.unitSteps}
                /> 
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({startAmount: inputVal})}
                    placeholder="Start Amount"
                value={this.state.startAmount}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({progress: inputVal})}
                    placeholder="Progress"
                value={this.state.progress}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputVal) => this.setState({endAmount: inputVal})}
                    placeholder="End Amount"
                value={this.state.endAmount}
                />                                                                                                                              
                <Button
                    title="Submit"
                    onPress={() => this.submit()}
                />
            </View>
        )
    }

}