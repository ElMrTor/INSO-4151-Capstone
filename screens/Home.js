import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import RaffleCard from '../components/RaffleCard';

const Home = () => {

    return(
        <View style={styles.container}>
            <RaffleCard  />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28221E',
    },
});

export default Home;