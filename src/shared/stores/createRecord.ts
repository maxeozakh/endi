import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { MetricValue } from './records'

export interface CreateRecordStore {
  tags: string[]
  metrics: Record<string, MetricValue | null>
  addTagsToTheRecord: (tags: string[]) => void
  removeTagFromTheRecord: (tag: string) => void
  addMetricToTheRecord: (metric: string, value: MetricValue | null) => void
  removeMetricToTheRecord: (metric: string) => void
  reset: () => void
}

export const useCreateRecordStore = create<CreateRecordStore>()(
  devtools(
    (set) => ({
      tags: [],
      metrics: {},

      addTagsToTheRecord: (tags: string[]) => set((state) => ({ tags: [...state.tags, ...tags] })),
      removeTagFromTheRecord: (tag: string) =>
        set((state) => ({ tags: state.tags.filter((t) => t !== tag) })),

      addMetricToTheRecord: (metric: string, value: MetricValue | null) =>
        set((state) => ({ metrics: { ...state.metrics, [metric]: value } })),
      removeMetricToTheRecord: (metric: string) =>
        set((state) => {
          delete state.metrics[metric]
          return state.metrics
        }),

      reset: () => set({ tags: [], metrics: {} }),
    }),
    {
      name: 'create-record-store',
    }
  )
)

export const getRecordedTags = () => useCreateRecordStore((state) => state.tags)
export const getRecordedMetrics = () => useCreateRecordStore((state) => state.metrics)

export const getRecordedData = () =>
  useCreateRecordStore((state) => ({ tags: state.tags, metrics: state.metrics }))
