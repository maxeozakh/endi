import React from 'react'
import { View } from 'react-native'

import { Button } from '../entities/Button/Button'
import { MetricsGallery } from '../features/MetricsGallery/MetricsGallery'
import { useCreateRecord } from '../shared/useCreateRecord'

export const TrackMetrics = () => {
  const { handleCreateRecord } = useCreateRecord()
  return (
    <View style={{ justifyContent: 'space-between', height: '100%' }}>
      <MetricsGallery />
      <View style={{ paddingHorizontal: 4, paddingBottom: 4 }}>
        <Button title="create record" onPress={handleCreateRecord} />
      </View>
    </View>
  )
}
