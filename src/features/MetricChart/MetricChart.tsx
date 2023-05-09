import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native'

import { useChartData } from './useChartData'
import { COLORS } from '../../shared/ui/constants'

interface MetricChartProps {
  name: string
}

export const MetricChart: React.FC<MetricChartProps> = ({ name: metricName }) => {
  const { barStyles, data, verticalTickFormatFn, horizontalTickFormatFn, cornerRadiusStyle } =
    useChartData(metricName)

  return (
    <VictoryChart padding={{ left: 18, bottom: 40, right: 28 }} domainPadding={10}>
      <VictoryAxis
        tickFormat={verticalTickFormatFn}
        domain={[0, 5]}
        dependentAxis
        style={horizontalAxisStyle}
      />
      <VictoryAxis style={axisStyle} tickCount={4} tickFormat={horizontalTickFormatFn} />
      <VictoryBar
        animate={{
          duration: 300,
          easing: 'quadInOut',
          onLoad: { duration: 600 },
        }}
        cornerRadius={cornerRadiusStyle}
        theme={VictoryTheme.material}
        x="day"
        y="value"
        style={barStyles}
        domainPadding={{ x: 10 }}
        data={data}
      />
    </VictoryChart>
  )
}

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
