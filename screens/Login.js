import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default class Login extends Component {
    constructor(props) {
       super(props)

       this.state = {
         email: "",
         password: "",
       }
     }

     loginUser = () => {
        var user = {
             email: this.state.email,
             password: this.state.password,
        };
        console.log(JSON.stringify(user))
        this.props.navigation.navigate('MainContainer');
//        fetch("http://localhost:3000/send-data", {
//             method: "post",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(user),
//           })
    }

  render() {
    const pressHandlerSignUp = () => {
      this.props.navigation.navigate('SignUp');
    }

    const pressHandlerForgotPassword = () => {
      this.props.navigation.navigate('ForgotPassword');
    }

      return (
        <View style={styles.container}>
          <Image
            style={{width:120, height:120, marginBottom:45}}
            source={require('./../assets/login.png')}
          />

          <Text style={{color:"#333333", fontWeight: "bold", marginBottom:5, fontSize: 36}}>Login</Text>
          <Text style={{color:"#9A9A9A", fontWeight: "bold", marginBottom:20}}>Please enter the details below to continue</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#9A9A9A"
              onChangeText={(email) => this.setState({ email })}
              value={this.email}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={this.password}
            />
          </View>
          <TouchableOpacity
             onPress={pressHandlerForgotPassword}
          >
            <Text style={{color:"#DA772C", fontWeight: "bold"}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={this.loginUser}
            >
            <Text style={{color: 'white',fontWeight:"bold", fontSize:20}}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={{color:"#9A9A9A",fontWeight: "bold"}}>Don’t have an account?
          <TouchableOpacity
                  onPress={pressHandlerSignUp}
                  >
            <Text style={{color:"#DA772C",fontWeight: "bold"}}> Register</Text>
          </TouchableOpacity>
          </Text>

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

  loginBtn: {
    width:338,
    height:56,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    backgroundColor: "#28221E",
    margin:20,
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
    fontWeight:"bold"
  },
});