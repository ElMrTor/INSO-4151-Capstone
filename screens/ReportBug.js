import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class ReportBug extends Component{
    constructor(props) {
       super(props)

       this.state = {
         bugTitle: "",
         bugDescription: "",
       }
     }

    reportBug = () => {
        var bugInfo = {
             bugTitle: this.state.bugTitle,
             bugDescription: this.state.bugDescription,
        };
        console.log(JSON.stringify(bugInfo))
       //  fetch("http://localhost:3000/send-data", {
        //             method: "post",
        //             headers: {
        //               "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(bugInfo),
        //           })
    }

    render(){
        return (
            <View style={styles.container}>
              <Image
                style={{width:120, height:120, marginBottom:10}}
                source={require('./../assets/login.png')}
              />

              <Text style={{fontWeight:'bold', color:'black', fontSize:36, marginBottom: 10}}> Report Bug </Text>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Title"
                  placeholderTextColor="#9A9A9A"
                  onChangeText={(bugTitle) => this.setState({ bugTitle })}
                  value={this.bugTitle}
                />
              </View>

              <View style={styles.descriptionView}>
                  <TextInput
                    style={styles.descriptionInput}
                    placeholder="Description"
                    placeholderTextColor="#9A9A9A"
                    onChangeText={(bugDescription) => this.setState({ bugDescription })}
                    value={this.bugDescription}
                  />
               </View>

              <TouchableOpacity
                      style={styles.button}
                      onPress={this.reportBug}
                      >
                <Text style={{color:"white",fontWeight: "bold",fontSize:20}}> SUBMIT </Text>
              </TouchableOpacity>

            </View>
          );
      }
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