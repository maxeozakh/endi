import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import React from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'

import { Button } from '../entities/Button/Button'
import { Container } from '../entities/Container/Container'
import { MetricsGallery } from '../features/MetricsGallery/MetricsGallery'
import { navigationProps } from '../shared/interfaces'
import { getRecordedData, useCreateRecordStore } from '../shared/stores/createRecord'
import { useRecordsStore } from '../shared/stores/records'

export const TrackMetrics = () => {
  const navigation = useNavigation<navigationProps>()
  const { addRecord } = useRecordsStore()
  const { resetCreationState } = useCreateRecordStore()
  const { tags, metrics } = getRecordedData()

  const handleCreateRecord = () => {
    addRecord({
      tags,
      metrics,
      date: new Date().toString(),
    })

    navigation.navigate('Dashboard')

    Toast.show({
      type: 'info',
      text1: '',
      text2: 'record was created!',
    })

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

    resetCreationState()
  }
  return (
    <Container padding={0}>
      <MetricsGallery />
      <View style={{ paddingHorizontal: 4, paddingBottom: 4 }}>
        <Button label="Create record" onPress={handleCreateRecord} />
      </View>
    </Container>
  )
}
