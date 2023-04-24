import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'

import { Container } from '../entities/Container/Container'
import { RouteProps } from '../shared/interfaces'

export const MetricData = () => {
  const route = useRoute<RouteProps>()
  const { metricName } = route.params

  return (
    <Container>
      <Text style={{ color: 'white' }}>{metricName} data here</Text>
    </Container>
  )
}
