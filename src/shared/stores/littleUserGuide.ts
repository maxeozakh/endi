import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type State = {
  isWasShown: boolean
  _hasHydrated: boolean
}

type Actions = {
  setIsWasShown: (isWasShown: boolean) => void
  resetLittleUserGuideStore: () => void
  setHasHydrated: (_hasHydrated: boolean) => void
}

export const useLittleUserGuideStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        isWasShown: false,
        _hasHydrated: false,

        setIsWasShown: (isWasShown) => set(() => ({ isWasShown })),
        setHasHydrated: (_hasHydrated) => {
          set({
            _hasHydrated,
          })
        },
        resetLittleUserGuideStore: () => set(() => ({ isWasShown: false })),
      }),
      {
        name: 'little-user-guide-store',
        storage: createJSONStorage(() => AsyncStorage),
        onRehydrateStorage: () => (state) => state.setHasHydrated(true),
      }
    )
  )
)

export const getIsWasShown = () => useLittleUserGuideStore((state) => state.isWasShown)
export const getIsHasHydrated = () => useLittleUserGuideStore((state) => state._hasHydrated)
