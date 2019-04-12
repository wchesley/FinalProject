import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import babb from './img/babb.png'
import { connect } from 'react-redux'
import { watchScheduleData } from '../redux/app-redux'
import firebase from 'react-native-firebase'
import ScheduleComponent from './scheduleComponent';

const DEFAULT_scheduleData = [
  {
    name: 'Babb',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    EventDesc: "Babbs latest and greatest lecture on React Native, you won't wanna miss this!",
    EventTime: 400,
    EventTitle: "Babb's Speech",
    EventTopic: "React Native - in depth"
  },

]

const mapStateToProps = (state) => {
  return {
    scheduleData: state.scheduleData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchScheduleData: () => dispatch(watchScheduleData())
  };
}

class Schedule extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Schedule');
    this.unsubscribe = null;
    this.state = {
      loading: true,
      scheduleData: [],
    }
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const scheduleData = [];
    querySnapshot.forEach((doc) => {
      const { EventTime, EventTitle, EventTopic, EventDesc } = doc.data();

      scheduleData.push({
        key: doc.id,
        doc,
        EventDesc,
        EventTime,
        EventTitle,
        EventTopic,
      });
    });
    this.setState({
      scheduleData,
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
        <FlatList
          data={this.state.scheduleData}
          renderItem={({ item }) => <ScheduleComponent {...item} />}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);