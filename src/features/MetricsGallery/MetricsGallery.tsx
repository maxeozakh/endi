import React from 'react'

import { Container } from '../../entities/Container/Container'
import { getMetrics } from '../../shared/stores/userEntitiesStore'
import { MetricCard } from '../MetricCard/MetricCard'

export const MetricsGallery = () => {
  const metrics = getMetrics()
  return (
    <Container>
      {metrics.map((metric) => (
        <MetricCard metric={metric} />
      ))}
    </Container>
  )
}
