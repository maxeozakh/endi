import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

type State = {
  isEnabled: boolean
  isPermissionGranted: boolean
  time: string
}

type Actions = {
  setIsEnabled: (isEnabled: boolean) => void
  setTime: (time: string) => void
  setIsPermissionGranted: (isPermissionGranted: boolean) => void
}

const defaultTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  20,
  0,
  0
)

export const useReminderStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        isEnabled: false,
        time: defaultTime.toString(),
        isPermissionGranted: true,

        setIsEnabled: (isEnabled) => set(() => ({ isEnabled })),
        setTime: (time) => set(() => ({ time })),
        setIsPermissionGranted: (isPermissionGranted) => set(() => ({ isPermissionGranted })),
      }),
      {
        name: 'reminder-store',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)

export const getIsEnabled = () => useReminderStore((state) => state.isEnabled)
export const getTime = () => useReminderStore((state) => state.time)
export const getIsReminderPermissionGranted = () =>
  useReminderStore((state) => state.isPermissionGranted)
