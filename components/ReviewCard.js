import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const DATA = [
    {
        review_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        score: 4.9
    },
    {
        review_description: 'Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        score: 5.0
    },
    {
        review_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        score: 4.5
    },
    {
        review_description: 'Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        score: 4.0
    },
    {
        review_description: 'Suspendisse tristique mauris sit amet interdum volutpat.',
        score: 5.0
    },
    {
        review_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        score: 4.2
    },
]

function Item({review_description, score}){
    return (
            <View>
              <View style={{position: 'relative'}}>
                  <View style={styles.row}>
                      <Text style={{flex:1}}>{review_description} </Text>
                      <Text style ={{color: '#9A9A9A'}}> Score: {score}/5.0 </Text>
                  </View>
              </View>
            </View>
          );
}

export default function ReviewCard(){
    return (
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                    <Item
                    review_description={item.review_description}
                    score={item.score}
                    />}
                    keyExtractor={item => item.id}
                />
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 371,
    backgroundColor: "white",
    borderRadius: 13,
    padding: 10,
    justifyContent: "space-around",
    margin: 10,
  },


});