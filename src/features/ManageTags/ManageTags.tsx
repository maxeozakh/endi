import React from 'react'
import { Switch } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Button } from '../../entities/Button/Button'
import { ListItem } from '../../entities/ListItem/ListItem'
import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { getUserTags, useUserEntitiesStore } from '../../shared/stores/userEntities'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

export const ManageTags: React.FC = () => {
  const { updateUserTag } = useUserEntitiesStore()
  const navigation = useNavigator3000()
  const tags = getUserTags()
  const handleChangeSwitch = (id: string) => {
    const tag = tags.find((tag) => tag.id === id)
    updateUserTag(id, {
      ...tag,
      isActive: !tag.isActive,
    })
  }

  return (
    <ScrollView>
      <Button stylesProp={{ marginBottom: 2 }} onPress={() => navigation.push(Routes.ADD_NEW_TAGS)}>
        + Add new tags
      </Button>
      {tags.map((tag) => (
        <ListItem key={tag.id}>
          <TextTheme>{tag.name}</TextTheme>
          <Switch onChange={() => handleChangeSwitch(tag.id)} value={tag.isActive} />
        </ListItem>
      ))}
    </ScrollView>
  )
}
