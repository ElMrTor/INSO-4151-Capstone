import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import RaffleCard from '../components/RaffleCard';

const SingleRaffleScreen = () => {

    return(
        <View style={style.container}>
            <RaffleCard  />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28221E',
    },
});

export default SingleRaffleScreen;