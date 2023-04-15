import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { COLORS } from '../../shared/ui/constants'

interface TagProps {
  name: string
}
export const Tag = (props: TagProps) => {
  const { name } = props
  const [isActive, setIsActive] = React.useState(false)
  const backgroundColor = isActive ? '#fff' : COLORS.GRAY_DARK
  const color = isActive ? '#000' : '#fff'
  const handleOnPress = () => {
    setIsActive(!isActive)
  }

  // const config = {
  //   duration: 500,
  //   easing: Easing.ease(1),
  // }
  const easingFunc = Easing.bezier(0.25, 0.1, 0.25, 1)
  const config = {
    duration: 150,
    easing: easingFunc,
  }
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(backgroundColor, config),
      color: withTiming(color, config),
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable onPress={handleOnPress}>
        <Text style={[styles.text, { color }]}>{name}</Text>
      </Pressable>
    </Animated.View>
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
    // transitionDuration: '0.4s',
  },
  text: {
    fontSize: 34,
    color: '#000',
  },
})
