import React from 'react'
import { Pressable, StyleSheet, Switch, View } from 'react-native'
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

  const [sortedBy, setSortedBy] = React.useState<'name' | 'isActive'>('name')
  const sortedTags = React.useMemo(() => {
    return tags.sort((a, b) => {
      if (sortedBy === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sortedBy === 'isActive') {
        if (a.isActive === b.isActive) return 0
        if (a.isActive) return -1
        return 1
      } else return 0
    })
  }, [tags, sortedBy])

  return (
    <ScrollView>
      <Button stylesProp={{ marginBottom: 2 }} onPress={() => navigation.push(Routes.ADD_NEW_TAGS)}>
        + add new tags
      </Button>

      <View style={styles.sortContainer}>
        <TextTheme>sort by: </TextTheme>
        <View style={styles.sortOption}>
          <Pressable
            style={{
              marginHorizontal: 24,
              borderBottomWidth: sortedBy === 'name' ? 1 : 0,
              borderBottomColor: 'white',
            }}
            onPress={() => setSortedBy('name')}>
            <TextTheme>name</TextTheme>
          </Pressable>
          <Pressable
            onPress={() => setSortedBy('isActive')}
            style={{
              borderBottomWidth: sortedBy === 'isActive' ? 1 : 0,
              borderBottomColor: 'white',
            }}>
            <TextTheme>active</TextTheme>
          </Pressable>
        </View>
      </View>
      {sortedTags.map((tag) => (
        <ListItem key={tag.id}>
          <TextTheme>{tag.name}</TextTheme>
          <Switch onChange={() => handleChangeSwitch(tag.id)} value={tag.isActive} />
        </ListItem>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sortContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortOption: {
    flexDirection: 'row',
  },
})
