import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function ProfileAsUser() {
  return (
  
    <View style={styles.container}>
        <Text style={styles.title}>username</Text>
        <View style={{flexDirection: 'row'}}>
        </View>

    </View>
  
  )     
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
      fontSize: 22,
      fontWeight: "bold",
  }

});