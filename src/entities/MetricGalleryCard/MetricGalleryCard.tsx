import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { EstimateButton } from '../../entities/EstimateButton/EstimateButton'
import { ESTIMATE_MAP } from '../../shared/constants'
import { getRecordedMetrics, useCreateRecordStore } from '../../shared/stores/createRecord'
import { getActiveUserMetrics } from '../../shared/stores/userEntities'

interface Props {
  index: number
}
export const MetricGalleryCard: React.FC<Props> = ({ index }) => {
  const metrics = getActiveUserMetrics()
  const currentItem = metrics[index]
  const { name, color } = currentItem

  const recordedMetrics = getRecordedMetrics()
  const metricValue = recordedMetrics[name]

  const { addMetricToTheRecord } = useCreateRecordStore()

  // remore 0 level that represents "unknown"
  const estimatesDataForButtons = Object.entries(ESTIMATE_MAP).slice(1, 6)

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.buttonContainer}>
        {estimatesDataForButtons.map(([value, estimateData]) => (
          <EstimateButton
            key={value}
            label={estimateData.label}
            emoji={estimateData.emoji}
            value={Number(value)}
            onSelectCallback={addMetricToTheRecord}
            isActive={Number(value) === metricValue}
            metricName={name}
          />
        ))}
      </View>
      <View style={styles.valueWrapper}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  hugeEmoji: {
    marginLeft: 8,
    fontSize: 100,
  },
  container: {
    paddingTop: 44,
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 16,
  },
  valueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonContainer: {
    width: '100%',
  },
})
