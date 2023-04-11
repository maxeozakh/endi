import { Text } from 'react-native'

import { Container } from '../entities/Container/Container'
import { MetricsList } from '../features/MetricsList/MetricsList'

export const Dashboard = ({ navigation }) => {
  return (
    <Container>
      <Text>Dashboard</Text>
      <MetricsList />
    </Container>
  )
}
