import React from 'react'
import { StyleSheet, View } from 'react-native'

import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { ESTIMATE_MAP, MONTHS } from '../../shared/constants'
import { useInsights } from '../../shared/useInsights'

interface Props {
  name: string
}

export const AverageMetricValue: React.FC<Props> = ({ name: metricName }) => {
  const { getAverageMetricValue, getCornerDatesByPeriod } = useInsights()
  const [from, to] = getCornerDatesByPeriod()

  const averageMetricValue = getAverageMetricValue(metricName)

  return (
    <View style={styles.container}>
      <TextTheme stylesProp={styles.title}>
        {ESTIMATE_MAP[averageMetricValue].emoji} {ESTIMATE_MAP[averageMetricValue].label} in{' '}
        {from.getDate()} - {to.getDate()} {MONTHS[to.getMonth()]}
      </TextTheme>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
})
