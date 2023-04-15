import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from '../../entities/Button/Button'
import { getMetrics } from '../../shared/stores/userEntitiesStore'

interface Props {
  index: number
}
export const MetricGalleryCard: React.FC<Props> = ({ index }) => {
  const metrics = getMetrics()
  const currentItem = metrics[index]
  const { name, color } = currentItem
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.buttonContainer}>
        <Button label="something" onPress={() => {}} />
        <Button label="something" onPress={() => {}} />
        <Button label="something" onPress={() => {}} />
        <Button label="something" onPress={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  container: {
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
