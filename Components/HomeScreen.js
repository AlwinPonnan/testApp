import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  Header from "./Header"


export class HomeScreen extends Component {
    render() {
        return (
         <>
            <Header name="HomeScreen" rootProps={this.props} />
            <View>
                <Text>Home</Text>
            </View>
         </>
        )
    }
}

export default HomeScreen
