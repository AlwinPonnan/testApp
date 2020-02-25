import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  Header from "./Header"


export class SecondScreen extends Component {
    render() {
        return (
<>
            <Header name="Second Screen" rootProps={this.props} />

<View>
                <Text> Second </Text>
            </View>
</>
        )
    }
}

export default SecondScreen
