import React from 'react'
import { Text } from 'react-native'

interface Props {
  metric: string
}
export const MetricCard: React.FC<Props> = ({ metric }) => {
  return <Text>{metric}</Text>
}
