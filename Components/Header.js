import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Header extends Component {
    constructor(props) {
        super(props)            
        this.state = {

        }
    }    

    toggle = () => {
        this.props.rootProps.navigation.dispatch(DrawerActions.toggleDrawer())
      }

    render() {
        return (
            <>
            <View style={styles.container}>

                <View style={styles.hamburgerIcon} >
<TouchableOpacity onPress={() => this.toggle()}>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            </TouchableOpacity>
            </View>

                {/* <Icon.Button
name = "md-flask"
size = {38}
color = "black"
style = {{paddingLeft : 20,backgroundColor:'#f8f9fa',borderRadius:0,borderWidth:0,height:50,}}
/> */}

                <View style={styles.title}>
    <Text style={styles.titleText}>{this.props.name}</Text>
                </View>
                <View style={styles.second}></View>
            </View>
        </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 50,
        backgroundColor: '#f8f9fa',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        fontFamily: 'Montserrat-Black',
        fontSize:32
        //         shadowColor: "#000",
        // shadowOffset: {
        // 	width: 0,
        // 	height: 0,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    lines:{
        borderColor:"#000",
        borderWidth:2,
        width:"80%",
        marginLeft:"10%",
        marginVertical:6    
    },
    hamburgerIcon: {
        flex:0.5,
        // backgroundColor:'red'
    },
    title: {
        flex:2,
        // backgroundColor:'green'
    },
    titleText:{
        fontSize:25,
        marginTop:"5%",
        alignSelf:'center',
        color:'#1bb1dc'
    },
    second:{
        flex:0.5
    }

});


export default Header
