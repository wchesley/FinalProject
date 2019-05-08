import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'
const event = [
    {
        Title: 'Speaker',
        Detail: 'Jeff Babb',
        Icon: 'account-circle',
    },
    {
        Title: '4:00pm',
        Detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        Icon: 'watch-later',
    },
    {
        Title: 'Location',
        Detail: 'Main Event Hall',
        Icon: 'location-on'
    }

]

export default class EventsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            EventTime: 'init val',
            EventDesc: 'init val',
            EventTitle: 'init val',
            EventType: 'init val',
            EventDay: 'init val',
            SpeakerBio: 'init val',
        }
    }
    componentDidMount = () => {
        const { navigation } = this.props
        const EventTime = navigation.getParam('EventTime');
        const EventDesc = navigation.getParam('EventDesc');
        const EventDay = navigation.getParam('EventDay');
        const EventTitle = navigation.getParam('EventTitle');
        const EventType = navigation.getParam('EventType');
        const SpeakerBio = navigation.getParam('SpeakerBio');
        this.setState({
            EventTime: EventTime,
            EventDesc: EventDesc,
            EventTitle: EventTitle,
            EventType: EventType,
            EventDay: EventDay,
            SpeakerBio: SpeakerBio,
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
                <Card
                    title={this.state.EventTitle}
                >
                    <Text>{this.state.EventDesc}</Text>
                    <Text>{this.state.EventTime}</Text>
                </Card>
            </>
        )
    }
}