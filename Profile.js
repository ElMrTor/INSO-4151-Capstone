import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        style={{width:130, height:130}}
        source={require('./assets/login.png')}
      />
      <Text style={{fontWeight: "bold", fontSize:20}}>@username</Text>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => Alert.alert('Simple Button pressed')}
        >
        <Text style={styles.buttonsTxt}>Raffles</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
          <Text style={styles.buttonsTxt}>My Reviews</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => Alert.alert('Simple Button pressed')}
        >
        <Text style={styles.buttonsTxt}>Payment Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
          <Text style={styles.buttonsTxt}>Report Bug</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('Simple Button pressed')}
          >
          <Text style={styles.buttonsTxt}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => Alert.alert('Simple Button pressed')}
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
