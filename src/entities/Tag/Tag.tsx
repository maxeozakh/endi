import * as Haptics from 'expo-haptics'
import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { ANIMATION_CONFIG, COLORS } from '../../shared/ui/constants'

interface TagProps {
  name: string
}
export const Tag = (props: TagProps) => {
  const { name } = props
  const [isActive, setIsActive] = React.useState(false)
  const handleOnPress = () => {
    Haptics.selectionAsync()
    setIsActive(!isActive)
  }

  const backgroundColor = isActive ? '#fff' : COLORS.GRAY_DARK
  const color = isActive ? '#000' : '#fff'
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(backgroundColor, ANIMATION_CONFIG),
      color: withTiming(color, ANIMATION_CONFIG),
    }
  })

  return (
    <Pressable onPress={handleOnPress}>
      <Animated.View style={[styles.container, animatedStyles]}>
        <Text style={[styles.text, { color }]}>{name}</Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 34,
    color: '#000',
  },
})
