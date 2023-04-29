import { useRoute } from '@react-navigation/native'
import React from 'react'

import { MetricChart } from '../features/MetricChart/MetricChart'
import { RouteProps } from '../shared/interfaces'

export const MetricData = () => {
  const route = useRoute<RouteProps>()
  const { metricName } = route.params

  return <MetricChart name={metricName} />
}
