import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { useMetricStat } from '../../features/MetricsStats/useMetricsStat'
import { ESTIMATE_MAP } from '../../shared/constants'
import { COLORS } from '../../shared/ui/constants'

interface MetricStatsCardProps {
  name: string
  color: string
  onPressCallback: (metricName: string) => void
}

export const MetricStatsCard: React.FC<MetricStatsCardProps> = ({
  name,
  color,
  onPressCallback,
}) => {
  const { metricValue: value, dateLabel: lastEditLabel } = useMetricStat(name)
  return (
    <TouchableHighlight onPress={() => onPressCallback(name)} style={styles.container}>
      <>
        <View style={styles.leftColumn}>
          <View style={[styles.emojiContainer, { backgroundColor: color }]}>
            <Text style={[styles.text, styles.emojiText]}>{ESTIMATE_MAP[value].emoji}</Text>
          </View>
          <View>
            <Text style={styles.text}>{name}</Text>
            <Text style={[styles.text, styles.estimateValueText]}>{ESTIMATE_MAP[value].label}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text, styles.lastEditText]}>{lastEditLabel}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GRAY_DARK,
    height: 82,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  leftColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emojiContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 12,
  },
  emojiText: {
    fontSize: 32,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  estimateValueText: {
    fontWeight: 'bold',
  },
  lastEditText: {
    color: COLORS.GRAY_LIGHT,
  },
})
