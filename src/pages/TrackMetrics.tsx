import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import React from 'react'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { MetricsGallery } from '../features/MetricsGallery/MetricsGallery'
import { navigationProps } from '../shared/interfaces'
import { getRecordedData } from '../shared/stores/createRecord'
import { useRecordsStore } from '../shared/stores/records'

export const TrackMetrics = () => {
  const navigation = useNavigation<navigationProps>()
  const { addRecord } = useRecordsStore()
  const { tags, metrics } = getRecordedData()

  const handleCreateRecord = () => {
    addRecord({
      tags,
      metrics,
      date: new Date(),
    })

    navigation.navigate('Dashboard')

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }
  return (
    <Container>
      <MetricsGallery />
      <Button label="Create record" onPress={handleCreateRecord} />
    </Container>
  )
}
