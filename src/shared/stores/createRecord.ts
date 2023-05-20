import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { MetricValue } from './records'

interface State {
  recordedTags: string[]
  searchPhrase: string
  metrics: Record<string, MetricValue | null>
}

interface Actions {
  addTagsToTheRecord: (recordedTags: string[]) => void
  removeTagFromTheRecord: (tag: string) => void
  addMetricToTheRecord: (metric: string, value: MetricValue | null) => void
  removeMetricToTheRecord: (metric: string) => void
  resetCreationState: () => void
  setSearchPhrase: (searchPhrase: string) => void
}

export const useCreateRecordStore = create<State & Actions>()(
  devtools(
    (set) => ({
      searchPhrase: '',
      recordedTags: [],
      metrics: {},

      addTagsToTheRecord: (recordedTags: string[]) =>
        set((state) => ({ recordedTags: [...state.recordedTags, ...recordedTags] })),
      removeTagFromTheRecord: (tag: string) =>
        set((state) => ({ recordedTags: state.recordedTags.filter((t) => t !== tag) })),

      addMetricToTheRecord: (metric: string, value: MetricValue | null) =>
        set((state) => ({ metrics: { ...state.metrics, [metric]: value } })),
      removeMetricToTheRecord: (metric: string) =>
        set((state) => {
          delete state.metrics[metric]
          return state.metrics
        }),

      setSearchPhrase: (searchPhrase: string) => set({ searchPhrase }),

      resetCreationState: () => set({ recordedTags: [], metrics: {} }),
    }),
    {
      name: 'create-record-store',
    }
  )
)

export const getRecordedTags = () => useCreateRecordStore((state) => state.recordedTags)
export const getRecordedMetrics = () => useCreateRecordStore((state) => state.metrics)

export const getRecordedMetricValue = (metricName: string) => {
  const metricValue = useCreateRecordStore((state) => state.metrics[metricName]) || null
  return metricValue
}

export const getSearchPhrase = () => useCreateRecordStore((state) => state.searchPhrase)

export const getRecordedData = () =>
  useCreateRecordStore((state) => ({ recordedTags: state.recordedTags, metrics: state.metrics }))
