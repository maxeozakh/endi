import { RecordItem, useRecordsStore } from './stores/records'
import { useUserEntitiesStore } from './stores/userEntities'
import testData from './test_data/data.json'

export const useTestData = () => {
  const { addRecord, resetAllRecords } = useRecordsStore()
  const { resetUserEntities } = useUserEntitiesStore()

  const insertTestData = () =>
    testData.forEach((record) => addRecord(record as unknown as RecordItem))
  const resetData = () => {
    resetAllRecords()
    resetUserEntities()
  }
  // testData.forEach((record) => console.log(record))

  return { insertTestData, resetData }
}
