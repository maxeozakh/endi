import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import Toast from 'react-native-toast-message'

import { navigationProps } from './interfaces'
import { useCreateRecordStore, getRecordedData } from './stores/createRecord'
import { useRecordsStore } from './stores/records'

export const useCreateRecord = () => {
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

  return { handleCreateRecord }
}
