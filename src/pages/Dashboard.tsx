import { Text } from 'react-native'

import { Container } from '../entities/Container/Container'
import { MetricsList } from '../features/MetricsList/MetricsList'

export const Dashboard = () => {
  return (
    <Container justifyContent="center">
      <Text style={{ fontSize: 50 }}>👋</Text>
      <MetricsList />
    </Container>
  )
}
