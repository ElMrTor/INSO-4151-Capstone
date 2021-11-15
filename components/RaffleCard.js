import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button } from 'react-native';
 

const RaffleCard = ( ) => {
    
    return (
        
        <View style={styles.cardContainer}>
            
            <Image 
            style={styles.imageStyle}
            source={require ('./../assets/imagePlaystation.png')} />

            <Text style={{fontWeight:'bold', color: '#5a5a5a', paddingTop: 20}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin sit amet metus lorem. Suspendisse tristique mauris sit amet 
                interdum volutpat. </Text>
            <Text style={{fontWeight: 'bold', fontSize: 30, color:'#28221E', 
            paddingTop: 10, textAlign: 'center'}}>$10</Text>

            
            
            <View style={{flexDirection: "row", alignItems: 'center', alignSelf: 'center'}}> 
            <Button 
            title="+"
            color="#28221E"/>
            <Text style={{fontSize: 40, padding: 15,
             color: 'grey', textAlign: 'center', fontSize: 30
            }}>0</Text>
             <Button 
            title="-"
            color="#28221E"/>
            </View>
           

        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const radius = 20;
const styles = StyleSheet.create({
    cardContainer: { 
        width: deviceWidth - 20,
        backgroundColor: '#ececec', 
        height: deviceHeight - 195,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#1f1f1f',
        shadowOffset:{
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 9,
        padding: 30,

    },
    imageStyle: {
        height: deviceHeight- 450,
        width: deviceWidth - 100,
        opacity: 0.9,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
});

export default RaffleCard;