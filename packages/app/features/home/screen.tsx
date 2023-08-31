import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, View, Animated, StatusBar } from 'react-native';
import { TouchableOpacity, LongPressGestureHandler, State } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import { GRID_DATA, MENU_COLOR } from '../../../../buttonData.js';
import { YStack, XStack, Button, Text, Image, Grid } from '@my/ui'; // Replace with your actual imports
import { HomeLayout } from './HomeLayout.js';

import WordButton from './WordButton.js';
import { WordData } from './WordData.js';
// const Logo = require('./logo.png');

const numRows = 8;
const numCols = 12;

export function HomeScreen() {
  const [displayText, setDisplayText] = useState('');

  //make a array of WordButtons with the words from WordData
  const WordButtons = WordData.map((word) => {
    return { word: word };
  });

  console.log(WordButtons[5].word.word);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <YStack f={1} jc="flex-start" ai="center" p="$1" space="$1" bg="#2e3a43">
        <XStack w="100%" space="$0.5" jc="space-between" ai="center">
          <View style={{ flex: 1 }}></View>
          <FlatList
            data={WordButtons}
            renderItem={({ item }) => <WordButton text={item.word.word} />}
            keyExtractor={(item, id) => `cell_${id}`}
            numColumns={numCols}
          />
        </XStack>
      </YStack>
    </SafeAreaView>
  );
}
