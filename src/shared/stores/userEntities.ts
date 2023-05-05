import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { DEFAULT_METRICS, DEFAULT_TAGS } from '../constants'

export interface UserMetric {
  name: string
  color: string
  id: string
}

type State = {
  tags: string[]
  metrics: UserMetric[]
}

type Actions = {
  addUserTags: (tags: string[]) => void
  addUserMetrics: (metrics: UserMetric[]) => void
  resetUserEntities: () => void
}

export const useUserEntitiesStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        tags: [...DEFAULT_TAGS],
        metrics: [...DEFAULT_METRICS],

        addUserTags: (tags) => set((state) => ({ tags: [...tags, ...state.tags] })),
        addUserMetrics: (metrics) => set((state) => ({ metrics: [...state.metrics, ...metrics] })),
        resetUserEntities: () => set({ tags: [...DEFAULT_TAGS], metrics: [...DEFAULT_METRICS] }),
      }),
      {
        name: 'records-store',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)

export const getUserTags = () => useUserEntitiesStore((state) => state.tags)
export const getUserMetrics = () => useUserEntitiesStore((state) => state.metrics)
export const getUserMetricByName = (name: string) =>
  useUserEntitiesStore((state) => state.metrics.find((metric) => metric.name === name))
