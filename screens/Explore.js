import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Explore() {
    const [search, setSearch] = useState('');
  return (
    
    <View style={styles.container}>
      <Text style={{fontSize:36, fontWeight:'bold', color:'white', marginRight:155, marginBottom:10, marginTop:20}}>Discover</Text>
      <Text style={{fontSize:16, color:'white', marginRight:100, marginBottom:10}}>Explore the world of raffles!</Text>

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

      <StatusBar style="auto" />

      <View>
        <View style={styles.row}>
            <View style={styles.column}>
                <Text> Raffle 1 </Text>
            </View>
            <View style={styles.column}>
                <Text> Raffle 2 </Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
                <Text> Raffle 3 </Text>
            </View>

            <View style={styles.column}>
                <Text> Raffle 4 </Text>
            </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28221E',
    alignItems: 'center',
  },

  searchBarContainer: {
    backgroundColor:'#28221E',
    borderRadius: 14,
    borderColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    width:315,
    marginBottom:10,
  },

  row: {
    flexDirection: "row",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  column: {
    flexDirection: "column",
    height: 180,
    width: 160,
    backgroundColor: "white",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});