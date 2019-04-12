import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation';


export default class ScheduleComponent extends React.PureComponent {
    render() {
        return (
            <TouchableHighlight
            //onPress={this.navigateToScreen('Home')} 
            ><View>
                    <Text>Title: {this.props.EventTitle}</Text>
                    <Text>Desc: {this.props.EventDesc}</Text>
                    <Text>Time: {this.props.EventTime}</Text>
                    <Text>Topic: {this.props.EventTopic}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}