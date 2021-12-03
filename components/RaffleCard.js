import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, Alert, SafeAreaView, ScrollView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


const DATA = [
    {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: './../assets/imagePlaystation.png',
        feed_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        raffle_current: 0,
        raffle_total: 100,
        raffle_price: 10,
        raffle_title: 'Playstaion 5'
    },
    {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: './../assets/imagePlaystation.png',
        feed_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        raffle_current: 0,
        raffle_total: 100,
        raffle_price: 10,
        raffle_title: 'Playstaion 5'
    },  {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: './../assets/imagePlaystation.png',
        feed_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        raffle_current: 0,
        raffle_total: 100,
        raffle_price: 10,
        raffle_title: 'Playstaion 5'
    },  {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: './../assets/imagePlaystation.png',
        feed_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet metus lorem. Suspendisse tristique mauris sit amet interdum volutpat.',
        raffle_current: 0,
        raffle_total: 100,
        raffle_price: 10,
        raffle_title: 'Playstaion 5'
    },
]



 function Item ({user_name, user_image, feed_image, feed_description, raffle_current, raffle_total, raffle_price, raffle_title})
{
   
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0); 
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    const navigation = useNavigation(); 

     
    const pressHandlerUserProfile = () => {
        navigation.navigate('UserProfile');
      }

     const pressHandlerDeleteRaffle = () => {
        navigation.navigate('Home');
        setVisible(false);
     }

     const noNegative = () => {

        setCount(count - 1);
        if(count <= 0){
            setCount(0);
        }
     }

     const alertDeleteRaffle = () => {
        Alert.alert(
              "Delete Raffle",
              "Are you sure you want to delete your Raffle?",
              [
                {
                  text: "Cancel",
                  onPress: () => setVisible(false),
                  style: "cancel"
                },
                { text: "OK", onPress: pressHandlerDeleteRaffle }
              ]
            );
      }

      const deleteAlert = () => {

      }
    return(
        <View style={styles.card}>
        <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
                 <Image 
                     style={styles.userImage}
                     source={require ('./../assets/michael-jordan.jpeg')} />
                     <TouchableOpacity
                     onPress={pressHandlerUserProfile}
                     ><Text style={styles.userName}>{user_name}</Text></TouchableOpacity>
            </View>
            <View style={styles.headerRight}>
            <View style={{alignItems: 'flex-end', marginRight: 5}}><Text style={styles.price}> $10 </Text></View>

            <Menu
                visible={visible}
                anchor={<TouchableOpacity onPress={showMenu}><FontAwesome name="ellipsis-h" style={styles.moreIcon}/></TouchableOpacity>}
                onRequestClose={hideMenu}
                >
                <MenuItem textStyle={{fontWeight:"bold"}}onPress={alertDeleteRaffle}>Delete Raffle</MenuItem>
              </Menu>
            </View>
        </View>
                <Image 
                style={styles.raffleImage}
                source={{uri: 'https://pesonyb2c.vteximg.com.br/arquivos/ids/211437-1000-1000/PS5_Dig_DS.jpg?v=637364739009770000'}}/>
                
                <Text style={{fontWeight:'bold', color: '#000',fontSize: 20, marginLeft: 8}}> 
                Playstation 5</Text>
                <View style={styles.cardFooter}> 
                   
                    <View style={styles.footerLeft}>
                    <Text style={{fontWeight:'bold', color: '#5a5a5a', paddingTop: 5, fontSize: 13, marginRight: 10, marginBottom: 5}} >
                    {feed_description}
                   </Text>
                   
                    </View>
                    <View style={{flexDirection: 'column'}}>
                    <View style={{alignItems: 'center', marginRight: 5, marginTop: -20, marginBottom: 5}}>
                        <Text style={styles.raffleCount}>{raffle_current} / {raffle_total}</Text>
                    </View> 
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity
                            onPress={() => setCount(count + 1)}
                            >
                                <FontAwesome name="plus-circle" color="orange" size={25}/>
                                </TouchableOpacity>
                            <Text style={{ marginLeft: 2, marginRight: 2, fontSize: 20, fontWeight: 'bold'}}> { count } </Text>
                            <TouchableOpacity
                             onPress={() => noNegative() }
                            >
                                <FontAwesome name="minus-circle" color="orange" size={25}/></TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            style={styles.button}>
                            <Text style={{color:"white",fontWeight: "bold",fontSize:14}}> {'ENTER'} </Text>
                            </TouchableOpacity>
                        </View>
                </View>
    </View>
);
   
}


function RaffleCard() {


const TheFlatList = () => {
    return(
        <View>
              <FlatList
            data={DATA}
            renderItem={({ item }) => <Item user_name={item.user_name}
            user_image={item.user_image}
            feed_image={item.feed_image}
            feed_description={item.feed_description}
            raffle_current={item.raffle_current}
            raffle_total={item.raffle_total}
            />}
            keyExtractor={item => item.id}
        />
        </View>
    );
}

    return (
        <View>
            <TheFlatList />
        </View>
    );
};

const styles = StyleSheet.create({
    
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
    },
    headerRight: {
        flexDirection: 'row',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
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
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        padding: 6,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "grey",
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        width: 60,
        alignItems: 'flex-end',
        marginBottom: 5
    },
    price: {
        overflow: 'hidden',
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 12,
        borderRadius: 8,
        padding: 4,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "green",
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        width: 60,
    },
    moreIcon: {
        fontSize: 20,
        color: '#ddd',
        marginTop: 15,
        marginRight: 10,
    },
    raffleImage: {
        height: 500,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLeft: {
        flexDirection: 'row',
        width: 250,
        marginBottom: 10,
        marginLeft: 8
    },
    button: {
        width:70,
        height: 35,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:"center",
        borderRadius:8,
        backgroundColor: "#DA772C",
        
      },

});

export default RaffleCard;