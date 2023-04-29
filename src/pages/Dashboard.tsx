import { Container } from '../entities/Container/Container'
import { MetricsStats } from '../features/MetricsStats/MetricsStats'

export const Dashboard = () => {
  return (
    <Container justifyContent="center">
      <MetricsStats />
    </Container>
  )
}
