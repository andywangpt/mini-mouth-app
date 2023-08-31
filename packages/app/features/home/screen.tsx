import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, View, Animated, StatusBar } from 'react-native';
import { YStack, XStack, Button, Text, Image, Grid } from '@my/ui'; // Replace with your actual imports

import WordButton from './WordButton.js';
import { WordData } from './WordData.js';

import * as Speech from 'expo-speech';
import { HomeLayout } from './HomeLayout.js';

const numCols = 12;

const WordButtons = WordData.map((button) => {
  return { button };
});

export function HomeScreen() {
  const [displayText, setDisplayText] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <YStack f={1} jc="flex-start" ai="center" p="$1" space="$1" bg="#2e3a43">
        <XStack w="100%" space="$0.5" jc="space-between" ai="center">
          <View style={{ flex: 1 }}>
            <FlatList
              data={WordButtons}
              renderItem={({ item }) => <WordButton text={item.button.word} setDisplayText={setDisplayText} />}
              keyExtractor={(item, id) => `cell_${id}`}
              numColumns={numCols}
            />
          </View>
        </XStack>
      </YStack>
    </SafeAreaView>
  );
}
