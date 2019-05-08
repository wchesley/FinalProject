import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList } from 'react-native'
import { ListItem, Button, Icon, Tile5, Tile } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import babb from './img/babb.png'
import { connect } from 'react-redux'
import { watchScheduleData } from '../redux/app-redux'
import firebase from 'react-native-firebase'
import { withNavigation } from 'react-navigation'

/* 
    TODO: 
    1. Set picture to string path in firebase
    2. Styling 
*/

class SpeakerBio extends React.Component {

    constructor() {
        super();
        this.unsubscribe = null;
        this.state = {
            loading: true,
            testData: "onething",
            Description: 'init val',
            Name: 'init val',
            Uni: 'init val',
            Picture: 'init val',
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        const Description = navigation.getParam('Description').toString();
        const Name = navigation.getParam('Name').toString();
        const Uni = navigation.getParam('Uni').toString();
        const Picture = navigation.getParam('Picture').toString();


        this.setState({
            Description: Description,
            Name: Name,
            Uni: Uni,
            Picture: Picture,
            loading: false,
        })
    }

    componentWillUnmount() {
        
    }

    render() {
        if (this.state.loading) {
            return (
                <Text>Loading...</Text>
            )
        }
        return (
            <View>

                <Text style={{ marginBottom: 10 }}>
                    {this.state.Description}
                </Text>
                <Text>{this.state.Name}</Text>
                <Text>{this.state.Picture}</Text>
                <Text>{this.state.Uni}</Text>

            </View>
        );
    }
}

export default withNavigation(SpeakerBio);