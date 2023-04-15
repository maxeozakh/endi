import { useNavigation, useNavigationState } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { NAVIGATION_ICONS_MAP } from './icons'
import { Routes } from '../../shared/constants'
import { navigationProps } from '../../shared/interfaces'
import { ANIMATION_CONFIG, COLORS } from '../../shared/ui/constants'

interface NavigationButtonProps {
  route: Routes
  isDisabled?: boolean
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  route,
  isDisabled = false,
}) => {
  const [isActive, setIsActive] = React.useState(false)
  const navigation = useNavigation<navigationProps>()
  const navigationState = useNavigationState((state) => state)
  useEffect(() => {
    if (!navigationState && Routes.INITIAL === route) {
      setIsActive(true)
      return
    }

    if (!navigationState) return

    const { routeNames, index } = navigationState
    if (
      routeNames[index] === route ||
      (route === Routes.TRACK_TAGS && routeNames[index] === Routes.TRACK_METRICS)
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [navigationState])

  const handleOnPress = () => {
    navigation.navigate(route)
  }

  const icon = NAVIGATION_ICONS_MAP[route]
  const opacityStyle = isActive ? 1 : 0.4
  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityStyle, ANIMATION_CONFIG),
    }
  })

  return (
    <Pressable onPress={isDisabled ? null : handleOnPress}>
      <View style={styles.iconWrapper}>
        <Animated.View style={[animatedOpacityStyle]}>{icon}</Animated.View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: COLORS.GRAY_DARK,
    borderRadius: 50,
    padding: 16,
  },
})
