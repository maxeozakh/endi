import { Container } from '../entities/Container/Container'
import { MetricsStats } from '../features/MetricsStats/MetricsStats'
// import { Testing } from '../features/Testing/Testing'

export const Dashboard = () => {
  return (
    <Container justifyContent="center">
      {/* <Testing /> */}
      <MetricsStats />
    </Container>
  )
}
