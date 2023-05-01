import { useRoute } from '@react-navigation/native'
import React from 'react'

import { Container } from '../entities/Container/Container'
import { InfluentialTags } from '../features/InfluentialTags/InfluentialTags'
import { MetricChart } from '../features/MetricChart/MetricChart'
import { RouteProps } from '../shared/interfaces'

export const MetricData = () => {
  const route = useRoute<RouteProps>()
  const { metricName } = route.params

  return (
    <Container justifyContent="flex-start">
      <MetricChart name={metricName} />
      <InfluentialTags metricName={metricName} />
    </Container>
  )
}
