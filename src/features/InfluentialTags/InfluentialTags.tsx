import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../../shared/ui/constants'
import { useInsights } from '../../shared/useInsights'

interface InfluentialTagsProps {
  metricName: string
}

export const InfluentialTags: React.FC<InfluentialTagsProps> = ({ metricName }) => {
  const { getCorrelationsByMetric } = useInsights()
  const correlations = getCorrelationsByMetric(metricName)

  if (correlations.length === 0) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Influential tags</Text>

      {correlations.map((correlationData, i) => {
        const { tag, correlation } = correlationData

        const sign = correlation < 0 ? '+' : '-'
        const color = correlation < 0 ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT
        const correlationLabel = `${sign}${Math.abs(correlation).toFixed(0)}%`

        return (
          <View style={styles.card} key={tag}>
            <Text style={styles.tagName}>{tag}</Text>
            <Text style={[styles.correlation, { color }]}>{correlationLabel}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.GRAY_DARK,
    marginBottom: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
  },
  tagName: {
    fontSize: 16,
    color: 'white',
  },
  correlation: {
    fontSize: 16,
    fontWeight: '400',
  },
})
