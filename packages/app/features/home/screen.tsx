import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Animated } from 'react-native';
import { TouchableOpacity, LongPressGestureHandler, State } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import { GRID_DATA, MENU_COLOR } from './buttonData.js';
import { YStack, XStack, Button, Text, Image } from '@my/ui'; // Replace with your actual imports

const Logo = require('./logo.png');

console.disableYellowBox = true;

export function ImageDemo() {
  return (
    <Image
      source={{
        uri: 'https://placekitten.com/200/300',
        width: 200,
        height: 300,
      }}
    />
  );
}

export function HomeScreen({ Logo }) {
  const [displayText, setDisplayText] = useState('');

  const buttonStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    height: 75,
    width: '8.18%',
    borderRadius: '100',
    borderWidth: 1000,
    borderSize: 100,
    borderColor: '#fff',
    backgroundColor: '#636f6f',
    //MECH #636f6f
  };

  const displayStyle = {
    // fontFamily: 'san-serif',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    backgroundColor: '#F0EFEB',
    margin: 2,
    width: '57%',
  };

  const menuButtonStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    height: 75,
    width: '8.18%',
    borderRadius: '10',
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#636f6f',
    //MECH #636f6f
  };

  const textStyle = {
    color: 'black',
    fontWeight: 'bold',
  };

  const dictateText = () => {
    Speech.speak(displayText);
  };

  const handleWordButtonPress = (word) => {
    setDisplayText((prevText) => {
      return prevText + ' ' + word;
    });
    Speech.speak(word);
  };

  const handleHelloButtonPress = (word) => {
    setDisplayText((prevText) => {
      return prevText + ' Hi, I am Andy. ';
    });
    Speech.speak(" Hi, I'm Andy ");
  };

  const deleteLastWord = () => {
    setDisplayText((prevText) => {
      const words = prevText.trim().split(' ');
      if (words.length <= 1) return ''; // If only one word or no words, return an empty string.
      words.pop(); // Remove the last word.
      return words.join(' '); // Convert the array of words back into a string.
    });
  };

  const clearDisplayText = () => {
    setDisplayText('');
  };

  const getDynamicFontSize = (text) => {
    const wordCount = text.split(' ').length + 2;

    if (wordCount <= 1) return 80; // adjust this size as required
    if (wordCount <= 3) return 100;
    if (wordCount <= 5) return 60;
    if (wordCount <= 7) return 50;
    if (wordCount <= 9) return 40;
    return 25; // default size for longer sentences
  };

  return (
    
    <YStack f={1} jc="flex-start" ai="center" p="$1" space="$1" bg="#2e3a43">
      <XStack w="100%" space="$0.5" jc="space-between" ai="center">
        <Button style={menuButtonStyle}>
          <Text>🏠</Text>
        </Button>
        <Button style={buttonStyle} onPress={handleHelloButtonPress}>
          <Text>👋🏼</Text>
        </Button>
        <Button ai="center" style={displayStyle} onPress={dictateText}>
          <Text style={[textStyle, { fontSize: getDynamicFontSize(displayText) }]}>{displayText}</Text>
        </Button>
        <Button style={buttonStyle} onPress={deleteLastWord}>
          <Text>⬅️</Text>
        </Button>
        <Button style={buttonStyle} onPress={clearDisplayText}>
          <Text>X</Text>
        </Button>
        <Button style={buttonStyle}>
          <Text>🏠</Text>
        </Button>
      </XStack>

      {GRID_DATA.map((row, rowIndex) => (
        <XStack key={rowIndex} w="100%" space="$1" jc="space-between" ai="center">
          {row.map((btn, colIndex) => (
            <Button
              key={colIndex}
              style={[buttonStyle, { backgroundColor: btn.color }]}
              onPress={() => {
                if (colIndex >= 1) {
                  handleWordButtonPress(btn.word);
                }
              }}
            >
              <Text style={textStyle}>{btn.word}</Text>
            </Button>
          ))}
        </XStack>
      ))}
    </YStack>
  );
}
