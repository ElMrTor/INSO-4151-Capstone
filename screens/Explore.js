import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, LogBox } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import MiniCard from '../components/MiniCard';



export default function Explore() {
    const [search, setSearch] = useState('');

  //   useEffect(() => {
  //     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  // }, []);
  return (
  
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{fontSize:36, fontWeight:'bold', color:'white',
       marginBottom:3, marginTop:20}}>Discover</Text>
      <Text style={{fontSize:14, color:'#A9A9A9', marginRight:50, marginBottom:7, fontWeight:'bold'}}>
        Explore the world of raffles!</Text>
      </View>
     
      <StatusBar style="auto" />

      <View style={styles.content}>
      <SearchBar
        round
        leftIconContainerStyle={{width:30, height:30, backgroundColor:'#DA772C', borderRadius:100}}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={{backgroundColor:'#484747'}}
        searchIcon={{size: 20, color:'white'}}
        onChangeText={(search) => setSearch(search)}
        placeholder="Search raffle"
        placeholderTextColor="white"
        value={search}
      />
            <MiniCard />
            </View>
        </View>
       </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28221E',
  },

  header: {
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 40
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
  },
});