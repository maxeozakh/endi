import * as Notifications from 'expo-notifications'
import { useCallback } from 'react'

import { getTime, useReminderStore, getIsEnabled } from './stores/reminder'

export const useReminder = () => {
  const time = new Date(getTime())
  const { setIsPermissionGranted } = useReminderStore()
  const isEnabled = getIsEnabled()

  const activateNotification = useCallback(async () => {
    if (!isEnabled) return

    const { status } = await Notifications.requestPermissionsAsync()
    if (status !== 'granted') {
      return setIsPermissionGranted(false)
    }

    await Notifications.cancelAllScheduledNotificationsAsync()
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'hey fren',
        body: "don't forget to track your metrics today! 🦊",
      },
      trigger: {
        hour: time.getHours(),
        minute: time.getMinutes(),
        repeats: true,
      },
    })
  }, [time, isEnabled, setIsPermissionGranted])

  return { activateNotification }
}
