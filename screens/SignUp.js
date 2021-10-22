import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressHandlerLogin = () => {
        navigation.navigate('Login');
      }

  return (
    <View style={styles.container}>
      <Image
        style={{width:120, height:120, marginBottom:45}}
        source={require('./../assets/login.png')}
      />

      <Text style={{color:"#333333", fontWeight: "bold", marginBottom:5, fontSize: 36}}>Sign Up</Text>
      <Text style={{color:"#9A9A9A", fontWeight: "bold", marginBottom:20}}>Please enter the details below to continue</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#9A9A9A"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#9A9A9A"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Repeat Password"
          placeholderTextColor="#9A9A9A"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Birthday"
          placeholderTextColor="#9A9A9A"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={pressHandlerLogin}
        >
        <Text style={{color: 'white',fontWeight:"bold", fontSize:20}}>SIGN UP</Text>
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
