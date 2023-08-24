import {
  Button,
  Paragraph,
  XStack,
  YStack,
} from '@my/ui'
import React, { useState } from 'react'

import { Text } from 'react-native'

export function HomeScreen() {


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
   </YStack>
  )
}
