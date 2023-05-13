import { useNavigationState } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { NAVIGATION_ICONS_MAP } from './icons'
import { ANIMATION_CONFIG, COLORS } from '../../shared/ui/constants'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

interface NavigationButtonProps {
  route: Routes
  isDisabled?: boolean
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  route,
  isDisabled = false,
}) => {
  const [isActive, setIsActive] = React.useState(false)
  const navigation = useNavigator3000()
  const navigationState = useNavigationState((state) => state)
  useEffect(() => {
    if (!navigationState && Routes.INITIAL === route) {
      setIsActive(true)
      return
    }

    if (!navigationState) return

    const { routes, index } = navigationState
    if (
      routes[index].name === route ||
      // for the tracking set active both for tags and metrics
      (route === Routes.TRACK_TAGS && routes[index].name === Routes.TRACK_METRICS) ||
      // also for the dashboard & metric data too
      (route === Routes.DASHBOARD && routes[index].name === Routes.METRIC_DATA) ||
      // settings as well, will be good to do something with this, and probably there is something like
      // nesting routes, but I don't know how to do it yet
      (route === Routes.SETTINGS && routes[index].name === Routes.MANAGE_REMINDER) ||
      (route === Routes.SETTINGS && routes[index].name === Routes.EDIT_METRIC) ||
      (route === Routes.SETTINGS && routes[index].name === Routes.ADD_NEW_TAGS) ||
      (route === Routes.SETTINGS && routes[index].name === Routes.ADD_NEW_METRIC) ||
      (route === Routes.SETTINGS && routes[index].name === Routes.MANAGE_TAGS) ||
      (route === Routes.SETTINGS && routes[index].name === Routes.MANAGE_METRICS)
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
    <TouchableHighlight onPress={isDisabled ? null : handleOnPress}>
      <View style={styles.iconWrapper}>
        <Animated.View style={[animatedOpacityStyle]}>{icon}</Animated.View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: COLORS.GRAY_DARK,
    borderRadius: 50,
    padding: 16,
  },
})
