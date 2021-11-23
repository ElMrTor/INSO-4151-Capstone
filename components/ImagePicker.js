import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={pickImage} >
        <Text style={{fontWeight: "bold", color: "#DA772C"}}> Pick an image from your Camera Roll </Text>
      </ TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent:"center",
  }
});