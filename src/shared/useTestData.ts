import { useRecordsStore, getRecords } from './stores/records'
import testData from './test_data/data.json'

export const useTestData = () => {
  const { addRecord } = useRecordsStore()
  testData.forEach((record) => console.log(record))
  console.log(getRecords())
  console.log(addRecord)
}
