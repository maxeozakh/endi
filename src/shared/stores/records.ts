import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Record {
  date: Date
  tags: string[]
  metrics: string[]
}

interface RecordsState {
  records: Record[]
  addRecord: (record: Record) => void
}

export const useRecordsStore = create<RecordsState>()(
  devtools(
    persist(
      (set) => ({
        records: [],
        addRecord: (record) => set((state) => ({ records: [...state.records, record] })),
      }),
      {
        name: 'records-store',
      }
    )
  )
)
