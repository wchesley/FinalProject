import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'
import MapBox from './map'

const list = [
  {
    name: 'Schedule',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    link: 'Schedule',
  },
  {
    name: 'Sponsors',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    link: 'sponsors',
  },
  {
    name: 'About',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    link: 'About',
  },

]

class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <Card
          title='Home'
          image={require('./img/EdsigconBanner.png')}>
          <Text style={{ marginBottom: 10 }}>
            Welcome to Edsigcon 2019!
    </Text>
          {
            list.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  leftAvatar={{source: {uri: u.avatar} }}
                  title={u.name}
                  onPress={() => this.props.navigation.navigate(u.link)}
                />
              );
            })
          }
        </Card>
        <View>
        
        </View>
      </>
    );
  }

}

export default HomeScreen;


