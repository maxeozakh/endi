import * as Notifications from 'expo-notifications'
import React from 'react'
import { View } from 'react-native'

import { ListItem } from '../entities/ListItem/ListItem'
import { TextTheme } from '../entities/TextTheme/TextTheme'
import { Routes, useNavigator3000 } from '../shared/useNavigator3000'

export const Settings: React.FC = () => {
  const navigation = useNavigator3000()
  Notifications.cancelAllScheduledNotificationsAsync()
  return (
    <View>
      <ListItem onPress={() => navigation.push(Routes.MANAGE_METRICS)}>
        <TextTheme>metrics</TextTheme>
      </ListItem>
      <ListItem onPress={() => navigation.push(Routes.MANAGE_TAGS)}>
        <TextTheme>tags</TextTheme>
      </ListItem>
      <ListItem onPress={() => navigation.push(Routes.MANAGE_REMINDER)}>
        <TextTheme>reminder</TextTheme>
      </ListItem>
    </View>
  )
}
