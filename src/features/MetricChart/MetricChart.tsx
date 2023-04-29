import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native'

import { Container } from '../../entities/Container/Container'
import { getMetricValuesByWeekDays } from '../../shared/stores/records'
import { getUserMetricByName } from '../../shared/stores/userEntities'
import { COLORS } from '../../shared/ui/constants'

interface MetricChartProps {
  name: string
}

export const MetricChart: React.FC<MetricChartProps> = ({ name }) => {
  const weekData = getMetricValuesByWeekDays(name)
  const metricData = getUserMetricByName(name)
  const { color } = metricData

  const axisStyle = {
    axis: {
      stroke: COLORS.GRAY_MEDIUM,
    },
    axisLabel: {
      color: 'white',
      fill: 'white',
    },
    tickLabels: {
      stroke: COLORS.GRAY_MEDIUM,
      fontFamily: 'Helvetica',
      fontWeight: '200',
    },
  }

  const horizontalAxisStyle = {
    ...axisStyle,
    grid: {
      stroke: COLORS.GRAY_MEDIUM,
      strokeDasharray: '4, 4',
      strokeWidth: 0.7,
    },
  }

  return (
    <Container>
      <VictoryChart padding={{ left: 18, bottom: 40, right: 28 }} domainPadding={10}>
        <VictoryAxis
          tickFormat={(t) => Math.round(t)}
          domain={[0, 5]}
          dependentAxis
          style={horizontalAxisStyle}
        />
        <VictoryAxis style={axisStyle} tickFormat={(t) => t.slice(0, 3)} />
        <VictoryBar
          cornerRadius={{ topLeft: 5, topRight: 5 }}
          theme={VictoryTheme.material}
          x="day"
          y="value"
          style={{
            data: { fill: color, width: 35 },
            labels: {
              fill: 'white',
              stroke: 'white',
              color: 'white',
            },
          }}
          domainPadding={{ x: 10 }}
          data={weekData}
        />
      </VictoryChart>
    </Container>
  )
}
