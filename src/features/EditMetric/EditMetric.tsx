import { useRoute } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import React, { useCallback, useState } from 'react'
import { View, TextInput, StyleSheet, TouchableHighlight, Switch } from 'react-native'

import { Button } from '../../entities/Button/Button'
import { TextTheme } from '../../entities/TextTheme/TextTheme'
import { RouteProps } from '../../shared/interfaces'
import { getUserMetricById, useUserEntitiesStore } from '../../shared/stores/userEntities'
import { COLORS } from '../../shared/ui/constants'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

export const EditMetric: React.FC = () => {
  const navigation = useNavigator3000()
  const route = useRoute<RouteProps>()
  const metricId = route.params?.metricId
  const metric = getUserMetricById(metricId)
  const { name: metricName, color: metricColor, isActive: isMetricActive } = metric

  const [isActive, setIsActive] = useState(isMetricActive)
  const [selectedColor, setSelectedColor] = useState<string>(metricColor)

  const { updateUserMetric } = useUserEntitiesStore()

  const handleSave = useCallback(() => {
    updateUserMetric(metricId, {
      name: metricName,
      color: selectedColor,
      id: metricId,
      isActive,
    })
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    navigation.navigate(Routes.MANAGE_METRICS)
  }, [metricName, selectedColor, isActive])

  const handleChooseColor = (color: string) => {
    setSelectedColor(color)
    Haptics.selectionAsync()
  }

  const colors = [
    COLORS.YELLOW_MEDIUM,
    COLORS.PINK_LIGHT,
    COLORS.BLUE_MEDIUM,
    COLORS.RED_MEDIUM,
    COLORS.VIOLET_LIGHT,
    COLORS.GREEN_MEDIUM,
  ]

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={metricName} editable={false} />
      </View>
      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableHighlight
            style={[
              styles.colorItem,
              {
                backgroundColor: color,
                opacity: selectedColor === color ? 1 : 0.9,
                borderWidth: selectedColor === color ? 2 : 0,
                borderColor: 'white',
              },
            ]}
            key={color}
            onPress={() => handleChooseColor(color)}>
            <View />
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.switchContainer}>
        <TextTheme>Active</TextTheme>
        <Switch style={styles.switch} onChange={() => setIsActive(!isActive)} value={isActive} />
      </View>
      <View>
        <Button onPress={handleSave} label="Update" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  switch: {
    marginLeft: 8,
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 8,
    backgroundColor: COLORS.GRAY_DARK,
    opacity: 0.7,
    borderRadius: 6,
    color: 'white',
  },
  inputContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 2,
  },
  buttonContainer: {
    width: '100%',
  },
  colorsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 16,
  },
  colorItem: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 8,
  },
})
