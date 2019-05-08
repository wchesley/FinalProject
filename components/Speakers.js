import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import babb from './img/babb.png'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import SpeakerComponent from './speakerComponent';

class Speaker extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Speakers');
    this.unsubscribe = null;
    this.state = {
      loading: true,
      speakerData: [],
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
    const speakerData = [];
    querySnapshot.forEach((doc) => {
      const { Description, Name, Uni, Picture } = doc.data();

      speakerData.push({
        key: doc.id,
        doc,
        Description, 
        Name, 
        Uni,
        Picture, 
      });
      this.arrayholder.push({
        Name,
        Uni, 
      })
    });
    this.setState({
      speakerData,
      loading: false,
    })
   
  }
  updateSearch = text  => {
      this.setState({
        search: text,
      })   
      const newData = this.arrayholder.filter(item => {      
        const itemData = `${item.Name.toUpperCase()} ${item.Uni.toUpperCase()}`;
         const textData = text.toUpperCase();
          
         return itemData.indexOf(textData) > -1;    
      });    
      this.setState({ speakerData: newData });  
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
          data={this.state.speakerData}
          renderItem={({ item }) => <SpeakerComponent {...item} navigation={this.props.navigation }/>}
          ListHeaderComponent={this.renderSearch}
        />
      </View>
    );
  }
}

export default Speaker;