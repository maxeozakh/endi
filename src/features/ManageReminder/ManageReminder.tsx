import DateTimePicker from '@react-native-community/datetimepicker'
import * as Notifications from 'expo-notifications'
import React, { useEffect } from 'react'
import { StyleSheet, Switch, View } from 'react-native'

import { TextTheme } from '../../entities/TextTheme/TextTheme'
import {
  getTime,
  useReminderStore,
  getIsEnabled,
  getIsReminderPermissionGranted,
} from '../../shared/stores/reminder'
import { useReminder } from '../../shared/useReminder'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export const ManageReminder: React.FC = () => {
  const { setTime, setIsEnabled } = useReminderStore()
  const { activateNotification } = useReminder()
  const isEnabled = getIsEnabled()
  const isPermissionGranted = getIsReminderPermissionGranted()

  const time = new Date(getTime())

  useEffect(() => {
    if (isEnabled) {
      activateNotification()
    } else {
      Notifications.cancelAllScheduledNotificationsAsync()
    }
  }, [isEnabled, time])

  return (
    <View style={styles.container}>
      {!isPermissionGranted && <TextTheme>notification permission not granted 👺</TextTheme>}
      <DateTimePicker
        disabled={!isPermissionGranted}
        themeVariant="dark"
        onChange={(event, time) => setTime(time.toString())}
        value={time}
        mode="time"
        display="spinner"
      />
      <Switch
        disabled={!isPermissionGranted}
        value={isEnabled}
        onChange={() => setIsEnabled(!isEnabled)}
        style={styles.switch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginTop: 32,
  },
})
