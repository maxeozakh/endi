import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { AddNewTagsButton } from '../features/AddNewTags/AddNewTagsButton'
import { TagsList } from '../features/TagsList/TagsList'
import { COLORS } from '../shared/ui/constants'
import { Routes, useNavigator3000 } from '../shared/useNavigator3000'

export const TrackTags = () => {
  const navigation = useNavigator3000()
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <AddNewTagsButton />
        <TagsList />
      </ScrollView>
      <Button title="estimate metrics" onPress={() => navigation.push(Routes.TRACK_METRICS)} />
    </Container>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
    backgroundColor: COLORS.GRAY_DARK,
    fontSize: 16,
    borderRadius: 6,
    color: 'white',
    marginBottom: 16,
  },
})
