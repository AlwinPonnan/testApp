import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import  Header from "./Header"
export class RegisterPage extends Component {
    render() {
        return (
            <>
            <Header name="Register" rootProps={this.props} />

            <View style={styles.backGround}>
                <Text style={{color:"#fff",fontSize:25,alignSelf:"center"}}>Register </Text>
            </View>
            </>
        )
    }
} 

const styles = StyleSheet.create({
    backGround:{
        backgroundColor:"red",
        height:200,
    },
});
export default RegisterPage
