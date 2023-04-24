import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { TagsList } from '../features/TagsList/TagsList'
import { navigationProps } from '../shared/interfaces'

export const TrackTags = () => {
  const navigation = useNavigation<navigationProps>()
  return (
    <Container flexWrap="nowrap">
      <TagsList />
      <Button label="Track metrics" onPress={() => navigation.push('Track metrics')} />
    </Container>
  )
}
