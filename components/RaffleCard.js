import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, Alert, SafeAreaView, ScrollView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


const DATA = [
    {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: 'https://m.media-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg',
        feed_description: 'The box this comes in is 4 meter by 5 foot and weights 18 kilogram.',
        raffle_current: 55,
        raffle_total: 100,
        raffle_price: 15,
        raffle_title: 'Plush Cat'
    },
    {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: 'https://m.media-amazon.com/images/I/41GZI7HASrL._SL1000_.jpg',
        feed_description: 'one of my hobbies is mushroom cultivation. and when i\'m cultivating mushrooms this works great.',
        raffle_current: 77,
        raffle_total: 200,
        raffle_price: 100,
        raffle_title: 'Bottle of Oil'
    },  {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000',
        feed_description: 'I tried to electrocute it but got sweetmeat all over it.',
        raffle_current: 97,
        raffle_total: 300,
        raffle_price: 8,
        raffle_title: 'Cork'
    },  {
        user_name: 'Michael Jordan',
        user_image: './../assets/michael-jordan.jpeg',
        feed_image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-space-sport-black-nc-1up?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1594318651000',
        feed_description: 'My co-worker Mitchell has one of these. He says it looks dry.',
        raffle_current: 700,
        raffle_total: 10000,
        raffle_price: 1,
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
                source={{uri: feed_image}}/>
                
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
            keyExtractor={(item, index) => {
                return index.toString();
            }}
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