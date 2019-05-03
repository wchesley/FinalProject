import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'


const list = [
  {
    name: 'Schedule',
    icon: 'view-list',
    IconType: 'material',
    link: 'Schedule',
  },
  {
    name: 'Sponsors',
    icon: 'shopping-cart',
    link: 'Sponsors',
  },
  {
    name: 'About',
    icon: 'announcement',
    link: 'About',
  },
  {
    name: 'Speakers',
    icon: 'account-circle',
    link: 'SpeakerBio'
  }

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
                  leftIcon={<Icon name={u.icon}/>}
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


