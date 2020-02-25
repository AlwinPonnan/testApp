import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import  Header from "./Header"


export class LoginPage extends Component {
    render() {
        return (
            <>
            <Header name="Login" rootProps={this.props} />

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterPage')}>
            <View>
                <Text>Login </Text>
            </View>
            </TouchableOpacity>
            </>
        )
    }
}

export default LoginPage
