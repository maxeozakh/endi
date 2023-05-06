import React, { useCallback } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { MetricStatsCard } from '../../entities/MetricStatsCard/MetricStatsCard'
import { getActiveUserMetrics } from '../../shared/stores/userEntities'
import { useNavigator3000 } from '../../shared/useNavigator3000'

export const MetricsStats: React.FC = () => {
  const metrics = getActiveUserMetrics()
  const navigation = useNavigator3000()
  const pressCallback = useCallback(
    (metricName: string) => navigation.navigate('Metric data', { metricName }),
    []
  )

  return (
    <ScrollView style={styles.container}>
      {metrics.map((metric, i) => {
        const { name, color } = metric

        return <MetricStatsCard onPressCallback={pressCallback} key={i} name={name} color={color} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
