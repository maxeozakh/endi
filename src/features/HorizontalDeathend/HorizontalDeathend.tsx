import * as ScreenOrientation from 'expo-screen-orientation'
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { COLORS } from '../../shared/ui/constants'

export const HorizontalDeathend: React.FC = () => {
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation | null>(null)
  const dimensions = Dimensions.get('window')
  useEffect(() => {
    checkOrientation()
    ScreenOrientation.addOrientationChangeListener(handleOrientationChange)
    return () => {
      ScreenOrientation.removeOrientationChangeListeners()
    }
  }, [])
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync()
    setOrientation(orientation)
  }
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation)
  }

  if (
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT
  ) {
    return (
      <View style={[styles.container, { width: dimensions.width }]}>
        <TextTheme stylesProp={styles.text}>there is no horizontal view for endy yet 😶‍🌫️</TextTheme>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    backgroundColor: COLORS.BLACK,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})
