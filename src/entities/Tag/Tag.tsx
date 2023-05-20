import * as Haptics from 'expo-haptics'
import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { useCreateRecordStore } from '../../shared/stores/createRecord'
import { ANIMATION_CONFIG, COLORS } from '../../shared/ui/constants'

interface TagProps {
  name: string
  isChosed: boolean
}
export const Tag: React.FC<TagProps> = ({ name, isChosed }) => {
  const { addTagsToTheRecord, removeTagFromTheRecord } = useCreateRecordStore()

  const handleOnPress = () => {
    if (isChosed) {
      removeTagFromTheRecord(name)
    } else addTagsToTheRecord([name])

    Haptics.selectionAsync()
  }

  const backgroundColor = isChosed ? '#fff' : COLORS.GRAY_DARK
  const color = isChosed ? '#000' : '#fff'
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
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
})
