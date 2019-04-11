import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'
import {ScrollView} from 'react-native-gesture-handler'
import babb from './img/babb.png'
import { connect }  from 'react-redux'
import { watchScheduleData } from '../redux/app-redux'

const users = [
  {
    name: 'Babb',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },

]

const mapStateToProps = (state) => {
  return { 
    //scheduleData: state.scheduleData
  };
}

const mapDispatchToProps = (dispatch) => {
  return { };
}
const Schedule = (...props) => {
  return (
    <View>
      <View>
        <Card containerStyle={{ padding: 0 }} title="Schedule" >
          {
            
                <ListItem
                  title={"Test"}
                 leftAvatar={require('./img/babb.png')}
                />
            })
          }
        </Card>
      </View>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);