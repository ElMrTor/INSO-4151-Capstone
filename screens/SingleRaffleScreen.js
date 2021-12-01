import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import SingleRaffle from './SingleRaffle';

const SingleRaffleScreen = () => {

    return(
        <View style={style.container}>
            <SingleRaffle  />
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