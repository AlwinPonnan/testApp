import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  Header from "./Header"


export class About extends Component {
    render() {
        return (
<>
            <Header name="About " rootProps={this.props} />

<View>
                <Text> about </Text>
            </View>
</>
        )
    }
}

export default About
