import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ImagePicker from '../components/ImagePicker';

export default function AddRaffle({ navigation }){

    return (
        <View style={styles.container}>
          <ImagePicker />

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Raffle Title"
              placeholderTextColor="#9A9A9A"

            />
          </View>

          <View style={styles.descriptionView}>
              <TextInput
                style={styles.descriptionInput}
                placeholder="Raffle Description"
                placeholderTextColor="#9A9A9A"

              />
           </View>

          <TouchableOpacity
                  style={styles.button}
                  onPress={() => Alert.alert('Simple Button pressed')}
                  >
            <Text style={{color:"white",fontWeight: "bold",fontSize:20}}> SUBMIT </Text>
          </TouchableOpacity>

        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
     backgroundColor:"#E5E5E5",
     borderRadius:15,
     width:338,
     height:56,
     marginBottom:10,
   },

  textInput: {
    height:50,
    flex:1,
    padding:10,
    marginLeft:20,
    fontWeight:"bold",
    fontSize:16,
  },

  descriptionView: {
    backgroundColor:"#E5E5E5",
    borderRadius:15,
    width:338,
    height:200,
  },

  descriptionInput: {
    height:50,
    padding:10,
    marginLeft:20,
    fontWeight:"bold",
    fontSize: 16,
  },

  button: {
    width:338,
    height:52,
    margin:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:14,
    backgroundColor: "#DA772C",
  },

});