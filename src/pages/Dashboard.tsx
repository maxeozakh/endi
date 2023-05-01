import {
  //
  // Button,
  Text,
  View,
} from 'react-native'

import { Container } from '../entities/Container/Container'
import { MetricsStats } from '../features/MetricsStats/MetricsStats'
import { getRecords } from '../shared/stores/records'
// import { useTestData } from '../shared/useTestData'

export const Dashboard = () => {
  // const { resetData, insertTestData } = useTestData()
  const records = getRecords()
  const isAnyRecords = records.length > 0

  return (
    <Container justifyContent="center">
      {/* <Button title="reset" onPress={resetData} /> */}
      {/* <Button title="insert" onPress={insertTestData} /> */}
      {isAnyRecords ? (
        <MetricsStats />
      ) : (
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 150 }}>🦊</Text>
        </View>
      )}
    </Container>
  )
}
