import {
  Button,
  Paragraph,
  XStack,
  YStack,
} from '@my/ui'
import  { useState } from 'react'
import { Text } from 'react-native'
import { GRID_DATA } from './buttonData.js';
import * as Speech from 'expo-speech';

export function HomeScreen() {

   const [displayText, setDisplayText] = useState('');   

   const handleWordButtonPress = (word) => {
      setDisplayText(prevText => {
         return prevText + ' ' + word;
      });
      Speech.speak(word);
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
   
   const buttonStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      height: 75,
      backgroundColor: 'darkgray',
      width: '8.18%'
   };
   
   const displayStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      height: 75,
      backgroundColor: 'lightgrey',
      margin: 2,
      width: '57%'
  };

   return (
      <YStack f={1} jc="flex-start" ai="center" p="$1" space="$1">

         <XStack w="100%" space="$1" jc="space-between" ai="center">
            <Button style={buttonStyle}><Text>🏠</Text></Button>
            <Button style={buttonStyle}><Text>🔍</Text></Button> 
            <Paragraph style={displayStyle}>{displayText}</Paragraph>
            <Button style={buttonStyle} onPress={deleteLastWord}><Text>⬅️</Text></Button>
            <Button style={buttonStyle} onPress={clearDisplayText}><Text>X</Text></Button> 
            <Button style={buttonStyle}><Text>🏠</Text></Button>
         </XStack>

         {GRID_DATA.map((row, rowIndex) => (
            <XStack key={rowIndex} w="100%" space="$1" ai="center">
               {row.map((btn, colIndex) => (
               
               <Button 
                  key={colIndex} 
                  style={[buttonStyle, { backgroundColor: btn.color }]}
                  onPress={() => {
                     if (colIndex >= 1) { 
                     handleWordButtonPress(btn.word);}}}>
                 <Text>{btn.word}</Text>
               </Button>
             ))}
            </XStack>
         ))}

      </YStack>
   )
}
