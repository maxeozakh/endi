import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { DEFAULT_METRICS, DEFAULT_TAGS } from '../constants'

export interface UserMetric {
  name: string
  color: string
  id: string
}
interface UserEntitiesState {
  tags: string[]
  metrics: UserMetric[]
  addTags: (tags: string[]) => void
  addMetrics: (metrics: UserMetric[]) => void
}

export const useUserEntitiesState = create<UserEntitiesState>()(
  devtools(
    persist(
      (set) => ({
        tags: [...DEFAULT_TAGS],
        metrics: [...DEFAULT_METRICS],
        addTags: (tags) => set((state) => ({ tags: [...state.tags, ...tags] })),
        addMetrics: (metrics) => set((state) => ({ metrics: [...state.metrics, ...metrics] })),
      }),
      {
        name: 'user-entities-store',
      }
    )
  )
)

export const getTags = () => useUserEntitiesState((state) => state.tags)
export const getMetrics = () => useUserEntitiesState((state) => state.metrics)
