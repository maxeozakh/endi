import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from '../../entities/Button/Button'
import { ListItem } from '../../entities/ListItem/ListItem'
import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { getUserMetrics } from '../../shared/stores/userEntities'

export const ManageMetrics: React.FC = () => {
  const metrics = getUserMetrics()

  return (
    <View>
      <Button stylesProp={styles.newMetricButton} onPress={() => {}}>
        + Add new metric
      </Button>
      {metrics.map((metric) => {
        return (
          <ListItem key={metric.id}>
            <View style={styles.container}>
              <View style={[styles.colorIcon, { backgroundColor: metric.color }]}></View>
              <TextTheme>{metric.name}</TextTheme>
            </View>
          </ListItem>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  newMetricButton: {
    marginBottom: 2,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorIcon: {
    marginRight: 8,
    width: 16,
    height: 16,
    display: 'flex',
    borderRadius: 2,
  },
})
