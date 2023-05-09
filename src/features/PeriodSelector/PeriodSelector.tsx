import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { Period } from '../../shared/interfaces'
import { getSelectedPeriod, useMetricDataStore } from '../../shared/stores/metricData'
import { COLORS } from '../../shared/ui/constants'

export const PeriodSelector: React.FC = () => {
  const { selectPeriod } = useMetricDataStore()
  const selectedPeriod = getSelectedPeriod()
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={{
          ...styles.button,
          backgroundColor: Period.WEEK === selectedPeriod ? COLORS.BLACK : COLORS.GRAY_DARK,
        }}
        onPress={() => selectPeriod(Period.WEEK)}>
        <TextTheme>Week</TextTheme>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          ...styles.button,
          backgroundColor: Period.MONTH === selectedPeriod ? COLORS.BLACK : COLORS.GRAY_DARK,
          marginRight: 0,
        }}
        onPress={() => selectPeriod(Period.MONTH)}>
        <TextTheme>Month</TextTheme>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.GRAY_DARK,
    borderColor: 'transparent',
    borderRadius: 6,
    padding: 2,
  },
  button: {
    flex: 1,
    marginRight: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 6,
  },
})
