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

  const handleDoublePress = () => {
    //get word pathways
    //get word pathways from word data

    const newLayout = buttonLayout.map((button) => {
      if (
        button.category !== 'MENU' &&
        button.category !== 'QUESTION_WORDS'
      ) {
        return {
          ...button,
          word: 'How to connect this to WordData?', // <--- this is the problem
        };
      }
      return button;
    });

    setButtonLayout(newLayout);
  };

  const handleLongPress = () => {
    //return prev button layout
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
