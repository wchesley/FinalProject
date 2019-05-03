/*
  Firebase ref: https://invertase.io/blog/getting-started-with-cloud-firestore-on-react-native
  Search bar: https://medium.freecodecamp.org/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699
*/
import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'
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
    EventDesc: "LBabbs latest and greatest lecture on React Native, you won't wanna miss this!",
    EventTime: 400,
    EventTitle: "LBabb's Speech",
    EventType: "LKeynote"
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
      search: '',
    }
    this.arrayholder = [];
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
      const { EventTime, EventTitle, EventType, EventDesc, SpeakerBio, EventDay } = doc.data();

      scheduleData.push({
        key: doc.id,
        doc,
        EventDesc,
        EventTime,
        EventTitle,
        EventType,
        SpeakerBio,
        EventDay,
      });
      this.arrayholder.push({
        EventTitle,
        EventType
      })
    });
    this.setState({
      scheduleData,
      loading: false,
    })
   
  }
  updateSearch = text  => {
      this.setState({
        search: text,
      })   
      const newData = this.arrayholder.filter(item => {      
        const itemData = `${item.EventTitle.toUpperCase()} ${item.EventType.toUpperCase()}`;
         const textData = text.toUpperCase();
          
         return itemData.indexOf(textData) > -1;    
      });    
      this.setState({ scheduleData: newData });  
    };
  
  renderSearch = () => {
    return(
      <SearchBar
          placeholder="Type here... "
          round
          lightTheme={true}
          autoCorrect={false}
          onChangeText={text => this.updateSearch(text)}
          value={this.state.search}
        />
    );
  };

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
          renderItem={({ item }) => <ScheduleComponent {...item} navigation={this.props.navigation} />}
          ListHeaderComponent={this.renderSearch}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
