import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { AddNewTagsButton } from '../features/AddNewTags/AddNewTagsButton'
import { TagsList } from '../features/TagsList/TagsList'
import { navigationProps, Routes } from '../shared/interfaces'

export const TrackTags = () => {
  const navigation = useNavigation<navigationProps>()
  return (
    <Container flexWrap="nowrap">
      <View style={styles.container}>
        <TagsList />
        <AddNewTagsButton />
      </View>
      <Button label="Track metrics" onPress={() => navigation.push(Routes.TRACK_METRICS)} />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  addNewTagButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewTagButtonText: {
    fontSize: 34,
    color: 'white',
  },
})
