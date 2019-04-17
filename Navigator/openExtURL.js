import React from 'react'
import { TouchableOpacity, View, Text, Linking } from 'react-native'
import { SocialIcon } from 'react-native-elements'

class OpenURLButton extends React.Component {
    //static propTypes = { url: React.PropTypes.string };
    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
              Linking.openURL(this.props.url);
            } else {
              console.log("Don't know how to open URI: " + this.props.url);
            }
          });
        };
    render() {
        return (
            <TouchableOpacity onPress={this.handleClick}>
                <SocialIcon
                    type={this.props.type} />
            </TouchableOpacity>
        );
    }
}

export default OpenURLButton;