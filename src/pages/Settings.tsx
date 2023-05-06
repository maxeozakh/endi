import React from 'react'
import { View } from 'react-native'

import { ListItem } from '../entities/ListItem/ListItem'
import { TextTheme } from '../entities/TextTheme/TextTheme'
import { Routes, useNavigator3000 } from '../shared/useNavigator3000'

export const Settings: React.FC = () => {
  const navigation = useNavigator3000()
  return (
    <View>
      <ListItem onPress={() => navigation.push(Routes.MANAGE_METRICS)}>
        <TextTheme>manage metrics</TextTheme>
      </ListItem>
      <ListItem onPress={() => navigation.push(Routes.MANAGE_TAGS)}>
        <TextTheme>manage tags</TextTheme>
      </ListItem>
    </View>
  )
}
