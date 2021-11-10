import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function MyReviews({ navigation }){
    return (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require('./../assets/login.png')}
          />

          <Text style={{position: 'relative', left: 75, top: -100, fontWeight:'bold', color:'#FFFFFF', fontSize:36, marginBottom: 10}}> My Reviews </Text>
          <Text style={{position: 'relative', left: 110, top: -105, fontWeight:'bold', color:'#FFFFFF', fontSize:18, marginBottom: 10}}> Score: 4.9/5.0 </Text>

          <View style={{position: 'relative', top: 80}}>
              <View style={styles.row}>
                  <Text> Review 1 </Text>
                  <Text style ={{color: '#9A9A9A'}}> Score: 4.9/5.0 </Text>
              </View>

              <View style={styles.row}>
                 <Text> Review 2 </Text>
                 <Text style ={{color: '#9A9A9A'}}> Score: 5.0/5.0 </Text>
              </View>

              <View style={styles.row}>
                 <Text> Review 3 </Text>
                 <Text style ={{color: '#9A9A9A'}}> Score: 4.5/5.0 </Text>
              </View>

              <View style={styles.row}>
                 <Text> Review 4 </Text>
                 <Text style ={{color: '#9A9A9A'}}> Score: 5.0/5.0 </Text>
              </View>

              <View style={styles.row}>
                 <Text> Review 5 </Text>
                 <Text style ={{color: '#9A9A9A'}}> Score: 5.0/5.0 </Text>
              </View>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    position: 'relative',
    width: 140,
    height: 140,
    left: -100,
    top: 0,
  },

  row: {
    top: -150,
    flexDirection: "row",
    alignItems: "center",
    height: 41,
    width: 338,
    backgroundColor: "white",
    borderRadius: 13,
    padding: 10,
    justifyContent: "space-around",
    margin: 10,
  }

});