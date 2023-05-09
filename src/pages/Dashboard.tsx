import { Text, View } from 'react-native'

import { Container } from '../entities/Container/Container'
import { MetricsStats } from '../features/MetricsStats/MetricsStats'
import { Testing } from '../features/Testing/Testing'
import { getRecords } from '../shared/stores/records'

export const Dashboard = () => {
  const records = getRecords()
  const isAnyRecords = records.length > 0

  return (
    <Container justifyContent="center">
      <Testing />
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
