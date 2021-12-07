import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ImagePicker from '../components/ImagePicker';

export default class AddRaffle extends Component{
    constructor(props) {
        super(props)

        this.state = {
          raffleTitle: "",
          rafflePrice: "",
          raffleQty: "",
          raffleDescription: "",
          raffleDuration: "",
        }
      }

     addNewRaffle = () => {
       var raffle = {
            raffleTitle: this.state.raffleTitle,
            rafflePrice: this.state.rafflePrice,
            raffleQty: this.state.raffleQty,
            raffleDescription: this.state.raffleDescription,
            raffleDuration: this.state.raffleDuration,
       };

       console.log(JSON.stringify(raffle))

//        fetch("http://localhost:3000/send-data", {
//              method: "post",
//              headers: {
//                "Content-Type": "application/json",
//              },
//              body: JSON.stringify(raffle),
//            })
        }

    render() {
        return (
            <View style={styles.container}>

              <ImagePicker />

              <View style={styles.textView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Raffle Title"
                  placeholderTextColor="#9A9A9A"
                  onChangeText={(raffleTitle) => this.setState({ raffleTitle })}
                  value={this.raffleTitle}
                />
              </View>

              <View style={{flexDirection: "row"}}>
                  <View style={styles.ticketView}>
                    <TextInput
                      style={styles.ticketInput}
                      placeholder="Price per Ticket"
                      placeholderTextColor="#9A9A9A"
                      onChangeText={(rafflePrice) => this.setState({ rafflePrice })}
                      value={this.rafflePrice}
                    />
                  </View>
                  <View style={styles.ticketView}>
                     <TextInput
                        style={styles.ticketInput}
                        placeholder="Amount of Tickets"
                        placeholderTextColor="#9A9A9A"
                        onChangeText={(raffleQty) => this.setState({ raffleQty })}
                        value={this.raffleQty}
                      />
                  </View>
               </View>

              <View style={styles.descriptionView}>
                  <TextInput
                    style={styles.descriptionInput}
                    placeholder="Description"
                    placeholderTextColor="#9A9A9A"
                    onChangeText={(raffleDescription) => this.setState({ raffleDescription })}
                    value={this.raffleDescription}
                  />
               </View>

              <TouchableOpacity
                      style={styles.button}
                      onPress={this.addNewRaffle}
                      >
                <Text style={{color:"white",fontWeight: "bold",fontSize:20}}> SUBMIT RAFFLE </Text>
              </TouchableOpacity>

            </View>
          )
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ticketView: {
    borderRadius:15,
    height:56,
    width: 159,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:"#E5E5E5",
  },

  textView: {
     backgroundColor:"#E5E5E5",
     borderRadius:15,
     width:338,
     height:56,
     margin: 10,
   },

   ticketInput: {
    height:56,
    padding:10,
    flex: 1,
    fontWeight:"bold",
    fontSize:13,
    margin: 10,
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
    height:175,
    marginBottom: 10,
  },

  descriptionInput: {
    height:50,
    marginLeft:20,
    fontWeight:"bold",
    fontSize: 16,
  },

  button: {
    width:338,
    height:52,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:14,
    backgroundColor: "#DA772C",
  },

});