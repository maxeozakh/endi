import React from 'react'
import { View } from 'react-native'

import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { ESTIMATE_MAP, MONTHS } from '../../shared/constants'
import { useInsights } from '../../shared/useInsights'
import { getCornerDatesByPeriod } from '../../shared/utils'

interface Props {
  name: string
}

export const AverageMetricValue: React.FC<Props> = ({ name: metricName }) => {
  const [from, to] = getCornerDatesByPeriod()
  const { getAverageMetricValue } = useInsights()
  const averageMetricValue = getAverageMetricValue(metricName)
  return (
    <View>
      <TextTheme>
        {ESTIMATE_MAP[averageMetricValue].emoji} {ESTIMATE_MAP[averageMetricValue].label} in{' '}
        {from.getDate()} – {to.getDate()} {MONTHS[to.getMonth()]}
      </TextTheme>
    </View>
  )
}
