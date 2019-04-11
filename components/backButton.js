import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import {NavigationActions} from 'react-navigation';
import { Icon } from 'react-native-elements'

export class BackButton extends React.Component {
    render() {
        return (
            <Icon
                name='backspace'
                //returns undefined?
                onPress={() => NavigationActions.navigate.goBack()}
                //same with this: 
                // onPress={() => this.props.navigate.navigation.goBack()}
            />
        );
    }
}
export default BackButton