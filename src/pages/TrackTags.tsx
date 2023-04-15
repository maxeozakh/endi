import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'

import { Container } from '../entities/Container/Container'
import { TagsList } from '../features/TagsList/TagsList'
import { navigationProps } from '../shared/interfaces'

export const TrackTags = () => {
  const navigation = useNavigation<navigationProps>()
  return (
    <Container>
      <TagsList />
      <Button title="Track metrics" onPress={() => navigation.push('Track metrics')} />
    </Container>
  )
}
