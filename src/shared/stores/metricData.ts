import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { Period } from '../interfaces'

interface State {
  selectedPeriod: Period
}

interface Actions {
  selectPeriod: (period: Period) => void
}

export const useMetricDataStore = create<State & Actions>()(
  devtools(
    (set) => ({
      selectedPeriod: Period.MONTH,

      selectPeriod: (period) => set({ selectedPeriod: period }),
    }),
    {
      name: 'metric-data-store',
    }
  )
)

export const getSelectedPeriod = () => useMetricDataStore((state) => state.selectedPeriod)
