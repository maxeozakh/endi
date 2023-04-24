import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useMetricStat } from './useMetricsStat'
import { MetricStatsCard } from '../../entities/MetricStatsCard/MetricStatsCard'
import { getUserMetrics } from '../../shared/stores/userEntities'

export const MetricsStats: React.FC = () => {
  const metrics = getUserMetrics()
  return (
    <View style={styles.container}>
      {metrics.map((metric, i) => {
        const { name, color } = metric
        const { metricValue, dateLabel } = useMetricStat(name)

        return (
          <MetricStatsCard
            key={i}
            name={name}
            color={color}
            value={metricValue}
            lastEditLabel={dateLabel}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
