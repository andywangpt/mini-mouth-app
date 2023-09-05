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
} from '@my/ui';

import WordButton from './WordButton.js';
import { WordData } from './WordData.js';

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

      const newLayout = buttonLayout.map(
        (button, index) => {
          if (
            button.category !== 'MENU' &&
            button.category !== 'QUESTION_WORDS' &&
            index < pathwayWords.length
          ) {
            return {
              ...button,
              word: pathwayWords[index],
              category: 'PATHWAY_WORDS',
            };
          }
          return button;
        }
      );

      setButtonLayout(newLayout);
    }
  };
  const handleLongPress = () => {
    setButtonLayout(WordData);
    console.log('wordData', WordData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />

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
