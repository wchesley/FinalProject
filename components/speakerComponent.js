import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

export default class SpeakerComponent extends React.PureComponent {
    render() {
        return (
            <>
                <ListItem
                    title={this.props.Name}
                    subtitle={this.props.Description}
                    badge={{value: this.props.Uni}}
                    leftIcon={<Icon name={'account-circle'}/>}
                    onPress={()  => this.props.navigation.navigate('SpeakerBio')}
                />
            </>
        )
    }
}