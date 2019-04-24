






import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import babb from './img/babb.png'
import { connect } from 'react-redux'
import { watchSponsorsData } from '../redux/app-redux'
import firebase from 'react-native-firebase'
import SponsorsComponent from './sponsorsComponent';

const DEFAULT_sponsorsData = [
  {
    name: 'Babb',
    bio: 'Professor, Batman'
  
  },

]

const mapStateToProps = (state) => {
  return {
    sponsorsData: state.sponsorsData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchsponsorsData: () => dispatch(watchSponsorsData())
  };
}

class Sponsors extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Sponsors');
    this.unsubscribe = null;
    this.state = {
      loading: true,
      sponsorsData: [],
    }
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const sponsorsData = [];
    querySnapshot.forEach((doc) => {
      const { EventTime, EventTitle, EventType, EventDesc } = doc.data();

      sponsorsData.push({
        key: doc.id,
        doc,
        Bio,
        Name
      });
    });
    this.setState({
      sponsorsData,
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
      <>
      <View>
        <FlatList
          data={this.state.sponsorsData}
          renderItem={({ item }) => <SponsorsComponent {...item} />}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sponsors</Text>

      <View  style={{flexDirection:"row"}}>
      <SocialIcon 
        type='facebook'
        />
        <SocialIcon 
        type='twitter'
        />
        <SocialIcon
        type='linkedin'
        />
        </View>

    </View>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);




