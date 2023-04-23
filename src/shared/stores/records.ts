import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface RecordItem {
  date: Date
  tags: string[]
  metrics: Record<string, number>
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
