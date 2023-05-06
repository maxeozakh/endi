import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { COLORS } from '../../shared/ui/constants'

interface ListItemProps {
  label?: string
  onPress?: (event: GestureResponderEvent) => void
  children?: React.ReactNode
}

export const ListItem: React.FC<ListItemProps> = ({ onPress, label, children }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.content}>{children || label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_DARK,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2,
  },
  content: {
    color: 'white',
  },
})
