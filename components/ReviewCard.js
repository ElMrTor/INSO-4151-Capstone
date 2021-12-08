import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const DATA = [
    {
        review_description: 'My neighbor Georgie has one of these. She works as a busboy and she says it looks brown.',
        score: 4.9
    },
    {
        review_description: 'It only works when I\'m Cook Islands.',
        score: 5.0
    },
    {
        review_description: 'My neighbor Elisha has one of these. She works as a fortune teller and she says it looks floppy.',
        score: 4.5
    },
    {
        review_description: 'I tried to decapitate it but got coconut all over it.',
        score: 4.0
    },
    {
        review_description: 'The box this comes in is 5 light-year by 6 foot and weights 17 megaton!!!',
        score: 5.0
    },
    {
        review_description: 'I tried to maim it but got nectarine all over it.',
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
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}                />
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