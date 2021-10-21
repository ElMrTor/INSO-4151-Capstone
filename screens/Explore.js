import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Explore() {
    const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Text style={{fontSize:36, fontWeight:'bold', color:'white'}}>Discover</Text>
      <Text style={{color:'white', flexDirection:'row', justifyContent:'flex-start'}}>Explore the world of raffles!</Text>

      <SearchBar
        round
        leftIconContainerStyle={{width:30, height:30, backgroundColor:'#DA772C', borderRadius:100}}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={{backgroundColor:'#484747'}}
        searchIcon={{size: 20, color:'white'}}
        onChangeText={(search) => setSearch(search)}
        placeholder="Search raffle"
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
    justifyContent: 'center',
  },

  searchBarContainer: {
    backgroundColor:'#28221E',
    borderRadius: 14,
    borderColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    width:304,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",

  },

  column: {
    flexDirection: "column",
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});