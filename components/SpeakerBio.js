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

        //const ref = firebase.firestore().collection('Speakers').doc(speakerRef);
        //ref.get().then((doc) => {
        //    const speakerData = [];
        //    if (doc.exists) {
        //        const { Description, Name, Picture, Uni } = doc.data();
        //        speakerData.push({
        //            key: doc.id,
        //            doc,
        //            Description,
        //            Name,
        //            Picture,
        //            Uni,
        //        });
                this.setState({
                    Description: Description,
                    Name: Name,
                    Uni: Uni,
                    Picture: Picture,
                    loading: false,
                })
            }
        //})
    //}

    componentWillUnmount() {
       // this.unsubscribe();
    }

    onCollectionUpdate = (DocumentSnapshot) => {
        const speakerData = [];
        DocumentSnapshot = doc => {
            const { Description, Name, Picture, Uni } = doc.data();
            speakerData.push({
                key: doc.id,
                doc,
                Description,
                Name,
                Picture,
                Uni,
            });
        };
        this.setState({
            speakerData,
            loading: false,
            testData: speakerData.Description,
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