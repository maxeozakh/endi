import * as Haptics from 'expo-haptics'
import Toast from 'react-native-toast-message'

import { useCreateRecordStore, getRecordedData } from './stores/createRecord'
import { useRecordsStore } from './stores/records'
import { Routes, useNavigator3000 } from './useNavigator3000'

export const useCreateRecord = () => {
  const navigation = useNavigator3000()
  const { addRecord } = useRecordsStore()
  const { resetCreationState } = useCreateRecordStore()
  const { tags, metrics } = getRecordedData()

  const handleCreateRecord = () => {
    if (Object.keys(metrics).length === 0) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)

      return Toast.show({
        type: 'info',
        text1: '',
        text2: 'estimate at least one metric',
      })
    }

    addRecord({
      tags,
      metrics,
      date: new Date().toString(),
    })

    navigation.navigate(Routes.DASHBOARD)

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

    Toast.show({
      type: 'info',
      text1: '',
      text2: 'record was created!',
    })

    resetCreationState()
  }

  return { handleCreateRecord }
}
