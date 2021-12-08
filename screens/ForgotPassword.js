import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function ForgotPassword({ navigation }){
    return (
        <View style={styles.container}>
          <Image
            style={{width:120, height:120, marginBottom:10}}
            source={require('./../assets/login.png')}
          />

          <Text style={{fontWeight:'bold', color:'black', fontSize:36, marginBottom: 10}}> Forgot Password</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
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
    height:244,
    marginBottom:10,
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
    margin:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:14,
    backgroundColor: "#DA772C",
  },

});