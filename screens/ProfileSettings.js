import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function ProfileSettings({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressHandlerMyRaffles = () => {
      navigation.navigate('MyRaffles');
    }

    const pressHandlerReportBug = () => {
      navigation.navigate('ReportBug');
    }

    const pressHandlerGetStarted = () => {
      navigation.navigate('Login');
    }

    const pressHandlerSettings = () => {
      navigation.navigate('EditProfile');
    }

    const pressHandlerPayment = () => {
      navigation.navigate('BalanceButtons');
    }

  return (
    <View style={styles.container}>
     
     <TouchableOpacity
          style={styles.buttons}
          onPress={pressHandlerSettings}
          >
          <Text style={styles.buttonsTxt}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={pressHandlerMyRaffles}
        >
        <Text style={styles.buttonsTxt}>Raffles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={pressHandlerPayment}
        >
        <Text style={styles.buttonsTxt}>Payment Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttons}
          onPress={pressHandlerReportBug}
          >
          <Text style={styles.buttonsTxt}>Report Bug</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttons}
        onPress={pressHandlerGetStarted}
        >
        <Text style={styles.buttonsTxt}>Sign Out</Text>
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

  buttons: {
    width:301,
    height:52,
    margin:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:14,
    backgroundColor: "#28221E",
  },

  buttonsTxt: {
    color:"white",
    fontSize:20,
    fontWeight:"bold",
  }
});
