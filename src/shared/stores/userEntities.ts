import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

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
}

export const useUserEntitiesStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        tags: [...DEFAULT_TAGS],
        metrics: [...DEFAULT_METRICS],
        addUserTags: (tags) => set((state) => ({ tags: [...state.tags, ...tags] })),
        addUserMetrics: (metrics) => set((state) => ({ metrics: [...state.metrics, ...metrics] })),
      }),
      {
        name: 'user-entities-store',
      }
    )
  )
)

export const getUserTags = () => useUserEntitiesStore((state) => state.tags)
export const getUserMetrics = () => useUserEntitiesStore((state) => state.metrics)
export const getUserMetricByName = (name: string) =>
  useUserEntitiesStore((state) => state.metrics.find((metric) => metric.name === name))
