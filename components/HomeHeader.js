import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo-app-loading';
import { BowlbyOneSC_400Regular } from '@expo-google-fonts/bowlby-one-sc';
import { useFonts } from 'expo-font';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function HomeHeader() {
         
  const navigation = useNavigation(); 

     
    const pressHandlerAddBalance = () => {
        navigation.navigate('BalanceButtons');
      }

          return (
            <View style={styles.container}>
               <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                    <View style={{ marginRight: 100}}><Text style={styles.price}>Available Balance: $10 </Text></View>
                    <TouchableOpacity 
                                    style={styles.button}
                                    onPress={pressHandlerAddBalance}

                                    >
                                    <Text style={{color:"white",fontWeight: "bold",fontSize:14}}> {'Add Balance'} </Text>
                                    </TouchableOpacity>
                    </View>
                    <View style={styles.headerRight}>
                    
                    </View>
                </View>
            </View>
          )
      }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",  
    justifyContent: "space-between",
  
  },
  title: {
      fontSize: 22,
      fontWeight: "bold",
  },
  moreIcon: {
    fontSize: 20,
    color: '#ddd',
    marginTop: 15,
    marginRight: 10,
},
price: {
  overflow: 'hidden',
  fontWeight: 'bold',
  // marginLeft: 10,
  // marginRight: 10,
  // marginTop: 12,
  borderRadius: 8,
  padding: 4,
  paddingLeft: 5,
  paddingRight: 5,
  backgroundColor: "grey",
  color: 'white',
  fontSize: 15,
  textAlign: 'center',
  // width: 60,
},
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
},
headerRight: {
  flexDirection: 'row',
  alignItems: 'flex-end',

},
button: {
  height: 25,
  padding: 4,
  justifyContent: 'center',
  alignItems:"center",
  borderRadius:8,
  backgroundColor: "#DA772C",

},
});