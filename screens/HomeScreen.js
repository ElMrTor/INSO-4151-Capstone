import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import RaffleCard from '../components/RaffleCard';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
      
        return(
            <View style={styles.container}>
                <RaffleCard  />
            </View>   
    );
    }
 
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28221E',
    },
});

