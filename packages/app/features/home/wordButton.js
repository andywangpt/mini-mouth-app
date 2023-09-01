import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import * as Speech from 'expo-speech';

export default function WordButton({
  text,
  category,
  setDisplayText,
  onDoublePress
}) {
  const [currentText, setCurrentText] = useState(text);
  const [lastPressTime, setLastPressTime] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [lastPressedButton, setLastPressedButton] =
    useState(null);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  const getButtonStyle = ({ pressed }) => {
    if (category === 'Menu') {
      return [
        styles.button,
        {
          backgroundColor: pressed ? '#f1ffff' : '#636f6f',
        },
      ];
    }

    if (category === 'WHO') {
      return [
        styles.button,
        {
          backgroundColor: pressed ? '#f1ffff' : '#8a9b9b',
        },
      ];
    } else {
      return [
        styles.button,
        {
          backgroundColor: pressed ? '#f1ffff' : '#768585',
        },
      ];
    }
  };

  const handleWordButtonPress = () => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastPressTime;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (timeDifference < 800) {
      // double press
      console.log('double press', currentText);
      onDoublePress({ word: currentText, category: category });
    } else {
      const id = setTimeout(() => {
        setDisplayText((prevText) => {
          return prevText + ' ' + currentText;
        });
        Speech.speak(currentText);
      }, 800);
      setTimeoutId(id);
    }
    setLastPressTime(currentTime);
  };

  const handleLongPress = () => {
    console.log('long press', currentText);
  };

  return (
    <Pressable
      onPress={() => handleWordButtonPress(text)}
      style={getButtonStyle}
      onLongPress={handleLongPress}
      delayLongPress={750}
    >
      <View>
        <Text style={styles.buttonText}>{text}</Text>
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
    borderColor: 'black',
    borderWidth: 1,
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
