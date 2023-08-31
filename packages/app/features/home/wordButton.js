import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function WordButton({ text }) {
  const handleWordButtonPress = (word) => {
    console.log('button pressed');
  };

  return (
    <TouchableOpacity style={styles.button}>
      <View>
        <Text styles={styles.buttonText}> {text}  </Text>
      </View>
    </TouchableOpacity>
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
