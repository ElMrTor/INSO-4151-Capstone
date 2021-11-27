import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function ProfileHeader() {
    const navigation = useNavigation(); 

  
  
  return (
  
    <View style={styles.container}>
        <Text style={styles.title}>username</Text>
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