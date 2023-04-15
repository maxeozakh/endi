import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getMetrics } from '../../shared/stores/userEntitiesStore'

interface Props {
  index: number
}
export const MetricCard: React.FC<Props> = ({ index }) => {
  const metrics = getMetrics()
  const currentItem = metrics[index]
  const { name, color } = currentItem
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: '100%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})
