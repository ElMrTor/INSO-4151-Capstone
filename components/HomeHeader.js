import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo-app-loading';
import { BowlbyOneSC_400Regular } from '@expo-google-fonts/bowlby-one-sc';
import { useFonts } from 'expo-font';

export default function HomeHeader() {
        let [fontsLoaded, error] = useFonts({
            BowlbyOneSC_400Regular,
        });
           <AppLoading />;        
          return (
            <View style={styles.container}>
              <Text style={{ fontFamily: 'BowlbyOneSC_400Regular', fontSize: 25 }}>Giraffle</Text>
            </View>
          )
      }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'center'
    
  },
  title: {
      fontSize: 22,
      fontWeight: "bold",
  }
});