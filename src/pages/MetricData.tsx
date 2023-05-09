import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Button, ScrollView } from 'react-native'

import { AverageMetricValue } from '../features/AverageMetricValue/AverageMetricValue'
import { InfluentialTags } from '../features/InfluentialTags/InfluentialTags'
import { MetricChart } from '../features/MetricChart/MetricChart'
import { Period, RouteProps } from '../shared/interfaces'
import { useMetricDataStore } from '../shared/stores/metricData'

export const MetricData = () => {
  const route = useRoute<RouteProps>()
  const { metricName } = route.params
  const { selectPeriod } = useMetricDataStore()

  return (
    <ScrollView>
      <Button title="week" onPress={() => selectPeriod(Period.WEEK)} />
      <Button title="month" onPress={() => selectPeriod(Period.MONTH)} />

      <AverageMetricValue name={metricName} />
      <MetricChart name={metricName} />
      <InfluentialTags metricName={metricName} />
    </ScrollView>
  )
}
