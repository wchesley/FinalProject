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
export default class EventsPage extends React.PureComponent {
    render() {
        return (
            <>
                <Card
                    title="Event Title"
                >
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    {
                        event.map((u, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    leftIcon={<Icon name={u.Icon} />}
                                    title={u.Title}
                                    subtitle={u.Detail}
                                    onPress={() => this.props.navigation.navigate('SpeakerBio')}
                                />
                            );
                        })
                    }
                </Card>
            </>
        )
    }
}