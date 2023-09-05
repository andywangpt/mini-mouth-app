import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Animated,
  StatusBar,
} from 'react-native';
import {
  YStack,
  XStack,
  Button,
  Text,
  Image,
  Grid,
  ButtonIcon,
} from '@my/ui';

import WordButton from './WordButton.js';
import { WordData } from './WordData.js';
import * as Speech from 'expo-speech';

// import { HomeLayout } from './HomeLayout.js';

const numCols = 12;

export function HomeScreen() {
  const [buttonLayout, setButtonLayout] = useState([
    ...WordData,
  ]);

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const words = buttonLayout.map((button) => button.word);
    console.log(words);
  }, [buttonLayout]);

  const handleDoublePress = (pressedWord) => {
    const pressedButton = buttonLayout.find(
      (button) => button.word === pressedWord
    );

    if (pressedButton && pressedButton.pathways) {
      const pathwayWords = pressedButton.pathways.map(
        (pathway) => pathway.id
      );

      const indexStart = buttonLayout.filter(
        (button) =>
          button.category === 'PATHWAY_WORDS' ||
          button.category === 'MENU' ||
          button.category === 'QUESTION_WORDS'
      ).length;

      console.log('indexStart', indexStart);

      const newLayout = buttonLayout.map((button, index) => {
        if (
          button.category !== 'MENU' &&
          button.category !== 'QUESTION_WORDS' &&
          index >= indexStart &&
          index - indexStart < pathwayWords.length
        ) {
          return {
            ...button,
            word: pathwayWords[index - indexStart],
            category: 'PATHWAY_WORDS',
          };
        }
        return button;
      });

      setButtonLayout(newLayout);
    }
  };

  const handleLongPress = () => {
    setButtonLayout(WordData);
    console.log('wordData', WordData);
  };

  const displayStyle = {
    // fontFamily: 'san-serif',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    backgroundColor: '#F0EFEB',
    margin: 2,
    width: '58%',
  };

  const dictateText = () => {
    Speech.speak(displayText);
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

  const handleHomeButtonPress = () => {
    setDisplayText('');
    setButtonLayout(WordData);
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
    <SafeAreaView style={{ flex: 1 }}>
      <YStack
        f={1}
        jc="flex-start"
        ai="center"
        p="$1"
        space="$1"
        bg="#2e3a43"
      >
        <XStack
          w="100%"
          space="$0.5"
          jc="space-between"
          ai="center"
          bg="#2e3a43"
        >
          <Button
            onPress={handleHomeButtonPress}
            style={menuButtonStyle}
          >
            <Text>🏠</Text>
          </Button>

          <Button
            style={menuButtonStyle}
            onPress={handleHelloButtonPress}
          >
            <Text>👋🏼</Text>
          </Button>

          <Button
            ai="center"
            style={displayStyle}
            onPress={dictateText}
          >
            <Text
              style={{
                fontSize: getDynamicFontSize(displayText),
              }}
            >
              {displayText}
            </Text>
          </Button>

          <Button
            style={menuButtonStyle}
            onPress={deleteLastWord}
          >
            <Text>⬅️</Text>
          </Button>

          <Button
            style={menuButtonStyle}
            onPress={clearDisplayText}
          >
            <Text>X</Text>
          </Button>

          <Button
            onPress={handleHomeButtonPress}
            style={menuButtonStyle}
          >
            <Text>🏠</Text>
          </Button>
        </XStack>

        <XStack
          w="100%"
          space="$0.5"
          jc="space-between"
          ai="center"
        >
          <View style={{ flex: 1 }}>
            <FlatList
              data={buttonLayout}
              renderItem={({ item }) => (
                <WordButton
                  text={item.word}
                  category={item.category}
                  setDisplayText={setDisplayText}
                  onDoublePress={handleDoublePress}
                  onLongPress={handleLongPress}
                  setButtonLayout={setButtonLayout}
                />
              )}
              keyExtractor={(item) => item.id}
              numColumns={numCols}
            />
          </View>
        </XStack>
      </YStack>
    </SafeAreaView>
  );
}

// clicked button needs to not be changed
// clicked button needs to be highlighted
// clicked button needs to be added to displayText

const menuButtonStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 1,
  padding: 0,
  height: 75,
  width: '8%',
  borderRadius: '10',
  borderWidth: 10,
  borderColor: '#fff',
  backgroundColor: '#636f6f',
  //MECH #636f6f
};
