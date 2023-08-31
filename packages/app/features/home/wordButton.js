import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Speech from 'expo-speech';

export default function WordButton({ text, setDisplayText }) {
  const getButtonStyle = ({ pressed }) => {
    return [
      styles.button,
      {
        backgroundColor: pressed ? '#f1ffff' : '#636f6f',
      },
    ];
  };

  const handleWordButtonPress = (word) => {
    setDisplayText((prevText) => {
      return prevText + ' ' + word;
    });
    Speech.speak(word);
    console.log(word);
  };

  return (
    <Pressable onPress={() => handleWordButtonPress(text)} style={getButtonStyle}>
      <View>
        <Text style={styles.buttonText}> {text} </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    padding: 1,
    width: '8.18%',
    height: 75,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#636f6f',
    //MECH #636f6f
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

// const menuButtonStyle = {
//   justifyContent: 'center',
//   alignItems: 'center',
//   margin: 0,
//   padding: 0,
//   height: 75,
//   width: '8.18%',
//   borderRadius: '10',
//   borderWidth: 10,
//   borderColor: '#fff',
//   backgroundColor: '#636f6f',
//   //MECH #636f6f
// };
