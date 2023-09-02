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

import { HomeLayout } from './HomeLayout.js';

const numCols = 12;

export function HomeScreen() {
  const [buttonLayout, setButtonLayout] = useState([
    ...WordData,
  ]);

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    console.log('Updated buttonLayout:', {buttonLayout});
  }, [buttonLayout]);

  const handleDoublePress = () => {
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
      console.log('47 LOG ', button.category);
      return button;
    });

    setButtonLayout(newLayout);
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
