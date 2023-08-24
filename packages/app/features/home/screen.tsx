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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        margin: 1, // adjust as needed
      height: 70,
     };
   
   return (
     
   <YStack f={1} jc="flex-start" ai="center" p="$4" space>
      <XStack w="100%" space="$2" ai="center">
         <Button><Text>🏠</Text></Button>
         <Button><Text>🔍</Text></Button> 
         <Paragraph w="7/12" ta="center" bc="grey">Display Text Here</Paragraph>
         <Button><Text>⬅️</Text></Button>
         <Button><Text>X</Text></Button> 
         <Button><Text>🏠</Text></Button>
        </XStack>

   
  {/* Grid */}
      {GRID_DATA.map((row, rowIndex) => (
        <XStack key={rowIndex} w="100%" space="$2" ai="center">
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
