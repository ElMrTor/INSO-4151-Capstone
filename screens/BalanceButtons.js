import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';

export default class  BalanceButtons extends React.Component{

    state = {
        showModal: false,
        status: "Pending"
      };

      handleResponse = data => {
          if(data.title === 'PayPal'){
              this.setState({showModal: false, status: 'Complete'})
          }
      }

      render() {
        return(
            <View style={styles.container}>

                <View>
                <Modal 
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                    >
                            <WebView 
                            style={{marginTop: 40}}
                            source={{ uri: 'http://localhost:5000/paypal' }} 
                            onNavigationStateChange={data => this.handleResponse}
                            injectedJavaScript={`document.submit()`}
                            />
                </Modal>
                </View>
                <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center'}}>How much would you like {"\n"} to add to your balance? </Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                    style={styles.balanceBtn}
                    onPress={() => this.setState({showModal: true})}
                    >
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
      fontSize:24,
      },
});