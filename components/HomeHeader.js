import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, BowlbyOneSC_400Regular } from '@expo-google-fonts/bowlby-one-sc';

export default function HomeHeader() {
        // let [fontsLoaded] = useFonts({
        //     BowlbyOneSC_400Regular,
        // });
      
        // if (!fontsLoaded) {
        //   return <AppLoading />;
        // } else {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {/* <Text style={{ fontFamily: 'BowlbyOneSC_400Regular', fontSize: 20, fontWeight: 'bold' }}></Text> */}
            </View>
          );
        }
    //   }

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