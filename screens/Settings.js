import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Settings({ navigation }){
    return (
        <View style={styles.container}>
          <Image
            style={{width:120, height:120}}
            source={require('./../assets/login.png')}
          />

          <Text style={{fontWeight:'bold', color:'#DA772C', fontSize:14, marginBottom: 10}}> Change Profile Picture </Text>

          <Text style={styles.text}> Username </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
            />
          </View>


          <Text style={styles.text}> Email </Text>
          <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
              />
           </View>

          <Text style={styles.text}> Bio </Text>
          <View style={styles.bioView}>
            <TextInput
            style={styles.textInput}
            />
          </View>

          <TouchableOpacity
            style={styles.passwdBtn}
            >
            <Text style={{color:"white",fontWeight: "bold",fontSize:16}}> Change Password </Text>
           </TouchableOpacity>

          <TouchableOpacity
                  style={styles.button}
                  onPress={() => Alert.alert('Simple Button pressed')}
                  >
            <Text style={{color:"white",fontWeight: "bold",fontSize:16}}> Save Changes </Text>
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
     width:254,
     height:56,
     marginBottom:10,
     left: 33,
   },

 bioView: {
    backgroundColor:"#E5E5E5",
    borderRadius:15,
    width:254,
    height:117,
    marginBottom:10,
    left: 33,
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

  passwdBtn: {
    backgroundColor: "#333333",
    borderRadius: 13,
    width: 250,
    height: 48,
    alignItems:"center",
    justifyContent:"center",
    left: 33,
  },

  text: {
    color: '#9A9A9A',
    position: 'relative',
    left: -140,
    top: 35,
  }
});