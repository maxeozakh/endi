import { RecordItem, useRecordsStore } from './stores/records'
import testData from './test_data/data.json'

export const useTestData = () => {
  const { addRecord, resetAllRecords } = useRecordsStore()
  const insertTestData = () =>
    testData.forEach((record) => addRecord(record as unknown as RecordItem))
  const resetData = () => {
    resetAllRecords()
  }
  // testData.forEach((record) => console.log(record))

  return { insertTestData, resetData }
}
