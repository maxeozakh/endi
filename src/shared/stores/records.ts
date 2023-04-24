import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export type MetricValue = 1 | 2 | 3 | 4 | 5 | 0
interface RecordItem {
  date: string
  tags: string[]
  metrics: Record<string, MetricValue>
}

type State = {
  records: RecordItem[]
}

type Actions = {
  addRecord: (record: RecordItem) => void
}

export const useRecordsStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        records: [],
        addRecord: (record) => set((state) => ({ records: [...state.records, record] })),
      }),
      {
        name: 'records-store',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
)

export const getRecords = () => useRecordsStore((state) => state.records)

export const getLastRecord = () =>
  useRecordsStore(
    (state) =>
      state.records.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  )

export const getLastRecordedMetric = (metricName: string) =>
  useRecordsStore((state) =>
    state.records
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .find((record) => record.metrics[metricName])
  )
