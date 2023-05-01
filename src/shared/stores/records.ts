import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { getWeekStructure } from '../../features/MetricChart/utils'
import { isInThisWeek } from '../utils'

export type MetricValue = 1 | 2 | 3 | 4 | 5 | 0
export interface RecordItem {
  date: string
  tags: string[]
  metrics: Record<string, MetricValue>
}

type State = {
  records: RecordItem[]
}

type Actions = {
  addRecord: (record: RecordItem) => void
  resetAllRecords: () => void
}

export const useRecordsStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        records: [],
        addRecord: (record) => set((state) => ({ records: [...state.records, record] })),
        resetAllRecords: () => set((state) => ({ records: [] })),
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

export const getRecordsWithMetric = (metricName: string) =>
  getRecords().filter((record) => record.metrics[metricName])

export const getLastWeekRecordsByMetric = (metricName: string) => {
  const recordsWithMetric = getRecordsWithMetric(metricName)

  return recordsWithMetric.filter((record) => {
    return isInThisWeek(new Date(record.date))
  })
}

export const getMetricValuesByWeekDays = (metricName: string) => {
  const records = getLastWeekRecordsByMetric(metricName)

  const weekStructure = getWeekStructure()

  const metricValuesByWeekDays = weekStructure.map((day) => {
    const dayRecord = records.find((record) => {
      return new Date(record.date).toDateString() === new Date(day).toDateString()
    })

    const value = dayRecord?.metrics[metricName] || null

    return {
      day,
      value,
    }
  })

  return metricValuesByWeekDays
}
