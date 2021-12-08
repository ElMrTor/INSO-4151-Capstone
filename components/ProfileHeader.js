import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function ProfileHeader() {
    const navigation = useNavigation(); 


    const pressHandlerAddReview = () => {
       navigation.navigate('AddReview');
    }
  
  return (
  
    <View style={styles.container}>
        <TouchableOpacity
            onPress={pressHandlerAddReview}
            style={{
                width:100,
                height:30,
                alignItems:"center",
                justifyContent:"center",
                borderRadius:10,
                backgroundColor: "#DA772C"
                }}
            >
                <Text style={{fontWeight: 'bold', color: '#fff'}}> Add Review </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSettings')}>            
            <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
        </View>
        
    </View>
  
  )

    

     
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
      fontSize: 22,
      fontWeight: "bold",
  }

});