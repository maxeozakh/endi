import { Container } from '../entities/Container/Container'
import { MetricsStats } from '../features/MetricsStats/MetricsStats'
import { useRecordsStore } from '../shared/stores/records'

export const Dashboard = () => {
  const { addRecord } = useRecordsStore()
  return (
    <Container justifyContent="center">
      <MetricsStats />
    </Container>
  )
}
