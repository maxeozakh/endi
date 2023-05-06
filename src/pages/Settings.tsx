import React from 'react'
import { View } from 'react-native'

import { ListItem } from '../entities/ListItem/ListItem'
import { Routes, useNavigator3000 } from '../shared/useNavigator3000'

export const Settings: React.FC = () => {
  const navigation = useNavigator3000()
  return (
    <View>
      <ListItem onPress={() => navigation.navigate(Routes.MANAGE_METRICS)} label="Manage metrics" />
      <ListItem label="Manage tags" />
    </View>
  )
}
