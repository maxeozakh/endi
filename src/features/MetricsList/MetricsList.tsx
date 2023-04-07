import React from 'react'
import { View } from 'react-native'

import { Card } from '../../entities/Card/Card'
import { getMetrics } from '../../shared/stores/userEntitiesStore'

interface MetricsListProps {}

export const MetricsList: React.FC<MetricsListProps> = () => {
  const metrics = getMetrics()
  return (
    <View>
      {metrics.map((metric, i) => {
        return <Card key={i} title={metric} />
      })}
    </View>
  )
}
