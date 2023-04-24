import * as Haptics from 'expo-haptics'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { ANIMATION_CONFIG } from '../../shared/ui/constants'
import { getRecordedMetricValue } from '../../shared/stores/createRecord'

interface EstimateButtonProps {
  onSelectCallback: (metricName: string, level: number) => void
  label: string
  emoji: string
  value: number
  isActive: boolean
  metricName: string
}

export const EstimateButton: React.FC<EstimateButtonProps> = ({
  onSelectCallback,
  label,
  isActive,
  value,
  emoji,
  metricName,
}) => {
  const backgroundColor = isActive ? '#000' : '#3838381a'
  const color = isActive ? '#fff' : '#000'
  const animatedBackroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(backgroundColor, ANIMATION_CONFIG),
    }
  })
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(color, ANIMATION_CONFIG),
    }
  })
  const recordedValue = getRecordedMetricValue(metricName)

  // if we press the same button twice, we want to remove the value
  const valueToRecord = recordedValue === value ? 0 : value

  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync()
        onSelectCallback(metricName, valueToRecord)
      }}>
      <Animated.View style={[styles.container, animatedBackroundStyle]}>
        <Animated.Text style={[styles.text, animatedTextStyle]}>{label}</Animated.Text>
        <Text style={styles.text}>{emoji}</Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
})
