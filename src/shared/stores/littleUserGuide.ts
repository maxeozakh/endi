import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type State = {
  isWasShown: boolean
}

type Actions = {
  setIsWasShown: (isWasShown: boolean) => void
  resetLittleUserGuideStore: () => void
}

export const useLittleUserGuideStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        isWasShown: false,
        setIsWasShown: (isWasShown) => set(() => ({ isWasShown })),
        resetLittleUserGuideStore: () => set(() => ({ isWasShown: false })),
      }),
      {
        name: 'little-user-guide-store',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)

export const getIsWasShown = () => useLittleUserGuideStore((state) => state.isWasShown)
