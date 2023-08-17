import { useLittleUserGuideStore } from './stores/littleUserGuide'
import { RecordItem, useRecordsStore } from './stores/records'
import { useUserEntitiesStore } from './stores/userEntities'

export const useTestData = () => {
  const { addRecord, resetAllRecords } = useRecordsStore()
  const { resetUserEntities } = useUserEntitiesStore()
  const { resetLittleUserGuideStore } = useLittleUserGuideStore()

  const testData = [
    {
      date: '2023-07-01',
      tags: ['exercise', 'coffee', 'stress', 'junk food'],
      metrics: {
        energy: 2,
        focus: 3,
        fun: 1,
      },
    },
    {
      date: '2023-07-03',
      tags: ['good sleep', 'healthy food', 'good work session'],
      metrics: {
        energy: 4,
        focus: 5,
        fun: 4,
      },
    },
    {
      date: '2023-07-05',
      tags: ['activity outside', 'walk outside', 'relax'],
      metrics: {
        energy: 4,
        focus: 2,
        fun: 5,
      },
    },
    {
      date: '2023-07-07',
      tags: ['illness', 'bad sleep', 'stress'],
      metrics: {
        energy: 1,
        focus: 1,
        fun: 1,
      },
    },
    {
      date: '2023-07-10',
      tags: ['meditation', 'exercise', 'good sleep'],
      metrics: {
        energy: 5,
        focus: 5,
        fun: 3,
      },
    },
    {
      date: '2023-07-12',
      tags: ['was distracted', 'excessive screen time', 'bad sleep'],
      metrics: {
        energy: 2,
        focus: 1,
        fun: 2,
      },
    },
    {
      date: '2023-07-14',
      tags: ['early wakeup', 'coffee', 'good work session'],
      metrics: {
        energy: 3,
        focus: 4,
        fun: 3,
      },
    },
    {
      date: '2023-07-16',
      tags: ['exercise', 'healthy food', 'walk outside'],
      metrics: {
        energy: 5,
        focus: 4,
        fun: 5,
      },
    },
    {
      date: '2023-07-19',
      tags: ['off screen before sleep', 'reading', 'journaling'],
      metrics: {
        energy: 3,
        focus: 5,
        fun: 4,
      },
    },
    {
      date: '2023-07-21',
      tags: ['stress', 'skip routines', 'junk food'],
      metrics: {
        energy: 1,
        focus: 2,
        fun: 1,
      },
    },
    {
      date: '2023-07-24',
      tags: ['good sleep', 'exercise', 'healthy food'],
      metrics: {
        energy: 4,
        focus: 5,
        fun: 3,
      },
    },
    {
      date: '2023-07-26',
      tags: ['connecting with friends', 'fun', 'walk outside'],
      metrics: {
        energy: 5,
        focus: 3,
        fun: 5,
      },
    },
    {
      date: '2023-07-28',
      tags: ['coffee', 'good work session', 'stress'],
      metrics: {
        energy: 3,
        focus: 4,
        fun: 2,
      },
    },
    {
      date: '2023-07-30',
      tags: ['relax', 'meditation', 'good sleep'],
      metrics: {
        energy: 4,
        focus: 4,
        fun: 3,
      },
    },
    {
      date: '2023-06-1',
      tags: ['exercise', 'coffee', 'relax'],
      metrics: {
        fun: 4,
      },
    },
  ]
  const insertTestData = () =>
    testData.forEach((record) => addRecord(record as unknown as RecordItem))
  const resetData = () => {
    resetAllRecords()
    resetUserEntities()
    resetLittleUserGuideStore()
  }

  return { insertTestData, resetData }
}
