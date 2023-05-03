import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { TagsList } from '../features/TagsList/TagsList'
import { Routes } from '../shared/constants'
import { navigationProps } from '../shared/interfaces'

export const TrackTags = () => {
  const navigation = useNavigation<navigationProps>()
  return (
    <Container flexWrap="nowrap">
      <View style={styles.container}>
        <TagsList />
        <Button onPress={() => navigation.navigate(Routes.ADD_NEW_TAGS)}>+++</Button>
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
})
