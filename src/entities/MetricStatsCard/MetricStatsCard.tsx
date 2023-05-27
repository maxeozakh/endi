import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'

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
          <Text style={[styles.text, styles.lastEditText]}>
            {lastEditLabel}
            {'  '}
            <Svg width="7" height="12" viewBox="0 0 7 12" fill="none">
              <Path
                d="M1.0044 1L6.0044 6L1.0044 11"
                stroke={COLORS.GRAY_LIGHT}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </Text>
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
    display: 'flex',
    justifyContent: 'center',
  },
  estimateValueText: {
    fontWeight: 'bold',
  },
  lastEditText: {
    color: COLORS.GRAY_LIGHT,
  },
})
