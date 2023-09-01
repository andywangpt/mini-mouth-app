import React, { useState, useRef } from 'react';
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
} from '@my/ui'; // Replace with your actual imports

import WordButton from './WordButton.js';
import { WordData } from './WordData.js';

import { HomeLayout } from './HomeLayout.js';

const numCols = 12;

const ButtonLayout = WordData.map((button) => {
  return { button };
});

export function HomeScreen() {
  const [buttonLayout, setButtonLayout] =
    useState(ButtonLayout);

  const [displayText, setDisplayText] = useState('');

  const handleDoublePress = (word) => {
    console.log('pressedButton', word);
    const newLayout = buttonLayout.map((button) => {
      if (
        button.category !== 'Menu' &&
        button.category !== 'Why'
      ) {
        return {
          ...button,
          Hello: 'World',
        };
      }
      console.table(button);
      return button;
    });

    setButtonLayout(newLayout);
    console.log('LAY OUT', buttonLayout);
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
                  text={item.button.word}
                  category={item.button.category}
                  setDisplayText={setDisplayText}
                  onDoublePress={handleDoublePress}
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
