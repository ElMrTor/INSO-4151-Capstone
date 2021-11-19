import React, { useState, Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { Constants } from 'expo';



const DATA = [
    {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 0,
        raffle_total: 100,
        raffle_price: 10,
    },
    {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 0,
        raffle_total: 10,
        raffle_price: 10,
    },
    {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 20,
        raffle_total: 10,
        raffle_price: 10,
    },
     {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 9,
        raffle_total: 10,
        raffle_price: 10,
    },
    {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 9,
        raffle_total: 10,
        raffle_price: 10,
    },  
    {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 9,
        raffle_total: 10,
        raffle_price: 10,
    },
    {
        feed_image: './../assets/imagePlaystation.png',
        raffle_current: 9,
        raffle_total: 10,
        raffle_price: 10,
    },
]

function Item({feed_image, raffle_current, raffle_total, raffle_price})
{
    return (
        <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                    <Text style={styles.raffleCount}>{raffle_current} / {raffle_total}</Text>
                    </View>
                    <View style={styles.headerRight}>
                    <View style={{alignItems: 'flex-end', marginLeft: 5}}>
                        <Text style={styles.price}> $10 </Text>
                        </View>
                    </View>
                </View>
                        <Image 
                        style={styles.raffleImage}
                        source={{uri: 'https://pesonyb2c.vteximg.com.br/arquivos/ids/211437-1000-1000/PS5_Dig_DS.jpg?v=637364739009770000'}} />
            </View>
    )
}

function MiniCard() {
    return (

        <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item, index }) => <Item user_name={item.user_name}
            user_image={item.user_image}
            feed_image={item.feed_image}
            feed_description={item.feed_description}
            raffle_current={item.raffle_current}
            raffle_total={item.raffle_total}
            />}
            keyExtractor={item => item.id}
        />
   
    );
};

const styles = StyleSheet.create({
    
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 8,
        borderRadius: 10,
        width: 180,
        height: 'auto',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 22
    },
    headerLeft: {
        flexDirection: 'row',
    },
    headerRight: {
        flexDirection: 'row',
    },
    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
    },
    raffleCount: {
        overflow: 'hidden',
        fontWeight: 'bold',
        borderRadius: 8,
        padding: 6,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#DA772C",
        color: 'white',
        fontSize: 10,
        alignItems: 'flex-start',
    },
    price: {
        overflow: 'hidden',
        fontWeight: 'bold',
        borderRadius: 8,
        padding: 6,
        backgroundColor: "green",
        color: 'white',
        fontSize: 10,

    },
    raffleImage: {
        height: 200,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },

});

export default MiniCard;

