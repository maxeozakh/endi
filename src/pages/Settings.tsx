import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { ListItem } from '../entities/ListItem/ListItem'
import { Routes, navigationProps } from '../shared/interfaces'

export const Settings: React.FC = () => {
  const navigation = useNavigation<navigationProps>()
  return (
    <View>
      <ListItem onPress={() => navigation.navigate(Routes.MANAGE_METRICS)} label="Manage metrics" />
      <ListItem label="Manage tags" />
    </View>
  )
}
