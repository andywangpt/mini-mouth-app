import React, { useState, useRef } from 'react';
import { View, Animated } from 'react-native';
import { TouchableOpacity, LongPressGestureHandler, State } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import { GRID_DATA } from './buttonData.js';
import { YStack, XStack, Button, Text } from '@my/ui'; // Replace with your actual imports

const DraggableButton = ({ btn, onPress, onLongPress }) => {
  const [shakeAnim] = useState(new Animated.Value(0));

  const startShaking = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true })
      ])
    ).start();
  };

  const stopShaking = () => {
    shakeAnim.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim)
      ])
    ).stop();
  };

  return (
    <LongPressGestureHandler
      minDurationMs={4000}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          onLongPress();
          startShaking();
        } else {
          stopShaking();
        }
      }}
    >
      <Animated.View
        style={{
          transform: [{ rotate: shakeAnim.interpolate({ inputRange: [-1, 1], outputRange: ['-0.1rad', '0.1rad'] }) }],
        }}
      >
        <TouchableOpacity onPress={onPress} delayPressIn={500}>
          <Button style={{ backgroundColor: btn.color }}>
            <Text>{btn.word}</Text>
          </Button>
        </TouchableOpacity>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

export function HomeScreen() {

   const buttonStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      height: 75,
      width: '8.18%',
      backgroundColor: '#99C1DE',
      borderRadius: '10',
      borderWidth: 10,
      borderColor: '#fff'
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
   
   const displayContainerStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      height: 75,
      width: '57%'
   };

   const textStyle = {
      color: 'black',
      fontSize: '16',
      
      // justifyContent: 'center',
      // alignItems: 'center',
      // height: 75,
      // width: '57%'
   };

   const dictateText = () => {
    Speech.speak(displayText);
};

// permissions for andriod
// useEffect(() => {
//     if (Platform.OS === "android") {
//         Permissions.askAsync(Permissions.AUDIO_RECORDING);
//     }
// }, []);
   
   
   const getDynamicFontSize = (text) => {
      const wordCount = text.split(" ").length;
      if (wordCount <= 1) return 500;  // adjust this size as required
      if (wordCount <= 3) return 80;
      if (wordCount <= 5) return 60;
      return 25;  // default size for longer sentences
   };
   

   const [displayText, setDisplayText] = useState('');   

   const handleWordButtonPress = (word) => {
      setDisplayText(prevText => {
         return prevText + ' ' + word;
      });
      Speech.speak(word);
   };

   const handleHelloButtonPress = (word) => {
      setDisplayText(prevText => {
         return prevText + 'Hi, I am Andy. ';
      });
      Speech.speak("Hi, I'm Andy");
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
   

   return (
      <YStack f={1} jc="flex-start" ai="center" p="$1" space="$1">

         <XStack w="100%" space="$0.5" jc="space-between" ai="center">
            <Button style={buttonStyle}><Text>🏠</Text></Button>
            <Button style={buttonStyle} onPress={handleHelloButtonPress}><Text>🔍</Text></Button> 

 
               <Button 
               style={[
                  displayStyle, 
                  { fontSize: getDynamicFontSize(displayText) }
               ]} 
                   onPress={dictateText}>
                   <Text>{displayText}</Text>
               </Button>


            
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
                 <Text style={textStyle} >{btn.word}</Text>
               </Button>
             ))}
            </XStack>
         ))}

      </YStack>
   )
}
