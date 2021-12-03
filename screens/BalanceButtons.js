import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function BalanceButtons({navigation}){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center'}}>How much would you like {"\n"} to add to your balance? </Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.balanceBtn}>
                    <Text style={styles.textStyle}> $1.00 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.balanceBtn}>
                    <Text style={styles.textStyle}> $5.00 </Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.balanceBtn}>
                    <Text style={styles.textStyle}> $10.00 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.balanceBtn}>
                    <Text style={styles.textStyle}> $20.00 </Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.balanceBtn}>
                    <Text style={styles.textStyle}> $25.00 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.balanceBtn}>
                    <Text style={styles.textStyle}> $50.00 </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },

    balanceBtn: {
        width:125,
        height:125,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor: '#28221E',
        margin:20,
      },

    textStyle: {
      color:'#fff',
      fontWeight: 'bold',
      fontSize:25,
      },
});