import {
  Button,
  Paragraph,
  XStack,
  YStack,
} from '@my/ui'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { GRID_DATA } from './buttonData.js';

export function HomeScreen() {

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
         <Paragraph style={displayStyle}>Display Text Here</Paragraph>
         <Button style={buttonStyle}><Text>⬅️</Text></Button>
         <Button style={buttonStyle}><Text>X</Text></Button> 
         <Button style={buttonStyle}><Text>🏠</Text></Button>
        </XStack>

   
  {/* Grid */}
      {GRID_DATA.map((row, rowIndex) => (
        <XStack key={rowIndex} w="100%" space="$1" ai="center">
          {row.map((btn, colIndex) => (
            <Button key={colIndex} style={[buttonStyle, { backgroundColor: btn.color }]}>
              <Text>{btn.word}</Text>
            </Button>
          ))}
        </XStack>
      ))}
   </YStack>
  )
}
