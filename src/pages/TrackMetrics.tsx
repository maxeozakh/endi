import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import React from 'react'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { MetricsGallery } from '../features/MetricsGallery/MetricsGallery'
import { navigationProps } from '../shared/interfaces'

export const TrackMetrics = () => {
  const navigation = useNavigation<navigationProps>()

  const handleCreateRecord = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    navigation.navigate('Dashboard')
  }
  return (
    <Container>
      <MetricsGallery />
      <Button label="Create record" onPress={handleCreateRecord} />
    </Container>
  )
}
