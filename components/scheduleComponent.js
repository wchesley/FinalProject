import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class ScheduleComponent extends React.PureComponent {
    render() {
        return (
            <>
                <ListItem
                    title={this.props.EventTitle}
                    subtitle={this.props.EventDesc}
                    badge={{value: this.props.EventTime}}
                    onPress={()  => this.props.navigation.navigate('EventsPage', {
                        EventTime: this.props.EventTime,
                        EventDesc: this.props.EventDesc,
                        EventTitle: this.props.EventTitle,
                        EventType: this.props.EventType,
                        EventDay: this.props.EventDay,
                        SpeakerBio: this.props.SpeakerBio
                    })}
                />
            </>
        )
    }
}