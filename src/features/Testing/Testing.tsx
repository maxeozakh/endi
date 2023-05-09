import React from 'react'
import { Button } from 'react-native'

import { useTestData } from '../../shared/useTestData'

export const Testing: React.FC = () => {
  const { resetData, insertTestData } = useTestData()
  return (
    <>
      <Button title="reset" onPress={resetData} />
      <Button title="insert" onPress={insertTestData} />
    </>
  )
}
