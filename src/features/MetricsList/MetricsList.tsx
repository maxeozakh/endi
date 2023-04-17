import React from 'react'
import { View } from 'react-native'

import { Card } from '../../entities/Card/Card'
import { getUserMetrics } from '../../shared/stores/userEntities'

interface MetricsListProps {}

export const MetricsList: React.FC<MetricsListProps> = () => {
  const metrics = getUserMetrics()
  return (
    <View>
      {metrics.map((metric, i) => {
        return <Card key={i} title={metric.name} />
      })}
    </View>
  )
}
