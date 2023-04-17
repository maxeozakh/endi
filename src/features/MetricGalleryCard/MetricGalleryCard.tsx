import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { EstimateButton } from '../../entities/EstimateButton/EstimateButton'
import { ESTIMATE_MAP } from '../../shared/constants'
import { getUserMetrics } from '../../shared/stores/userEntities'

interface Props {
  index: number
}
export const MetricGalleryCard: React.FC<Props> = ({ index }) => {
  const metrics = getUserMetrics()
  const currentItem = metrics[index]
  const [estimate, setEstimate] = React.useState<number | null>(null)
  const { name, color } = currentItem
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.buttonContainer}>
        {Object.entries(ESTIMATE_MAP).map(([level, estimateData]) => (
          <EstimateButton
            key={level}
            label={estimateData.label}
            emoji={estimateData.emoji}
            level={Number(level)}
            onSelectCallback={setEstimate}
            isActive={Number(level) === estimate}
          />
        ))}
      </View>
      <Text style={styles.hugeEmoji}>{estimate ? ESTIMATE_MAP[estimate].emoji : '🫥'}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  hugeEmoji: {
    marginTop: 8,
    fontSize: 100,
  },
  container: {
    paddingTop: 44,
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius: 16,
  },

  buttonContainer: {
    width: '100%',
  },
})
