import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import MiniCard from '../components/MiniCard';
import MyRafflesCard from '../components/MyRafflesCard';



export default function ProfileRaffles() {
    const [search, setSearch] = useState('');
  return (

    <View style={styles.container}>
          <ScrollView>
     
      <View style={styles.content}>
       <Text style={{fontSize:36, fontWeight:'bold', color:'white',
       marginBottom:3, marginTop:5}}>My Raffles</Text>
            <MyRafflesCard />
      <Text style={{fontSize:36, fontWeight:'bold', color:'white',
       marginBottom:3, marginTop:5}}>Raffles</Text>
        <MiniCard />
            </View>
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28221E',
  },

  header: {
    alignItems: 'flex-start',
    marginLeft: 30
  },

  content: {
    alignItems: 'center'
  },

  searchBarContainer: {
    backgroundColor:'#28221E',
    borderRadius: 14,
    borderColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    width: 390,
    marginTop: 10
  },

});