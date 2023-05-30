import React from 'react'
import { ScrollView } from 'react-native'

import { Button } from '../entities/Button/Button'
import { TextTheme } from '../entities/TextTheme/TextTheme'
import { useLittleUserGuideStore } from '../shared/stores/littleUserGuide'
import { Routes, useNavigator3000 } from '../shared/useNavigator3000'

export const Welcome: React.FC = () => {
  const navigation = useNavigator3000()
  const { setIsWasShown } = useLittleUserGuideStore()
  const fontSize = 36

  const handlePressStart = () => {
    setIsWasShown(true)
    navigation.navigate(Routes.TRACK_TAGS)
  }
  return (
    <ScrollView
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <TextTheme stylesProp={{ fontSize }}>yo! {'\n'}</TextTheme>
      <TextTheme stylesProp={{ fontSize }}>
        endy is a diary with correlations between events and metrics{'\n'}
      </TextTheme>
      <TextTheme stylesProp={{ fontSize }}>
        the more records u do, the more accurate these correlations will be{'\n'}
      </TextTheme>
      <TextTheme stylesProp={{ fontSize }}>let's do one now{'\n'}</TextTheme>
      <Button stylesProp={{ fontSize }} onPress={handlePressStart}>
        <TextTheme stylesProp={{ fontSize, paddingVertical: 10 }}>press start</TextTheme>
      </Button>
    </ScrollView>
  )
}
