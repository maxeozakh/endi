import { useLittleUserGuideStore } from './stores/littleUserGuide'
import { RecordItem, useRecordsStore } from './stores/records'
import { useUserEntitiesStore } from './stores/userEntities'
// import testData from './test_data/data.json'

export const useTestData = () => {
  const { addRecord, resetAllRecords } = useRecordsStore()
  const { resetUserEntities } = useUserEntitiesStore()
  const { resetLittleUserGuideStore } = useLittleUserGuideStore()

  const testData = []
  const insertTestData = () =>
    testData.forEach((record) => addRecord(record as unknown as RecordItem))
  const resetData = () => {
    resetAllRecords()
    resetUserEntities()
    resetLittleUserGuideStore()
  }

  return { insertTestData, resetData }
}
