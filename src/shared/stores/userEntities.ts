import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { DEFAULT_METRICS, DEFAULT_TAGS } from '../constants'

export interface UserMetric {
  name: string
  color: string
  id: string
  isActive: boolean
}

export interface UserTag {
  name: string
  id: string
  isActive: boolean
}

type State = {
  tags: UserTag[]
  metrics: UserMetric[]
}

type Actions = {
  addUserTags: (tags: UserTag[]) => void
  addUserMetric: (metric: UserMetric) => void
  deleteUserMetric: (id: string) => void
  updateUserMetric: (id: string, metric: UserMetric) => void
  resetUserEntities: () => void
}

export const useUserEntitiesStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        tags: [...DEFAULT_TAGS],
        metrics: [...DEFAULT_METRICS],

        addUserTags: (tags) => set((state) => ({ tags: [...tags, ...state.tags] })),
        addUserMetric: (metric) => set((state) => ({ metrics: [metric, ...state.metrics] })),
        resetUserEntities: () => set({ tags: [...DEFAULT_TAGS], metrics: [...DEFAULT_METRICS] }),
        deleteUserMetric: (id) =>
          set((state) => ({ metrics: state.metrics.filter((metric) => metric.id !== id) })),
        updateUserMetric: (id, metric) =>
          set((state) => ({ metrics: state.metrics.map((m) => (m.id === id ? metric : m)) })),
      }),
      {
        name: 'user-entities-store',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)

export const getUserTags = () => useUserEntitiesStore((state) => state.tags)
export const getUserTagNames = () =>
  useUserEntitiesStore((state) => state.tags).map((tag) => tag.name)
export const getUserMetrics = () => useUserEntitiesStore((state) => state.metrics)
export const getActiveUserMetrics = () =>
  useUserEntitiesStore((state) => state.metrics).filter((metric) => metric.isActive)
export const getUserMetricByName = (name: string) =>
  useUserEntitiesStore((state) => state.metrics.find((metric) => metric.name === name))

export const getUserMetricById = (id: string) =>
  useUserEntitiesStore((state) => state.metrics.find((metric) => metric.id === id))
