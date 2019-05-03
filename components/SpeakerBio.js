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
    1. Navigation without props: https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
    2. Read individual doc from firebase; 
*/

class SpeakerBio extends React.Component {

    constructor() {
        super();
        //page won't render with these enabled: ref TODO #1 Returns: TypeError: Undefined is not an object (evaluating '_this.props.navigation')
        //const { navigation } = this.props; 
        //const speakerCollection = navigation.getParam(BioRef, 'Speakers/AmjatAbudllat');
        this.ref = firebase.firestore().collection('Speakers');
        this.unsubscribe = null;
        this.state = {
            loading: true,
            speakerData: [],
        }
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const speakerData = [];
        querySnapshot.forEach((doc) => {
            const { Description, Name, Picture, Uni } = doc.data();

            speakerData.push({
                key: doc.id,
                doc,
                Description,
                Name,
                Picture,
                Uni,
            });
        });
        this.setState({
            speakerData,
            loading: false,
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <Text>Loading...</Text>
            )
        }
        return (
            <View>
                <Tile
                imageSrc={require('./img/babb.png')}
                title="Jeff Babb"
                contentContainerStyle={{height:120}}
                >
                    <Text style={{ marginBottom: 10 }}>
                    Dr. Babb has extensive experience in mentoring and coaching students in software design competitions, including coaching two winning teams in the national championship for Microsoft’s Imagine Cup Software Design Invitational.
                    </Text>
                </Tile>
            </View>
        );
    }
}

export default withNavigation(SpeakerBio);