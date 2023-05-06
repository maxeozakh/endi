import React from 'react'
import { GestureResponderEvent, StyleSheet, TouchableHighlight, View } from 'react-native'

import { COLORS } from '../../shared/ui/constants'

interface ListItemProps {
  label?: string
  onPress?: (event: GestureResponderEvent) => void
  children?: React.ReactNode
}

export const ListItem: React.FC<ListItemProps> = ({ onPress, label, children }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>{children || label}</View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_DARK,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    width: '100%',
    height: 48,
  },
})
