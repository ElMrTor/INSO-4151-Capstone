import { StatusBar } from 'expo-status-bar';
import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfileTab from '../components/ProfileTab'
import MiniCard from '../components/MiniCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReviewCard from '../components/ReviewCard';



export default class ProfileScreenAsUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            showForm: 0
        };
    }

   
    render() {
        var form;
        if (this.state.showForm === 0) {
           form = (
            <MiniCard />
           );
        } else if (this.state.showForm === 1) {
           form = (
           <ReviewCard />
           );
           }

           return(
            <View style={styles.container}>

                <View style={{height:150, alignItems: 'center', marginBottom: 50}}>
                    <Image
                       style={styles.img}
                       source={require('./../assets/michael-jordan.jpeg')}
                    />
                   <Text style={{fontWeight:'bold', color:'#FFFFFF', fontSize:36, textAlign: 'center'}}> Username </Text>
                   <Text style={{fontWeight:'bold', color:'#FFFFFF', fontSize:16, textAlign: 'center'}}> Score: 4.9/5.0 </Text>
                </View>

                <View style={styles.row}>
                    
                <TouchableOpacity
                onPress={() => this.setState({showForm: 0})}
                >
                <Ionicons name="grid" size={23} color="white" />
                </TouchableOpacity>
                <View style={styles.verticleLine}></View>
                <TouchableOpacity
                onPress={() => this.setState({showForm: 1})}
                >
                <Ionicons name="star" size={23} color="white" />
                </TouchableOpacity>
                

                </View>
                {form}


            </View>
        );   
     }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28221E',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
  
    content: {
      alignItems: 'center'
    },
  
    img: {
      width: 100,
      height: 100,
      marginTop: 20,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
  
    row: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#DA772C",
      borderRadius: 8,
      height: 40,
      width: '90%',
      justifyContent: "space-around",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      paddingLeft: 30,
      paddingRight: 30
    
  
    },
  
    verticleLine:{
      height: '60%',
      width: 1,
      backgroundColor: '#fff',
    },
  
  });


