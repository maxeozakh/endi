import React, { useCallback } from 'react'
import { View, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import uuid from 'react-native-uuid'

import { Button } from '../../entities/Button/Button'
import { useUserEntitiesStore } from '../../shared/stores/userEntities'
import { COLORS } from '../../shared/ui/constants'
import { Routes, useNavigator3000 } from '../../shared/useNavigator3000'

export const AddNewMetric: React.FC = () => {
  const [metricName, setMetricName] = React.useState('')
  const [selectedColor, setSelectedColor] = React.useState<string>(COLORS.YELLOW_MEDIUM)
  const navigation = useNavigator3000()
  const { addUserMetrics } = useUserEntitiesStore()

  const handleSave = useCallback(() => {
    if (!metricName) {
      return
    }

    addUserMetrics([{ name: metricName, color: selectedColor, id: uuid.v4() as string }])
    navigation.navigate(Routes.MANAGE_METRICS)
  }, [metricName, selectedColor])

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
        <TextInput
          autoFocus
          style={styles.input}
          value={metricName}
          onChangeText={(metricName) => setMetricName(metricName)}
          placeholder={'e.g. happiness or satisfaction'}
        />
      </View>
      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableHighlight key={color} onPress={() => setSelectedColor(color)}>
            <View
              style={[
                styles.colorItem,
                {
                  backgroundColor: color,
                  opacity: selectedColor === color ? 1 : 0.9,
                  borderWidth: selectedColor === color ? 2 : 0,
                  borderColor: 'white',
                },
              ]}></View>
          </TouchableHighlight>
        ))}
      </View>

      <View>
        <Button onPress={handleSave} label="save" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 8,
    backgroundColor: COLORS.GRAY_DARK,
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
    // justifyContent: 'space-between',
  },
  colorItem: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 8,
  },
})
