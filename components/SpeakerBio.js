import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import babb from './img/babb.png'
import { connect } from 'react-redux'
import { watchScheduleData } from '../redux/app-redux'
import firebase from 'react-native-firebase'
import { withNavigation } from 'react-navigation'


const mapStateToProps = (state) => {
    return {
        speakerData: state.speakerData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        watchScheduleData: () => dispatch(watchScheduleData())
    };
}

class SpeakerBio extends React.Component {

    constructor() {
        super();
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
                <Card
                    title={this.state.speakerData.Name}
                    image={require('./img/babb.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        {this.state.speakerData.Description}
                    </Text>
                </Card>
            </View>
        );
    }
}

export default withNavigation(SpeakerBio);