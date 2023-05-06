import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Button } from '../../entities/Button/Button'
import { ListItem } from '../../entities/ListItem/ListItem'
import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { getUserMetrics } from '../../shared/stores/userEntities'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

export const ManageMetrics: React.FC = () => {
  const metrics = getUserMetrics()
  const navigation = useNavigator3000()

  return (
    <ScrollView>
      <Button
        stylesProp={styles.newMetricButton}
        onPress={() => navigation.push(Routes.ADD_NEW_METRIC)}>
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
    </ScrollView>
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
    // sorry mom
    marginTop: -4,
  },
  colorIcon: {
    marginRight: 8,
    width: 14,
    height: 14,
    display: 'flex',
    borderRadius: 2,
  },
})
