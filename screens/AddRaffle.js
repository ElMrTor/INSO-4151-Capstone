import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ToastAndroid, Platform } from 'react-native';
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
          owner_id : ""
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

       
       fetch(serverlink + '/users')
        .then (user_response => {                    
          if (user_response.ok) {
            return user_response.json()
          }
        })       
        .then(user_dict => {              
            var raffle_req = {
              name : this.state.raffleTitle,
              photo : null,
              description : this.state.raffleDescription,
              ticket_value : this.state.rafflePrice,
              is_active : true,
              raffle_state : 0,
              start_date : new Date().toISOString(),
              end_date : new Date().toISOString(),
              total_tickets : this.state.raffleQty,
              remaining_tickets : this.state.raffleQty,              
            }
            this.state.owner_id = user_dict['owner_id']
            return raffle_req
          })
        .then (new_raffle => {
          new_raffle['owner_id'] = this.state.owner_id
          console.log(new_raffle)
          return fetch(serverlink + '/raffles', {
            method : 'post',
            headers : {
              'Content-Type' : 'application/json',
            },
            body : JSON.stringify(new_raffle)
          })
        })
        .then (response => {          
          var stat = response.status          
          if (stat == 201) {
            if (Platform.OS == 'android')
              ToastAndroid.show('Created raffle.', ToastAndroid.SHORT)
          }
          else {
            if (Platform.OS == 'android')
              ToastAndroid.show('Failed to create raffle.', ToastAndroid.SHORT)
          }
        
        })         
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