import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 300,height: 210,marginBottom:150}}
        source={require('./assets/logo.png')}
      />
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.start}
        onPress={() => Alert.alert('Simple Button pressed')}
        >
        <Text style={styles.buttonTxt}>GET STARTED</Text>
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
  start: {
    width:257,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    backgroundColor: "#28221E",
  },
  buttonTxt: {
    color:"white",
    fontWeight:"bold",
    fontSize:20,
  },
});
