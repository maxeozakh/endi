import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'

import { useMetricStat } from './useMetricsStat'
import { MetricStatsCard } from '../../entities/MetricStatsCard/MetricStatsCard'
import { navigationProps } from '../../shared/interfaces'
import { getUserMetrics } from '../../shared/stores/userEntities'

export const MetricsStats: React.FC = () => {
  const metrics = getUserMetrics()
  const navigation = useNavigation<navigationProps>()

  return (
    <View style={styles.container}>
      {metrics.map((metric, i) => {
        const { name, color } = metric
        const { metricValue, dateLabel } = useMetricStat(name)

        const pressCallback = useCallback(
          () => navigation.navigate('Metric data', { metricName: name }),
          []
        )

        return (
          <MetricStatsCard
            onPressCallback={pressCallback}
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
