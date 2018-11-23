import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

/**
 * AsyncStorage is global,
 * so we're going to store Goal storage like
 * AsyncStorage: {
 *  Goals: {
 *      <GoalUniqueIdGoesHere>: {
 *        id: <values>,
 *        title: string,
 *        createDate:  <dateString>,
 *        endDate: <dateString>,
 *        isActive: boolean,
 *        unitType: steps | <someSortOfUnitToMeasure>,
 *        startAmount: number,
 *        progress: number,
 *        endAmount: number
 *     },
 *     activeGoals: ["<goalID>"]
 *  }
 * }
 */

/**
 * addNewGoal
 *
 * uses static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)
 *
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginTop: 20,
    },
    header: {
        fontSize: 35,
    },
    button: {
        margin: 30,
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
    }
});

export class UserTextInput extends Component {
    render() {
        return (
            <View style={styles.row}>
                <View style={styles.inputWrap}>
                    <Text>{ this.props.inputLabel }:</Text> 
                    <TextInput
                        placeholder="Type here"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
            </View>
        );
    }
}

export default class CreateCustomGoal extends Component {

    AlertText = () => {
        Alert.alert('Custom Goal Added! ');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create A Custom Goal</Text>
                <UserTextInput inputLabel='title' />
                <UserTextInput inputLabel='start date' />
                <UserTextInput inputLabel='end date' />
                <UserTextInput inputLabel='amount' />
                <UserTextInput inputLabel='unit' />
                <View style={styles.button}>
                    <Button onPress={() => this.AlertText()} title="Add Custom Goal">
                        Add Custom Goal
                    </Button>
                </View>
            </View>
        );
    }
}
