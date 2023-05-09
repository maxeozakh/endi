import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { AverageMetricValue } from '../features/AverageMetricValue/AverageMetricValue'
import { InfluentialTags } from '../features/InfluentialTags/InfluentialTags'
import { MetricChart } from '../features/MetricChart/MetricChart'
import { PeriodSelector } from '../features/PeriodSelector/PeriodSelector'
import { RouteProps } from '../shared/interfaces'

export const MetricData = () => {
  const route = useRoute<RouteProps>()
  const { metricName } = route.params

  return (
    <ScrollView style={styles.container}>
      <PeriodSelector />
      <AverageMetricValue name={metricName} />
      <MetricChart name={metricName} />
      <InfluentialTags metricName={metricName} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
})
