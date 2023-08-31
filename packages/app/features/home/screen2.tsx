import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, View, Animated } from 'react-native';
import { TouchableOpacity, LongPressGestureHandler, State } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import { GRID_DATA, MENU_COLOR } from '../../../../buttonData.js';
import { YStack, XStack, Button, Text, Image, Grid } from '@my/ui'; // Replace with your actual imports
import { HomeLayout } from './HomeLayout.js';

// import WordButton from './WordButton.js';
// import { WordData } from './WordData.js';
const Logo = require('./logo.png');

const numRows = 4;
const numCols = 4;

const WordDataArray = [
  {
    id: 'core',
    word: 'core',
    category: 'Menu',
    index: [0, 0],
    pathways: [],
  },
  {
    id: 'phrases',
    word: 'phrases',
    category: 'Menu',
    index: [0, 1],
    pathways: [],
  },

  {
    id: 'topics',
    word: 'topics',
    category: 'Menu',
    index: [0, 3],
    pathways: [],
  },
];

const WordButton = () => {
  return (
    <Button
      style={{
        backgroundColor: MENU_COLOR,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}></Text>
    </Button>
  );
};

const generateGridData = () => {
  const gridData = new Array(numRows).fill(null).map(() => new Array(numCols).fill(null));

  WordDataArray.forEach((wordInfo) => {
    const [row, col] = wordInfo.index;
    gridData[row][col] = {
      category: wordInfo.category,
      id: wordInfo.id,
      index: wordInfo.index,
      pathways: wordInfo.pathways,
      word: wordInfo.word,
    };
  });
  console.log('70 gridData: ', gridData);
  return gridData;
};

export function HomeScreen() {
  const [displayText, setDisplayText] = useState('');
  const button1 = WordButton;

  const gridData = HomeLayout;

  //
  // const renderItem = ({ item }) => {
  //   console.log('74 item: ', Array[item]);
  //   const words = item.word;
  //   console.log('92 item.word:', item.word);
  //   return <WordButton text={words} />;
  // };

  const displayStyle = {
    // fontFamily: 'san-serif',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    backgroundColor: '#F0EFEB',
    margin: 2,
    width: '57%',
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
        <WordButton text="hello" />

        <Button onPress={handleHelloButtonPress}>
          <Text>👋🏼</Text>
        </Button>

        <Button ai="center" style={displayStyle} onPress={dictateText}>
          <Text style={{ fontSize: getDynamicFontSize(displayText) }}>{displayText}</Text>
        </Button>
        <Button onPress={deleteLastWord}>
          <Text>⬅️</Text>
        </Button>
        <Button onPress={clearDisplayText}>
          <Text>X</Text>
        </Button>
        <Button>
          <Text>🏠</Text>
        </Button>
      </XStack>
      <XStack w="100%" space="$0.5" jc="space-between" ai="center">
        <FlatList
          data={gridData}
          renderItem={({ item }) => <{gridData} />}
          keyExtractor={(button, id) => `cell_${id}`}
          numColumns={numCols}
        />
      </XStack>
    </YStack>
  );
}

// {
//   GRID_DATA.map((row, rowIndex) => (
//     <XStack key={rowIndex} w="100%" space="$1" jc="space-between" ai="center">
//       {row.map((btn, colIndex) => (
//         <Button
//           key={colIndex}
//           style={[buttonStyle, { backgroundColor: btn.color }]}
//           onPress={() => {
//             if (colIndex >= 1) {
//               handleWordButtonPress(btn.word);
//             }
//           }}
//         >
//           <Text style={textStyle}>{btn.word}</Text>
//         </Button>
//       ))}
//     </XStack>
//   ));
// }

// <XStack key={rowIndex} w="100%" space="$1" jc="space-between" ai="center">
//   <DraggableFlatList
//     data={gridData}
//     numColumns={numCols}
//     renderButton={({ item }) => (
//       <View style={styles.cell}>
//         <Text>{item ? item.word : '.'}</Text>
//       </View>
//     )}
//     keyExtractor={(item) => item.key}
//   />
// </XStack>;
