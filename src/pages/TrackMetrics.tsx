import React from 'react'
import { View } from 'react-native'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { MetricsGallery } from '../features/MetricsGallery/MetricsGallery'
import { useCreateRecord } from '../shared/useCreateRecord'

export const TrackMetrics = () => {
  const { handleCreateRecord } = useCreateRecord()
  return (
    <Container>
      <MetricsGallery />
      <View style={{ paddingHorizontal: 4, paddingBottom: 4 }}>
        <Button title="create record" onPress={handleCreateRecord} />
      </View>
    </Container>
  )
}
